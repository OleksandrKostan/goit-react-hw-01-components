import PropTypes from 'prop-types';
import {TransactionHistoryTable, HeadersRow, Tbody, ColumnHeader, ValuesRow} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <TransactionHistoryTable>
  <HeadersRow>
    <ValuesRow>
      <ColumnHeader>Type</ColumnHeader >
      <ColumnHeader>Amount</ColumnHeader>
      <ColumnHeader>Currency</ColumnHeader>
    </ValuesRow>
  </HeadersRow>
 <Tbody>
            {items.map(({id, type, amount, currency}) => (
                <ValuesRow key={id} >
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </ValuesRow>))}
</Tbody>
</TransactionHistoryTable>
};

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};

