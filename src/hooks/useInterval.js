import { useEffect, useRef } from 'react';

export const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        if (callback) {
            savedCallback.current = callback;
        }
    },        [callback]);
    useEffect(() => {
        function act() {
            savedCallback.current();
        }
        if (delay != null) {
            const thisInterval = setInterval(act, delay);
            return () => {
                clearInterval(thisInterval);
            };
        }
    },        [callback, delay]);
};
