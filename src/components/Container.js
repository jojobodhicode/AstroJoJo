import Photo from './Photo';
import DateInput from './DateInput';
import React from 'react';

class Container extends React.Component {

    state = {
        date: "",
        photo: "",
    }

    changeDate = (e) => {
        e.preventDefault();
        //console.log(e.target);
        let dateFromInput = e.target[0].value;
        this.setState({date: dateFromInput});
        this.getPhoto(dateFromInput);
    }


    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=5bwusI9qscfoa7RwBqgZ97BfBzXrUCd2Ri4zTH4j')
        .then(res => res.json())
        .then(json => this.setState({photo: json}));
    }

    getPhoto = (date) => {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
        .then(res => res.json())
        .then(photoData => this.setState({photo: photoData}))
    }

    render() {
        return (
            <div className="bg-primary d-flex flex-column align-items-center">
                <Photo photo={this.state.photo}/>
                <DateInput changeDate={this.changeDate}/>
            </div>
        );
    }
}

export default Container;