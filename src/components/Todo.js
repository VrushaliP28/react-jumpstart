import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            title: 'To-Do',
            todos: []
        }
    }


    componentDidMount() {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const userId = params.get('userId');

        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
                .then(response => response.json())
                .then(json =>
                    this.setState({ todos: json })
                )
        } else {

            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json =>
                    this.setState({ todos: json })
                )
        }
    }


    render() {
        let { title, todos } = this.state;
        console.log('todos:  ' + JSON.stringify(todos))

        return (
            <div>
                <div>
                    <h2>{title}</h2>
                    <table className='table table-hover table-striped'>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>USER ID</th>
                                <th>TITLE</th>
                                <th>COMPLETED</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                todos.map((t) =>
                                    <tr key={t.id}>
                                        <td> {t.id}</td>
                                        <td> {t.userId}</td>
                                        <td>{t.title}</td>
                                        <td>{t.completed}</td>
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
