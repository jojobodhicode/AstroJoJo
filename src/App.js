import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Container from './components/Container';
import Footer from './components/Footer';


function App() {
  return (
    <div className="d-flex flex-column align-items-center w-100">
      <div className="max-width-1440">
        <Intro/>
        <Container/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
