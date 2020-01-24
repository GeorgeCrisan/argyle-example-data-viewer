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
const SanitizedInputLabel = ({ purple, ...rest }) => <InputLabel {...rest} />
const SanitizedInput = ({ purple, ...rest }) => <MaterialInput {...rest} />

const StyledInputLabel = styled(SanitizedInputLabel)`
  && {
    color: rgba(0, 0, 0, 0.4);
    font-size: 1.6rem;
    top: -1rem;

    &.MuiInputLabel-shrink {
      font-size: 1.2rem;
      top: 0;
    }

    &.Mui-focused {
      color: ${({ theme, purple }) =>
        purple ? theme.colors.purple : theme.colors.defaultGreen};
    }
  }
`

const StyledInput = styled(SanitizedInput)`
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
      border-bottom: 1px solid
        ${({ theme, purple }) =>
          purple ? theme.colors.purple : theme.colors.defaultGreen};
    }

    &.MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid
        ${({ theme, purple }) =>
          purple ? theme.colors.purple : theme.colors.defaultGreen};
    }
  }
`

const Input = ({
  value,
  name,
  inputId,
  onChange,
  label,
  type,
  purple = false,
  ...props
}) => (
  <StyledFormControl>
    <StyledInputLabel purple={purple} htmlFor={inputId}>
      {label}
    </StyledInputLabel>
    <StyledInput
      {...props}
      name={name}
      value={value}
      onChange={onChange}
      id={inputId}
      type={type}
      purple={purple}
    />
  </StyledFormControl>
)

export default Input
