import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Personal from './Components/Personal';
import ArticlePageComponent from './Components/ArticlePageComponent';
import ArticlesListPageComponent from './Components/ArticlesListPageComponent';
import PageNotFoundComponent from './Components/PageNotFoundComponent';
import Technology from './Components/Technology';
import Experience from './Components/Experience';
import Archievements from './Components/Archievements';
import Education from './Components/Education';
import Download from './Components/Download';
import AddArticle from './Components/AddArticle';
import Navbar from './Navbar';
import { Provider } from "react-redux";
import { store } from './Store';
import './App.css';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />       
        <div id="page-body">
          <Switch>
            <Route path="/" component={ArticlesListPageComponent} exact />
            <Route path="/technology" component={Technology} />
            <Route path="/experience" component={Experience} />
            <Route path="/archievements" component={Archievements} />
            <Route path="/education" component={Education} />
            <Route path="/download" component={Download} />
            <Route path="/add-article" component={AddArticle} />
            <Route path="/articles-list" component={ArticlesListPageComponent} />
            <Route path="/article/:name" component={ArticlePageComponent} />
            <Route component={PageNotFoundComponent}/>
          </Switch>
        </div>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
