import { Divider, Typography } from 'antd';
import React, { useState, Fragment } from 'react';
import AgregarCategoria from './AgregarCategoria';
import GridImagenes from './GridImagenes';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Gifapp = (props) => {
    const [categorias, setCategorias] = useState([""]);
    return (
        <Fragment>
            <Layout>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">Inicio</Menu.Item>
                        <Menu.Item key="2">Mas Apps</Menu.Item>
                        <Menu.Item key="3">Repositorio</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: "50px", minHeight: "900px" }}>
                    <Title level={1}>Giff App</Title>
                    <AgregarCategoria setCategorias={setCategorias} />
                    <Divider />
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item>Lista</Breadcrumb.Item>
                        <Breadcrumb.Item>Gifs</Breadcrumb.Item>
                    </Breadcrumb>
                    {
                        categorias.map((categoria) => <GridImagenes key={categoria} categoria={categoria} />)
                    }
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Derechos reservados
                </Footer>

            </Layout>



        </Fragment>
    )
}
export default Gifapp;