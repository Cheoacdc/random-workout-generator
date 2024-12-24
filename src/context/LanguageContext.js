import { createContext, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';

import locales from '../lang/locales';
import languageReducer from './LanguageReducer';

const initialState = {
	language: locales.es,
    messages: require(`../lang/es.json`)
};

export const LanguageContext = createContext(initialState);

export function LanguageContextProvider({ children }) {
    LanguageContextProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    // Use reducer
    const [state, dispatch] = useReducer(languageReducer, initialState);

    // Define reducer actions
    function getLanguage() {
      dispatch({
        type: "GET_LANGUAGE"
      });
    }

    function getMessages() {
      dispatch({
        type: "GET_MESSAGES"
      });
    }

    function setLanguage(localeId) {
      dispatch({
        type: "SET_LANGUAGE",
        payload: localeId,
      });
    }

    const contextValue = useMemo(() => ({
      language: state.language,
      messages: state.messages,
      getLanguage,
      setLanguage,
      getMessages
    }), [state.language, state.messages]);

    return (
      <LanguageContext.Provider
        value={contextValue}
      >
        {children}
      </LanguageContext.Provider>
    );
  }