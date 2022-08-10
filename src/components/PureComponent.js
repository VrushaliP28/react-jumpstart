import React from 'react'

export default class PureComponent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            counter: 1000
        }
    }
    purecheck = () => {
        console.log("purecheck")
        this.setState({ counter: 100 });

    }
    componentDidUpdate() {
        console.log("Counter updated.....");

    }

    render() {

        let { counter } = this.state;


        return (
            <div>
                <h6>{counter}</h6>
                <hr></hr>
                <li><button onClick={() => this.purecheck()}>pure check</button></li>
            </div>
        )
    }
}
