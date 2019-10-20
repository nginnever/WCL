import React, { useState } from 'react'

class OpenFormat extends React.Component {
  render() {
    return <div>
      <h4>League Format</h4>
      <div style={{display: 'flex', justifyContent: 'center', textAlign:'left'}}>
      <p style={{width:'800px'}}>
        &nbsp;&nbsp;&nbsp;&nbsp; The WCL operates similar to Counter Strike leagues where players schedule duels and report the results here to our web application during regular season.
      </p>
      </div>
      <h5> Scheduling </h5>
      <div style={{display: 'flex', justifyContent: 'center', textAlign:'left'}}>
      <p style={{width:'800px'}}>
        Regular season length and frequency of matches per week are TBD (suggestions from community please report to discord). For example, the 
        regular season could last two months with two match days per week. The match draws are fairly and randomly selected by our open code base, matching evenly against other classes and previous weeks scores. The schedules 
        will be provided a week in advance to allow time for each participant to message and decide where the duel is to take place and at what time with the "home" player proposing location. 
      </p>
      </div>
      <h5> Match Reporting </h5>
      <div style={{display: 'flex', justifyContent: 'center', textAlign:'left'}}>
      <p style={{width:'800px'}}>
        At the end of a duel the winner will report the results. Callenges to this reporting must provide a screenshot of the infraction. These screenshots must include... See rules for further details
      </p>
      </div>
      <h5> Locations and Servers </h5>
      <div style={{display: 'flex', justifyContent: 'center', textAlign:'left'}}>
      <p style={{width:'800px'}}>
        We will have a list of acceptable dueling locations to prevent unfair terrain advantages.
      </p>
      </div>
      <h5> Playoffs and advancing </h5>
      <div style={{display: 'flex', justifyContent: 'center', textAlign:'left'}}>
      <p style={{width:'800px'}}>
        At the end of regular season, those that have scored enough wins will be able to advance
        to a playoff tournement. Depending on the competition of each server, the participants of the playoffs will advance to the higher leagues for the next season.
        The WCL-Invite league provides cash prize winnings TBD starting Season 1. 
      </p>
      </div>
    <br/>
    <br/>
    <br/>
    </div>
  }
}
export default OpenFormat