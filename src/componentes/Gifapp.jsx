import { Divider, Typography, BackTop, notification } from 'antd';
import React, { useState, Fragment, useEffect } from 'react';
import AgregarCategoria from './AgregarCategoria';
import GridImagenes from './GridImagenes';
import { Layout, Breadcrumb } from 'antd';
import { LinkedinOutlined, WhatsAppOutlined, GithubOutlined, HomeOutlined } from '@ant-design/icons';
const { Content, Footer } = Layout;
const { Title } = Typography;

const Gifapp = (props) => {
    const [categorias, setCategorias] = useState(["PSG"]);
    const [primera, setPrimera] = useState(true)
    useEffect(() => {
        if (primera === true) {
            notification.open({
                message: 'Bienvenido a Giff App',
                description:
                    'Esta aplicacion esta diseñada para que  busques los mejores gifs, animate y prueba ',
                icon: <HomeOutlined style={{ color: '#108ee9' }} />,
            });
            setPrimera(false)
        }
    }, [primera])
    return (
        <Fragment>
            <Layout id="contenido">
                <BackTop />
                <Content style={{ padding: "50px", minHeight: "900px" }}>
                    <Title level={1} style={{ color: "white", fontSize: "3rem" }} className="entrandoDerecha">Giff App</Title>
                    <AgregarCategoria setCategorias={setCategorias} />
                    <Divider />
                    <Breadcrumb className="entrandoDerecha" style={{ margin: '16px 0', color: "white" }}>
                        <Breadcrumb.Item>Inicio</Breadcrumb.Item>
                        <Breadcrumb.Item>Lista</Breadcrumb.Item>
                        <Breadcrumb.Item style={{ color: "#4A748C" }}>Gifs</Breadcrumb.Item>
                    </Breadcrumb>
                    {
                        categorias.map((categoria) => <GridImagenes key={categoria} categoria={categoria} />)
                    }
                </Content>
                <Footer className="footer" style={{ textAlign: 'center', marginTop: '25vh', backgroundColor: "#13303F", color: "white" }}>
                    Jairprada9@gmail.com
                    <br />
                    <a href="http://www.github.com/JairPrada" style={{ fontSize: "20px", margin: "5px", color: "white" }} target="_blank" rel="noopener noreferrer">
                        <GithubOutlined />
                    </a>
                    <a href="https://www.linkedin.com/in/jair-andres-prada-sierra-462aa11ab/" style={{ fontSize: "20px", margin: "5px", color: "white" }} target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined style={{ fontSize: "20px", margin: "5px" }} />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=573167692857&text=%20" style={{ fontSize: "20px", margin: "5px", color: "white" }} target="_blank" rel="noopener noreferrer">
                        <WhatsAppOutlined style={{ fontSize: "20px", margin: "5px" }} />
                    </a>
                </Footer>

            </Layout>



        </Fragment>
    )
}
export default Gifapp;