import React, { Component } from 'react'

export default class Catalog extends Component {


  constructor(props) {
    super(props);
    this.state = {
      title: 'Top 5 technologies',
      technologies: [
        { id: 1, title: 'Angular', likes: 0, dislikes: 0 },
        { id: 2, title: 'React', likes: 0, dislikes: 0 },
        { id: 3, title: 'Cloud Computing', likes: 0, dislikes: 0 },
        { id: 4, title: 'Microservice', likes: 0, dislikes: 0 },
        { id: 5, title: 'AWS', likes: 0, dislikes: 0 },
      ]
    }
  }

  render() {

    let { technologies, title } = this.state;

    return (
      <div>
        <h2>{title}</h2>
        <table className='table table-hover table-striped'>

          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>LIKES</th>
              <th>DISLIKES</th>
              <th>LIKE IT</th>
              <th>DISLIKE IT</th>

            </tr>
          </thead>
          <tbody>

            {
              technologies.map((t) =>
                <tr>
                  <td> {t.id}</td>
                  <td>{t.title}</td>
                  <td>{t.likes}</td>
                  <td>{t.dislikes}</td>
                  <td><button className='btn btn-success' onClick={() => this.incrementLikes(t.id)}>LIKE IT </button></td>
                  <td><button className='btn btn-danger' onClick={() => this.incrementDislikes(t.id)}>DISLIKE IT </button></td>
                </tr>
              )
            }

          </tbody>

        </table>

      </div>
    )
  }


  incrementLikes = (id) => {

    this.setState((prevState) => {

      prevState.technologies.forEach((t, i) => {
        if (t.id === id)
          t.likes++;
      });

      return { technologies: prevState.technologies }

    });
  }


  incrementDislikes = (id) => {

    this.setState((prevState) => {
      prevState.technologies.forEach((t, i) => {
        if (t.id === id)
          t.dislikes++;
      })
      return { technologies: prevState.technologies }
    });

  }





}
