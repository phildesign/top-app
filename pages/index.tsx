import React, { useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating } from '../components';
import { Layout } from '../layout/Layout';

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<Layout>
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
			<Rating rating={rating} isEditable setRating={setRating} />
		</Layout>
	);
}
