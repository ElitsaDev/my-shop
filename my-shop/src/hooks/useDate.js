import { useEffect, useState } from 'react';
import * as formatDate from '../utils/dateFormater';

export const useDate = () => {

    const [today, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer);
        }
    }, []);

    return [formatDate(today)];
}

