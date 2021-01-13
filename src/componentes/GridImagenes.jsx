import { Card, Col, Image, Row } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import traerImagenes from '../helpers/traerImagenes';
import { Parallax } from 'rc-scroll-anim';
const { Meta } = Card;

const GridImagenes = ({ categoria = "Maradona", url = "https://ep01.epimg.net/elpais/imagenes/2020/08/28/eps/1598638303_049709_1598638551_noticia_normal.jpg" }) => {

    useEffect(() => {
        traerImagenes(categoria).then((gifs) => setGifs(gifs));
    }, [categoria])

    const [gifs, setGifs] = useState([]);

    return (
        <Fragment>
            <h2>{categoria}</h2>
            <Row gutter={[9, 8]} justify="center">
                {
                    gifs.map((e) => <Col xs={20} sm={12} md={8} lg={6}> <div>
                        <Parallax animation={{ x: 0 }} style={{ transform: 'translateX(-80vw)', margin: '10px auto' }} ><Card style={{ width: "100%" }} cover={<Image src={e.url} width="100%" />}><Meta title={e.titulo} /></Card> </Parallax>
                    </div></Col>)
                }
            </Row>
            <div style={{ marginBottom: "50vh" }}></div>
        </Fragment>
    )
}
export default GridImagenes;