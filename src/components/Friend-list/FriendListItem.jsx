import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name} from './Friend.styled'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return <Item>
      <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar"/>
    <Name>{name}</Name>
</Item>
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};