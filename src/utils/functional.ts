export const pipe = <
	Value = any
>(...args: ((val: Value) => unknown)[]) => (start: Value) => args.reduce((prev, curr) => curr(prev), start)

export const pipeList = <
	Value = any
>(...args: ((val: Value) => unknown)[]) => (start: Value[]) => start.map(value => pipe(...args)(value))

export const autoPipe = <
	Value = any
>(...args: ((val: Value) => unknown)[]) => (start: Value[] | Value) => Array.isArray(start) ? pipeList(...args)(start) : pipe(...args)(start)

export const omit = <
	Obj extends Record<string, any> = any
>(...keys: (keyof Obj)[]) => (obj: Obj) => Object.fromEntries(Object.entries(obj).filter(entry => !keys.includes(entry[0])))

export const keep = <
	Obj extends Record<string, any> = any
>(...keys: (keyof Obj)[]) => (obj: Obj) => Object.fromEntries(Object.entries(obj).filter(entry => keys.includes(entry[0])))

export const add = <
	AddObject extends Record<string, any> = any,
	InitialObject extends Record<string, any> = any
>(obj: AddObject) => (initialObj: InitialObject) => ({
	...initialObj,
	...Object.fromEntries(Object.entries(obj).map(entry => [entry[0], typeof entry[1] === "function" ? entry[1]() : entry[1]]))
})

export const rename = (map: Record<string, string>) =>
	(obj: Record<string, any>) =>
	Object.fromEntries(Object.entries(obj).map(entry => [map[entry[0]] || entry[0], entry[1]]))