import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, List, ListItem, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  const [categories, setCategories] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/images')
      .then(response => response.json())
      .then(data => {
        const categoryMap = data.reduce((acc, item) => {
          const { category, subCategory } = item;
          if (category) {
            if (!acc[category]) {
              acc[category] = { subCategories: new Set(), books: [] };
            }
            if (subCategory) {
              acc[category].subCategories.add(subCategory);
            }
            acc[category].books.push(item);
          }
          return acc;
        }, {});

        const sortedCategories = Object.keys(categoryMap).sort().reduce((sortedAcc, key) => ({
          ...sortedAcc,
          [key]: {
            ...categoryMap[key],
            subCategories: Array.from(categoryMap[key].subCategories).sort(),
          },
        }), {});

        setCategories(sortedCategories);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleExpandedCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  return (
    <Box sx={{ maxWidth: 1140, mx: 'auto', my: 2 }}>
      <Grid container spacing={2}>
        {Object.keys(categories).map((categoryName) => (
          <Grid item xs={12} sm={6} md={4} key={categoryName}>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  textTransform: 'uppercase',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  marginTop: '40px',
                }}
              >
                <Link
                  to={`/books?category=${encodeURIComponent(categoryName)}`}
                  style={{ color: '#888', textDecoration: 'underline' }}
                >
                  {categoryName}
                </Link>
              </Typography>
              <List dense>
                {(expandedCategories[categoryName] 
                  ? categories[categoryName].subCategories
                  : Array.from(categories[categoryName].subCategories).slice(0, 2))
                  .map((subCategory, index) => (
                    <ListItem key={index}
                      sx={{
                        color: '#19292f',
                        textDecoration: 'none',
                        fontSize: '16px',
                        lineHeight: 1.2,
                        padding: '4px 0',
                        display: 'inline-block',
                      }}
                    >
                      {subCategory}
                    </ListItem>
                ))}
                {Array.from(categories[categoryName].subCategories).length > 2 && (
                  <MuiLink
                    component="button"
                    variant="body2"
                    onClick={() => toggleExpandedCategory(categoryName)}
                    sx={{ 
                          textDecoration: 'none', 
                          color: '#49AFD0', 
                          cursor: 'pointer', 
                          display: 'block', 
                          marginTop: '8px' 
                        }}
                  >
                    {expandedCategories[categoryName] ? 'Show less...' : 'Show all...'}
                  </MuiLink>
                )}
              </List>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoriesPage;
