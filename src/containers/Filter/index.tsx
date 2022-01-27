// Components
import Select from "../../components/form/Select"

// Component
import { filters } from "./utils"
import { FilterProps } from "./types"

const Filter = (props: FilterProps) => {
	// -------------------------------------------------
	// Render
	// -------------------------------------------------

	return (
		<Select onChange={value => props.onChange?.(filters.find(i => i.value === value))}>
			{filters.map(filter => <option key={filter.value} value={filter.value}>{filter.label}</option>)}
		</Select>
	)
}

export default Filter