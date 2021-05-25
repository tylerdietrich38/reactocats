import React, { Component } from 'react';

class OctoCat extends Component {
  render() {
    return (
      <article>
          <ul>
            #13:
            <a href={this.props.imgLink}
              <img
              src={this.props.img}
              width="300"
              height="300"
              alt={this.props.name}
            />
              <strong>{this.props.name}</strong>
              </a>
            <a href={this.props.artLink}
              ><img
                src={this.props.artImage}
                width="24px"
                height="24px"
                alt={this.props.artname}
              />
            </a>
          </ul>
        </article>
    );
  }
}

export default OctoCat;