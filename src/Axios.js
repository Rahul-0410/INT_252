
//create a React from that allows users to add a new post using a post request  with axios to the API endpoint https://jsonplaceholder.typicode.com/posts.
// When the form is submitted send the form data (tittle and body) to the API  and display a success message or handle any erros that occur
import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });
  
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        formData
      );

      if (response.status === 201) {
        setMessage('Post created successfully!');
        setFormData({ title: '', body: '' });
      }
    } catch (error) {
      setMessage('Error submitting post. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Content:</label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit Post'}
        </button>
      </form>

      {message && <p className="message">{message}</p>}

      
    </div>
  );
};

export default PostForm;