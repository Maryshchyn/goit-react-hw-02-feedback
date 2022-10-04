
import { Component } from 'react';
import Notification from './Notificasion/Notificasion';
import Statistics from './Statistics/Statistics'
import FeedbackOptions from '../components/FeedbackOptions/FeedbackOptions'
import { Title } from './Title/Title';
import {StatTitle} from './StatisticsTitle/StatisticsTitle'



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

    countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);
    
    positivePercentage = () => {
    const positivePercentage = Math.round(
      (this.state['good'] * 100) / this.countTotalFeedback()
    );
    return positivePercentage || 0;
  };
  
    
  render() {
      
         return (
            <div>
                 <Title title='Please leave feedback' />

                 <FeedbackOptions options={['Good', 'Neutral', 'Bad']}
                      onLeaveFeedback={this.onLeaveFeedback} />
                <StatTitle title='Statistics' />
                
                 {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
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

