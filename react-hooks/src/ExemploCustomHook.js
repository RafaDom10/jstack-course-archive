import React from 'react';

import './App.css';

import { useFetch } from './hooks/useFetch';

export default function ExemploCustomHook() {
  const [loading, string] = useFetch('https://api.github.com/users/RafaDom10');
  // eslint-disable-next-line
  const [loading2, string2] = useFetch('https://api.github.com/users/adadddrfrfrfRafaDom10');

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {string}
    </div>
  );
}
