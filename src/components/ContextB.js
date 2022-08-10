import React, { Component } from 'react'
import ContextC from './ContextC'
import { UserProvider, UserConsumer } from './userContext'

export default class ContextB extends Component {
  render() {
    return (
        <div className='container'>
        <div className='jumbotron'>
            <h4>Context-B Component</h4>
            <hr/>
            <UserProvider value='Pune' >
            With Provider : 
                <UserConsumer>
                    {ContextB=>ContextB}
                </UserConsumer>
            </UserProvider>
            <br />
                Without Provider (showing default value) : 
                <UserConsumer>
                    {ContextB=>ContextB}
                </UserConsumer>
           <ContextC />
        </div>
        </div>
    )
  }
}
