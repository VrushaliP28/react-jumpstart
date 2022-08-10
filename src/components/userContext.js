import React from 'react';
// Context lets us pass a value deep into the component tree
// without explicitly threading it through every component.


// Create a context for the current user (with "Pradeep Chinchole" as the default).
const UserContext = React.createContext("Vrushali");


//create a provider
const UserProvider=UserContext.Provider;

//create a consumer
const UserConsumer=UserContext.Consumer;


export {UserProvider,UserConsumer}
