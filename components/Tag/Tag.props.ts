import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface PtagProps
	extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size: 's' | 'm';
	children: ReactNode;
	color?: 'ghots' | 'red' | 'grey' | 'green' | 'primary';
	href?: string;
}
