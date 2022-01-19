type PaginationType<Asset extends Record<string, any> = Record<string, any>> = {
	data: Asset[];
	order?: "asc" | "desc";
	sort?: keyof Asset;
	limit: number;
	page: number;
}

export default PaginationType