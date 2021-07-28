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
        const dateInputExpression = /\d\d\d\d-\d\d-(\d\d)/
        let match = dateInputExpression.test(dateFromInput); 
        if(match === true) {
            this.setState({date: dateFromInput});
            this.getPhoto(dateFromInput);
        }
        else if (match === false && dateFromInput === '') {
            alert('Please provide a date input!')
        }
        else if (match === false) {
            alert('Please format your date in the YYYY-MM-DD Format');
        }
        else {
            alert('Please format your date in the YYYY-MM-DD Format');
        }

    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=5bwusI9qscfoa7RwBqgZ97BfBzXrUCd2Ri4zTH4j')
        .then(res => res.json())
        .then(json => this.setState({photo: json}));
    }

    getPhoto = (date) => {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=5bwusI9qscfoa7RwBqgZ97BfBzXrUCd2Ri4zTH4j`)
        .then(res => res.json())
        .then(photoData => this.setState({photo: photoData}))
    }

    render() {
        return (
            <div className="d-flex flex-column align-items-center bg-secondary mx-3 my-5 p-4 rounded">
                <DateInput changeDate={this.changeDate}/>
                <Photo photo={this.state.photo}/>
            </div>
        );
    }
}

export default Container;