import { message, Input } from 'antd';
import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
const { Search } = Input;
const AgregarCategoria = ({ setCategorias }) => {
    const [categoria, setCategoria] = useState("");
    const guardarCategoria = (e) => {
        setCategoria(e.target.value);
    }
    const buscar = () => {
        if (categoria.trim().length > 2) {
            message.loading("Buscando .....", 1)
                .then(() => {
                    message.success("Se realizo la busquedo correctamente", 1)
                    setCategorias(categorias => [categoria, ...categorias]);
                })
        } else {
            message.loading("Buscando .....", 1)
                .then(() => {
                    message.error("La busqueda debe realizarse almenos con 2 caracteres", 1)
                    setCategoria("");
                })
        }
    }

    return (
        <Fragment>
            <Search placeholder="Busca los mejores gifs " onChange={guardarCategoria} value={categoria} onSearch={buscar} enterButton></Search>
        </Fragment>
    )
}

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}

export default AgregarCategoria;
