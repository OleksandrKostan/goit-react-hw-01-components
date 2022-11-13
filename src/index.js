import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// завдання 1
import { Profile } from 'components/Profile/Profile.jsx';
import user from 'components/Profile/user.json';

// завдання 2
import { Statistics } from 'components/Statistics/Statistics.jsx';
import data from 'components/Statistics/data.json';

// завдання 3
import { FriendList } from 'components/Friend-list/FriendList.jsx';
import friends from 'components/Friend-list/friends.json';

// завдання 4
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx';
import transactions from 'components/TransactionHistory/transactions.json';

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
      <TransactionHistory items={transactions} />
    </App>
  </React.StrictMode>
);
