import logo from './logo.svg';
import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from "react-redux";
import store from "../src/redux/store";
import HooksCakeContainer from './component/HooksCakeContainer';
import Ice_CreamContainer from './component/Ice_CreamContainer';
import NewCakeContainer from './component/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer></CakeContainer>
      <HooksCakeContainer />
      <Ice_CreamContainer />
      <NewCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
