import PropTypes from 'prop-types';
import './Keys.css';

export default function Key({children, onClick}) {
  return (
    <button className="key" onClick={e => onClick?.(children)}>
      {children}
    </button>
  );
}

Key.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
