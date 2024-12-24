import locales from '../lang/locales';

export default function languageReducer(state, action) {
   switch(action.type) {
      case "SET_LANGUAGE":
         return {
            ...state,
            language: locales[action.payload],
            messages: require(`../lang/${action.payload}.json`)
         };
      case "GET_LANGUAGE":
         return state.language;
      case "GET_MESSAGES":
         return state.messages;
      default:
         return state;
   }
}