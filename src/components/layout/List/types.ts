export type PropTypes<ListType extends Record<string, any> = Record<string, any>> = {
	data: ListType[];
	component: (data: ListType) => JSX.Element;
	/**
	 * Property to be used as key prop in the list
	 */
	id?: keyof ListType;
	/**
	 * Display skeleton objects
	 */
	loading?: boolean;
	/**
	 * Number of items to be presented by row. By default this will be set by the item itself.
	 * Setting this prop will force the item to behave and passed.
	 */
	perRow?: number;
}