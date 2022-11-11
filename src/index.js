import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { Profile } from 'components/Profile/Profile.jsx';
import user from 'components/Profile/user.json';

import { Statistics } from 'components/Statistics/Statistics.jsx';
import data from 'components/Statistics/data.json';

import { FriendList } from 'components/Friend-list/FriendList.jsx';
import friends from 'components/Friend-list/friends.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </App>
  </React.StrictMode>
);
