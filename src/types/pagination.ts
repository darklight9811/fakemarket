type PaginationType<Asset extends Record<string, any> = Record<string, any>> = {
	data: Asset[];
	order?: "asc" | "desc";
	sort?: keyof Asset;
	limit: number;
	page: number;
	filter?: string;
}

export default PaginationType