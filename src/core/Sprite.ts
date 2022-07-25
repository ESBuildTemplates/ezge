import { Dimension, Position } from "./Vector"

export default class Sprite {
  position: Position
  size: Dimension

  constructor(public readonly element: HTMLImageElement) {
    this.position = new Position(element.clientLeft, element.clientTop)
    this.size = new Dimension(element.naturalWidth, element.naturalHeight)
  }
}
