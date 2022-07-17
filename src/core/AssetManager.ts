import * as howler from "howler"

export default abstract class AssetManager<
  Asset,
  Sources extends Record<string, string>
> {
  protected assets: Record<string, Asset> = {}

  protected abstract mapper(key: keyof Sources, src: string): Asset

  public constructor(protected readonly sources: Sources) {
    for (const key in sources) {
      this.assets[key] = this.mapper(key, sources[key])
    }
  }

  public get(key: keyof Sources & string): Asset {
    return this.assets[key]
  }
}
