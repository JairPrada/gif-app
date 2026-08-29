import { Divider, Image, Typography } from 'antd';

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

            <div className="masonry">
                {
                    loading
                        ? <Esqueleto />
                        : data.map((e) => (
                            <div className="masonry-item" key={e.url}>
                                <Parallax animation={{ x: 0, y: 0 }} style={{ transform: 'translateX(2vw)', margin: '1px auto' }} >
                                    <div className="card">
                                        <div className="gif-cover">
                                            <Image src={e.url} width="100%" loading={loading} preview={false} />
                                            <div className="gif-caption">{e.titulo}</div>
                                        </div>
                                    </div>
                                </Parallax>
                            </div>
                        ))
                }
            </div>
        </Fragment>
    )
}
export default GridImagenes;
