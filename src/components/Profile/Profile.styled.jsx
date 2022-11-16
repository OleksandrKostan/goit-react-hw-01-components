import styled from 'styled-components';

export const ProfileCart = styled.div`
     min-width: 280px;
  max-width: 50%;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(105, 170, 183, 0.475) 5px 15px 25px;
  border-radius: 2%;
  background-color: #fff;
`;

export const ProfileImg = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

export const AvatarImg = styled.img`
display: flex;
  max-width: 40%;
  border-radius: 50%;
  border: 2px groove rgba(105, 170, 183, 0.475);
`;
export const ProfileName = styled.p`
 margin-bottom: 30px;
  font-weight: 700;
  font-size: 2.5rem;
`;
export const TagLocation = styled.p`
margin: 0.5rem;
  font-size: 2rem;
  color: #8a8b8e;
`;
export const Stats = styled.ul` width: 100%;
  display: flex;
  gap: 0.01px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ViewsList = styled.li`
border-left: 1px solid #d3d5e3;
  border-right: 1px solid #d3d5e3;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  overflow-wrap: break-word;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  width: calc((100% - 0.02px) / 3);
`;
export const FollowersLikes = styled.li`
border-radius: 0 0 0 0.5rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  font-size: 1.5rem;
  text-align: center;
  overflow-wrap: break-word;
  border-top: 1px solid #d3d5e3;
  background-color: rgba(241, 241, 241, 0.833);
  width: calc((100% - 0.02px) / 3);
`;

export const Label = styled.span`
 padding-bottom: 0.5rem;
  color: #8a8b8e;`;

export const Quantity = styled.span`font-weight: bold;
  border-radius: 0.5rem;`;
