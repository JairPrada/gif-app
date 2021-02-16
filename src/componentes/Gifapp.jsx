import { Divider, Typography } from 'antd';
import React, { useState, Fragment } from 'react';
import AgregarCategoria from './AgregarCategoria';
import GridImagenes from './GridImagenes';
import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;
const { Title } = Typography;

const Gifapp = (props) => {
    const [categorias, setCategorias] = useState([""]);
    return (
        <Fragment>
            <Layout id="contenido">
                <Content style={{ padding: "50px", minHeight: "900px" }}>
                    <Title level={1} style={{ color: "white" }} className="entrandoDerecha">Giff App</Title>
                    <AgregarCategoria setCategorias={setCategorias} />
                    <Divider />
                    <Breadcrumb className="entrada" style={{ margin: '16px 0', color: "white" }}>
                        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item>Lista</Breadcrumb.Item>
                        <Breadcrumb.Item style={{ color: "#4A748C" }}>Gifs</Breadcrumb.Item>
                    </Breadcrumb>
                    {
                        categorias.map((categoria) => <GridImagenes key={categoria} categoria={categoria} />)
                    }
                </Content>
                <Footer className="footer" style={{ textAlign: 'center', marginTop: '25vh', backgroundColor: "#13303F", color: "white" }}>
                    Derechos reservados
                </Footer>

            </Layout>



        </Fragment>
    )
}
export default Gifapp;