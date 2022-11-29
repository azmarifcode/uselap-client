import { useEffect, useState } from 'react';

const useRole = (email) => {
    const [ isRole, setIsRole ] = useState('');
    useEffect(() => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/users/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setIsRole(data.role);
                // console.log(data.role);
            });
    }, [ email ]);
    // console.log(isRole);
    return [isRole];
};

export default useRole;
