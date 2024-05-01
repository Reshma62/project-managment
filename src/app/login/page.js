"use client";

import { useState } from "react";
import { Button, Checkbox, Form, Input, Flex, message } from "antd";
import { useRouter } from "next/navigation";

import { createServer } from "miragejs";
import { useQuery } from "@tanstack/react-query";

createServer({
  routes() {
    this.get("/api/login", () => {
      return {
        _id: 1,
        name: "admin",
        password: "password",
      };
    });
  },
});
const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const { isPending, error, data, isLoading } = useQuery({
    queryKey: ["user_data"],
    queryFn: async () => {
      const res = await fetch("/api/login");
      return res.json();
    },
  });
  const router = useRouter();
  const onFinish = (values) => {
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      if (values.username === data.name && values.password === data.password) {
        // Mock successful login
        message.success("Logged in successfully!");
        console.log("Success:", values);
        router.push("/");
        // Redirect or perform necessary action after successful login
      } else {
        // Mock unsuccessful login
        message.error("Invalid username or password!");
        console.log("Failed: Invalid username or password");
      }
    }, 1000); // Simulate network delay
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
        // onFinishFailed={onFinishFailed}
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
