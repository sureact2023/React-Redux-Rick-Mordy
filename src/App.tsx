import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { useGetAllCharactersQuery } from './store/API/charactersAPI';

function App() {
  const store = useSelector(state=> state)
  console.log(store)
  // @ts-ignore
  const { data = [], isLoading, isFetching, isError } = useGetAllCharactersQuery({
    page: 6
  })
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
