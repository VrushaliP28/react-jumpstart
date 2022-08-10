import React, { Component } from 'react'

export default class Comments extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Comments',
            comments: []
        }
    }


    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const postId = params.get('postId');

        if (postId) {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(json =>
                this.setState({ comments: json })
            )
        } else {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(json =>
                    this.setState({ comments: json })
                )
        }
    }


    render() {
        let { title, comments } = this.state;
        console.log('comments:  ' + JSON.stringify(comments))

        return (
            <div>
                <div>
                    <h2>{title}</h2>
                    <table className='table table-hover table-striped'>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>POST ID</th>
                                <th>NAME</th>
                                <th>EMAIL</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                comments.map((t) =>
                                    <tr>
                                        <td> {t.id}</td>
                                        <td>{t.postId}</td>
                                        <td>{t.name}</td>
                                        <td>{t.email}</td>

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
