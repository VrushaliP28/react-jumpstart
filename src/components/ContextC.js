import React, { Component } from 'react'
import { UserConsumer, UserProvider } from './userContext'

export default class ContextC extends Component {
  render() {
    return (
        <div className='container'>
        <div className='jumbotron'>
            <h4>Context-C Component</h4><hr/>
            <UserProvider value='Maharashtra' >
            With Provider : 
                <UserConsumer>
                    {ContextC=>ContextC}
                </UserConsumer>
            </UserProvider>
        </div>
        </div>
    )
  }
}
