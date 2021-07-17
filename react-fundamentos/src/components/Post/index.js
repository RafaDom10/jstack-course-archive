import React from 'react'
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

import { Container, Subtitle, Like } from './styles';

export default function Post(props) {
  // renderizacao condicional com mudanca na estrutura html
  // if(props.post.read) {
  //   return <h2>{props.post.title} já foi lido!!</h2>
  // }

  return (
      <Container removed={props.post.removed}>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />

        <Subtitle>{props.post.subtitle}</Subtitle>
        <Like>Likes: {props.post.likes / 2}</Like>
      </Container>
  )
}

// tipando as propriedades (props)
Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  // tipando um objeto
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }).isRequired
};
