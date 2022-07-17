export interface Time {
  delta: number
  elapsed: number
  last: number
}

export default class GameLoopManager {
  private elapsedTime = 0
  private lastTime = 0

  /**
   * FPS (frame per second)
   */
  public framerate = 30

  public start(loop: (time: Time) => unknown) {
    requestAnimationFrame(() => this.start(loop))

    this.elapsedTime = new Date().getTime()

    const delta = this.elapsedTime - this.lastTime
    const interval = 1000 / this.framerate

    if (delta > interval) {
      loop({
        elapsed: this.elapsedTime,
        last: this.lastTime,
        delta,
      })

      this.lastTime = this.elapsedTime - (delta % interval)
    }
  }
}
