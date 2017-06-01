import React from 'react'
import { WithNotes } from '@storybook/addon-notes'
import { number } from '@storybook/addon-knobs'
import story from './story'
import Grid from '../../src/grid'
import Box from '../box'

const notes = 'Showcases the rendering of a pagination component'

story.add('Pagination', () => {
  const size = number('Size', 12, { range: true, min: 7, max: 12 })

  return (
    <WithNotes notes={notes}>
      <div className="gl-layout-root">
        <div className="gl-layout-content">
          <Grid size={size}>
            <Box size={1} type="A" value="<" />
            <Box size={1} type="A" value="1" />
            <Box size={1} type="B">...</Box>
            <Box size={1} type="A" value="5" />
            <Box size={1} type="A" value="6" />
            <Box size={1} type="A" value="7" />
            <Box size={1} type="A" value="8" />
            <Box size={1} type="A" value="9" />
            <Box size={1} type="A" value="10" />
            <Box size={1} type="B">...</Box>
            <Box size={1} type="A" value="20" />
            <Box size={1} type="A" value=">" />
          </Grid>
        </div>
      </div>
    </WithNotes>
  )
})
