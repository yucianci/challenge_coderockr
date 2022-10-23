import React from 'react';
import Content from './Content';
import { InterfacePost } from './interface';
import {
  Container, Wrapper, LargeWrapper,
} from './styles';

const Post = (props: { post: InterfacePost; index: number }) => {
  const { post, index } = props;

  const indexPost = (index + 1) % 3 === 0;

  const POST_SIZE = indexPost ? 'large' : 'small';

  return (
    <>
      {POST_SIZE === 'large' ? (
        <LargeWrapper>
          <Container>
            <Content post={post} size={POST_SIZE} />
          </Container>
        </LargeWrapper>
      ) : (
        <Wrapper>
          <Content post={post} size={POST_SIZE} />
        </Wrapper>
      )}
    </>
  );
};

export default Post;
