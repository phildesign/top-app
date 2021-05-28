import React from 'react';
import { Htag, Button, Ptag, Tag } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" arrow="right">
				Кнопка
			</Button>
			<Button appearance="ghost" arrow="down">
				Кнопка
			</Button>
			<Ptag size="l">Текст</Ptag>
			<Tag size="m" color="red">
				tag
			</Tag>
			<Tag size="s" color="green">
				tag
			</Tag>
			<Tag size="m" color="primary">
				tag
			</Tag>
		</div>
	);
}
