import React from 'react'
import styled from 'styled-components'
import CallMerge from '@material-ui/icons/CallMerge'
import Loop from '@material-ui/icons/Loop'
import { NavLink } from 'react-router-dom'
import { firstWordToUpperCase } from '../helpers'

const StyledPageContent = styled.div`
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  margin: 0 30px;
  position: relative;

  &:before {
    content: '';
    height: 20px;
    width: 20px;
    display: block;
    position: absolute;
    top: -0.8rem;
    left: 12rem;
    transform: rotate(45deg);
    background-color: #ffffff;
  }
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem 3rem;
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 3rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);

  ${({ active }) =>
    active &&
    `
      background-color: #f4f4f4;
      border-radius: 19px;
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      color: black;
  `}
`

const DataPartnerLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 1rem;
  border-radius: 50%;
`

const PartnerName = styled.span`
  font-size: 1.6rem;
`

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.defaultGreen : '#d9d9d9'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`

const StyledCallMerge = styled(CallMerge)`
  && {
    color: white;
    width: 18px;
    height: 18px;
    transform: rotate(90deg);
  }
`

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.05);
`

const Content = styled.div`
  display: flex;
`

const LeftNavigation = styled.div`
  background-color: rgba(244, 244, 244, 0.5);
  padding-top: 2rem;
  min-height: 50rem;
`

const StyledNavLink = styled(NavLink)`
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.6rem;
  cursor: pointer;
  padding: 0.7rem 2rem 0.7rem 3rem;
  min-width: 16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.selected {
    font-weight: 500;
    color: black;
    background-color: rgba(217, 217, 217, 0.5);
  }

  &:hover {
    text-decoration: none;
    color: black;
  }
`

const SpinningIcon = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #bae6f0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: rotate 3s infinite linear;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  svg {
    width: 14px;
    height: 14px;
    color: white;
  }
`

const RoutesWrapper = styled.div`
  padding: 4rem;
`

const PageContent = ({
  routes,
  renderRoutes,
  combinedAccountsData,
  userId,
  accounts,
  selectAccount,
  selectedAccount,
  fullName,
}) => {
  const combinedId = 'combined'

  return (
    <StyledPageContent>
      <NavItems>
        <NavItem
          active={selectedAccount.id === combinedId}
          onClick={() => selectAccount({ id: combinedId, userId })}
        >
          <IconWrapper active={selectedAccount.id === combinedId}>
            <StyledCallMerge />
          </IconWrapper>
          <PartnerName>Combined</PartnerName>
        </NavItem>
        {accounts.length &&
          accounts.map((account) => (
            <NavItem
              active={selectedAccount.id === account.id}
              onClick={() => selectAccount(account)}
              key={account.id}
            >
              <DataPartnerLogo
                alt={account.data_partner}
                src={`https://res.cloudinary.com/argyle-media/image/upload/c_lfill,w_auto,g_auto,q_auto,dpr_auto,f_auto/v1566809938/partner-logos/${account.data_partner}.png`}
              />
              <PartnerName>
                {firstWordToUpperCase(account.data_partner)}
              </PartnerName>
            </NavItem>
          ))}
      </NavItems>
      <Divider />
      <Content>
        <LeftNavigation>
          {renderRoutes(userId).map(
            ({ path, navLinkName, id }) =>
              navLinkName && (
                <StyledNavLink
                  key={path}
                  to={{
                    pathname: path,
                    state: { fullName },
                  }}
                  activeClassName="selected"
                >
                  {navLinkName}
                  {combinedAccountsData[id] &&
                    combinedAccountsData[id].status === 'in_progress' && (
                      <SpinningIcon>
                        <Loop />
                      </SpinningIcon>
                    )}
                </StyledNavLink>
              )
          )}
        </LeftNavigation>
        <RoutesWrapper>{routes}</RoutesWrapper>
      </Content>
    </StyledPageContent>
  )
}
export default PageContent
