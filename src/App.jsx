import { Router, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CreateStream from "./Components/CreateStream/CreateStream";
import EditStream from "./Components/EditStream/EditStream";
import LiveStream from "./Components/LiveStream/LiveStream";
import StreamDelete from "./Components/StreamDelete/StreamDelete";
import StreamList from "./Components/StreamList/StreamList";
import routerHistory from "./Util/routerHistory";

const App = function () {
  const history = routerHistory;
  return (
    <>
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/stream/new" exact>
            <CreateStream />
          </Route>
          <Route path="/stream/edit/:id" exact component={EditStream} />
          <Route path="/stream/delete/:id" exact>
            <StreamDelete />
          </Route>
          <Route path="/stream/live/:id" exact>
            <LiveStream />
          </Route>
        </div>
      </Router>
    </>
  );
};
export default App;
