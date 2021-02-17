import { useEffect, useState } from 'react';
import traerImagenes from '../helpers/traerImagenes';
export const useGridImagenes = (categoria) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    useEffect(() => {
        traerImagenes(categoria)
            .then((gifs) => {
                setState({
                    data: gifs,
                    loading: false
                })
            })
    }, [categoria])
    return state;
}