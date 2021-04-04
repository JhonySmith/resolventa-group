import React from 'react';

import SearchControl from './sub-components/search-control/search-control';
import SortingControl from './sub-components/sorting-control/sorting-control';

import { Panel } from './styles';

const ControlPanel: React.FC = () => {
	return (
		<Panel>
			<SearchControl />
			<SortingControl />
		</Panel>
	);
};

export default ControlPanel;
