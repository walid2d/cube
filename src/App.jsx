import { Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CreateStream from "./Components/CreateStream/CreateStream";
import EditStream from "./Components/EditStream/EditStream";
import LiveStream from "./Components/LiveStream/LiveStream";
import StreamDelete from "./Components/StreamDelete/StreamDelete";
import StreamList from "./Components/StreamList/StreamList";
import About from "./Components/About/About";
import routerHistory from "./Util/routerHistory";
import { Switch } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const App = function () {
  const history = routerHistory;
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" component={StreamList} exact />
          <Route path="/stream/new" exact component={CreateStream} />
          <Route path="/stream/edit/:id" exact component={EditStream} />
          <Route path="/stream/delete/:id" exact component={StreamDelete} />
          <Route path="/stream/live/:id" exact component={LiveStream} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
export default App;
