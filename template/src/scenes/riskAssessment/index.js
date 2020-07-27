import React from 'react'
import { Routes } from '@Rvc/Core'
import routes from './routes'
// import PropTypes from 'prop-types'

export default class RiskAssessment extends React.PureComponent {
  render(){
    return (
      <>
        <Routes routes={routes}/>
      </>
    )
  }
}