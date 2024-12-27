import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';

export const Splash = () => {
    return (
        <div>
            <h1>Splash</h1>
            <Link to="/home">
                <Button variant="outlined">
                    <FormattedMessage id="button.get.started"/>
                </Button>
            </Link>
        </div>
    );
};