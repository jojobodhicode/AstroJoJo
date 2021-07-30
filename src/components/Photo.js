function Photo(props) {
    return(
        <div className="d-flex flex-column align-items-center align-items-lg-start flex-lg-row mb-4 container px-0">
            {props.photo.media_type==="image"?<img src={props.photo.url} alt={props.photo.title} className="col-12 col-lg-6 rounded mb-3"/>:<iframe title={'video of:'+props.photo.title} src={props.photo.url} className="col-12 col-lg-6 rounded mb-3 align-self-center" width="100%" height="100%" style={{"height":"25rem"}} controls></iframe>}
            <div className="d-flex flex-column px-lg-3 col-lg-6">
                <h3 className="col-12 col-lg-6 h3 bg-dark text-white p-3 rounded mb-3 w-100 text-center">{props.photo.title}</h3>
                <p className="col-12 col-lg-12 bg-dark text-white p-3 mb-0 rounded" style={{"maxWidth" : "100%"}}>{props.photo.explanation}</p>
            </div>
        </div>
    );
}

export default Photo;