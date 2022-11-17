import PropTypes from 'prop-types';

import { StatisticCard, StatList, StatListItem, Label,Percentage} from './Statistics.styled'
import {Title} from './StatisticsTitle'



export const Statistics = ({ title, stats }) => {
    return <StatisticCard>
       <Title title={title}></Title>
  <StatList>
            {stats.map(({ id, label, percentage }) => (
          <StatListItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatListItem>
        ))}
  </StatList>
</StatisticCard>
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
  