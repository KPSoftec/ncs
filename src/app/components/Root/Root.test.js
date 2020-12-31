import '../../../../test/mocks/matchMedia.mock'
import React from 'react'
import { render } from 'enzyme'
import renderer from 'react-test-renderer'
import Root from '.'

describe('Welcome Component', () => {
  describe('renders learn react link', () => {
    let component
    beforeEach(() => {
      component = render(<Root />)
    })

    test('snapshot test', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

describe('Welcome Component json', () => {
  describe('renders learn react link', () => {
    let component
    beforeEach(() => {
      component = renderer.create(<Root />)
    })

    test('snapshot test', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
