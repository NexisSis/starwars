import * as React from 'react';
import { IPeople } from 'swapi-ts';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setPeople } from '../../reducer';

import styles from './styles';

interface Props {
    people: IPeople;
}

interface Values {
    name: string;
}

const People: React.FC<Props> = ({
     people
 }) => {
    const dispatch = useDispatch();

    const handleSave = React.useCallback((values: Values) => {
        if (values.name !== people.name && values.name && values.name.trim()) {
            const newPeople = Object.assign({}, people, values);

            dispatch(setPeople(newPeople));
        }
    }, [dispatch, people]);

    const renderName = React.useCallback(({ handleSubmit }) => {
        return (
            <Field name="name">
                {props => (
                    <TextField
                        onBlur={handleSubmit}
                        name={props.input.name}
                        value={props.input.value}
                        onChange={props.input.onChange}
                    />
                )}
            </Field>
        )
    }, []);

    return (
        <Card sx={styles.container}>
            <CardContent>
                <Link to="/">Home</Link>

                <Box sx={styles.box}>
                    <Form
                        initialValues={{ name: people.name}}
                        onSubmit={handleSave}
                        render={renderName}
                    />
                    <Typography sx={styles.text} color="text.secondary">
                        Gender: {people.gender}
                    </Typography>
                    <Typography variant="body2">
                        Birth Year: {people.birth_year}
                        <br />
                        Color: {people.skin_color}
                        <br />
                        Mass: {people.mass}
                        <br />
                        Height: {people.height}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default People;
