// @flow
import React from 'react'
import Grid from '../src/grid'
import Layout from '../src/layout'

export default function Root(props: Grid.Props) {
  return (
    <Layout size={Layout.SIZE.STRETCH}>
      <Grid {...props} root />
    </Layout>
  )
}
