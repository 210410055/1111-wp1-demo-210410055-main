import './App.css';

const App = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/81sPxEFSNLL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
      <h1>Baseball Biographies for Kids: The Greatest Players from the 1960s to Today (Biographies of Today’s Best Players)</h1>
      <h4>Dean Burrell</h4>
    </article>
  )
}


export default App;
