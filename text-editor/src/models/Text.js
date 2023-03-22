export default class Text {
  constructor(text, style) {
    if (Array.isArray(text)) {
      // Copy constructor.
      const sections = text;
      const lastSection = sections[sections.length - 1];
      if (!style) {
        this.sections = sections;
      } else if (lastSection.text === "") {
        this.sections = [...sections.slice(0, -1), new TextSection("", style)];
      } else {
        if (lastSection.style.isEquals(style)) {
          this.sections = sections;
        } else {
          this.sections = [...sections, new TextSection("", style)];
        }
      }
    } else {
      this.sections = [new TextSection(text, style)]
    }
  }

  append(text) {
    const newSections = [
      ...this.sections.slice(0, -1),
      new TextSection(this.#lastSection.text + text, this.#lastSection.style),
    ];

    return new Text(newSections);
  }

  slice(start, end) {
    const [startSection, startOffset] = this.#findSection(start) ?? [0, 0];
    const [endSection, endOffset] = this.#findSection(end) ??
      [this.sections.length - 1, this.#lastSection.text.length];

    if (startSection === endSection) {
      const newSection = new TextSection(
        this.sections[startSection].text.slice(startOffset, endOffset),
        this.sections[startSection].style
      );
      return new Text([newSection], this.#lastSection.style);
    }

    const newStartSection = new TextSection(
      this.sections[startSection].text.slice(startOffset),
      this.sections[startSection].style
    );
    const newEndSection = new TextSection(
      this.sections[endSection].text.slice(0, endOffset),
      this.sections[endSection].style
    );
    const newSections = [
      newStartSection,
      ...this.sections.slice(startSection + 1, endSection),
      newEndSection,
    ];

    return new Text(newSections, this.#lastSection.style);
  }

  changeStyle(newStyle) {
    return new Text(this.sections, newStyle);
  }

  get cleared() {
    return this.slice(-1, -1);
  }

  get length() {
    let length = 0;
    for (const section of this.sections) {
      length += section.text.length;
    }
    return length;
  }

  get style() {
    return this.#lastSection.style;
  }

  toString() {
    let str = '';
    for (const section of this.sections) {
      str += section.text;
    }
    return str;
  }

  get #lastSection() {
    return this.sections[this.sections.length - 1];
  }

  #findSection(charIndex) {
    let sectionIndex = -1, offset = -1;
    let length = 0;

    if (charIndex < 0) {
      charIndex = Math.max(0, this.length + charIndex);
    }

    for (let i = 0; i < this.sections.length; ++i) {
      const section = this.sections[i];
      if (charIndex - length < section.text.length) {
        sectionIndex = i;
        offset = charIndex - length;
        return [sectionIndex, offset];
      }
      length += section.text.length;
    }
    return null;
  }
}

function TextSection(text, style) {
  return {
    get text() { return text; },
    get style() { return withIsEquals(style); },
  };
}

function withIsEquals(obj) {
  const newObj = {...obj};
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

