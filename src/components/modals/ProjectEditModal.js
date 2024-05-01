"use client";

import { Button, Flex, Form, Input, Modal, message } from "antd";
import { useState } from "react";
const ProjectEditModal = ({ isModalOpen, handleCancel, handleOk, project }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate authentication
    console.log(values);
    setTimeout(() => {
      setLoading(false);

      message.success("Updated project in successfully!");
      //     console.log("Success:", values);
    }, 1000); // Simulate network delay
  };
  return (
    <>
      <Modal
        title={`${project.project_name} Edit`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Flex>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              project_name: project.project_name || "project name",
              status: project.status || "project status",
            }}
            onFinish={onFinish}
            autoComplete="off"
            className="w-full"
          >
            <Form.Item
              label="Project Name"
              name="project_name"
              rules={[
                {
                  required: true,
                  message: "Please input your Project Name!",
                },
              ]}
            >
              <Input className="w-full" />
            </Form.Item>

            <Form.Item label="Status" name="status">
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Update
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Modal>
    </>
  );
};
export default ProjectEditModal;
