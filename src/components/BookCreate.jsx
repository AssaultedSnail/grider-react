import { useState } from 'react';

function BookCreate({ onSubmit }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(title);
    setTitle('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
