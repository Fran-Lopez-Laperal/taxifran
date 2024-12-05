import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

const LinkNav = ({ nameLink, onCloseMenu }) => {
  return (
    <li onClick={onCloseMenu} className="h-20 font-semibold flex justify-center items-center">
      <Link>{nameLink}</Link>
    </li>
  );
};

LinkNav.propTypes = {
  nameLink: PropTypes.string,
  onCloseMenu: PropTypes.func,
};

export default LinkNav;
