import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PaginationList, PaginationItem } from './styles';

const showingCountPages = 5;

interface PaginationControlProps {
	currentPage: string;
	getCurrentURL(options: { page: string }): void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
	currentPage,
	getCurrentURL,
}) => {
	const pagesCount = useSelector(
		(state: { pagesCount: number }) => state.pagesCount
	);

	const maxBlocks = Math.trunc(pagesCount / showingCountPages) - 1;

	const [currentBlock, setCurrentBlock] = useState(0);
	console.log(maxBlocks);
	console.log(currentBlock);
	useEffect(() => {
		setCurrentBlock(Math.trunc(+currentPage / showingCountPages));
	}, []);

	const getNumbersList = () => {
		const result = [];
		const startPageNumber = currentBlock * showingCountPages + 1;
		const endPageNumber = startPageNumber + showingCountPages;
		for (let i = startPageNumber; i < endPageNumber; i++) {
			if (i <= pagesCount) {
				let options = {
					page: `${i}`,
				};
				result.push(
					<PaginationItem>
						{i === +currentPage ? (
							i
						) : (
							<Link to={`${getCurrentURL(options)}`}>{i}</Link>
						)}
					</PaginationItem>
				);
			}
		}

		return result;
	};

	return (
		<>
			{currentBlock === 0 || (
				<button
					onClick={() => {
						setCurrentBlock(currentBlock - 1);
					}}
				>
					Назад
				</button>
			)}
			<PaginationList>{getNumbersList()}</PaginationList>
			{currentBlock >= maxBlocks || (
				<button
					onClick={() => {
						setCurrentBlock(currentBlock + 1);
					}}
				>
					Вперед
				</button>
			)}
		</>
	);
};

export default PaginationControl;
