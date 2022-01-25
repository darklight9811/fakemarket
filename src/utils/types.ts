// Packages
import { JSXElementConstructor } from 'react';
import { ComponentMeta } from '@storybook/react';

type ArgType = {
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
>(config: Omit<ComponentMeta<Component>, "parameters"> & { argTypes?: { [key: string]: Partial<ArgType> } }) => config;