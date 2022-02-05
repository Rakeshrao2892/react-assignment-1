import {Component} from 'react'

import BrowserItem from '../BrowserItem'

import './index.css'

class BrowserHistory extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {historyList} = this.props
    const searchResult = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="blue-container">
          <div className="blue-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
          </div>
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              className="search-type"
              placeholder="Search history"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
        </div>

        <ul className="white-bg-container">
          {searchResult.map(eachBrowser => (
            <BrowserItem
              key={eachBrowser.id}
              deleteHistory={this.deleteHistory}
              browserDetails={eachBrowser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default BrowserHistory
