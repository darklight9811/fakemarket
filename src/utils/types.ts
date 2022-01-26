// Packages
import { JSXElementConstructor } from 'react';
import { ComponentMeta } from '@storybook/react';

type ArgType = {
	description: string;
	options: string[];
	control: Partial<{
		type: "boolean" | "radio" | "select",
	}> | false;
	table: Partial<{
		disable: boolean;
	}>;
}

export const Story = <
	Component extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
>(config: ComponentMeta<Component> & { argTypes?: { [key: string]: Partial<ArgType> } }) => config;