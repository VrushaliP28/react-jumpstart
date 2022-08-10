import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Albums extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Albums',
            albums: []
        }
    }


    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const userId = params.get('userId');

        if (userId) { 
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(response => response.json())
            .then(json =>
                this.setState({ albums: json })
            )
        }
        else {
            fetch('https://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(json =>
                    this.setState({ albums: json })
                )
        }
    }


    render() {
        let { title, albums } = this.state;
        console.log('albums:  ' + JSON.stringify(albums))

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
                                <th>PHOTOS</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                albums.map((t) =>
                                    <tr>
                                        <td> {t.id}</td>
                                        <td>{t.userId}</td>
                                        <td>{t.title}</td>
                                        <td><Link to={`/photos?albumId=${t.id}`}> <input type="button" value="VIEW PHOTOS" class="btn btn-success" /> </Link> </td>
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
