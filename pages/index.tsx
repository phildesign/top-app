import { GetStaticProps } from 'next';
import React, { useState } from 'react';
import { Htag, Button, Ptag, Tag, Rating, Input } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { Textarea } from '../components/Textarea/Textarea';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
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
			<Tag size="s" color="ghost">
				tag
			</Tag>
			<Tag size="s" color="gray">
				tag
			</Tag>
			<Tag size="m" color="primary">
				tag
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<Input placeholder="test" />
			<Textarea />
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory,
	});
	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
