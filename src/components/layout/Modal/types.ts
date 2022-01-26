// -------------------------------------------------
// Props
// -------------------------------------------------

export default interface ModalProps {
	id: string;
	children: JSX.Element | JSX.Element[];

	// options
	title?: string;
	subtitle?: string;
	closeable?: boolean;
	width?: number;
	startOpen?: boolean;

	// callbacks
	onOpen?: () => void;
	onClose?: () => void;
}

export interface ProviderProps {
	children: JSX.Element | JSX.Element[];
}

// -------------------------------------------------
// Component
// -------------------------------------------------

export interface ModalComponent {
	(props: ModalProps): JSX.Element;
	children: JSX.Element | JSX.Element[];

	useModal: () => Context;
	context: React.Context<Context>;
	Provider: React.FC<ProviderProps>;
}

// -------------------------------------------------
// General
// -------------------------------------------------

export interface ModalOptions {
	title?: string;
	width?: number;
	subtitle?: string;
	closeable?: boolean;
	options?: JSX.Element | JSX.Element[];
}

export interface Context {
	open: (id: string) => void;
	close: (id?: string) => void;
	element: Element;
	display?: string;
}
