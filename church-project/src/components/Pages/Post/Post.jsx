import React, { useState } from "react"
import axios from "axios"
import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const Post = () => {
  const [getInfor, setGetInfo] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = useState(true)

  React.useEffect(() => {
    const getPost = async () => {
      let url = "https://jsonplaceholder.typicode.com/posts";
      
      try {
        setLoading(true);
        const res = await axios.get(url);
        console.log(res.data);
        setGetInfo(res.data);

        setLoading(false);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
           setLoading(false);
      }
    };
    getPost();
  }, []);

if (loading)
  return (
    <>loading</>
  );
  if (error) return <h1 style={{color: "red"}}>ERROR: {error}</h1>;

  return (
    <div>
      {getInfor.map((info, index) => (
        <ol key={index}>
          <li style={{ textAlign: "center"}}>User unique id: {info.userId}</li>
          <Typography variant="h5" style={{ color: "red"}}>Title: {info.title}</Typography>
          <Typography variant="h6">{info.body}</Typography>
          <Link to={`/post/${info.id}`}>
          {" "}
          <Button>Click Here</Button>{" "}
          </Link>
        </ol>
      ))}
    </div>
  );
};

export default Post
