import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SighnIn from './components/auth/SighnIn';
import SighnUp from './components/auth/SighnUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/signin' component={SighnIn} />
          <Route path='/signup' component={SighnUp} />
          <Route path='/create' component={CreateProject} />
        </Switch>
      </div>
          </BrowserRouter>
  );
}

export default App;
