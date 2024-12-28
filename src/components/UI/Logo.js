import React from 'react';

import {
    Box
} from '@mui/material';

import { Link } from 'react-router-dom';

import '../../styles/utility.css';

export const Logo = () => {
    return (
        <Link className='unstyled_link' to="/">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <p>Logo</p>
            </Box>
        </Link>
    );
};