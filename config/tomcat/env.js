try {
  window.hubOrchHost = '@frig-lb-scheme@://@frig-gw-pub-unauth-tppsvc-lb-host@'
  window.ibHandoverHost = '@ib-gslb-hostname@'
} catch (e) {
  window.hubOrchHost = ''
  window.ibHandoverHost = ''
  // swallow exception
}
