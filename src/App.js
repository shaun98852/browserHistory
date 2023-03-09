import './App.css'

import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
//

class App extends Component {
  state = {inputValue: '', requiredList: initialHistoryList}

  getInput = event => {
    this.setState({inputValue: event.target.value})
  }

  deleteFunction = id => {
    const {requiredList} = this.state
    const finalList = requiredList.filter(eachObject => eachObject.id !== id)
    this.setState({requiredList: finalList})
  }

  render() {
    const {requiredList, inputValue} = this.state

    const updatedList = requiredList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(inputValue.toLowerCase()),
    )

    return (
      <div className="bgContainer">
        <div className="upperSection">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="historyImage"
          />

          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="searchImage"
              alt="search"
            />
            <input
              type="search"
              placeholder="Search history"
              className="inputBox"
              onChange={this.getInput}
            />
          </div>
        </div>

        {updatedList.length === 0 ? (
          <div className="emptyHistoryContainer">
            <p className="emptyHistory">There is no history to show</p>
          </div>
        ) : (
          <div className="secondContainer">
            <div className="historyList">
              <ul className="ulList">
                {updatedList.map(eachItem => {
                  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem

                  return (
                    <li className="listItem" key={id}>
                      <div className="firstBox">
                        <p className="time">{timeAccessed}</p>
                        <div className="logoContents">
                          <div className="imageAndTextContainer">
                            <img
                              src={logoUrl}
                              alt="domain logo"
                              className="imageSize"
                            />
                            <div className="websiteTexts">
                              <p className="website">{title}</p>
                              <p className="websiteUrl">{domainUrl}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="deleteButton"
                        type="button"
                        data-testid="delete"
                        //   id="data-testid"
                        //   testid="delete"
                        onClick={() => {
                          this.deleteFunction(id)
                        }}
                      >
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                          className="deleteImage"
                          alt="delete"
                        />
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default App
