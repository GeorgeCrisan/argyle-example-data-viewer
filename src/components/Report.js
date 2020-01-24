import React, { useState, useEffect } from 'react'
import api from '../api/api'

import styled from 'styled-components/macro'

const CenteredContainer = styled.div`
  margin: 10rem auto;
  max-width: 60rem;
  font-family: 'Roboto Condensed', sans-serif;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const DataPartnerLogo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`

const PartnerName = styled.span`
  font-size: 32px;
  font-weight: bold;
`

const Report = props => {
  const userId = props.match.params.userId
  const [accounts, setAccounts] = useState([])
  useEffect(() => {
    const fetchAccounts = async () => {
      const results = await api.getAccounts(userId)
      setAccounts(results)
    }
    fetchAccounts()
  }, [userId])
  return (
    <CenteredContainer>
      {accounts.map(account => (
        <div>
          <Row>
            <DataPartnerLogo
              alt={account.data_partner}
              src={`https://storage.googleapis.com/argyle-api-media/images/${account.data_partner}.png`}
            />
            <PartnerName>{account.data_partner}</PartnerName>
          </Row>
        </div>
      ))}
    </CenteredContainer>
  )
}

export default Report
