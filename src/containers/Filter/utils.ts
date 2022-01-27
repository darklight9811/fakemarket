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
	},
	{
		label: "Sort by: Name Order",
		value: "ln",
		sort: (list: any[]) => list.sort((a, b) => `${a.name}`.localeCompare(b.name))
	},
	{
		label: "Sort by: Inverse Name Order",
		value: "hn",
		sort: (list: any[]) => list.sort((a, b) => `${b.name}`.localeCompare(a.name))
	},
	{
		label: "Sort by: Latest",
		value: "hl",
		sort: (list: any[]) => list.sort((a, b) => parseFloat(a.schema.created_at_time) - parseFloat(b.schema.created_at_time))
	},
	{
		label: "Sort by: Oldest",
		value: "ll",
		sort: (list: any[]) => list.sort((a, b) => parseFloat(b.schema.created_at_time) - parseFloat(a.schema.created_at_time))
	}
]