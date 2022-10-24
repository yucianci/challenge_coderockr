import React from 'react';
import { useNavigate } from 'react-router-dom';
import { InterfacePost } from '../interface';
import { Article, Box, Wrapper } from './styles'; import icon from '../../../assets/svg/Vector.svg';

const Content = (props: {
  post: InterfacePost;
  size: 'large' | 'small';
  side: 'left' | 'right';
}) => {
  const navigate = useNavigate();

  const {
    id, imageUrl, author, title, article,
  } = props.post;

  /*
    Alguns artigos quem chegam da API parecem estar "bugados",
    e chegam com tags HTML nos campos (article e title)
  */
  const removedTagsInArticle = article.replace(/<[^>]*>?/gm, '');

  const simpleArticle = removedTagsInArticle.split('.', 3);

  const simpleTitle = title.split('.', 1);

  return (
    <Box size={props.size} side={props.side} onClick={() => navigate(`/article/${id}`)}>
      <img
        src={imageUrl}
        alt={`Image for ${author} ` || 'Image for anonymous author'}
        loading="lazy"
      />
      <Wrapper size={props.size} side={props.side}>
        <Article>
          <p>{author}</p>
          <h2>{simpleTitle}</h2>
          <p>
            {props.size === 'large'
              ? `${simpleArticle}.`
              : `${simpleArticle[2]}.`}
          </p>
        </Article>
        <img className="icon" src={icon} alt="More details" />
      </Wrapper>
    </Box>
  );
};

export default Content;
