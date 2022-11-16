import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import {FriendStyled} from './Friend.styled'

export const FriendList = ({ friends }) => {
    return <FriendStyled>
        {friends.map(({id, avatar,isOnline, name}) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        isOnline={isOnline}
        name={name}
      />
    ))}
</FriendStyled>
};



FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};