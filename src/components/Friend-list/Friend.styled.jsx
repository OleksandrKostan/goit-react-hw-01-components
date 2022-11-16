import styled from 'styled-components';

export const FriendStyled = styled.ul`list-style: none;
  margin: 0;
  padding: 0;`;

export const Item = styled.li`
    display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin: 5vh auto;
  max-width: 60%;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  background-color: rgb(40, 222, 37);
`;


export const Name = styled.p`
    display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`;

export const Avatar = styled.img`
margin: 0 auto;
 width: 48px;
`;

export const Status = styled.span`
    border-radius: 50%;
  margin: auto 1.7rem;
  height: 30px;
  width: 30px;
  background-color: ${props => {
        switch (props.isOnline) {
            case props.isOnline = true:
                return 'green';
            default:
                return 'red'
        }
    }}`;




