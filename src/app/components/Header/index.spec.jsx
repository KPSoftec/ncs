import React from 'react'
import { shallow } from 'enzyme'

import Header from './index'
import { darkColor, lightColor } from '../../style/global'

describe('<Header />', () => {
  test('snapshot test', () => {
    const component = shallow(<Header theme={lightColor} />)
    expect(component).toMatchSnapshot()
  })

  test('snapshot test noLogout', () => {
    const component = shallow(<Header noLogOut theme={lightColor} />)
    expect(component).toMatchSnapshot()
  })

  test('snapshot test noLogout false', () => {
    const component = shallow(<Header noLogOut={false} theme={lightColor} />)
    expect(component).toMatchSnapshot()
    component.find('[data-test-id="logout-button"]').last().simulate('click')
  })

  test('snapshot test showThemeSwitch unChecked', () => {
    const component = shallow(<Header showThemeSwitch theme={lightColor} />)
    expect(component).toMatchSnapshot()
    component.find('[data-test-id="themeSwitch"]').last().simulate('change', { target: { name: 'themeSwitch', checked: false } })
  })

  test('snapshot test showThemeSwitch checked', () => {
    const component = shallow(<Header showThemeSwitch theme={darkColor} />)
    expect(component).toMatchSnapshot()
    component.find('[data-test-id="themeSwitch"]').last().simulate('change', { target: { name: 'themeSwitch', checked: true } })
  })

  test('snapshot test showThemeSwitch false', () => {
    const component = shallow(<Header showThemeSwitch={false} theme={lightColor} />)
    expect(component).toMatchSnapshot()
  })
})
