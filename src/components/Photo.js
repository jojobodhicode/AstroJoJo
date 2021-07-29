function Photo(props) {
    return(
        <div className="d-flex flex-column align-items-center align-items-lg-start flex-lg-row mb-4">
            {props.photo.media_type==="image"?<img src={props.photo.url} alt={props.photo.title} className="w-100 rounded mb-3" style={{"maxWidth" : "50%"}}/>:<iframe src={props.photo.url} controls></iframe>}
            <div className="d-flex flex-column px-lg-3">
                <h3 className="h3 bg-dark text-white p-3 rounded mb-3 w-100">{props.photo.title}</h3>
                <p className="bg-dark text-white p-3 mb-0 rounded" style={{"maxWidth" : "100%"}}>{props.photo.explanation}</p>
            </div>
        </div>
    );
}

export default Photo;