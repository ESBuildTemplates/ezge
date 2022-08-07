export interface Time {
  delta: number
  elapsed: number
  played: number
  last: number
}

export type GameLoopState = "waiting" | "running"

export default class GameLoopManager {
  private gameSetup = false
  private lastPlayTime = 0
  private elapsedTime = 0
  private lastTime = 0
  private playTime = 0

  /**
   * FPS (frame per second)
   */
  public framerate = 30

  public state: GameLoopState = "waiting"

  public wait(setup: () => Promise<void>) {
    setup()
      .then(() => {
        this.gameSetup = true
        this.state = "running"
      })
      .catch(console.error)
  }

  public start(loop: (time: Time) => unknown) {
    requestAnimationFrame(() => this.start(loop))

    this.elapsedTime = new Date().getTime()

    const delta = this.elapsedTime - this.lastTime
    const playDelta = this.playTime - this.lastPlayTime
    const interval = 1000 / this.framerate

    if (delta > interval) {
      if (this.gameSetup && this.state === "running") {
        this.playTime += playDelta % interval

        loop({
          elapsed: this.elapsedTime,
          played: this.playTime,
          last: this.lastTime,
          delta,
        })
      }

      this.lastTime = this.elapsedTime - (delta % interval)
    }
  }
}
