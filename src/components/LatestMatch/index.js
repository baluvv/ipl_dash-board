import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = matchDetails

  return (
    <>
      <div className="latest-match-container">
        <div className="latest-match-result-container">
          <div className="result-container">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue-status">{venue}</p>
            <p className="venue-status">{result}</p>
            <div className="result-container2">
              <hr className="line" />
              <p className="headings">First Innings</p>
              <p className="paragraphs">{firstInnings}</p>
              <p className="headings">Second Innings</p>
              <p className="paragraphs">{secondInnings}</p>
              <p className="headings">Man Of The Match</p>
              <p className="paragraphs">{manOfTheMatch}</p>
              <p className="headings">Umpires</p>
              <p className="paragraphs">{umpires}</p>
            </div>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-competing-team-logo"
          />
          <div className="result-container3">
            <p className="headings">First Innings</p>
            <p className="paragraphs">{firstInnings}</p>
            <p className="headings">Second Innings</p>
            <p className="paragraphs">{secondInnings}</p>
            <p className="headings">Man Of The Match</p>
            <p className="paragraphs">{manOfTheMatch}</p>
            <p className="headings">Umpires</p>
            <p className="paragraphs">{umpires}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
