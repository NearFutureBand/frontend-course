import React from 'react';

import DATA from './const/data.json';
import CardList from './components/CardList';

function App() {
  return <CardList data={DATA} />
}

export default App;
