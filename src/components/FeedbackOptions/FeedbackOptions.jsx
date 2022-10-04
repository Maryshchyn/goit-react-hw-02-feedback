import {FeedbackOptionsUl, FeedbackOptionsLi, FeedbackOptionsButton} from './FeedbackOptions.styled'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <FeedbackOptionsUl>
            {options.map((option, idx) => {
                return <FeedbackOptionsLi key={idx}>
                <FeedbackOptionsButton 
              type="button"
              onClick={() => onLeaveFeedback(option.toLowerCase())}
            >
              {option}
            </FeedbackOptionsButton>
                
                </FeedbackOptionsLi>
                
            })}
        </FeedbackOptionsUl>
    )
    
}

export default FeedbackOptions;