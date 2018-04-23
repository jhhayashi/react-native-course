export default class Timer {
  constructor(duration, onTick, onEnd) {
    this.duration = duration
    this.onTick = onTick
    this.onEnd = onEnd
    this.endTime = Date.now() + duration
    this.tick()
  }

  get timeRemaining() {
    return this.endTime - Date.now()
  }

  get isRunning() {
    return !!this.endTime
  }

  clearTick = () => {
    clearTimeout(this.timeout)
    this.timeout = null
  }

  tick = () => {
    if (this.endTime < Date.now()) {
      this.onTick(0)
      this.onEnd()
    } else {
      this.onTick(this.timeRemaining)

      // account for any delays or time drift
      const nextTick = this.timeRemaining % 1000

      this.timeout = setTimeout(this.tick, nextTick)
    }
  }

  stop = () => {
    if (!this.isRunning) return
    this.clearTick()
    this.duration = this.timeRemaining
    this.endTime = null
  }

  start = () => {
    if (this.isRunning) return
    this.endTime = Date.now() + this.duration
    this.tick()
  }
}
