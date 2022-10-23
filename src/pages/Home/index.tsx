import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import Post from '../../components/Post';
import { InterfacePost } from '../../components/Post/interface';
import { Header, Menu, Main } from './styles';

const Home = () => {
  const [posts, setPosts] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  let postSideIsLeft = true;

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://stormy-shelf-93141.herokuapp.com/articles', {
        params: {
          _page: page,
          _limit: 6,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setPosts(() => [...posts, ...response.data]);
        }
      })
      .catch((err) => err)
      .finally(() => setLoading(false));
  }, [page]);

  const handleScroll = () => {
    const windowInnerHeight = window.innerHeight;
    const documentScrollTop = document.documentElement.scrollTop;
    const documentScrollHeight = document.documentElement.scrollHeight;

    const isBottomPage = windowInnerHeight + documentScrollTop === documentScrollHeight;

    if (isBottomPage) {
      setLoading(true);
      setPage((previousPage) => previousPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      {loading && <Loader />}
      <Header title="Rockr Blog">
        <h1>Rockr Blog</h1>
        <Menu>
          <a href="/">Posts</a>
          <a href="/">Contact</a>
        </Menu>
      </Header>
      <Main>
        {posts.map((post: InterfacePost, index: number) => {
          if (index % 3 === 0) {
            postSideIsLeft = !postSideIsLeft;
          }
          return (
            <Post key={post.id} postSideIsLeft={postSideIsLeft} index={index} post={post} />
          );
        })}
      </Main>
    </>
  );
};

export default Home;
