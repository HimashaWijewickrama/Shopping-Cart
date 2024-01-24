import data from './components/back/Data/Data';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/front/Header/Header';
import React from 'react';
import Routes from './components/front/Routes/Routes';

const App = () => {
  const { productItems } = data;

  return (
    <div>
      <Router>
        <Header />
        <Routes productItems={productItems}/>
      </Router>
    </div>
  )

}

export default App;
