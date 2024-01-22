import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Header from "../../components/Header";

const Login = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  useEffect(() => {
    setClientReady(!clientReady);
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };

  return (
    <>
      <Header />
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          width: "500px",
          paddingTop: "100px",
          paddingBottom: "150px",
          borderRadius: "30px",
          top: "50%",
          left: "50%",
          margin: 'auto',
          textAlign: "center",
          background: "#191919",
        }}
      >
        <Form.Item>
          <h1 style={{ color: "#6C3EB8" }}>LOG IN</h1>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            style={{ width: "400px" }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            style={{ width: "400px" }}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#6C3EB8" }}
            >
              Log in
            </Button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
