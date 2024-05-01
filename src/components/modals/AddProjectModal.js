import { Button, Flex, Form, Modal, Input, message } from "antd";
import { useState } from "react";
import AddTeam from "../projects/AddTeam";
import axios from "axios";

const AddProjectModal = ({ isModalOpen, handleCancel, handleOk }) => {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const onFinish = async (values) => {
    setLoading(true);

    const data = {
      project_name: values.project_name,
      status: values.status,
      team: tags,
    };

    const res = await axios.post(`http://localhost:3000/api/project`, data);
    console.log(res.data);
    setTimeout(() => {
      setLoading(false);

      message.success("Updated project in successfully!");
      //     console.log("Success:", values);
    }, 1000); // Simulate network delay
  };
  return (
    <div>
      <Modal
        title={`Add project `}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        <Flex>
          <Form
            layout="vertical"
            name="basic"
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
            <Form.Item label="Add team member" name="team_member">
              <AddTeam tags={tags} setTags={setTags} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Add
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Modal>
    </div>
  );
};

export default AddProjectModal;
