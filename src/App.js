import { Route, Switch, useLocation } from 'react-router-dom'
import Layout from './Components/Layout'

// Pages import
import Home from './Pages/Home';
import About from './Pages/About';
import Academics from './Pages/Academics';
import Admission from './Pages/Admission';
import Gallery from './Pages/Gallery';
import PayFees from './Pages/PayFees';
import Contact from './Pages/Contact';
import Apply from './Pages/Apply';
import PageNotFound from './Pages/404';


function App() {
  let location = useLocation();
  return (
    <Layout>
       <Switch location={location} key={location.pathname}>
            <Route path="/" exact> <Home/> </Route>
            <Route path="/about"> <About/> </Route>
            <Route path="/academics"> <Academics/> </Route>
            <Route path="/admission"> <Admission/> </Route>
            <Route path="/gallery"> <Gallery/> </Route>
            <Route path="/payFees"> <PayFees/> </Route>
            <Route path="/contact"> <Contact/> </Route>
            <Route path="/apply"> <Apply/> </Route>
            <Route path="*"> <PageNotFound/> </Route>
         </Switch>
    </Layout>
  );
}

export default App;
