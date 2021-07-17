import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// export default function Post() {
//   const params = useParams();
//   const { search } = useLocation();
//   const queryParams = useMemo(() => new URLSearchParams(search), [search]);


//   console.log(params);
//   console.log(queryParams.get('meuQueryParams'));

//   return (
//     <div>
//       <h1>Post page</h1>
//     </div>
//   );
// }

// * Capturando parâmetros com class components

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    const { search } = this.props.location;
    this.queryParams = new URLSearchParams(search);

    // * exemplo de manipulação com base no valor do  query params
    // if (this.queryParams.get('meuQueryParams') === 'teste') {
    //   window.alert('Teste');
    // }
  }

  // * exemplificando o useHistory em class components
  handleNavigate = () => {
    this.props.history.push('/posts')
  };

  render() {
    // * capturando o value do query params
    console.log(this.queryParams.get('meuQueryParams'));

    // * capturando params
    console.log(this.props.match.params);

    // * capturando query params
    console.log(this.props.location.search);

    return (
      <>
        <button onClick={this.handleNavigate}>Voltar para lista de posts</button>
        <h1>Post Page.</h1>
      </>
    );
  }
}
