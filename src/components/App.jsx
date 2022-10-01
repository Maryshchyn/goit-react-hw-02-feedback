
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

     onLeaveFeedback = feedbackType =>
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));

    keysOfState = Object.keys(this.state);

    countTotalFeedback = () => {
        const count = this.keysOfState.reduce((total, key) => {
            return total + this.state[key];
        }, 0);
        return count;
    }
    
    positivePercentage = () => {
    const positivePercentage = Math.round(
      (this.state['good'] * 100) / this.countTotalFeedback()
    );
    return positivePercentage || 0;
  };
  
    
    render() {
         return (
            <div>
                 <h1>Please leave feedback</h1>

                 <FeedbackOptions options={['Good', 'Neutral', 'Bad']}
                      onLeaveFeedback={this.onLeaveFeedback} />
             
                 <p>Statistics</p>
                 {this.countTotalFeedback() ? (
            <Statistics
              good={this.good}
              neutral={this.neutral}
              bad={this.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
                 
                 
             </div>
        )
    }


}

