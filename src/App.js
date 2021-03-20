import Header from "./components/Header";
import Registration from "./components/Registration";
import UserList from "./components/UserList";
import {Route, BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Route exact path="/" component={Registration}/>
        <Route path="/userlist" component={UserList}/>
      </Router>
    </div>
  );
}

export default App;
