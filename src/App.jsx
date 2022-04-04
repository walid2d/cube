import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import CreateStream from "./Components/CreateStream/CreateStream";
import EditStream from "./Components/EditStream/EditStream";
import LiveStream from "./Components/LiveStream/LiveStream";
import StreamDelete from "./Components/StreamDelete/StreamDelete";
import StreamList from "./Components/StreamList/StreamList";

const App = function () {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact render={StreamList}></Route>
          <Route path="/stream/new" exact>
            <CreateStream />
          </Route>
          <Route path="/stream/edit" exact render={EditStream}></Route>
          <Route path="/stream/delete" exact render={StreamDelete}></Route>
          <Route path="/stream/live" exact render={LiveStream}></Route>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
