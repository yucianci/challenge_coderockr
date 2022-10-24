import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { InterfacePost } from '../../components/Post/interface';
import { postDefault } from '../../data';
import {
  ContentArticle,
  HeaderArticle,
  HeaderArticleMobile,
  Main,
  Wrapper,
} from './styles';

const Article = () => {
  const { id } = useParams();
  const [post, setPost] = useState<InterfacePost>(postDefault);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://stormy-shelf-93141.herokuapp.com/articles', {
        params: {
          id,
        },
      })
      .then((response) => {
        if (response.data.length > 0) {
          setPost(response.data[0]);
        }
      })
      .catch((err) => err)
      .finally(() => setLoading(false));
  }, []);

  const doc = new DOMParser().parseFromString(post.article, 'text/html');

  console.log(doc);

  return (
    <>
      {loading && <Loader />}
      <Header />
      <Wrapper>
        <Main>
          <HeaderArticle>
            <img
              src={post.imageUrl}
              alt={`Image for ${post.author}` || 'Image for anonymous author'}
              loading="lazy"
            />
            <div>
              <span>Jan 6, 2018</span>
              <p>{post.author}</p>
              <h2>{post.title}</h2>
            </div>
          </HeaderArticle>
          <HeaderArticleMobile imageUrl={post.imageUrl}>
            <div>
              <span>Jan 6, 2018</span>
              <p>{post.author}</p>
              <h2>{post.title}</h2>
            </div>
          </HeaderArticleMobile>
          <ContentArticle>
            <div dangerouslySetInnerHTML={{ __html: post.article }} />
          </ContentArticle>
        </Main>
      </Wrapper>
    </>
  );
};

export default Article;
