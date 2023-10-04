import { Component, Entangle } from '@/alpine/components/alpine'
import { Time } from '@/alpine/components/datetime-picker/makeTimes'
import { Focusable } from '@/alpine/components/modules/Focusable'
import { Positioning, PositioningRefs } from '@/alpine/components/modules/Positioning'

export type Refs = PositioningRefs & {
  search: HTMLInputElement
}

export type Config = {
  isBlur: boolean
  interval: number
  format: string
  is12H: boolean
  readonly: boolean
  disabled: boolean
}

export interface InitOptions {
  model: Entangle
  config: Config
}

export interface TimePicker extends Component, Positioning, Focusable {
  $refs: Refs
  model: Entangle
  input: string | null
  config: Config
  search: string
  times: Time[]
  filteredTimes: Time[]

  init (): void

  maskInput (value: string | null): string | null

  clearInput (): void

  fillTimes (): void

  selectTime (time: Time): void

  onInput (value: string): void

  onSearch (search: string): void

  makeSearchTimes (search: string): Time[]

  emitInput (): void

  convertTo24Hours (time12h: string | null): string

  convertTo12Hours (time24: string | null): string

  convertModelTime (dateTime: string | null): string

  hasDate (value: string): boolean

  hasTime (value: string): boolean

  getTimeFromDate (dateTime: string): string | null
}
