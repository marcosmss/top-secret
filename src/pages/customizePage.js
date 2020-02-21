import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { useParams } from 'react-router-dom'
import api from '../services/api';
import MyPicker from './myPicker'

function CustomizePage() {

  const [project, setProject] = useState(null);
  const [color, setColor] = useState("orange")
  let { id } = useParams();

  useEffect(() => {
    if(id && !project) {
      async function loadProject() {
        const response = await api.get(`/faststore/${id}`);
        setProject(response.data);
      }
      loadProject();                    
    }
  }, [id, project]);
   
  function handleChange(data){
    setColor(data)
  }

  return (
    !project ? 
      <h1>loading</h1> :
    <Row>
      <Col style={{ padding: 40, marginTop: 100, backgroundColor: "#FFF"}} lg={{ span: 20, offset: 2}}>
        <Row type="flex">          
          <ul>
            <li>Cor Primarias</li>
            <li>light: {project.pallete.primary.light} 
              <MyPicker          
                color={color}
                onChangeComplete={ handleChange }
              />
            </li>
            <li>main: {project && project.pallete.primary.main}</li>
            <li>dark: {project && project.pallete.primary.dark}</li>
            <li>contrastText: {project && project.pallete.primary.contrastText}</li>
          </ul>
          <ul>
            <li>Cor Secondary</li>
            <li>light: {project && project.pallete.secondary.light}</li>
            <li>main: {project && project.pallete.secondary.main}</li>
            <li>dark: {project && project.pallete.secondary.dark}</li>
            <li>contrastText: {project && project.pallete.secondary.contrastText}</li>
          </ul>
        </Row>               
        <Row>
          <Col lg={{span: 4, offset: 20}}>
            <Button type="primary">
              Salvar
            </Button>
          </Col>        
        </Row>
      </Col>                    
    </Row>    
  );
}

export default CustomizePage;