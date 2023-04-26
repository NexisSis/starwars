import * as React from 'react';
import { useParams } from 'react-router-dom';
import { IPeople } from 'swapi-ts';
import CircularProgress from '@mui/material/CircularProgress';
import People from '../components/People';
import { api } from '../services/Api';
import { useFetchData } from '../hooks/useFetchData';

const PeopleContainer: React.FC = () => {
    const id = useParams();

    const [isLoading, people] = useFetchData<IPeople>(api.getPeople, id);

    if (isLoading || !people) {
        return <CircularProgress />;
    }

    return (
        <People people={people} />
    );
};

export default PeopleContainer;
