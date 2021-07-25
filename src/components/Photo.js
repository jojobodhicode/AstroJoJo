function Photo(props) {
    return(
        <div className=" d-flex flex-column align-items-center p-5">
            <h3>{props.photo.title}</h3>
            <img src={props.photo.url} alt={props.photo.title}/>
            <p>{props.photo.explanation}</p>
        </div>
    );
}

export default Photo;