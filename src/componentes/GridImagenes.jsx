import { Card, Col, Image, Row } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import traerImagenes from '../helpers/traerImagenes';
const { Meta } = Card;

const GridImagenes = ({ categoria = "Maradona", url = "https://ep01.epimg.net/elpais/imagenes/2020/08/28/eps/1598638303_049709_1598638551_noticia_normal.jpg" }) => {
    useEffect(() => {
        traerImagenes(categoria).then((gifs) => setGifs(gifs));
    }, [categoria])
    const [gifs, setGifs] = useState([]);

    return (
        <Fragment>
            <h2>{categoria}</h2>
            <Row gutter={[8, 8]}>
                {
                    gifs.map((e) => <Col span={6}><Card style={{ width: "100%" }} cover={<Image src={e.url} width="100%" />}><Meta title={e.titulo} /></Card></Col>)
                }
            </Row>
        </Fragment>
    )
}
export default GridImagenes;