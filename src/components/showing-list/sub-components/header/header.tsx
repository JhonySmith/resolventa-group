import React, { useState } from 'react';
import FilterSelect from './filter-select/filter-select';

interface HeaderProps {
	filterField: [
		{
			label: string;
			value: string;
		}
	];
	text: string;
}

const Header: React.FC<HeaderProps> = (props) => {
	const { filterField, text } = props;
	const [filterListOpened, setFilterListOpened] = useState(true);
	return (
		<th>
			{text}
			{filterField ? <button>Фильтровать</button> : ''}
			{filterListOpened ? <FilterSelect filters={filterField} /> : ''}
		</th>
	);
};

export default Header;
