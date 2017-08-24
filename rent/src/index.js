import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main.jsx';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom';


ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>, 
	document.getElementById('root')
);


registerServiceWorker();
/*
<Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>




const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

const Roster = () => (
  <Switch>
    <Route exact path='/roster' component={FullRoster}/>
    <Route path='/roster/:number' component={Player}/>
  </Switch>
)

       <li><Link to='/'>Home</Link></li>
*/