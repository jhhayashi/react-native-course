// this function will freeze a browser page if run in console
function hang(seconds = 5) {
  const doneAt = Date.now() + seconds * 1000
  while(Date.now() < doneAt) {}
}
