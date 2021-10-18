
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import Projects from './pages/project/project';
import Todos from './pages/todos/todos';
import Header from './pages/header/header';

function App() {


  return (
    <Provider store={store}>
      <Header></Header>
      <h2>hello Tick Tick</h2>
      <Projects></Projects>
      <Todos></Todos>
    </Provider>
  );
}

export default App;
