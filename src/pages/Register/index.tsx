import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

const Login = () => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState<boolean>(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = (values: React.ChangeEvent) => {
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
          paddingTop: "80px",
          paddingBottom: "100px",
          borderRadius: "30px",
          top: "50%",
          left: "50%",
          margin: "auto",
          textAlign: "center",
          background: "#191919",
        }}
      >
        <Form.Item>
          <h1 style={{ color: "#6C3EB8" }}>REGISTER</h1>
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            style={{ width: "400px" }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            style={{ width: "400px" }}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Surname"
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
            <div style={{ display: "flex", gap: "90px", paddingTop: "40px" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ background: "#6C3EB8" }}
              >
                Register
              </Button>
              <Link to="/">
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ background: "#6C3EB8" }}
                >
                  Come Back
                </Button>
              </Link>
            </div>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
