import { useState } from 'react';
import Category_55 from './components/Category_55';
import Menu_55 from './components/Menu_55';
import items from './data';


const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '55'];

const App_55 = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
    }else {
      const newItems = items.filter( (item) => item.category === category);
      setMenuItems(newItems);
    }
  }

  console.log('menuitems', menuItems)
  return (
    <section className="menu">
      {/* title  */}
      <div className="title">
        <h2>our menu 210410055</h2>
        <div className="underline"></div>
      </div>
      {/* filter buttons */}
      <Category_55 categories={categories} filterItems={filterItems}/>
      {/* menu items */}
      <Menu_55 items ={menuItems} />
      </section>
  );
};

export default App_55;
