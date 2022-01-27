// Types
import { IconProps } from "../../general/Icon/types";

export type InputProps = {
	icon?: IconProps["name"];
	placeholder?: string;
	children: any;
	onChange?: (value: string) => void;
}