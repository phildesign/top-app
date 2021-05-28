import React, { useEffect, useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../components';

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);

	useEffect(() => {
		console.log('counter', counter);
		return function cleanup() {
			console.log('Unmount');
		};
	});

	return (
		<div>
			<Htag tag="h1">{counter}</Htag>
			<Button appearance="primary" arrow="right" onClick={() => setCounter((x) => x + 1)}>
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
			<Rating rating={4} />
		</div>
	);
}
