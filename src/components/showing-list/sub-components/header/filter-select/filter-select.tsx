import React from 'react';

interface FilterSelectProps {
	filters: [
		{
			label: string;
			value: string;
		}
	];
}

const FilterSelect: React.FC<FilterSelectProps> = (props) => {
	const { filters } = props;
	return (
		<ul>
			{filters.map((filter) => (
				<li>{filter.label}</li>
			))}
		</ul>
	);
};

export default FilterSelect;
