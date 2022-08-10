import React, { Component } from 'react'

export default class Photos extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Photos',
            photos: []
        }
    }


    componentDidMount() {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        const albumId = params.get('albumId');

        if (albumId) {
            fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
                .then(response => response.json())
                .then(json =>
                    this.setState({ photos: json })
                )
        } else {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json =>
                    this.setState({ photos: json })
                )
        }
    }


    render() {
        let { title, photos } = this.state;
        console.log('photos:  ' + JSON.stringify(photos))

        return (
            <div>
                <div>
                    <h2>{title}</h2>
                    <table className='table table-hover table-striped'>

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>ALBUM ID</th>
                                <th>TITLE</th>
                                <th>URL</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                photos.map((t) =>
                                    <tr>
                                        <td> {t.id}</td>
                                        <td>{t.albumId}</td>
                                        <td>{t.title}</td>
                                        <td> <img src={t.thumbnailUrl} width={50} height={50} alt=""></img></td>

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
