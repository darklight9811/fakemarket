export const omit = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(i => !keys.includes(i[0])))

export const only = (obj, keys) => Object.fromEntries(keys.map(key => [key, obj[key]]))