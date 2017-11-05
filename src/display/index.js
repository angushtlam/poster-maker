import React from 'react'

export default class Display extends React.Component {
  render () {
    return (
      <div className="display">
        <div className="poster-wrapper">
          <div className="poster">
            <div className="organization">
              <strong>{ this.props.organization }</strong><br /><br />
            </div>
            <div className="hero" style={{ background: 'url(\'' + this.props.backgroundImage + '\') repeat' }}>
              <div className="hero-content">
                <h5>{ this.props.title }</h5><br />
                <em>{ this.props.subtitle }</em>
              </div>
            </div>
            <br />
            <p>{ this.props.copy }</p>
            <br />
            <div className="event-details">
              <h6>{ this.props.date }</h6>
              <p>{ this.props.location }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}