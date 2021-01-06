import {Route, Switch} from "react-router-dom";
import SiteBar from './Layout/SiteBar';
import About from './Common/About'
import ViewMyProfile from './Components/Profile/ViewMyProfile';
import CreatePoem from './Components/Poem/CreatePoem';
import ViewAllPoem from './Components/Poem/ViewAllPoem';
import ViewAllProfile from './Components/Profile/ViewAllProfile';
import ViewMyPoem from './Components/Poem/ViewMyPoem'
import UpdatePoem from './Components/Poem/UpdatePoem'
import Hurray from './Common/Hurray'
import DeletePoem from './Components/Poem/DeletePoem';
import './App.css';

function App() {
  return (
    <main className="container-fluid p-0 m-0">
      <div>
        <SiteBar />
      </div>
        {/* <CreatePoem /> */}
        {/* <ViewPoem /> */}
        {/* <ViewAllPoem /> */}
        {/* <Hurray /> */}
        {/* <UpdatePoem /> */}
        {/* <ViewMyPoem /> */}
        {/* <DeletePoem /> */}
        {/* <ViewMyProfile /> */}
        <Switch>
          <Route path="/profile/mine" component={ViewMyProfile} />
          <Route path="/about" component={About} />
          <Route path="/poem/create" component={CreatePoem} />
          <Route path="/poem/mine" component={ViewMyPoem} />
          <Route path="/poem/" exact component={ViewAllPoem} />
        </Switch>
    </main>
        
          
      
   
  );
}

export default App;
