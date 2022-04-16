import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Root } from './styles'

const Dashboard = () => {
  return (
    <Root>
      <h1>Lighthouse Next.js Landing part</h1>

      <div>
        Client Side Routing (doesn&apos;t work with rewrites):
      </div>
      <Link to='/account'>
        Go to Account part...
      </Link>

      <br />

      <div>
        Standard Routing:
      </div>
      <a href='/account'>
        Go to Account part...
      </a>
    </Root>
  )
}

export default Dashboard
