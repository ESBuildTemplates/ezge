import AudioManager from "./AudioManager"
import * as howler from "howler"

export default class MusicManager<
  Sources extends Record<string, `${string}.mp3`>
> extends AudioManager<Sources> {
  protected mapper(key: keyof Sources, src: string): Promise<howler.Howl> {
    return Promise.resolve(
      new howler.Howl({ src, html5: true, autoplay: true, loop: true })
    )
  }

  /**
   * Play the music once
   */
  play(key: keyof Sources & string) {
    const music = this.get(key)
    if (!music.playing()) music.play()
  }
}
