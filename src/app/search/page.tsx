'use client';

import SearchBodySection from '@/components/search/SearchBodySection';
import SearchHeadSection from '@/components/search/SearchHeadSection';
import styled from 'styled-components';

const SearchPage = () => {
	const searchKeyword = '무엇을 검색할까요?';

	return (
		<SearchBarSection>
			<SearchHeadSection />
			<SearchBodySection searchKeyword={searchKeyword} />
		</SearchBarSection>
	);
};

const SearchBarSection = styled.div`
	margin-top: 64px;
`;

export default SearchPage;
