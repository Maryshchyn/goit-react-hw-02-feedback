
import { Component } from 'react';
import Notification from './Notificasion/Notificasion';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

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
  render() {
    const { good, neutral, bad } = this.state;
         return (
            <div>
                <h1>Please leave feedback</h1>
             <FeedbackOptions
               onGood={this.buttonIncrementGood}
               onNeutral={this.buttonIncrementNeutral}
               onBad={this.buttonIncrementBad}
             />
                 <p>Statistics</p>
             {this.countTotalFeedback() ? 
               <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback()}
                  positivePercentage={this.countPositiveFeedbackPercentage()} />
               : (
                  
                 <Notification message="There is no feedback" />
          )}
              </div>
        )
    }


}

