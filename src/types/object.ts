export type FilterObject<
	obj extends Record<string, any>,
	arr extends (keyof obj)[],
	rest extends number[] = [0],
	built extends any[] = []
> =
	rest["length"] extends arr["length"] ?
		[...built, obj[arr[rest[0]]]] :
		FilterObject<obj, arr, [rest["length"], ...rest], [...built, obj[arr[rest[0]]]]>