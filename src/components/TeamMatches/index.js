import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamMatches: {}, isLoading: true}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: data.recent_matches.map(item => ({
        umpires: item.umpires,
        result: item.result,
        manOfTheMatch: item.man_of_the_match,
        id: item.id,
        date: item.date,
        venue: item.venue,
        competingTeam: item.competing_team,
        competingTeamLogo: item.competing_team_logo,
        firstInnings: item.first_innings,
        secondInnings: item.second_innings,
        matchStatus: item.match_status,
      })),
    }

    this.setState({teamMatches: updatedData, isLoading: false})
  }

  render() {
    const {teamMatches, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatches
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <h1 className="latest-match-heading">Latest Matches</h1>
            <LatestMatch matchDetails={latestMatchDetails} />
            <ul className="remained-matches-container">
              {recentMatches.map(eachMatch => (
                <MatchCard matchDetail={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
