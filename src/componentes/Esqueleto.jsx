import { Card, Avatar, Row, Col, Typography ,Spin } from 'antd';
import React, { Fragment } from 'react';
const { Meta } = Card;
const Esqueleto = () => {

    return (
        <Fragment>
            <Typography.Title level={2} style={{ color: "white" }}>Cargando  <Spin size="large"  /></Typography.Title>
            <Row gutter={[9, 8]} justify="center" >
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <Col xs={20} sm={12} md={8} lg={6}>
                    <Card  className="card" style={{width:"200px"}} loading={true}>
                        <Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
export default Esqueleto;