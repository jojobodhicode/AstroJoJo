import logo from '../images/jojojordanus.png';

function Intro () {
    return(
    <div className="d-flex flex-column bg-secondary text-white p-5 mx-3 rounded">
        <img src={logo} className="w-25 align-self-center mb-3"/>
        <h1 className="align-self-center">AstroJoJo</h1>
        <p style={{"max-width" : "50rem"}}>A web app that consults NASA's Astronomy Picture of the Day API to print out a picture given the date. Made in React!</p>
    </div>
  );
}

export default Intro;