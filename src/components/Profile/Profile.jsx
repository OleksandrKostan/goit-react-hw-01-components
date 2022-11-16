import PropTypes from 'prop-types';

import {ProfileCart, ProfileImg, AvatarImg, ProfileName, TagLocation, Stats, FollowersLikes,ViewsList, Label, Quantity} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }  }) => {
    return <ProfileCart>
        <ProfileImg>
            <AvatarImg
                src={avatar}
                alt="User avatar"
            />
            <ProfileName>{username}</ProfileName>
            <TagLocation>{tag}</TagLocation>
            <TagLocation>{location}</TagLocation>
        </ProfileImg>

        <Stats>
            <FollowersLikes>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </FollowersLikes>
            <ViewsList>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </ViewsList>
            <FollowersLikes>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </FollowersLikes>
        </Stats>
    </ProfileCart>
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
