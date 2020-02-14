import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
  margin-bottom: 1.5rem;
`

const HeaderItem = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
`

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
`

const ItemValue = styled.div`
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 1.5rem;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  ${({ header }) => header && 'height: 2px;'}
`

const Table = ({ items, headerItems }) => (
  <StyledTable>
    <Header columns={headerItems.length}>
      {headerItems.map((item, i) => (
        <HeaderItem key={`${item}${i}`}>{item}</HeaderItem>
      ))}
    </Header>
    <Divider header />
    {items.map(item => (
      <div key={item.id}>
        <Item columns={headerItems.length}>
          {Object.keys(item).map(key => {
            if (key === 'id') return null
            return <ItemValue key={key}>{item[key]}</ItemValue>
          })}
        </Item>
        <Divider />
      </div>
    ))}
  </StyledTable>
)

export default Table
