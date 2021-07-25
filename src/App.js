import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/Intro';
import Container from './components/Container';


function App() {
  return (
    <div className="d-flex flex-column align-items-center w-100" style={{"background":"#020202"}}>
      <div className="max-width-1440">
        <Intro/>
        <Container/>
      </div>
    </div>
  );
}

export default App;
