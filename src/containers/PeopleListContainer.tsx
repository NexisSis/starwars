import * as React from 'react'
import { useDispatch } from 'react-redux';
import { IPeople } from 'swapi-ts';
import CircularProgress from '@mui/material/CircularProgress';
import { api } from '../services/Api';
import { setPeoples, setSearch, setPage } from '../reducer';
import { useFetchData } from '../hooks/useFetchData';
import PeopleList from '../components/PeopleList';
import ComboBox from '../components/ComboBox';
import TablePagination from '../components/TablePagination';
import { useAppSelector } from '../store';
import { selectParameters } from '../selectors';
import { PeoplesResponse } from '../types';

const DEFAULT_PER_PAGE = 10;

const peopleListToComboBox = (peoples: IPeople[] | null): string[] => {
    if (!peoples) return [];

    return peoples.map(item => item.name);
};

const PeopleListContainer: React.FC = () => {
    const dispatch = useDispatch();
    const params = useAppSelector(selectParameters);

    const fetchCallback = React.useCallback((result: PeoplesResponse) => {
        dispatch(setPeoples(result));
    }, [dispatch]);

    const searchCallback = React.useCallback((result: string) => {
        dispatch(setSearch(result));
    }, [dispatch]);

    const tableCallback = React.useCallback((result: number) => {
        dispatch(setPage(result));
    }, [dispatch]);

    const [isLoading, result] = useFetchData<PeoplesResponse>(api.getPeoples, params, fetchCallback);

    if (!result) {
        return <CircularProgress />;
    }

    const { results, count } = result;

    return (
        <>
            <ComboBox options={peopleListToComboBox(results)} callback={searchCallback} />

            <PeopleList peoples={results} isLoading={isLoading} />

            <TablePagination currentPage={params.page} count={count} perPage={DEFAULT_PER_PAGE} callback={tableCallback} />
        </>
    );
};

export default PeopleListContainer;
