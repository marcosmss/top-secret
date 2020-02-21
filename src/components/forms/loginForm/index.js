import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "./loginForm.css";
import { useNavigate } from 'react-router';
import Logo from './../../../assets/img/logo_superbid.png'

function LoginForm(props) {

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  return (
    <div className="container">
      <div className="box">
        <img src={Logo} alt="" srcset="" className="img-login" />
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>            
            <Button
              type="primary"
              onClick={() => navigate('/admin/home')}
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>            
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Form.create('Login')(LoginForm);

