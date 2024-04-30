"use client";

import { useState } from "react";
import { Button, Checkbox, Form, Input, Flex, message } from "antd";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      if (values.username === "admin" && values.password === "password") {
        // Mock successful login
        message.success("Logged in successfully!");
        console.log("Success:", values);
        // Redirect or perform necessary action after successful login
      } else {
        // Mock unsuccessful login
        message.error("Invalid username or password!");
        console.log("Failed: Invalid username or password");
      }
    }, 1000); // Simulate network delay
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Flex justify="center" align="center" className="h-screen">
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="bg-slate-300 max-w-[600px] w-full !px-12 !py-10 rounded-lg"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input className="w-full" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default LoginPage;
