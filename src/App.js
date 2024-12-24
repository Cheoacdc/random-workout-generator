import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { Home } from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl'
import { useContext } from 'react';

import { theme } from './themes/theme';

import { LanguageContext } from './context/LanguageContext';

export default function App() {
    const queryClient = new QueryClient();
    const { language, messages } = useContext(LanguageContext);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <IntlProvider
                    locale={language.localeId}
                    defaultLocale={'es'}
                    messages={messages}
                >
                    <Home />
                </IntlProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
