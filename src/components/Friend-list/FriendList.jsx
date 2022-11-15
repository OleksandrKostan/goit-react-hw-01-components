import PropTypes from 'prop-types';
import css from './Friend.module.css';
import {FriendListItem} from './FriendListItem';

export const FriendList = ({ friends }) => {
    return <ul className={css.friend_list}>
        {friends.map(({id, avatar,isOnline, name}) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        isOnline={isOnline}
        name={name}
      />
    ))}
</ul>
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