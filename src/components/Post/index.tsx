import React from 'react';
import Content from './Content';
import { InterfacePost } from './interface';
import {
  Container, LargeContainer, Wrapper, LargeWrapper,
} from './styles';

const Post = (props: { post: InterfacePost; index: number }) => {
  const { post, index } = props;

  const indexPost = (index + 1) % 3 === 0;

  const POST_SIZE = indexPost ? 'large' : 'small';

  return (
    <>
      {POST_SIZE === 'large' ? (
        <LargeWrapper>
          <LargeContainer>
            <Content post={post} size={POST_SIZE} />
          </LargeContainer>
        </LargeWrapper>
      ) : (
        <Wrapper>
          <Container>
            <Content post={post} size={POST_SIZE} />
          </Container>
        </Wrapper>
      )}
    </>
  );
};

export default Post;
