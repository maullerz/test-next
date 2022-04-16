import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Root } from './styles'

const Dashboard = () => {
  return (
    <Root>
      Lighthouse Next.js Landing part

      <Link to='/account'>
        Go to Account part...
      </Link>
    </Root>
  )
}

export default Dashboard
