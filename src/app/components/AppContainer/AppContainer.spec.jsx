import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import MatchMediaMock from 'jest-matchmedia-mock'
import { act } from 'react-dom/test-utils'

import AppContainer from '.'
import styleVars from '../../style/global'

const createTestProps = () => ({
  children: <div />,
})

describe('AppContainer Component', () => {
  describe('ThemePallete with snapshot', () => {
    let component
    let matchMedia

    beforeAll(() => {
      matchMedia = new MatchMediaMock()
    })

    beforeEach(() => {
      const props = createTestProps()
      // eslint-disable-next-line
      component = mount(<AppContainer {...props} />)
    })

    afterEach(() => {
      matchMedia.clear()
    })

    test('snapshot test', () => {
      expect(component).toMatchSnapshot()
    })

    test('Dark theme', () => {
      act(() => {
        const mediaQuery = '(prefers-color-scheme: dark)'
        matchMedia.useMediaQuery(mediaQuery)
      })
      expect(component).toMatchSnapshot()
    })

    test('Light theme', () => {
      act(() => {
        const mediaQuery = '(prefers-color-scheme: light)'
        matchMedia.useMediaQuery(mediaQuery)
      })
      expect(component).toMatchSnapshot()
    })
  })
})

describe('Welcome Component', () => {
  describe('renders snap-shot testing', () => {
    let component
    beforeEach(() => {
      const props = createTestProps()
      // eslint-disable-next-line
      component = mount(<AppContainer {...props} />)
    })

    test('snapshot test', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

describe('AppContainer Component', () => {
  describe('renders snap-shot testing', () => {
    let component

    test('snapshot test IE or Edge', () => {
      const props = createTestProps()
      styleVars.app.isIEOrEdge = true
      // eslint-disable-next-line
      component = mount(<AppContainer {...props} />)
      expect(component).toMatchSnapshot()
    })

    test('snapshot test desktop', () => {
      const props = createTestProps()
      styleVars.app.isIEOrEdge = false
      // eslint-disable-next-line
      component = mount(<AppContainer {...props} />)
      expect(component).toMatchSnapshot()
    })
  })
})

describe('AppContainer Component json', () => {
  describe('renders snap-shot testing', () => {
    let component
    beforeEach(() => {
      const props = createTestProps()
      // eslint-disable-next-line
      component = renderer.create(<AppContainer {...props} />)
    })

    test('snapshot test', () => {
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
