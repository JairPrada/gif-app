import { Divider, Typography } from 'antd';
import React, { useState, Fragment } from 'react';
import AgregarCategoria from './AgregarCategoria';
import GridImagenes from './GridImagenes';
const { Title } = Typography;

const Gifapp = (props) => {
    const [categorias, setCategorias] = useState([""]);
    return (
        <Fragment>
            <Title level={1}>Giff App</Title>
            <AgregarCategoria setCategorias={setCategorias} />
            <Divider />
            {
                categorias.map((categoria) => <GridImagenes key={categoria} categoria={categoria} />)
            }
        </Fragment>
    )
}
export default Gifapp;