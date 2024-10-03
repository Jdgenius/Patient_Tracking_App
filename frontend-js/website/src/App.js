import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Chatbot from './components/chatbot';
import Body from './components/body';

function App() {
  return (
    <div id='App'>
      <Header/>
      <Body/>
      <Chatbot/>
      <Footer/>
    </div>
  );
}

export default App;
