import AudioManager from "../core/AudioManager"
import SpriteManager from "../core/SpriteManager"
import GameLoopManager from "../core/GameLoopManager"

export const loop = new GameLoopManager()
export const audios = new AudioManager({})
export const sprites = new SpriteManager({})
