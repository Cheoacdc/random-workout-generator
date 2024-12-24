import React, { useContext } from 'react';

import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    Select,
    Switch,
} from '@mui/material';

import { useColorScheme, useTheme } from '@mui/material/styles';

import '../../styles/utility.css';
import { FormattedMessage } from 'react-intl';

import locales from '../../lang/locales';
import { LanguageContext } from '../../context/LanguageContext';

export const AppOptions = () => {
    const { mode, setMode } = useColorScheme();
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const { language, setLanguage } = useContext(LanguageContext);

    const handleThemeChange = (event) => {
        setMode(event?.target?.checked ? 'dark' : 'light');
    }

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    }

    const isDarkTheme = mode === 'dark';

    return(
        <List sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%',
            flexDirection: { xs: 'column', lg: 'row'}
        }}>
            <ListItem className={ isLargeScreen ? 'min_no_wrap' : ''} sx={{
                justifyContent: 'space-between',
                paddingTop: '20px',
                paddingX: { xs: '20px', lg: '16px' }
            }}>
                <ListItemText className='min_no_wrap' id="theme-switch-label">
                    <FormattedMessage id="change.theme"/>
                </ListItemText>
                <Box>
                    <Switch
                        checked={isDarkTheme}
                        onChange={handleThemeChange}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-wifi'}}
                    />
                </Box>
            </ListItem>
            <ListItem className={ isLargeScreen ? 'min_no_wrap' : ''} sx={{
                justifyContent: 'space-between',
                paddingX: { xs: '20px', lg: '16px' }
            }}>
                <ListItemText sx={{ display: { xs: 'block', lg: 'none' }}} className='min_no_wrap' id="theme-switch-label">
                    <FormattedMessage id="message.language"/>
                </ListItemText>
                <FormControl variant={ isLargeScreen ? 'standard' : 'outlined'}>
                    <InputLabel sx={{ display: { xs: 'none', lg: 'block' }}} id="demo-simple-select-label">
                        <FormattedMessage id="message.language"/>
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language.localeId}
                        displayEmpty
                        onChange={handleLanguageChange}
                    >
                        {Object.keys(locales).map(locale => {
                            const { localeId, languageName } = locales[locale];

                            return <MenuItem key={localeId} value={localeId}>{languageName}</MenuItem>;
                        })}
                    </Select>
                </FormControl>
            </ListItem>
        </List>
    )
}