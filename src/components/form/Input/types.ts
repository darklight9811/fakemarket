// Types
import { IconProps } from "../../general/Icon/types";

export type InputProps = {
	icon?: IconProps["name"];
	placeholder?: string;
	onChange?: (value: string) => void;
	debounce?: number;
}