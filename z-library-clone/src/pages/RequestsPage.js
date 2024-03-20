import React, { useEffect, useState } from 'react';

const RequestsPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/images') // Update with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setBooks(data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const cellStyle = {
    padding: '10px',
    lineHeight: 'normal',
  };

  const rowStyle = {
    borderBottom: '1px solid gray', // Adds a line between rows
  };

  const contentCellStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Aligns content to the top and bottom
    height: '150px', // Adjust as needed
  };

  return (
    <div style={{ margin: '0 auto', maxWidth: '1170px', padding: '16px' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        border: '1px solid gray',
      }}>
        <thead>
          <tr style={rowStyle}>
            <th style={cellStyle}>Cover</th>
            <th style={cellStyle}>Title</th>
            {/* Add other headers here */}
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id} style={rowStyle}>
              <td style={cellStyle}>
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={book.img_url}
                    alt={book.title}
                    style={{ maxWidth: '100px', height: 'auto', margin: '0 auto' }}
                  />
                  <div>{book.isbn}</div>
                </div>
              </td>
              <td style={cellStyle}>
                <div style={contentCellStyle}>
                  <span style={{ fontSize: '26px'}}>{book.title}</span> {/* This will appear at the top */}
                  <span>{book.title}</span> {/* This will appear at the bottom */}
                </div>
              </td>
              {/* Add other cells here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestsPage;
