import React, { Component } from 'react';

class Miro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        }
        this.handleClick = this.handleClick.bind(this);
        console.log('constructor now!');
    }

    componentDidMount() {
        console.log('componentDidMount now!');
    }

    handleClick() {
        this.setState({
            clicked: true,
        })
    }

    componentDidUpdate() {
        console.log('componentDidUpdate now!')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate now!')
        return true;
    }

    render() {
        console.log('render now!');
        return (
            <iframe id="myFrame" width="100%" height="432" src="https://miro.com/app/live-embed/o9J_l0yiJfI=/?moveToViewport=-3906,-3996,8198,8677&embedAutoplay=true#toolbar=0" frameBorder="0" scrolling="no" allowFullScreen></iframe>
        );
    }
}

export default Miro;
