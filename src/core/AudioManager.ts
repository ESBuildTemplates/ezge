import * as howler from "howler"
import AssetManager from "./AssetManager"

export default class AudioManager<
  Sources extends Record<string, string>
> extends AssetManager<howler.Howl, Sources> {
  protected mapper(key: keyof Sources, src: string): howler.Howl {
    return new howler.Howl({ src })
  }

  play(key: keyof Sources & string) {
    this.get(key).play()
  }
}
