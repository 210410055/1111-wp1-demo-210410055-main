import React from "react";
import Book_55 from "../components/wo2_booklist/booklist";
import { Booklistdata } from "../booklistdata";

const Booklistpage_55 = () => {
    return (
      <section className='booklist'>
        {Booklistdata.map( (book, index) => {
          const {id, img, title, author} = book;
           return <Book_55 key={id} img={img} title={title} author={author}/>;
        })}
      </section>
    );
  };

export default Booklistpage_55;