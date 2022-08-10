import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class UserTable extends Component {
    constructor() {
        super();
        this.state = {
            title: 'User Table',
            users: []
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json =>
                this.setState({ users: json })
            )
    }


    render() {
        let { title, users } = this.state;

        return (
            <div>
                <div>
                    <h2>{title}</h2>
                    <table className='table table-hover table-striped'>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>COMPANY NAME</th>
                                <th>CITY</th>
                                <th>POSTS</th>
                                <th>TODOS</th>
                                <th>ALBUMS</th>


                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((u) =>
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td> {u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.company.name}</td>
                                        <td>{u.address.city}</td>
                                        <td><Link to={`/posts?userId=${u.id}`}> <input type="button" value="VIEW POSTS" class="btn btn-info" />  </Link></td>

                                        <td><Link to={`/to-do?userId=${u.id}`}> <input type="button" value="VIEW TODOS" class="btn btn-primary" /> </Link> </td>

                                        <td><Link to={`/albums?userId=${u.id}`}> <input type="button" value="VIEW ALBUMS" class="btn btn-success" /> </Link> </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>

                </div>
            </div>
        )
    }
}
