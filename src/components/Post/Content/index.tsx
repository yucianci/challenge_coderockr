import React from 'react';
import { InterfacePost } from '../interface';
import { Article, Box } from './styles';

const Content = (props: { post: InterfacePost; size: 'large' | 'small' }) => {
  const {
    imageUrl, author, title, article,
  } = props.post;

  /*
    Alguns artigos quem chegam da API parecem estar "bugados",
    e chegam com tags HTML nos campos (article e title)
  */
  const removedTagsInArticle = article.replace(/<[^>]*>?/gm, '');

  const simpleArticle = removedTagsInArticle.split('.', 3);

  const simpleTitle = title.split('.', 1);

  return (
    <Box size={props.size}>
      <img
        src={imageUrl}
        alt={`Image for ${author} ` || 'Image for anonymous author'}
        loading="lazy"
      />
      <Article size={props.size}>
        <p>{author}</p>
        <h2>{simpleTitle}</h2>
        <p>
          {props.size === 'large'
            ? `${simpleArticle}.`
            : `${simpleArticle[2]}.`}
        </p>
      </Article>
    </Box>
  );
};

export default Content;
