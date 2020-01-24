import React from 'react'
import styled from 'styled-components'
import Tooltip from '@material-ui/core/Tooltip'
import Fade from '@material-ui/core/Fade'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core/styles'
import { copyStringToClipboard } from '../helpers'

const useStyles = makeStyles(() => ({
  arrow: {
    color: 'rgba(75, 75, 75, 0.95)',
  },
  tooltip: {
    backgroundColor: 'rgba(75, 75, 75, 0.95)',
    padding: '19px 42px 22px 19px',
    width: 450,
    maxWidth: '100%',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
  },
}))

const StyledContent = styled.div``

const Label = styled.div`
  opacity: 0.4;
  font-size: 1rem;
  color: #ffffff;
`

const StyledInput = styled(Input)`
  && {
    font-size: 1.6rem;
    width: 100%;
    color: white;

    &.Mui-disabled {
      color: ${(props) => props.readOnly && props.theme.colors.black};
    }

    &.MuiInput-underline:before {
      border-bottom: 1px solid #666666;
    }
    &.MuiInput-underline:after {
      border-bottom: 1px solid ${({ theme }) => theme.colors.defaultGreen};
    }
    &.MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid ${({ theme }) => theme.colors.defaultGreen};
    }
  }
`

const StyledInputAdornment = styled(InputAdornment)`
  white-space: nowrap;
  text-transform: uppercase;
  cursor: pointer;

  && {
    font-size: 0.8rem;
    font-weight: 500;
    color: #b2b2b2;

    &.MuiInputAdornment-positionEnd {
      margin-left: 1.5rem;
    }
  }
`

const renderContent = () => (
  <StyledContent>
    <Label>Share this link to connect a worker</Label>
    <StyledInput
      value="https://demodata.argyle.io/start"
      readOnly
      endAdornment={
        <StyledInputAdornment
          onClick={() => {
            copyStringToClipboard('https://demodata.argyle.io/start')
          }}
          disableTypography
          position="end"
        >
          Copy
        </StyledInputAdornment>
      }
    />
  </StyledContent>
)

const ArrowTooltip = ({ children, toggleTooltip, isOpen }) => {
  const classes = useStyles()

  return (
    <Tooltip
      classes={classes}
      title={renderContent()}
      arrow={true}
      placement="bottom-start"
      interactive
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 200 }}
      PopperProps={{
        disablePortal: true,
      }}
      onClose={() => toggleTooltip(false)}
      open={isOpen}
      disableFocusListener
      disableHoverListener
      disableTouchListener
    >
      {children}
    </Tooltip>
  )
}

export default ArrowTooltip
