import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { NavbarLayout } from './components/layout';
import { Home, Results, Splash } from './pages';
import { ThemeProvider } from '@mui/material/styles';
import { IntlProvider } from 'react-intl'
import { useContext } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
                    <BrowserRouter>
                        <Routes>
                            <Route element={<NavbarLayout />}>
                                <Route path="/home" element={<Home />} />
                                <Route path="/results" element={<Results />} />
                            </Route>

                            <Route path="*" element={<Splash />} />
                        </Routes>
                    </BrowserRouter>
                </IntlProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
