import PropTypes from 'prop-types';

const LinkNav = ({ nameLink }) => {
  return (
    <li className="h-20 font-semibold flex justify-center items-center">{nameLink}</li>
  );
};

LinkNav.propTypes = {
  nameLink: PropTypes.string.isRequired,
};

export default LinkNav;
