import { useState } from "react";

export function useToggle (initialValue = false) {
    const [state, setState] = useState(initialValue);

    function toggleState () {
        setState(!state);
    }

    return [ state, toggleState];
}