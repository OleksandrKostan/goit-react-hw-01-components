import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
 margin: 5vh auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  background-color: azure;`;

export const HeadersRow = styled.thead`font-size: 24px;
  text-align: center;`;

export const Tbody = styled.tbody`
background-color: #fff;`;


export const ColumnHeader = styled.th` 
width: 30%;
  padding: 10px 30px;
  background-color: #02bbd7;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;`;


export const ValuesRow = styled.tr`
width: 33%;
  color: #000000;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize; 
  :nth-child(even) {
  background-color: #d6e6e9;
}`;

