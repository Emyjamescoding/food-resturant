import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { Box, Button, Typography } from '@mui/material'

const SinglePostPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, seterror] = useState(null);
  const [ spinners, setSpinner ] = useState(false);
  console.log('id useParam', id);
  let navigate = useNavigate()
  const override = {
    display: 'block',
    margin: '200px auto',
    borderColor: 'red',
  };

  useEffect(() =>{
    const getPostId = async () => {
      let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

      try {
        setLoading(true);
        const res = await axios.get(url);

        setData(res.data);
        setLoading(false);
        seterror(null);
      } catch (err) {
        seterror(err.message);
      } finally {
        setLoading(false);
      }
    };
    getPostId();
  } ,[id]);

  // delete post

  const deletePost = async () => {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    try {
      setSpinner(true);
      const res = await axios.delete(url);
      console.log("post delete ", res)
      alert("post deleted successfully");
      navigate("/home");
    }
  }

  if (loading)
    return(
  <ClipLoader
  loading={loading}
  cssOverride={override}
  aria-label='loading Spinner'
  data-testid='loader'
  />
  );
  if (error) return <h1 style={{color:'red'}}>ERROR: {error}</h1>
  return (
    <Box
    sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }}
    >
      <Typography variant='body1' color='text.secondary'>
        {data.userId}{" "}
      </Typography>
      <Typography variant='h2' gutterBottom>
        {" "}
        title: {data.title}
      </Typography>
      <Typography variant='body1' color='text.secondary'>
        {data.body}{" "}
      </Typography>
      
    </Box>
  )
}
export default SinglePostPage
