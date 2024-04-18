import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import UserCardContainer from '../components/UserCardContainer'
function Main() {

  return (
      <Page title="Home">
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 users'>
        <UserCardContainer/>
        </section>
      </Page>
  )
}

export default Main