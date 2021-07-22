import { Route, Switch } from 'react-router-dom';
import Home from '../modules/Home'
// import Detail from '../pages/detail'
import About from '../modules/About';


const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      {/* <Route path="/detail/:id" component={Detail} /> */}
    </Switch>
  )
}

export default Routes;

