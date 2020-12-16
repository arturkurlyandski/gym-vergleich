import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import Footer from "./Footer"
import Header from "./Header"
import GlobalStyle from "./GlobalStyle"

function App() {

  return (
    <div>
      <GlobalStyle />
      <main>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/profile">
            <div>This is your Profile</div>
          </Route>
          <Route path="/bookmarks">
            <div>Bookmarks are here</div>
          </Route>
        </Switch>
        <Footer />
      </main>
    </div>
  )
}

export default App;
