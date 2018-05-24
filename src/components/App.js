import React, { Component } from 'react';
import '../style/App.css';
import Title from './title';
import Header from './header';
import ProsConsList from '../containers/pros_cons_list';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Title />
       <Header />
       <ProsConsList />
      </div>
    );
  }
}

export default App;
