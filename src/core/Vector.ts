import { EventEmitter, BaseEventNames } from "@ghom/event-emitter"

export interface VectorEvents extends BaseEventNames {
  updated: [v1: number, v2: number]
}

export class Vector extends EventEmitter<VectorEvents> {
  constructor(
    protected _v1 = 0,
    protected _v2 = 0,
    edit?: (it: Vector) => unknown
  ) {
    super()

    edit?.(this)
  }

  set(v1: number, v2: number) {
    this._v1 = v1
    this._v2 = v2

    this._update()
  }

  protected _update() {
    this.emit("updated", this._v1, this._v2).catch(console.error)
  }
}

export class Dimension extends Vector {
  get width() {
    return this._v1
  }

  get height() {
    return this._v2
  }

  set width(v) {
    this._v1 = v

    this._update()
  }

  set height(v) {
    this._v2 = v

    this._update()
  }
}

export class Position extends Vector {
  get x() {
    return this._v1
  }

  get y() {
    return this._v2
  }

  set x(v) {
    this._v1 = v

    this._update()
  }

  set y(v) {
    this._v2 = v

    this._update()
  }
}
