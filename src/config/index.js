import React from 'react'

export default class Config extends React.Component {
  render() {
    return (
      <div className="config">
        <h5>Customize Poster</h5>
        <em>Organization</em>
        <input type="text" value={ this.props.organization } onChange={ this.props.handleOrganization } />

        <em>Title</em>
        <input type="text" value={ this.props.title } onChange={ this.props.handleTitle } />

        <em>Subtitle</em>
        <input type="text" value={ this.props.subtitle } onChange={ this.props.handleSubtitle } />

        <em>Copy</em>
        <input type="text" value={ this.props.copy } onChange={ this.props.handleCopy } />

        <em>Date</em>
        <input type="text" value={ this.props.date } onChange={ this.props.handleDate } />

        <em>Location</em>
        <input type="text" value={ this.props.location } onChange={ this.props.handleLocation } />

        <em>Background Image</em>
        <input type="text" value={ this.props.backgroundImage } onChange={ this.props.handleBackgroundImage } />

        <br />
        <br />
        <button>Save</button>
      </div>
    )
  }
}