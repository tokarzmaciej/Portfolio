import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import MainWebPage from "./mainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <MainWebPage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
