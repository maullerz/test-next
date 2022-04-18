import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Root } from './styles'

const Dashboard = () => {
  return (
    <Root>
      <h1>Lighthouse Next.js Landing part</h1>

      <br />

      <div>
        Standard Routing:
      </div>
      <a href='/account'>
        Go to Account part...
      </a>

      <br />

      <a href='/account-new'>
        Link to lighthouse-account SPA:
      </a>
    </Root>
  )
}

export default Dashboard
