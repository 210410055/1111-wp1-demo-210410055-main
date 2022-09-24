import React from "react";
import Book_27 from "./Book_27";
import { data } from "./data";

const Booklist_27 = () => {
    return (
      <section className='booklist'>
        {data.map( (book, index) => {
          const {id, img, title, author} = book;
           return <Book_27 key={id} img={img} title={title} author={author}/>;
        })}
      </section>
    );
  };

export default Booklist_27;