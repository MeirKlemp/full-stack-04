export default class Text {
  constructor(style = {}) {
    this.lines = [[new TextSection("", style)]];
    return;
  }

  append(text) {
    if (text === "") {
      return this;
    }

    const lastLine = this.#lastLine;
    const lastSection = lastLine[lastLine.length - 1];

    const [firstLine, ...rest] = text.split('\n');
    const appendedLines = rest.map(
      line => [new TextSection(line, lastSection.style)]);

    // Merge between the old last line and the appended first line. Make sure
    // that no empty TextSection left at the end of the merged line, unless
    // the line is empty.
    const mergedSection = new TextSection(
      lastSection.text + firstLine, lastSection.style,
    );
    const mergedLine = (lastLine.length > 1) ? [
      ...lastLine.slice(0, -1), 
      ...(mergedSection.text !== "" ? [mergedSection] : [])
    ] : [mergedSection];

    const newLines = [
      ...this.lines.slice(0, -1),
      mergedLine,
      ...appendedLines
    ];
    return Text.#withLines(newLines);
  }

  /**
   * Creates a shallow copy of the text object starting from character at index
   * `start` to the character at index `end` (not included).
   */
  slice(start, end) {
    const lastLine = this.#lastLine;
    const lastSection = lastLine[lastLine.length - 1];

    const [startLine, startSection, startOffset] =
      this.#findSection(start) ?? [0, 0, 0];
    const [endLine, endSection, endOffset] = this.#findSection(end) ??
      [this.lines.length - 1, lastLine.length - 1, lastSection.text.length];

    if (startLine === endLine && startSection === endSection) {
      const section = new TextSection(
        this.lines[startLine][startSection]
          .text.slice(startOffset, endOffset),
        this.lines[startLine][startSection].style
      );
      return Text.#withLines([[section]]);
    }

    const newFirstSection = new TextSection(
      this.lines[startLine][startSection].text.slice(startOffset),
      this.lines[startLine][startSection].style
    );
    const newLastSection = new TextSection(
      this.lines[endLine][endSection].text.slice(0, endOffset),
      this.lines[endLine][endSection].style
    );

    if (startLine === endLine) {
      const line = [
        newFirstSection,
        ...this.lines[startLine].slice(startSection + 1, endSection),
        newLastSection,
      ];
      return Text.#withLines([line]);
    }

    const lines = [
      [
        newFirstSection,
        ...this.lines[startLine].slice(startSection + 1),
      ],
      ...this.lines.slice(startLine + 1, endLine),
      [
        ...this.lines[endLine].slice(0, endSection),
        newLastSection,
      ]
    ];
    return Text.#withLines(lines);
  }

  withStyle(newStyle) {
    const lastLine = this.#lastLine;
    const lastSection = lastLine[lastLine.length - 1];

    if (lastSection.style.isEquals(newStyle)) {
      return this;
    }

    const newSection = new TextSection("", newStyle);
    // If the last section is empty, it should be replaced with the new
    // section.
    const newLastLine = [
      ...(lastSection.text !== "" ? lastLine : lastLine.slice(0, -1)),
      newSection
    ]
    const newLines = [
      ...this.lines.slice(0, -1),
      newLastLine
    ];
    return Text.#withLines(newLines);
  }

  get cleared() {
    return new Text(this.style);
  }

  get length() {
    const length = this.lines
      .map(line => line.reduce((acc, ts) => acc + ts.text.length, 0))
      .reduce((acc, l) => acc + l, 0);
    // Adds the number of endline characters.
    return length + this.lines.length - 1;
  }

  get style() {
    return this.#lastSection.style;
  }

  toString() {
    return this.lines
      .map(line => line.reduce((s, ts) => s + ts.text, ''))
      .join('\n');
  }

  get #lastLine() {
    return this.lines[this.lines.length - 1];
  }

  get #lastSection() {
    const lastLine = this.#lastLine;
    return lastLine[lastLine.length - 1];
  }

  #findSection(charIndex) {
    let length = 0;

    if (charIndex < 0) {
      charIndex = Math.max(0, this.length + charIndex);
    }

    for (let i = 0; i < this.lines.length; ++i) {
      for (let j = 0; j < this.lines[i].length; ++j) {
        const section = this.lines[i][j];
        if (charIndex - length <= section.text.length) {
          const lineIndex = i
          const sectionIndex = j;
          const offset = charIndex - length;
          return [lineIndex, sectionIndex, offset];
        }
        length += section.text.length;
      }
      // Endline character.
      length += 1;
    }
    return null;
  }

  static #withLines(lines) {
    const copy = new Text();
    copy.lines = lines;
    return copy;
  }
}

function TextSection(text, style) {
  const _style = withIsEquals(style);
  return {
    get text() { return text; },
    get style() { return _style; },
  };
}

function withIsEquals(obj) {
  if (obj[withIsEquals.sym]) return obj;
  const newObj = {...obj};


  Object.defineProperty(newObj, withIsEquals.sym, {
    value: true,
    configurable: false,
    enumerable: false,
    writeable: false,
  });

  Object.defineProperty(newObj, 'isEquals', {
    value: function(other) {
      if (!other) return false;
      if (this === other) return true;
      for (const prop in {...this, ...other}) {
        if (this[prop] !== other[prop]) {
          return false;
        }
      }
      return true;
    },
    configurable: false,
    enumerable: false,
    writeable: false,
  });

  return newObj;
}
withIsEquals.sym = Symbol("isEquals");

