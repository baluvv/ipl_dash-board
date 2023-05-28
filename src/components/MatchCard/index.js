import './index.css'

const MatchCard = props => {
  const {matchDetail} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchDetail

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="remained-match-logo"
      />
      <p className="remained-match-team">{competingTeam}</p>
      <p className="remained-match-result">{result}</p>
      <p className={matchStatus === 'Won' ? 'won' : 'lose'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
