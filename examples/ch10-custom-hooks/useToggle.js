import {useState} from 'react';

function useToggle(default=false) {
    const [value, setter] = useState(Boolean(default));
    const toggle = () => setter(v => !v);
    return [value, toggle];
}

// const [isRunning, toggleRunning] = useToggle();

export default useToggle;