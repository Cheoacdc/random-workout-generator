import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const Results = () => {
    return (
        <div>
            <h1>Results</h1>

            <Link to="/results">
                <Button variant="outlined">
                    <FormattedMessage id="button.try.again"/>
                </Button>
            </Link>
            <Link to="/home">
                <Button variant="outlined">
                    <FormattedMessage id="button.go.back"/>
                </Button>
            </Link>
        </div>
    );
};