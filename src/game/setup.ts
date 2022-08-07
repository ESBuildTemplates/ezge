import AudioManager from "../core/AudioManager"
import SoundManager from "../core/SoundManager"
import MusicManager from "../core/MusicManager"
import SpriteManager from "../core/SpriteManager"
import GameLoopManager from "../core/GameLoopManager"
import SpriteSheetManager from "../core/SpriteSheetManager"
import DrawTools from "../core/DrawTools"

/**
 * Simplified game loop manager. <br>
 * Implements frame rate, delta time and elapsed time
 */
export const loop = new GameLoopManager()

export const drawing = new DrawTools()

export const audios = new AudioManager({})

export const sounds = new SoundManager({
  sound: "public/audio/sound/test.mp3",
})

export const musics = new MusicManager({
  music: "public/audio/music/test.mp3",
})

export const sprites = new SpriteManager({
  sprite: "public/images/sprites/test.png",
})

export const spriteSheets = new SpriteSheetManager({
  sheet: "public/images/spritesheets/test.json",
})

loop.wait(async () => {
  await audios.load()
  await sprites.load()
  await spriteSheets.load()
})
