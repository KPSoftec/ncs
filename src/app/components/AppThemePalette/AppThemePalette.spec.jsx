import { mount } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'
import AppThemePalette from '.'
import { lightColor } from '../../style/global'

const createTestProps = () => ({
  children: <div />,
  theme: lightColor,
})

describe('AppThemePalette Component', () => {
  describe('renders snap-shot match', () => {
    let component

    beforeEach(() => {
      const props = createTestProps()
      // eslint-disable-next-line
      component = mount(<AppThemePalette {...props} />)
    })

    test('snapshot test', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

describe('AppThemePalette Component json', () => {
  describe('renders snap-shot json', () => {
    let component
    beforeEach(() => {
      const props = createTestProps()
      // eslint-disable-next-line
      component = renderer.create(<AppThemePalette {...props} />)
    })

    test('snapshot test', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
