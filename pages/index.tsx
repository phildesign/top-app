import React from 'react';
import { Htag } from '../components';
import { Button } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag="h1">Текст</Htag>
			<Button appearance="primary" className="asdasd">
				Кнопка
			</Button>
			<Button appearance="ghost">Кнопка</Button>
		</div>
	);
}
