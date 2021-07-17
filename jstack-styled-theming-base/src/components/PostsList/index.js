import React from 'react';

import { Container } from './styles';
import Post from './Post';

import posts from './posts';

// Refatorando utilizando class component
export default class PostsList extends React.Component { // toda class component precisa extender a class React.Component
  // metodo obrigatorio render
  render() {
    return (
      <Container>
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))}
      </Container>
    );
  }
}

// export default function PostsList() {
//   return (
//     <Container>
//       {posts.map((post) => (
//         <Post
//           key={post.id}
//           title={post.title}
//           description={post.description}
//         />
//       ))}
//     </Container>
//   );
// }