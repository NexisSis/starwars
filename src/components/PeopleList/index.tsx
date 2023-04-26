import * as React from 'react';
import Box from '@mui/material/Box';
import { IPeople } from 'swapi-ts';
import PeopleCard from '../PeopleCard';

import styles from './styles';
import CircularProgress from "@mui/material/CircularProgress";

interface Props {
    peoples: IPeople[];
    isLoading: boolean;
}

const PeopleList: React.FC<Props> = ({
    peoples, isLoading,
}) => {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.loader}>
                {(isLoading || peoples === null) && <CircularProgress />}
            </Box>

            {peoples.map((item) => (
                <PeopleCard key={item.url} people={item} />
            ))}
        </Box>
    );
};

export default PeopleList;
