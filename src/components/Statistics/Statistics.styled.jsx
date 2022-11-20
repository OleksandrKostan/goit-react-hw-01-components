import styled from 'styled-components';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
};

export const StatisticCard = styled.section`
max-width: 40%;
  margin: 5vh auto;

  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 15px;
  background-color: ${props => props.theme.colors.white};`

export const StyledTitle = styled.h2`
margin: 25px;
  padding: 10px;
  text-transform: uppercase;
  text-align: center;
  overflow-wrap: break-word;
  color: rgba(99, 98, 98, 0.885);
  font-weight: bold;
  font-size: 2rem;`;


export const StatList = styled.ul`
width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 0.01px;
`;



export const StatListItem = styled.li`
 display: flex;
  flex-direction: column;
  text-align: center;
  text-shadow: ${props => `0 0 3px ${props => props.theme.colors.white}`};
  width: calc((100% - 0.04px) / 5);
  overflow-wrap: break-word;
  border: 1px solid rgba(85, 87, 87, 0.475);
background-color: ${getRandomHexColor};
:first-child {
  border-radius: 0 0 0 3%;
};
:last-child {
  border-radius: 0 0 0 3%;
}
`;

export const Label = styled.span`padding-top: 10px;
  font-size: 1rem;
  color: ${props => props.theme.colors.white};
  overflow-wrap: break-word;`;

export const Percentage = styled.span`padding: 5px;
  font-size: 1rem;
  font-weight: bold;
  color: ${props => props.theme.colors.white}`;