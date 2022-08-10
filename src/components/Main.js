import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Catalog from "./Catalog";
import Greeting from "./Greeting";
import Welcome from "./Welcome";
import UsersList from './UsersList';
import Counter from './Counter';
import UserTable from './UserTable';
import Todo from './Todo';
import Posts from './Posts';
import Albums from './Albums';
import Photos from './Photos';
import Comments from './Comments';
import Parent from './Parent';
import PureComponent from './PureComponent';
import ContextA from './ContextA';
import Country from './Country';
import UpdatedComponent from './UpdatedComponent';
import Registration from './Registration';
import Login from './Login';


export default function Main() {

  return (
    <div className='container'>
      <div className='jumbotron'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="greet" element={<Greeting />} />
          <Route path="counter" element={<Counter />} />
          <Route path='parent' element={<Parent />} />
          <Route path='pure-component' element={<PureComponent />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="user-list" element={<UsersList />} />
          <Route path="user-table" element={<UserTable />} />
          <Route path="to-do" element={<Todo />} />
          <Route path="posts" element={<Posts />} />
          <Route path="albums" element={<Albums />} />
          <Route path="photos" element={<Photos />} />
          <Route path="comments" element={<Comments />} />
          <Route path="context-api" element={<ContextA />} />
          <Route path="country-assignment" element={<Country />} />
          <Route path="high-order" element={<UpdatedComponent />} />
          <Route path="sign-up" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Routes>




      </div>
    </div>
  )
}
