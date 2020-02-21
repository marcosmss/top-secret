import { Table, Divider, Tag, Row, Col, Button } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Ambiente',
    dataIndex: 'ambiente',
    key: 'ambiente',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag === 'PRONTA' ? 'green' : tag === 'SEM INFORMAÇÕES' ? 'geekblue' : 'volcano';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Ultima Atualização',
    dataIndex: 'last_update',
    key: 'last_update',
  },
  {
    title: 'Ação',
    key: 'action',
    render: (text, record) => (
      <Button type="primary">
        editar
      </Button>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Superbid - Loja',
    ambiente: "DEV / HMG / PROD",
    last_update: '04/02/2020',
    tags: ['PRONTA'],
  },
  {
    key: '2',
    name: 'Deadelo',
    ambiente: "DEV / HMG / PROD",
    last_update: '04/02/2020',
    tags: ['SEM INFORMAÇÕES'],
  },
  {
    key: '3',
    name: 'FCA',
    ambiente: "DEV / HMG / PROD",
    last_update: '04/02/2020',
    tags: ['Em Construção'],
  },
];

export default function TableProjects() {
  return (
      <Row>
          <Row>
              <Col span={50} offset={2}>
                <h1 style={{ color: "#FFF", padding: 20}}>Projetos ></h1>
              </Col>
          </Row>
        <Col lg={{ span: 18, offset: 4 }} md={{ span: 20, offset: 2}} style={{backgroundColor: "#FFF", borderRadius: 5}}>      
         <Row>            
            <Col style={{ padding: 20 }}>
                <Table columns={columns} dataSource={data} />
            </Col>
         </Row>
        </Col>        
      </Row>
  );
}
