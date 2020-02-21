import React, { useEffect, useState } from 'react';
import { Table, Tag, Row, Col, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

export default function TableProjects() {

  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    if(projects.length === 0) {
      async function loadProjects() {        
        const response = await api.get(`/faststore`);
        setProjects(response.data);
      }
      loadProjects();                    
    }
  }, [projects]);
   

  const navigate = useNavigate();


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
      render: (text, record) => (console.log(record),
        <Button onClick={() => navigate(`/admin/customize/${record.id}`)} type="primary">
          editar
        </Button>
      ),
    },
  ];
  
  const data =  projects.map((project, key) => ({    
      key,
      name: project.title,
      ambiente: "DEV / HMG / PROD",
      last_update: '04/02/2020',
      tags: key === 1 ? ['PRONTA'] : key === 2 ? ['Em Construção'] : ['SEM INFORMAÇÕES'],    
      id: project._id
  }));
  // [
  //   {
  //     key: '1',
  //     name: 'Superbid - Loja',
  //     ambiente: "DEV / HMG / PROD",
  //     last_update: '04/02/2020',
  //     tags: ['PRONTA'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Deadelo',
  //     ambiente: "DEV / HMG / PROD",
  //     last_update: '04/02/2020',
  //     tags: ['SEM INFORMAÇÕES'],
  //   },
  //   {
  //     key: '3',
  //     name: 'FCA',
  //     ambiente: "DEV / HMG / PROD",
  //     last_update: '04/02/2020',
  //     tags: ['Em Construção'],
  //   },
  // ];

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
