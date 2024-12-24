import React from 'react';

import {
    AppBar,
    Grid2 as Grid,
    Toolbar
} from '@mui/material';

import { Logo, AppOptions } from '../UI';
import { HamburgerMenuWrapper } from './HamburgerMenuWrapper';

export const Navbar = () => {
    return(
        <AppBar position="static">
            <Toolbar variant="dense" sx={{ height: { xs: '60px', lg: '80px' } }}>
                <Grid container spacing={1} sx={{
                    flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Grid size={{ xs: 2, lg: 4 }} />
                    <Grid size={{ xs: 8, lg: 4 }}>
                        <Logo/>
                    </Grid>
                    <Grid
                        size={{ xs: 2, lg: 4 }}
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                        <HamburgerMenuWrapper>
                            <AppOptions/>
                        </HamburgerMenuWrapper>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}