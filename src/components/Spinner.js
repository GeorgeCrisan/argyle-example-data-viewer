import React from 'react'
import styled from 'styled-components'

const spinnerImg = `https://res.cloudinary.com/argyle-media/image/upload/c_lfill,w_auto,g_auto,q_auto,dpr_auto,f_auto/v1566809938/spinner.png`

const StyledSpinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SpinnerImg = styled.img`
  animation: rotate 1s infinite linear;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const Spinner = ({ width = 26, height = 26 }) => (
  <StyledSpinner>
    <SpinnerImg width={width} height={height} src={spinnerImg} />
  </StyledSpinner>
)

const SpinnerWrapper = styled.div`
  min-height: 30rem;
  min-width: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WrappedSpinner = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
)

export default Spinner
