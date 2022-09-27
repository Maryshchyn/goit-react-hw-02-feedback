import React from "react";
// import FeedbackOptions from './feedback'

class Statistics extends React.Component{

state = {
  good: 0,
  neutral: 0,
  bad: 0
}

    buttonIncrementGood = () =>{
        this.setState({
            good: this.state.good + 1,
        })
    }
     buttonIncrementNeutral = () =>{
        this.setState({
            neutral: this.state.neutral + 1,
        })
    }
     buttonIncrementBad = () =>{
        this.setState({
            bad: this.state.bad + 1,
        })
    }

    keysOfState = Object.keys(this.state);

    countTotalFeedback = () => {
        const count = this.keysOfState.reduce((total, key) => {
            return total + this.state[key];
        }, 0);
        return count;
    }

    countPositiveFeedbackPercentage = () => {
    const percentageOfPositiveFeedback = Math.round(
      (this.state['good'] * 100) / this.countTotalFeedback()
    );
    return percentageOfPositiveFeedback || 0;
  };
     
    
    render() {
         return (
            <div>
                <h1>Please leave feedback</h1>
                <ul>
                    <li>
                        <button type="button" onClick={this.buttonIncrementGood}>Good</button>
                    </li>
                    <li>
                        <button type="button" onClick={this.buttonIncrementNeutral}>Neutral</button>
                    </li>
                    <li>
                        <button type="button" onClick={this.buttonIncrementBad}>Bad</button>
                    </li>
                </ul>
                <p>Statistics</p>
                <ul>
                    <li>
                        <span>Good: {this.state.good}</span>
                    </li>
                    <li>
                        <span>Neutral: {this.state.neutral}</span>
                    </li>
                    <li>
                        <span>Bad: {this.state.bad}</span>
                     </li>
                     <li>
                        <span>Total: {this.countTotalFeedback()}</span>
                     </li>
                     <li>
                        <span>Positive feedback: {this.countPositiveFeedbackPercentage()}%</span>
                    </li>
                </ul>
                
                
            </div>
        )
    }
}

export default Statistics;