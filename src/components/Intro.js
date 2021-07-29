import logo from '../images/jojojordanus.png';

function Intro () {
    return(
    <>
      <style jsx>
        {`
          .logo-width {
            width: 10rem;
          }
        `}
      </style>
      <div className="d-flex flex-column align-items-center align-items-lg-start flex-lg-row bg-secondary text-white rounded mx-3 mt-3">
          <img src={logo} className="logo-width p-3" alt="jojojordie logo"/>
          <div className="d-flex flex-column align-items-center p-3 w-100">
            <h1 className="">AstroJoJo</h1>
            <p style={{"maxWidth" : "50rem"}}>A web app that consults NASA's Astronomy Picture of the Day API to print out a picture given the date. Made in React!</p>
          </div>
      </div>
    </>
  );
}

export default Intro;