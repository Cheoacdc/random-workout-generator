import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/results">
                <Button variant="outlined">
                    <FormattedMessage id="button.generate.results"/>
                </Button>
            </Link>
        </div>
    );
};