import {StatisticUl, StatisticLi, StatisticSpan} from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
         <StatisticUl>
                    <StatisticLi>
                        <StatisticSpan>Good: {good}</StatisticSpan>
                    </StatisticLi>
                    <StatisticLi>
                        <StatisticSpan>Neutral: {neutral}</StatisticSpan>
                    </StatisticLi>
                    <StatisticLi>
                        <StatisticSpan>Bad: {bad}</StatisticSpan>
                     </StatisticLi>
                     <StatisticLi>
                        <StatisticSpan>Total: {total}</StatisticSpan>
                     </StatisticLi>
                     <StatisticLi>
                        <StatisticSpan>Positive feedback: {positivePercentage}%</StatisticSpan>
                    </StatisticLi>
                </StatisticUl>
    )
}

export default Statistics;