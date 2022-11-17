import PropTypes from 'prop-types';
import { StyledTitle } from './Statistics.styled'
 
export const Title = ({ title }) => {
  return title && <StyledTitle>{title.toUpperCase()}</StyledTitle>;
};

Title.porpTypes = {
  title: PropTypes.string,
};