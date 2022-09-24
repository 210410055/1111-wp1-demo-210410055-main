import { useState } from 'react';
import Category_55 from './components/Category_55';
import './App_55.css';
import Menu_55 from './components/Menu_55';

import items from './data';


const allCategories = ['all', 'breakfast', 'lunch', 'shakes', 'dinner'];

const App_55 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setcategories] = useState(allCategories);

  console.log('menuitems', menuItems)
  return (
    <section className="menu">
      {/* title  */}
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Category_55 categories={categories}/>
      {/* menu items */}
      <Menu_55 items ={menuItems} />
      </section>
  );
};

export default App_55;
