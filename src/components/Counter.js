import React, { Component } from 'react'

export default class Counter extends Component {

  constructor() {
    super();
    this.state = { counter: 0 };
    console.log("Counter created...")

    this.increase = this.increase.bind(this);

  }


  increase() {
    console.log("Increase counter......");
    //       this.setState({counter:this.state.counter+1});

    this.setState(prevState => ({ counter: prevState.counter + 1 }));

    console.log("Increase counter......" + this.state.counter);


  }


  componentDidMount() {
    console.log("Counter mounted.....");
    this.setState({ counter: 100 });
  }


  componentDidUpdate() {
    console.log("Counter updated.....");

  }


  componentWillUnmount() {
    console.log("Counter unmounted.....");

  }

  componentDidCatch() {
    console.log("Counter cateched the errors.....");

  }




  decrease = () => {

    // this.setState({counter:this.state.counter-1});   wrong
    this.setState(prevState => ({ counter: prevState.counter - 1 }));  //correct

    console.log("Decrease counter......" + this.state.counter);

  }

  render() {


    console.log("...In render....");
    let { counter } = this.state;

    let counterStyle = { color: 'red', backgroundColor: 'lightgrey', padding: '10px', margin: '10px', width: '100%'};


    return (
      <div className='jumbotron text-center'>

        <h2>Counter Example</h2>

        <h6>Inline Style & Arrow Function Example</h6>

        <div style={counterStyle}>
          <h3>     Counter : {counter}  </h3>
        </div>

        <button className='btn btn-info' onClick={this.increase}>INCREASE </button> &nbsp;&nbsp;&nbsp;
        <button className='btn btn-primary' onClick={this.decrease}>DECREASE</button>

      </div>
    )
  }








}
