import PropTypes from 'prop-types';

export default function BackspaceKey({ onClick }) {
  return (
    <button onClick={e => onClick?.()}>{'<'}</button>
  );
}

BackspaceKey.propTypes = {
  onClick: PropTypes.func,
};
