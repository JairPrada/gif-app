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
                    setCategorias(categorias => [categoria, ...categorias]);
                    message.success("Se realizo la busquedo correctamente", 1)
                }).catch((e) => {
                    message.error(e, 1)
                })
        } else {
            message.loading("Buscando .....", 1)
                .then(() => {
                    message.error("La busqueda debe realizarse almenos con 3 caracteres", 1)
                    setCategoria("");
                })
        }
    }

    return (
        <Fragment>
            <div className="entrandoIzquierda">
                <Search placeholder="Busca los mejores gifs " onChange={guardarCategoria} value={categoria} onSearch={buscar} enterButton></Search>
            </div>
        </Fragment>
    )
}

AgregarCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired,
}

export default AgregarCategoria;
