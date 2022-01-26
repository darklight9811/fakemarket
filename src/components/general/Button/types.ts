export type ButtonProps = {
	children: any;

	width?: string;
	color?: "primary" | "danger" | "success";
	onClick?: () => void;
}