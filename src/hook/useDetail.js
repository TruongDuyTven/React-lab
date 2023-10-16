import { useState } from 'react';

const useFilmDetails = () => {
    const [selectedFilm, setSelectedFilm] = useState(null);

    const handleFilmSelect = (film) => {
        setSelectedFilm(film);
    };

    const clearSelectedFilm = () => {
        setSelectedFilm(null);
    };

    return { selectedFilm, handleFilmSelect, clearSelectedFilm };
};

export default useFilmDetails;