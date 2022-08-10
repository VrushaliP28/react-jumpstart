import React, { Component } from 'react'

export default class UsersList extends Component {

constructor(){
    super();
    this.state={
                  title:'Users List',
                  users:[] 

    };
    console.log("UsersList created...")
}



componentDidMount(){
    console.log("UsersList mounted.....");
    
    
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => 
    this.setState({users:json})
    )
   
}


componentDidUpdate(){
    console.log("UsersList updated.....");
    
}


componentWillUnmount(){
    console.log("UsersList unmounted.....");
    
}

componentDidCatch(){
    console.log("UsersList cateched the errors.....");
    
}





  render() {


    console.log("...In render....");
    let {title,users}=this.state;
    
    
    return (
      <div>

<h2>{title}</h2>        
    
<ul class="list-group">
{
  users.map( u =>(<li class="list-group-item list-group-item-info">{u.username}</li>)) 
}

</ul>
    
    
    
        </div>
    )
  }








}
