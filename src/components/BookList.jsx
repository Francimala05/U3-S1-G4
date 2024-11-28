import { useState } from 'react';
import books from '../../fantasy.json'; // Importa il file JSON
import SingleBook from './SingleBook';

function BasicExample() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  };
  const filtraLibri = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className="container mt-4">
      <div  className="mt-4">
        <input type='text' className='form-control' placeholder='Cerca il titolo di un libro' value= {searchTerm} onChange={handleSearchChange}
/>



      </div>
<div className="row mt-5">
        {filtraLibri.map((book) => (
          <div className="col-md-4" key={book.asin}>
            <SingleBook book={book}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicExample;