
export default function BasicExample() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Breeds</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
  
          <hr />
  
          {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


<ul>

</ul>