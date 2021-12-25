import Header from './components/header/header';

import './App.css';
import Body from './components/body/body';
import Details from './components/Details';
import Form from './components/Form/Form';
import Footer from './components/footer/footer';
import BurgreMenu from './components/menu/menu';

function App() {
  return (
    <div className="App" id='app'>
      <Header />
      <main>
        <Body>
          <Details/>
          <Form/>
        </Body>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
