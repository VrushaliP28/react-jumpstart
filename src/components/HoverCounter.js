import React, { Component } from 'react'
import UpdatedComponent from './UpdatedComponent';

class HoverCounter extends Component {
  //         constructor(props) {
  //          super(props)
        
  //         this.state = {
   //           count:0
   //        };
   //      };
        
      
    //       incrementCount=()=>{
    //        this.setState(prevState=>{
    //            return {count:prevState.count+1}
    //       })
    //    }
    
       
        render() {
            let {count,incrementCount,name}=this.props;
    
            return (
                <div>
                  <h2 onMouseOver={incrementCount}> Hi  {name}, Mouse Hoverd {count} times</h2>
                </div>
            )
        }
    }


    export default UpdatedComponent(HoverCounter)