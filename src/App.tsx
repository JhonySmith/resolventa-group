import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { loadData } from './actions/loadDataFromServer';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import ControlPanel from './components/control-panel/control-panel';
import ShowingList from './components/showing-list/showing-list';

function App() {
	const data = useSelector((state: { data: [{}] }) => state.data);
	const loading = useSelector((state: { loading: boolean }) => state.loading);

	const showingFields: {
		keyValue: string;
		showingText: string;
		fieldType?: string;
		filteredField?: {
			label: string;
			value: string;
		}[];
	}[] = [
		{
			keyValue: 'name',
			showingText: 'Имя персонажа',
		},
		{
			keyValue: 'image',
			showingText: 'Изображение',
			fieldType: 'image',
		},
		{
			keyValue: 'gender',
			showingText: 'Пол',
			filteredField: [
				{
					label: 'Мужской',
					value: 'male',
				},
				{
					label: 'Женский',
					value: 'female',
				},
			],
		},
		{
			keyValue: 'status',
			showingText: 'Статус',
		},
	];

	return (
		<Router>
			<>
				<ShowingList dataList={data} showingFields={showingFields || [{}]} />
			</>
		</Router>
	);
}

export default App;
