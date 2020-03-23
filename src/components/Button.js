import React from 'react'
import styled from 'styled-components'
import NavigateNext from '@material-ui/icons/NavigateNext'

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.defaultGreen};
  color: white;
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  text-decoration: none;
  border-radius: 4px;

  svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  ${props =>
    props.arrowLeft
      ? 'padding: 0.8rem 1.8rem 0.8rem 0.9rem;'
      : 'padding: 0.8rem 1.8rem;'}

  &:focus {
    outline: none;
  }
`

const StyledNavigateNext = styled(NavigateNext)`
  margin-right: 5px;
`

const Button = ({ children, arrowLeft, disabled, href, ...rest }) => (
  <StyledButton arrowLeft={arrowLeft} disabled={disabled} {...rest}>
    {arrowLeft && <StyledNavigateNext />}
    {children}
  </StyledButton>
)

export default Button
