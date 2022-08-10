import React, { Component } from 'react'
import ContextB from './ContextB'
import { UserConsumer, UserProvider } from './userContext'

export default class ContextA extends Component {
    render() {
        return (
            <div className='container'>
            <div className='jumbotron'>
                <h3>Context API</h3><br />
                <h4>Context-A Component</h4>
                <hr/>
                Without Provider (showing default value) : 
                <UserConsumer>
                
                        {ContextA=>ContextA}
                    </UserConsumer>
                <br />
                <UserProvider value='India' >
                With Provider : 
                    <UserConsumer>
                        {ContextA=>ContextA}
                    </UserConsumer>
                </UserProvider>
                <ContextB/>
            </div>
            </div>
        )
    }
}
