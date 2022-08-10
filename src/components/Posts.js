import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Posts extends Component {

    MyComponent = () => {
       
    }
    constructor() {
        super();
        this.state = {
            title: 'POSTS',
            posts: []
        }
    }



    componentDidMount() {

        const search = window.location.search;
        const params = new URLSearchParams(search);
        const userId = params.get('userId');


        if (userId) {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then(response => response.json())
                .then(json => {
                    console.log('posts : ', json)
                    this.setState({ posts: json })
                }
                ).catch(e => {
                    console.log('error : ' + e)
                })
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json =>
                    this.setState({ posts: json })
                )
        }
    }


    render() {
        let { title, posts } = this.state;

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
                                <th>DESCRIPTION</th>
                                <th>COMMENTS</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                posts.map((t) =>
                                    <tr>
                                        <td> {t.id}</td>
                                        <td> {t.userId}</td>
                                        <td>{t.title}</td>
                                        <td>{t.body}</td>
                                        <td><Link to={`/comments?postId=${t.id}`}> <input type="button" value="VIEW COMMENTS" class="btn btn-info" />  </Link></td>

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
