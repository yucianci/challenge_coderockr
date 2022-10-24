import React from 'react';
import Content from './Content';
import { InterfacePost } from './interface';
import { Container, Wrapper, LargeWrapper } from './styles';

const Post = (props: {
  post: InterfacePost;
  index: number;
  postSideIsLeft: boolean;
}) => {
  const { post, index, postSideIsLeft } = props;

  const indexPost = (index + 1) % 3 === 0;

  const POST_SIZE = indexPost ? 'large' : 'small';

  const POST_SIDE = postSideIsLeft ? 'left' : 'right';

  return (
    <>
      {POST_SIZE === 'large' ? (
        <LargeWrapper side={POST_SIDE}>
          <Container>
            <Content post={post} size={POST_SIZE} side={POST_SIDE} />
          </Container>
        </LargeWrapper>
      ) : (
        <Wrapper>
          <Content post={post} size={POST_SIZE} side={POST_SIDE} />
        </Wrapper>
      )}
    </>
  );
};

export default Post;
