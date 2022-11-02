import { Link, Outlet } from 'react-router-dom';
import Navbar_55 from '../components/Navbar_55';

const ShareLayout_55 = () => {
  return (
    <>
    <Navbar_55 />
    <section className='section'>
      <Outlet />
    </section>
    </>
    
  );
};
export default ShareLayout_55;
