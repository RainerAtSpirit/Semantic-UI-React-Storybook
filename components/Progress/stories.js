import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Progress from './Progress'
import {Segment} from 'semantic-ui-react'

{ /*
 import MasterLayout from '../layouts/masterLayout';

 */
}
storiesOf('Progress', module)

  .addWithInfo(
    'Standard',
    `
     A standard progress bar
    `,
    () => (
      <div>
        <Progress completed={26} />
      </div>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Indicating',
    `
    ~~~
    TODO: indicating behavior not implemented yet
    ~~~
     An indicating progress bar visually indicates the current level of progress of a task
    `,
    () => (
      <div>
        <Progress completed={26} className='indicating' />
      </div>

    ), {inline: true, propTables: [Progress]})

storiesOf('Progress States', module)
  .addWithInfo(
    'Success',
    `
      A progress bar can show a success state

    `,
    () => (
      <div>
        <Progress completed={26} className='success' />
      </div>

    ), {inline: true, propTables: [Progress]})
  .addWithInfo(
    'Warning',
    `
      A progress bar can show a warning state

    `,
    () => (
      <div>
        <Progress completed={26} className='warning' />
      </div>

    ), {inline: true, propTables: [Progress]})
  .addWithInfo(
    'Error',
    `
      A progress bar can show a error state

    `,
    () => (
      <div>
        <Progress completed={26} className='error' />
      </div>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Disabled',
    `
      A progress bar can be disabled

    `,
    () => (
      <div>
        <Progress completed={26} className='disabled' />
      </div>

    ), {inline: true, propTables: [Progress]})

storiesOf('Progress Variations', module)

  .addWithInfo(
    'Inverted',
    `
      A progress bar can have its colors inverted
    `,
    () => (
      <Segment className='inverted'>
        <Progress completed={25} className='inverted' />
        <Progress completed={50} className='inverted success' />
        <Progress completed={75} className='inverted warning' />
        <Progress completed={100} className='inverted error ' />
      </Segment>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Size',
    `
      A progress bar can vary in size
    `,
    () => (
      <div>
        <Progress completed={30} className='tiny blue' />
        <Progress completed={40} className='small blue' />
        <Progress completed={50} className='blue' />
        <Progress completed={60} className='large blue' />
        <Progress completed={70} className='big blue ' />
      </div>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Color',
    `
      A progress bar can have different colors
    `,
    () => (
      <div>
        <Progress completed={30} className='red' />
        <Progress completed={40} className='orange' />
        <Progress completed={50} className='yellow' />
        <Progress completed={60} className='olive' />
        <Progress completed={70} className='green' />
        <Progress completed={60} className='teal' />
        <Progress completed={50} className='blue' />
        <Progress completed={40} className='violet' />
        <Progress completed={30} className='purple' />
        <Progress completed={40} className='pink' />
        <Progress completed={50} className='brown' />
        <Progress completed={60} className='grey' />
        <Progress completed={70} className='black' />
      </div>

    ), {inline: true, propTables: [Progress]})

  .addWithInfo(
    'Inverted Color',
    `
      The colors can also be inverted for improved contrast on dark backgrounds

    `,
    () => (
      <Segment className='inverted'>
        <Progress completed={30} className='inverted red' />
        <Progress completed={40} className='inverted orange' />
        <Progress completed={50} className='inverted yellow' />
        <Progress completed={60} className='inverted olive' />
        <Progress completed={70} className='inverted green' />
        <Progress completed={60} className='inverted teal' />
        <Progress completed={50} className='inverted blue' />
        <Progress completed={40} className='inverted violet' />
        <Progress completed={30} className='inverted purple' />
        <Progress completed={40} className='inverted pink' />
        <Progress completed={50} className='inverted brown' />
        <Progress completed={60} className='inverted grey' />
        <Progress completed={70} className='inverted black' />
      </Segment>

    ), {inline: true, propTables: [Progress]})
