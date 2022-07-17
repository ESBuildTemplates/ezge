import AssetManager from "./AssetManager"
import Sprite from "./Sprite"

export default class SpriteManager<
  Sources extends Record<string, string>
> extends AssetManager<Sprite, Sources> {
  protected mapper(key: keyof Sources, src: string): Sprite {
    return new Sprite(src)
  }
}
