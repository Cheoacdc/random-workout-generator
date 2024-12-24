import React from 'react';
import PropTypes from 'prop-types';

import useMediaQuery from '@mui/material/useMediaQuery';

import {
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
} from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { MenuOutlined, Close } from '@mui/icons-material';
import { useToggle } from '../../hooks';

export const HamburgerMenuWrapper = ({ children }) => {
    HamburgerMenuWrapper.propTypes = {
        children: PropTypes.node
    };

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const [ isOpen, toggleOpen ] = useToggle(false);

    const handleClick = () => {
        toggleOpen();
    }

    if (isLargeScreen) {
        return children;
    }

    let button;

    if (isOpen) {
        button = <Close />;
    } else {
        button = <MenuOutlined />;
    }

    return (
        <Box sx={{ paddingTop: '8px' }}>
            <IconButton edge="start" color="inherit" aria-label="menu"
                onClick={ handleClick }
                sx={{ display: { xs: 'block', lg: 'none' } }}
            >
                {button}
            </IconButton>

            <Drawer anchor={'right'} open={ isOpen } onClose={toggleOpen}>
                <Box
                    sx={{ width: '225px' }}
                    alt="Menu"
                >
                    <List sx={{ paddingTop: '16px' }}>
                        <ListItem sx={{ justifyContent: 'flex-end', padding : '0px' }}>
                            <Close
                                sx={{ float: 'right', fontSize: '30px', paddingRight: '20px' }}
                                onClick={ toggleOpen }
                            />
                        </ListItem>
                        { children }
                    </List>
                </Box>
            </Drawer>
        </Box>
    )
}
