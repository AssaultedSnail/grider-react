import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button-is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
