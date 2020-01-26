import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Lists from "./Lists";
import QuickList from "./QuickList";
import SlowList from "./SlowListWithCancel";
import NoCancelList from "./SlowListWithoutCancel";
import Other from "./Other";
import Styles from "./App.css";

function App() {
  return <BrowserRouter>
    <article className={Styles.article}>
      <nav>
        <p><NavLink to={`/`}>Go to all lists page</NavLink></p>
        <p><NavLink to={`/quick`}>Go to quick list page</NavLink></p>
        <p><NavLink to={`/slow`}>Go to slow, cancellable lists page</NavLink></p>
        <p><NavLink to={`/nocancel`}>Go to slow, no cancel lists page</NavLink></p>
        <p><NavLink to={`/other`}>Go to other page</NavLink></p>
      </nav >
      <div>
        <Route exact path="/" render={() => (<Lists></Lists>)} />
        <Route exact path="/quick" render={() => (<QuickList></QuickList>)} />
        <Route exact path="/slow" render={() => (<SlowList></SlowList>)} />
        <Route exact path="/nocancel" render={() => (<NoCancelList></NoCancelList>)} />
        <Route path="/other" component={() => <Other></Other>} />
      </div>
    </article>
  </BrowserRouter >
}

export default App;