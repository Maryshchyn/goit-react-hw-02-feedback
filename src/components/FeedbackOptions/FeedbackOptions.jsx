

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul>
            {options.map((option, idx) => {
                return <li key={idx}>
                
            
                    <button 
              type="button"
              onClick={() => onLeaveFeedback(option.toLowerCase())}
            >
              {option}
            </button>
                
                </li>
                
            })}
        </ul>
    )
    
}

export default FeedbackOptions;