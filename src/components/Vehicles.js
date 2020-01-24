import React from 'react'
import styled from 'styled-components'
import {
  DirectionsCar,
  DirectionsBike,
  DirectionsWalk,
} from '@material-ui/icons'
import { firstWordToUpperCase } from '../helpers'

const StyledVehicles = styled.div``

const StyledVehicle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(249, 249, 249, 0.9);
  padding: 1.5rem 2rem;
  width: 53rem;
  border-radius: 5px;
  margin-bottom: 2rem;
`

const Details = styled.div`
  display: flex;
  align-items: center;
`

const VehicleIcon = styled.div`
  margin-right: 2rem;

  svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #0000004d;
  }
`

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`

const PlateNumber = styled.span`
  font-size: 1.4rem;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);
  margin-left: 0.5rem;
`

const DataPartnerIcon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`

const vehicleIcon = {
  bicycle: <DirectionsBike />,
  pedestrian: <DirectionsWalk />,
  car: <DirectionsCar />,
}

const Vehicles = ({ vehicles }) => (
  <StyledVehicles>
    {vehicles.map(
      (
        { id, model, year, identification, type = 'car', data_partner, empty },
        i
      ) => (
        <StyledVehicle key={id + i}>
          <Details>
            <VehicleIcon>{vehicleIcon[type]}</VehicleIcon>
            <Name>
              {empty
                ? 'No Data'
                : type === 'car' && model
                ? `${model} ${year}`
                : firstWordToUpperCase(type)}
              <PlateNumber>{identification}</PlateNumber>
            </Name>
          </Details>
          {data_partner && (
            <DataPartnerIcon
              alt={data_partner}
              src={`https://res.cloudinary.com/argyle-media/image/upload/c_lfill,w_auto,g_auto,q_auto,dpr_auto,f_auto/v1566809938/partner-logos/${data_partner}.png`}
            />
          )}
        </StyledVehicle>
      )
    )}
  </StyledVehicles>
)

export default Vehicles
