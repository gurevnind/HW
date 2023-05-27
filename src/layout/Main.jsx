import { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Movies from '../components/Movies';
import '../index.css'

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState();

  const change = event => {
    setName(event.target.value);
  };

  const submit = event => {
    fetch(`http://www.omdbapi.com/?apikey=c8ed8ebe&s=${name}&page=1`)
      .then(res => res.json())
      .then(data => setMovies(data.Search))
  }

  return (
    <Layout.Content>
      <div>
        <input onChange={change}></input>
        <button onClick={submit}>Поиск</button>
      </div>
      <Row>
        <Col xs={24} sm={{ span: 18, offset: 3 }}>
          <Row className='justify-center' gutter={[32, 32]}>
            {
              movies.length ?
                <Movies movies={movies} />
                : <h1>Enter the name of the movie</h1>
            }
          </Row>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Main;