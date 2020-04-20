import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { firstWordToUpperCase } from '../helpers'

const StyledDocuments = styled.div`
  max-width: 70rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`

const Document = styled.div`
  border-radius: 5px;
  background-color: rgba(249, 249, 249, 0.9);
  padding: 1.6rem 2rem;
  width: 24rem;
  height: 21.8rem;
  margin-right: 4rem;
`

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1.3rem;
`

const Item = styled.div`
  margin-bottom: 1rem;
`

const Label = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.4);
`

const Text = styled.div`
  font-size: 1.2rem;
  color: black;
`

const Documents = ({ documents }) => (
  <StyledDocuments>
    {documents.map(
      ({
        id,
        document_number,
        document_type,
        expiration_date,
        created_at,
        data_partner,
        empty,
      }) => (
        <Document key={id}>
          <Title>
            {empty
              ? `No Data (${firstWordToUpperCase(data_partner)})`
              : firstWordToUpperCase(document_type)}
          </Title>
          {document_number && (
            <Item>
              <Label>Document number</Label>
              <Text>{document_number}</Text>
            </Item>
          )}
          {expiration_date && (
            <Item>
              <Label>Expiration date</Label>
              <Text>{moment(expiration_date).format('YYYY-MM-DD')}</Text>
            </Item>
          )}
          {created_at && (
            <Item>
              <Label>Created at</Label>
              <Text>{moment(created_at).format('YYYY-MM-DD')}</Text>
            </Item>
          )}
        </Document>
      )
    )}
  </StyledDocuments>
)

export default Documents
