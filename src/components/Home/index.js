import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardsList()
  }

  getTeamCardsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamCardsList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader" className="spinner-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <Link to="/" className="home-page-link">
              <div className="title-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="ipl-logo"
                />
                <h1 className="heading">IPL Dashboard</h1>
              </div>
              <ul className="list-container">
                {teamCardsList.map(eachCard => (
                  <TeamCard teamDetails={eachCard} key={eachCard.id} />
                ))}
              </ul>
            </Link>
          </>
        )}
      </div>
    )
  }
}

export default Home
