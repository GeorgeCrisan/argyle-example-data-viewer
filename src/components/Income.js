import React from 'react'
import styled from 'styled-components'
import { firstWordToUpperCase } from '../helpers'

const StyledIncomes = styled.div`
  max-width: 90rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const StyledIncome = styled.div`
  border-radius: 5px;
  margin-right: 4rem;
  margin-bottom: 4rem;
  min-width: 23rem;
  ${({ greyBackground }) =>
    greyBackground &&
    `
  background-color: rgba(249, 249, 249, 0.9);
  padding: 1.6rem 2rem;
  `}
`

const Title = styled.div`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
`

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

const Income = ({ incomes }) => (
  <StyledIncomes>
    {incomes.map((income, i) => (
      <StyledIncome greyBackground={incomes.length > 1} key={income.id + i}>
        {!!incomes.length > 1 && (
          <Title>
            {income.type === 'combined'
              ? 'Combined'
              : firstWordToUpperCase(income.account)}
          </Title>
        )}
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
    ))}
  </StyledIncomes>
)

export default Income
