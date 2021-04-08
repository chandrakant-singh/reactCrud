import React,{useEffect} from 'react';
import JsonPlaceholderInstance from './apis/JsonPlaceholder.instance';

import './App.css';
import Layout from './layout/layout';
import Routers from './routers/routers';


function App() {
  
  useEffect(() => {
    callIngJsonApi();
  }, []);

// Demo api call
  const callIngJsonApi = () => {
    JsonPlaceholderInstance.get('/posts')
    .then((data =>  console.log(data)))
    .catch((error) => console.log(error))
  }

  return (
    <div className="App">
      <Layout>
        <Routers/>
      </Layout>
    </div>
  );
}

export default App;
