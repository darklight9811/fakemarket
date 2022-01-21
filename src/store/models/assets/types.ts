type AssetType = {
	asset_id: string;
	contract: string;
	owner: string;
	name: string;
	is_transferable: boolean;
	is_burnable: boolean;
	template_mint: string;
	collection: {
		collection_name: string;
		name: string;
		author: string;
		allow_notify: boolean;
		authorized_accounts: string[];
		notify_accounts: string[];
		market_fee: number;
		created_at_block: string;
		created_at_time: string;
	};
	schema: {
		schema_name: string;
		format: { name: string, type: string }[];
		created_at_block: string;
		created_at_time: string;
	};
	template: {
		template_id: string;
		max_supply: string;
		issued_supply: string;
		is_transferable: boolean;
		is_burnable: boolean;
		immutable_data: Record<string, any>;
		created_at_time: string;
		created_at_block: string;
	};
	backed_tokens: {
		token_contract: string;
		token_symbol: string;
		token_precision: 0;
		amount: string;
	}[]
	immutable_data: Record<string, any>;
	mutable_data: Record<string, any>;
	data: Record<string, any>;
	burned_by_account: string;
	burned_at_block: string;
	burned_at_time: string;
	updated_at_block: string;
	updated_at_time: string;
	transferred_at_block: string;
	transferred_at_time: string;
	minted_at_block: string;
	minted_at_time: string;
}

export default AssetType