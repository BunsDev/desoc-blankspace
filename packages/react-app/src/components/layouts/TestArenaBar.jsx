import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Components
import SearchBar from '../ui/SearchBar';

// Styled
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 120rem;
    padding: 1.5rem 2rem;
    margin: 0 auto;

    @media (min-width: 1250px) {
        padding: 1.5rem 0;
    }
`;

const CreateTestButton = styled.button`
    padding: 1rem 2rem;
    border-radius: 0.4rem;
    font-size: 1.6rem;

    &:hover {
        cursor: pointer;
    }
`;

const TestArenaBar = ({ onSearch }) => {
    // Hook useNavigate
    const navigate = useNavigate();

    const handleCreateTest = e => {
        e.preventDefault();
        navigate('/create-test');
    };

    return (
        <Container>
            <SearchBar onChange={onSearch} />

            <CreateTestButton onClick={handleCreateTest}>Create Test</CreateTestButton>
        </Container>
    );
};

export default TestArenaBar;
