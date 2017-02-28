import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {Button} from 'semantic-ui-react'
import {CCButton} from './CCButton'

storiesOf('Button', module)

  .addWithInfo(
    'CCButton',
    `
    A CCButton

    `,
    () => (
      <div>
        <CCButton></CCButton>
        <CCButton active={false}></CCButton>
      </div>
    ), {inline: false, propTables: [CCButton]})



