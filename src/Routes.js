import { Route, Switch, BrowserRouter } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";
import Contact from "./pages/Contact";

const NotFound = () => <div>The page not found</div>;

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/gallery" component={Gallery} exact />
        <Route path="/features" component={Features} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
