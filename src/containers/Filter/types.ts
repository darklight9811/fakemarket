import { filters } from "./utils"

export type FilterProps = {
	onChange?: (sort: (typeof filters)[0]) => void;
}