import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = useQuery();
  const categoryName = query.get('category');

  useEffect(() => {
    if (!categoryName) {
      setIsLoading(false);
      setError('No category specified');
      return;
    }

    setIsLoading(true);
    fetch(`http://127.0.0.1:5000/api/images?category=${encodeURIComponent(categoryName)}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setBooks(data); // Assuming the API returns an array of books/images
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error fetching books:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [categoryName]); // Dependency on categoryName

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Styles
  const containerStyle = {
    maxWidth: '1106px',
    padding: '16px',
    margin: 'auto',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid gray',
  };

  const rowStyle = {
  borderBottom: '1px solid gray',
  display: 'flex', // Set the row to display as flex
  alignItems: 'stretch', // Stretch the children to fill the height
};

  const imageCellStyle = {
    width: '120px',
    textAlign: 'center',
    verticalAlign: 'top',
    borderRight: '1px solid gray',
  };

  const titleCellStyle = {
  verticalAlign: 'top',
  padding: '10px',
  display: 'flex', // Add this to make it a flex container
  flexDirection: 'column', // Stack children vertically
  justifyContent: 'space-between', // Justify content to space between so the details align to the bottom
  flex: 1, // Take up available space
};

  const detailCellStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
 
  };

  const detailSpanStyle = {
   
    whiteSpace: 'nowrap',
  };

  return (
    <div style={containerStyle}>
      <h1>Books in Category: {categoryName}</h1>
      <table style={tableStyle}>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} style={rowStyle}>
              <td style={imageCellStyle}>
              <Link to={`/book/${book._id}`}>
                <img
                  src={book.img_url}
                  alt={book.title}
                  style={{ width: '100px', height: 'auto', display: 'block' }}
                />
              </Link>
              </td>
              <td style={titleCellStyle}>
              <Link to={`/book/${book._id}`}>
                <div><strong>{book.title || 'Untitled'}</strong></div>
              </Link>
                <div>{book.Publisher || ''}</div>
                <div>{book.author || ''}</div>
                <div style={detailCellStyle}>
                  <span style={detailSpanStyle}>Year: {book.Year || 'Unknown'}</span>
                  <span style={detailSpanStyle}>Language: {book.Language || 'Unknown'}</span>
                  <span style={detailSpanStyle}>File: {book.File || 'Unknown'}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksPage;
