import React from 'react'

const Category_55 = ({categories}) => {
    console.log('categories', categories);
  return (
    <div className="btn-container">
        {categories.map((categories, index) => {
            return (
                <button key={index} type="button" className="filter-btn" data-id={categories}>{categories}
                </button>)
        })}
</div>
  )
}

export default Category_55;


