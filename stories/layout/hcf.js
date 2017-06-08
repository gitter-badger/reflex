// @flow
import React from 'react'
import { WithNotes } from '@storybook/addon-notes'
import { boolean } from '@storybook/addon-knobs'
import story from './story'
import Grid from '../../src/grid'
import Layout from '../../src/layout'
import LoremIpsum from './loremIpsum'
import styles from './page.css'

const { AUTO } = Layout.SIZE
const notes = 'A 3 section layout with sticky header and minimum height of 100%'

story.add('H / C / F', () => {
  const includeText = boolean('Show text', false)

  return (
    <WithNotes notes={notes}>
      <Layout className={styles.page}>
        <Layout size={AUTO} className={styles.header}>
          <Grid root>
            <h1>Header</h1>
          </Grid>
        </Layout>
        <Layout className={styles.content}>
          <Layout>
            <Grid root>
              <h2>Content</h2>
              {includeText && <p>{LoremIpsum}</p>}
            </Grid>
            <Layout size={AUTO} className={styles.footer}>
              <Grid root>
                <h1>Footer</h1>
              </Grid>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </WithNotes>
  )
})
