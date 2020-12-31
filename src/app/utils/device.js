import MobileDetect from 'mobile-detect'

const md = new MobileDetect(window.navigator.userAgent)
const os = md.os() || ''
const phone = md.phone() || ''
const mobile = md.mobile() || ''

export default {
  md,
  os,
  phone,
  mobile,
}
