import { useEffect, useState } from 'react';
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

      <div className='posts'>
        <span className='title'>Posts for today</span>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            {post.title}
            <h4>{post.user?.name}</h4>
          </div>
        ))}
        {!posts.length && (
          <span>There's no anything here :(</span>
        )}
      </div>
    </div>
  );
}

export default Main;
