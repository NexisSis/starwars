import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { getIdFromUrl } from '../../utils';

import styles from './styles';
import { IPeople } from 'swapi-ts';

interface Props {
    people: IPeople;
}

const PeopleCard: React.FC<Props> = ({
    people,
}) => {
    const id = getIdFromUrl(people.url);

    return (
        <Card sx={styles.container}>
            <CardContent>
                <Typography sx={styles.title} color="text.secondary" gutterBottom>
                    Gender: {people.gender}
                </Typography>
                <Typography sx={styles.name} color="text.secondary">
                    {people.name}
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
                <Link to={`people/${id}`}>Learn More</Link>
            </CardContent>
        </Card>
    );
};

export default PeopleCard;
