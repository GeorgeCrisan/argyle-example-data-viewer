import React from 'react'
import styled from 'styled-components'

const StyledIncome = styled.div``

const IncomeItem = styled.div`
  margin-bottom: 2rem;
`

const Amount = styled.div`
  font-size: 2rem;
  font-weight: 500;
`

const TotalAmount = styled.div`
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.defaultGreen};
`

const Label = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
`

const Income = ({ income }) => (
  <StyledIncome>
    <IncomeItem>
      <Amount>${income.pay}</Amount>
      <Label>Pay</Label>
    </IncomeItem>

    <IncomeItem>
      <Amount>${income.tips}</Amount>
      <Label>Tips</Label>
    </IncomeItem>

    <IncomeItem>
      <Amount>${income.bonus}</Amount>
      <Label>Bonus</Label>
    </IncomeItem>

    <IncomeItem>
      <Amount>${income.fees}</Amount>
      <Label>Fees</Label>
    </IncomeItem>

    <IncomeItem>
      <TotalAmount>${`${income.total} ${income.currency}`}</TotalAmount>
      <Label>Total</Label>
    </IncomeItem>
  </StyledIncome>
)

export default Income
