import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );

}

export default App;
