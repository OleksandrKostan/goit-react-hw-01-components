import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { Box } from './Box';

 

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


export const App = () => {
  return <>
    <ThemeProvider theme={theme}> 
      <Box bg="primary" as="main">
    <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    <TransactionHistory items={transactions} /></Box>
    </ThemeProvider> 
    </>

};