export const omit = (obj, keys) => Object.fromEntries(Object.entries(obj).filter(i => !keys.includes(i[0])))

export const only = (obj, keys) => Object.fromEntries(keys.map(key => [key, obj[key]]))

export const isObject = (arg) => arg && typeof arg === "object" && !Array.isArray(arg)

export const deepMerge = (target, source) => {
	let output = Object.assign({}, target);
	if (isObject(target) && isObject(source)) {
	  Object.keys(source).forEach(key => {
		if (isObject(source[key])) {
		  if (!(key in target))
			Object.assign(output, { [key]: source[key] });
		  else
			output[key] = deepMerge(target[key], source[key]);
		} else {
		  Object.assign(output, { [key]: source[key] });
		}
	  });
	}
	return output;
}