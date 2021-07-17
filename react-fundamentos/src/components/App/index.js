import React, { useState } from 'react';
import Header from '../Header';
import Post from '../Post';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

// lista a ser renderizada
export default function App() {

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Subtitle#01', likes: 20, read: false, removed: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Subtitle#02', likes: 10, read: true, removed: false },
    { id: Math.random(), title: 'Title#03', subtitle: 'Subtitle#03', likes: 50, read: false, removed: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Subtitle#04', likes: 50, read: false, removed: false },
  ]);

  function handleRefresh() {
    // posts.push({
    //   id: Math.random(),
    //   title: `Title#0${posts.length + 1}`,
    //   subtitle: `Subtitle#0${posts.length + 1}`,
    //   likes: 20
    // })

    // substituindo pelo useState
    // setPosts([
    //   ...posts,
    //   {
    //     id: Math.random(),
    //     title: `Title#0${posts.length + 1}`,
    //     subtitle: `Subtitle#0${posts.length + 1}`,
    //     likes: 20
    //   }
    // ]);

    // OBS: podemos usar o valor direto como no exemplo acima desde que, nao dependeremos essa atualizacao do valor anterior

    // toda vez que fomos fazer uma atualizacao do state e essa atualizacoes dependerem do valor anterior SEMPRE usar o prevState (funcao)
    setTimeout(() => { // setTimeout para exemplificar uma requisicao de 2 segudos
      setPosts((prevState) => [  // prevState é uma boa pratica para manter a consistencia da aplicacao
        ...prevState,            // no caso de uma requisicao demorar a responder ele atualizara mesmo assim com a qtd de vezes clicadas pelo usuario
        {
          id: Math.random(),
          title: `Title#0${prevState.length + 1}`,
          subtitle: `Subtitle#0${prevState.length + 1}`,
          likes: 20,
          read: false
        },
      ]);
    }, 2000);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => post.id === postId ? { ...post, removed: true }
        : post
    ));
  }

  //as="", conseguimos trocar qual o elemento vai ser stilizado

  return (
    <ThemeProvider>
      <Header>
        <Title as="h2">
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </Title> {/*props chindren*/}
      </Header>

      <hr />

      {/* Renderizando uma lista */}
      {posts.map(post => (
        <Post
          key={post.id}
          onRemove={handleRemovePost}
          post={post}
        />
      ))}

      {/* <Post
        likes={20}
        post={{
          title: 'Título da notícia 01',
          subtitle: 'Subtítulo da notícia 01'
        }}
      />

      <Post
        likes={10}
        post={{
          title: 'Título da notícia 02',
          subtitle: 'Subtítulo da notícia 02'
        }}
      />

      <Post
        likes={50}
        post={{
          title: 'Título da notícia 03',
          subtitle: 'Subtítulo da notícia 03'
        }}
      /> */}
    </ThemeProvider>
  );
}
