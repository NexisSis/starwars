import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './styles';

interface Props {
    count: number;
    perPage: number;
    callback: (result: number) => void;
    currentPage: number;
}

const TablePagination: React.FC<Props> = ({ currentPage, count, perPage, callback }) => {
    const totalPages: number[] = [];

    for (let i = 1; i <= Math.ceil(count / perPage); i++) {
        totalPages.push(i);
    }

    const handleClick = React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        const index = e.currentTarget.getAttribute('data-element');

        callback(Number(index));
    }, [callback]);


    return (
        <Box sx={styles.container} data-testid="table-pagination">
            <Typography component="div">
                Page:
            </Typography>
            <Box>
                {totalPages.map((item) => (
                    <Button
                        onClick={handleClick}
                        data-element={item}
                        key={item}
                        variant={item === currentPage ? "contained" : "text"}
                        sx={styles.element}
                    >
                        {item}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default TablePagination;
