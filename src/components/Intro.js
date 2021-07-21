function Intro () {
    return(
    <div className="d-flex flex-column bg-dark text-white p-5">
        {/* jojojordie icon goes here  */}
        <h1 className="align-self-center">AstroJoJo</h1>
        <p>A web app that consults NASA's Astronomy Picture of the Day API to print out a random picture of the day and a corresponding description. Made in React!</p>
    </div>
  );
}

export default Intro;