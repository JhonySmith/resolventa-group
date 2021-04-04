import React from 'react';

import { Description, Selector } from './styles';

const SortingControl: React.FC = () => {
	return (
		<Description>
			<Selector>
				<option>Нет фильтра</option>
				<option></option>
				<option></option>
			</Selector>
		</Description>
	);
};

export default SortingControl;
