import React from 'react'
import {storiesOf} from '@kadira/storybook'
import {Button} from 'semantic-ui-react'
import {CCButton} from './CCButton'

storiesOf('CCButton', module)

  .addWithInfo(
    'Active by default',
    `
    A CCButton 

    `,
    () => (
        <CCButton></CCButton>
    ), {inline: true, propTables: [CCButton]})


  .addWithInfo(
    'inactive',
    `
    providing an active prop
    `,
    () => (
        <CCButton active={false}></CCButton>
    ), {inline: true, propTables: [CCButton]})


