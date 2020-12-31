import * as globalFuncs from './global'
// import devices from './device'

describe('Global functions', () => {
  const userAgents = {
    desktop: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36',
    android: 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Mobile Safari/537.36',
    iPhone: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    iPad: 'Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
    ie: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729)',
    ie11: 'Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; rv:11.0) like Gecko',
    ieEdge: 'Mozilla/5.0 (Windows NT 10.0; <64-bit tags>) AppleWebKit/<WebKit Rev> (KHTML, like Gecko) Chrome/<Chrome Rev> Safari/<WebKit Rev> Edge/<EdgeHTML Rev>.<Windows Build>',
  }

  test('Check if is IE', () => {
    expect(globalFuncs.isIE(userAgents.android)).toBeFalsy()
    expect(globalFuncs.isIE(userAgents.iPhone)).toBeFalsy()
    expect(globalFuncs.isIE(userAgents.iPad)).toBeFalsy()
    expect(globalFuncs.isIE(userAgents.desktop)).toBeFalsy()
    expect(globalFuncs.isIE(userAgents.ie)).toBeTruthy()
    expect(globalFuncs.isIE(userAgents.ie11)).toBeTruthy()
    expect(globalFuncs.isIE(userAgents.ieEdge)).toBeTruthy()
    expect(globalFuncs.isIE()).toBeFalsy()
  })

  test('Check if is IE Edge', () => {
    expect(globalFuncs.isIEEdge(userAgents.android)).toBeFalsy()
    expect(globalFuncs.isIEEdge(userAgents.iPhone)).toBeFalsy()
    expect(globalFuncs.isIEEdge(userAgents.iPad)).toBeFalsy()
    expect(globalFuncs.isIEEdge(userAgents.desktop)).toBeFalsy()
    expect(globalFuncs.isIEEdge(userAgents.ie)).toBeFalsy()
    expect(globalFuncs.isIEEdge(userAgents.ie11)).toBeFalsy()
    expect(globalFuncs.isIEEdge(userAgents.ieEdge)).toBeTruthy()
    expect(globalFuncs.isIEEdge()).toBeFalsy()
  })

  test('Check for theme=ios isIos to be truthy and isAndroid to be falsy', () => {
    delete window.location
    delete window.navigator
    window.location = {
      search: '?theme=ios',
    }
    window.navigator = {
      userAgent: userAgents.iPhone,
    }
    // devices.md()
    expect(globalFuncs.isAndroid()).toBeFalsy()
    expect(globalFuncs.isIOS()).toBeTruthy()
  })

  test('Check for theme=android isIos to be falsy and isAndroid to be truthy', () => {
    delete window.location
    delete window.navigator
    window.location = {
      search: '?theme=android',
    }
    window.navigator = {
      userAgent: userAgents.android,
    }
    // devices.md()
    expect(globalFuncs.isAndroid()).toBeTruthy()
    expect(globalFuncs.isIOS()).toBeFalsy()
  })
})
