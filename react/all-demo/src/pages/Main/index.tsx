import React, { useEffect, useState } from 'react';
import axios from 'axios';

import logo from '../../assets/logo.svg';
import './styles.css';
import { Post } from '../../types';

const Main = () => {

  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get("http://localhost:3001/posts?_expand=user&_page=1");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='page main'>
      <div className='label-area'>
        <span className='page-label main-label'>{`JUST FOR EXAMPLE`}</span>
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>

      <div className='posts'>
        {posts.map((post) => (
          <div className='post'>
            
            {post.title}
            <h4>{post.user?.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
