import AudioManager from "./AudioManager"

export default class SoundManager<
  Sources extends Record<string, `${string}.mp3`>
> extends AudioManager<Sources> {}
