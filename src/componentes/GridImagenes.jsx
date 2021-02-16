import { Card, Col, Divider, Image, Row, Typography } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import traerImagenes from '../helpers/traerImagenes';
import { Parallax } from 'rc-scroll-anim';


const GridImagenes = ({ categoria = "Maradona", url = "https://ep01.epimg.net/elpais/imagenes/2020/08/28/eps/1598638303_049709_1598638551_noticia_normal.jpg" }) => {

    useEffect(() => {
        traerImagenes(categoria).then((gifs) => {
            
            setGifs(gifs)
        });
    }, [categoria])

    const [gifs, setGifs] = useState([]);

    return (
        <Fragment>
            <Typography.Title level={2} className="entrandoIzquierda" >{categoria}</Typography.Title>
            <Divider />
            <Row gutter={[9, 8]} justify="center" className="" >
                {
                    gifs.map((e) => <Col xs={20} sm={12} md={8} lg={6}> <div>
                        <Parallax animation={{ x: 0, y: -20 }} style={{ transform: 'translateX(-80vw)', margin: '1px auto' }} >
                            <Card className="card" cover={<Image src={e.url} width="100%" />} >
                                <Typography.Text style={{ color: "white" }}> {e.titulo}</Typography.Text>
                            </Card>
                        </Parallax>
                    </div></Col>)
                }
            </Row>
        </Fragment>
    )
}
export default GridImagenes;