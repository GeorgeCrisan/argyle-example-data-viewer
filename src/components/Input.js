import React from 'react'
import styled from 'styled-components'
import MaterialInput from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

const StyledFormControl = styled(FormControl)`
  position: relative;

  && {
    &.MuiFormControl-root {
      width: 100%;
    }
  }
`

const StyledInputLabel = styled(InputLabel)`
  && {
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.6rem;
    top: -1rem;

    &.MuiInputLabel-shrink {
      font-size: 1.2rem;
      top: 0;
    }

    &.Mui-focused {
      color: #40ac74;
    }
  }
`

const StyledInput = styled(MaterialInput)`
  && {
    margin-top: 0.8rem;
    margin-bottom: 0.2rem;
    font-size: 1.6rem;
    width: 100%;

    &.Mui-disabled {
      color: ${props => props.readOnly && props.theme.colors.black};
    }

    &.MuiInput-underline:before {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    &.MuiInput-underline:after {
      border-bottom: 1px solid #40ac74;
    }
    &.MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid #40ac74;
    }
  }
`

const Input = ({ value, name, inputId, onChange, label, type, ...props }) => (
  <StyledFormControl>
    <StyledInputLabel htmlFor={inputId}>{label}</StyledInputLabel>
    <StyledInput
      {...props}
      name={name}
      value={value}
      onChange={onChange}
      id={inputId}
      type={type}
    />
  </StyledFormControl>
)

export default Input
