export const filters = [
	{
		label: "Sort by: Lowest Price",
		value: "lp",
		sort: (list: any[]) => list.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
	},
	{
		label: "Sort by: Highest Price",
		value: "hp",
		sort: (list: any[]) => list.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
	}
]