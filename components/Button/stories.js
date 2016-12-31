import React from 'react'
import {storiesOf, action} from '@kadira/storybook'
import {Button, Icon, Segment} from 'semantic-ui-react'

storiesOf('Button', module)
/*
 .addDecorator((story) => (
 <div style={{textAlign: 'center'}}>
 {story()}
 </div>
 ))
 */

  .addWithInfo(
    'Standard',
    `
      A standard button
      ~~~
      import React, { Component } from 'react'
      import { Button } from 'semantic-ui-react'

      export default class ButtonButtonExample extends Component {
        render() {
          return (
            <Button>Get Started</Button>
          )
        }
      }
      ~~~
    `,
    () => (

      <Button onClick={action('click the button')}>Get Started</Button>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Emphasis',
    `
    Button formatting can reflect different types of emphasis

    `,
    () => (
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Emphasis 2',
    `
    Button formatting can reflect different types of emphasis

    `,
    () => (
      <div>
        <Button secondary>
          Okay
        </Button>
        <Button>
          Cancel
        </Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Animated',
    `
          Buttons can animate to show additional or hidden content

          `,
    () => (
      <Button animated>
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name='right arrow' />
        </Button.Content>
      </Button>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Labeled',
    `
    A button can appear alongside a label

    `,
    () => (
      <div>
        <Button
          content='Like'
          icon='heart'
          />
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Labeled 2',
    `
    A button can appear alongside a label

    `,
    () => (
      <Button
        color='red'
        content='Like'
        icon='heart'
        label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
      />

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Icon',
    `
      A button can be madke of only an icon
    `,
    () => (
      <div>
        <Button icon>
          <Icon name='world' />
        </Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Labeled Icon',
    `
      A button can use an icon as a label
    `,
    () => (

      <div>
        <Button content='Pause' icon='pause' labelPosition='left' />
        <Button content='Next' icon='right arrow' labelPosition='right' />
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Basic',
    `
      The basic button has a subtle appearance
    `,
    () => (

      <div>
        <Button basic>Standard</Button>
        <Button basic color='red'>Red</Button>
        <Button basic color='orange'>Orange</Button>
        <Button basic color='yellow'>Yellow</Button>
        <Button basic color='olive'>Olive</Button>
        <Button basic color='green'>Green</Button>
        <Button basic color='teal'>Teal</Button>
        <Button basic color='blue'>Blue</Button>
        <Button basic color='violet'>Violet</Button>
        <Button basic color='purple'>Purple</Button>
        <Button basic color='pink'>Pink</Button>
        <Button basic color='brown'>Brown</Button>
        <Button basic color='grey'>Grey</Button>
        <Button basic color='black'>Black</Button>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Inverted',
    `
      A button can be formatted to appear on a dark background
    `,
    () => (

      <div>
        <Segment inverted>
          <Button inverted>Standard</Button>
          <Button inverted color='red'>Red</Button>
          <Button inverted color='orange'>Orange</Button>
          <Button inverted color='yellow'>Yellow</Button>
          <Button inverted color='olive'>Olive</Button>
          <Button inverted color='green'>Green</Button>
          <Button inverted color='teal'>Teal</Button>
          <Button inverted color='blue'>Blue</Button>
          <Button inverted color='violet'>Violet</Button>
          <Button inverted color='purple'>Purple</Button>
          <Button inverted color='pink'>Pink</Button>
          <Button inverted color='brown'>Brown</Button>
          <Button inverted color='grey'>Grey</Button>
          <Button inverted color='black'>Black</Button>
        </Segment>
        <Segment inverted>
          <Button basic inverted>Standard</Button>
          <Button basic inverted color='red'>Red</Button>
          <Button basic inverted color='orange'>Orange</Button>
          <Button basic inverted color='yellow'>Yellow</Button>
          <Button basic inverted color='olive'>Olive</Button>
          <Button basic inverted color='green'>Green</Button>
          <Button basic inverted color='teal'>Teal</Button>
          <Button basic inverted color='blue'>Blue</Button>
          <Button basic inverted color='violet'>Violet</Button>
          <Button basic inverted color='purple'>Purple</Button>
          <Button basic inverted color='pink'>Pink</Button>
          <Button basic inverted color='brown'>Brown</Button>
          <Button basic inverted color='grey'>Grey</Button>
          <Button basic inverted color='black'>Black</Button>
        </Segment>
      </div>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Buttons Group',
    `
     Buttons can exist together as a group
    `,
    () => (

      <Button.Group>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </Button.Group>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Active',
    `
      A button can show it is currently the active user selection
    `,
    () => (

      <Button active>Active</Button>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Disabled',
    `
      A button can show it is currently unable to be interacted with
    `,
    () => (

      <Button className='disabled'>
        Disabled
      </Button>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Loading',
    `
      A button can show a loading indicator
    `,
    () => (

      <div>
        <Button className='loading' />
        <Button className='basic loading' />
        <Button className='primary loading' />
        <Button className='secondary loading' />
      </div>

    ), {inline: true, propTables: [Button]})

storiesOf('Button Groups', module)
  .addWithInfo(
    'Icon Buttons Group',
    `
     Buttons can exist together as a group
    `,
    () => (

      <Buttons>
        <Button className='icon'>
          <Icon className='save' />
        </Button>
        <Button className='icon'>
          <Icon className='delete' />
        </Button>
        <Button className='icon'>
          <Icon className='edit' />
        </Button>
      </Buttons>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Content Conditionals Group',
    `
     Button groups can contain conditionals
    `,
    () => (

      <Buttons>
        <Button>Cancel</Button>
        <div className='or' />
        <Button className='positive'>Save</Button>
      </Buttons>

    ), {inline: true, propTables: [Button]})

storiesOf('Button Variation', module)
  .addWithInfo(
    'Social',
    `
      A button can show a loading indicator
    `,
    () => (

      <div>
        <Button className='facebook'>
          <Icon className='facebook' />
          Facebook
        </Button>
        <Button className='twitter'>
          <Icon className='twitter' />
          Twitter
        </Button>
        <Button className='google plus'>
          <Icon className='google plus' />
          Google Plus
        </Button>
        <Button className='vk'>
          <Icon className='vk' />
          VK
        </Button>
        <Button className='linkedin'>
          <Icon className='linkedin' />
          LinkedIn
        </Button>
        <Button className='instagram'>
          <Icon className='instagram' />
          Instagram
        </Button>
        <Button className='youtube'>
          <Icon className='youtube' />
          YouTube
        </Button>
      </div>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Size',
    `
      Buttons can have assorted sizes
    `,
    () => (

      <div>
        <Button className='mini'>
          Mini
        </Button>
        <Button className='tiny'>
          Tiny
        </Button>
        <Button className='small'>
          Small
        </Button>
        <Button className='medium'>
          Medium
        </Button>
        <Button className='large'>
          Large
        </Button>
        <Button className='big'>
          Big
        </Button>
        <Button className='huge'>
          Huge
        </Button>
        <Button className='massive'>
          Massive
        </Button>
      </div>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Floated',
    `
      A button can be aligned to the left or right of its container

    `,
    () => (

      <div>
        <Button className='right floated'>Right Floated</Button>
        <Button className='left floated'>Left Floated</Button>
      </div>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Colored',
    `
      A bittpm cam jave different colors

    `,
    () => (

      <div>
        <Button className='red'>Red</Button>
        <Button className='orange'>Orange</Button>
        <Button className='yellow'>Yellow</Button>
        <Button className='olive'>Olive</Button>
        <Button className='green'>Green</Button>
        <Button className='teal'>Teal</Button>
        <Button className='blue'>Blue</Button>
        <Button className='violet'>Violet</Button>
        <Button className='purple'>Purple</Button>
        <Button className='pink'>Pink</Button>
        <Button className='brown'>Brown</Button>
        <Button className='grey'>Grey</Button>
        <Button className='black'>Black</Button>
      </div>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Compact',
    `
      Buttons can have reduced padding

    `,
    () => (

      <div>
        <Button className='compact'>Compact</Button>
        <Button>Normal</Button>
      </div>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Toggle',
    `
      A button can be formatted to toggle on or off

    `,
    () => (

      <Button className='toggle'>Toggle</Button>
      // TODO: Need to add functionality for toggle button - See issue #43
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Positive/Negative',
    `
      A button can visually indicate consequences

    `,
    () => (

      <div>
        <Button className='positive'>Positive</Button>
        <Button className='negative'>Negative</Button>
      </div>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Fluid',
    `
      A button can take the width of its container

    `,
    () => (

      <Button className='fluid'>Fits to Container</Button>

    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Circular',
    `
      A button can be circular

    `,
    () => (

      <Button className='circular icon'>
        <Icon className='heart' />
      </Button>
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Vertically Attached',
    `
      A button can be attached to the top or bottom of other content

    `,
    () => (

      <div>
        <Button className='top attached'>Top</Button>
        <Segment className='attached'>
          <p>Content goes here</p>
        </Segment>
        <Button className='bottom attached'>Bottom</Button>
      </div>
      // TODO: Extend button component to work with an attached div - see issue #46
    ), {inline: true, propTables: [Button]})

  .addWithInfo(
    'Horizontally Attached',
    `
      A button can be attached to the left or rightof other content

    `,
    () => (
      <div>
        <Button className='left attached'>Left</Button>
        <Button className='right attached'>Right</Button>
      </div>
    ), {inline: true, propTables: [Button]})

