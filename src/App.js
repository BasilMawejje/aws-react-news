import NewsList from './components/news/NewsList';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue-grey darken-1">
            <a href="/" className="brand-logo">
              News
            </a>
            <ul className="right hide-on-med-and-down">
          </ul>
        </div>
      </nav>
    </div>

    <div className="row">
      <div className="col s12 m12 l12">
        <h3>Top Headlines</h3>
        <NewsList />
        <hr />
      </div>
    </div>
  </div>
  );
}

export default App;
