import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent';

 class ClickCounter extends Component {

        //  constructor(props) {
        //    super(props)
        
        //    this.state = {
        //       count:0
        //    };
        //  };
        
        // incrementCount=()=>{
        //     this.setState(prevState=>{
        //            return {count:prevState.count+1}
        //      })
        //  }
    
         render() {
    
            let {count,incrementCount,name}=this.props;
    
             return (
                 <div>
                     <button onClick={incrementCount} className="btn btn-info">Hi {name}, Button Clicked {count} times</button>
                 </div>
             )
         }
    }



    export default  UpdatedComponent(ClickCounter)