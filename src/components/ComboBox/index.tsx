import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './styles';
import { useDebounce } from 'react-use';

interface Props {
    options: string[];
    callback: (value: string) => void;
}

type Value = string | null;

const ComboBox: React.FC<Props> = ({ options, callback }) => {
    const [value, setValue] = React.useState<Value>('');

    const handleChange = React.useCallback((_, newValue: Value) => {
        setValue(newValue === null ? '' : newValue);
    }, []);

    const handleOptionSelected = React.useCallback((option, value) => option.id === value.id, []);

    useDebounce(
        () => {
            callback(value);
        },
        400,
        [value],
    );

    return (
        <Autocomplete
            data-testid="combobox"
            value={value}
            onChange={handleChange}
            onInputChange={handleChange}
            disablePortal
            options={options}
            isOptionEqualToValue={handleOptionSelected}
            sx={styles.container}
            renderInput={(params) => <TextField {...params} label="Names" />}
        />
    );
};

export default ComboBox;
