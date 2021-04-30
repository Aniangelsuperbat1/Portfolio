import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import SingleBlogPost from "./components/SingleBlogPost/SingleBlogPost";
import Projects from "./components/Projects/Projects";
import BlogPost from "./components/BlogPost/BlogPost";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SingleBlogPost} path="/post/:slug" />
        <Route component={BlogPost} path="/Blogpost" />
        <Route component={Projects} path="/projects" />
      </Switch>
    </Router>
  );
}

export default App;
