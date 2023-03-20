import PropTypes from 'prop-types';

export default function Key({children, onClick}) {
  return (
    <button onClick={e => onClick?.(children)}>
      {children}
    </button>
  );
}

Key.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};
