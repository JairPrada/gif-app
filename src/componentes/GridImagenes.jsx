import { Card, Col, Divider, Image, Row, Typography } from 'antd';

import React, { Fragment } from 'react';

import { Parallax } from 'rc-scroll-anim';
import { useGridImagenes } from '../hooks/useGridImagenes';
import Esqueleto from './Esqueleto';


const GridImagenes = ({ categoria = "Maradona", url = "https://ep01.epimg.net/elpais/imagenes/2020/08/28/eps/1598638303_049709_1598638551_noticia_normal.jpg" }) => {


    const { data, loading } = useGridImagenes(categoria)

    return (
        <Fragment>
            <Typography.Title level={2} className="entrandoIzquierda" >{categoria}</Typography.Title>
            <Divider />

            <Row gutter={[9, 8]} justify="center">
                {
                    loading
                        ? <><Esqueleto /> </>

                        : data.map((e) => <Col xs={20} sm={12} md={8} lg={6}>
                            <Parallax animation={{ x: 0, y: 0 }} style={{ transform: 'translateX(2vw)', margin: '1px auto' }} >
                                <Card className="card" cover={<Image src={e.url} width="100%" loading={loading} />} >
                                    <Typography.Text style={{ color: "white" }}> {e.titulo}</Typography.Text>
                                </Card>
                            </Parallax>

                        </Col>)

                }
            </Row>
        </Fragment>
    )
}
export default GridImagenes;