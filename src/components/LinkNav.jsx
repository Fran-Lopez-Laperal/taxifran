import PropTypes from 'prop-types';

const LinkNav = ({ nameLink, onCloseMenu, font }) => {
  return (
    <section onClick={onCloseMenu} className={` ${font } cursor-pointer h-20  flex justify-center items-center`}>
    {nameLink}
    </section>
  );
};

LinkNav.propTypes = {
  nameLink: PropTypes.string,
  font: PropTypes.string,
  onCloseMenu: PropTypes.func,
};

export default LinkNav;
