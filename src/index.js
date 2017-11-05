import React from 'react'
import ReactDOM from 'react-dom'

import Config from './config'
import Display from './display'

import './styles/style.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      organization: 'UB ACM',
      title: 'Title',
      subtitle: 'Subtitle',
      backgroundImage: 'https://i.imgur.com/Q2KCYC5.jpg',
      copy: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
      date: 'Date',
      location: 'Location',
    }

    this.handleOrgnization = this.handleOrganization.bind(this)
    this.handleTitle = this.handleTitle.bind(this)
    this.handleSubtitle = this.handleSubtitle.bind(this)
    this.handleBackgroundImage = this.handleBackgroundImage.bind(this)
    this.handleCopy = this.handleCopy.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handleLocation = this.handleLocation.bind(this)
  }

  handleOrganization(event) { this.setState({ organization: event.target.value }); }
  handleTitle(event) { this.setState({ title: event.target.value }); }
  handleSubtitle(event) { this.setState({ subtitle: event.target.value }); }
  handleBackgroundImage(event) { this.setState({ backgroundImage: event.target.value }); }
  handleCopy(event) { this.setState({ copy: event.target.value }); }
  handleDate(event) { this.setState({ date: event.target.value }); }
  handleLocation(event) { this.setState({ location: event.target.value }); }

  render() {
    return (
      <div>
        <Display organization={ this.state.organization }
                 title={ this.state.title }
                 subtitle={ this.state.subtitle }
                 backgroundImage={ this.state.backgroundImage }
                 copy={ this.state.copy }
                 date={ this.state.date }
                 location={ this.state.location } />
        <Config  organization={ this.state.organization }
                 handleOrganization={ this.handleOrgnization }

                 title={ this.state.title }
                 handleTitle={ this.handleTitle }

                 subtitle={ this.state.subtitle }
                 handleSubtitle={ this.handleSubtitle }

                 backgroundImage={ this.state.backgroundImage }
                 handleBackgroundImage={ this.handleBackgroundImage }

                 copy={ this.state.copy }
                 handleCopy={ this.handleCopy }

                 date={ this.state.date }
                 handleDate={ this.handleDate }

                 location={ this.state.location }
                 handleLocation={ this.handleLocation } />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
