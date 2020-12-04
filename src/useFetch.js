import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true });

    // useRef
    const isCurrent = useRef(true);

    useEffect(() => {
        return () => {
          // called when component is going to unmount
          isCurrent.current = false;  
        };
    }, []);

    // called whenever the url changes
    useEffect(() => {
        // setState({ data: null, loading: true });
        setState(state => ({ data: state.data, loading: true })); // smoother ui
        fetch(url)
            .then(x => x.json())
            .then(y => {
                if (isCurrent.current) {
                    setState({ data: y, loading: false })
                }
            });
    }, [url, setState])

    return state;
}