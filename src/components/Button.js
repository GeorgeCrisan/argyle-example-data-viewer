import React from 'react'
import styled from 'styled-components'
import NavigateNext from '@material-ui/icons/NavigateNext'

const StyledButton = styled.button`
  border: none;
  outline: none;
  background-color: #40ac74;
  color: white;
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  font-family: 'Roboto';
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
    props.arrowRight
      ? 'padding: 0.8rem 1.8rem 0.8rem 0.9rem;'
      : 'padding: 0.8rem 1.8rem;'}
`

const StyledNavigateNext = styled(NavigateNext)`
  margin-right: 5px;
`

const Button = ({ children, arrowLeft = true, disabled, href, ...rest }) => (
  <StyledButton arrowRight={arrowLeft} disabled={disabled} {...rest}>
    {arrowLeft && <StyledNavigateNext />}
    {children}
  </StyledButton>
)

export default Button
