import React, { Component } from 'react'
import { UserProvider,UserConsumer } from './userContext'
import A from "./A";
export default class Context extends Component {
  render() {
    return (
      <div>
        <h2>Context API with default value</h2>

     <b> 
        <UserConsumer>
          {x=>x} 
        </UserConsumer>
</b>
<hr/>
<h2>Context API with custom value</h2>
<i>
<UserProvider value="Ram sirsath">
<UserConsumer>
    {user=>user}
</UserConsumer>
</UserProvider>
</i>

<A/>








      </div>
    )
  }
}
