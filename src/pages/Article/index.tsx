import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import { InterfacePost } from '../../components/Post/interface';
import { postDefault } from '../../data';
import { formatDate } from '../../utils/formatDate';
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
      .finally(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Wrapper>
        <Main>
          <HeaderArticle>
            <img
              src={post.imageUrl}
              alt={`Image for ${post.author}` || 'Image for anonymous author'}
              loading="lazy"
            />
            <div>
              <span>{formatDate(post.date)}</span>
              <p>{post.author}</p>
              <h2>{post.title}</h2>
            </div>
          </HeaderArticle>
          <HeaderArticleMobile imageUrl={post.imageUrl}>
            <div>
              <span>{formatDate(post.date)}</span>
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
