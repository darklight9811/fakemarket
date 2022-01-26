export type positions = "" | "t" | "b" | "l" | "r" | "x" | "y"

export type margins = `m${positions}`
export type marginProp = { [key in margins]?: number | string }

export type paddings = `p${positions}`
export type paddingProp = { [key in paddings]?: number | string }