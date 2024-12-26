import { useEffect, useState } from 'react';
import NavBarMovil from './NavBarMovil';
import NavBarDesktop from './NavBarDesktop';



export function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <section>{windowWidth < 1024 ? <NavBarMovil/> : <NavBarDesktop/>}</section>;
}
