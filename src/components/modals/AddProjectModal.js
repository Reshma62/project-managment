import { Button, Flex, Form, Modal, Input, message, Select } from "antd";
import { useState } from "react";
import AddTeam from "../projects/AddTeam";

import { postHooks } from "@/hooks/apiHooks";

const AddProjectModal = ({
  setIsModalOpen,
  isModalOpen,
  handleCancel,
  handleOk,
  refetch,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onFinish = async (values) => {
    setLoading(true);

    const data = {
      project_name: values.project_name,
      status: values.status,
      team: tags,
    };

    const responseData = await postHooks(data, "project");
    console.log(responseData);
    if (responseData.data) {
      message.success("Added project successfully!");
      setLoading(false);
      setIsModalOpen(false);
      form.resetFields();
      refetch();
    } else {
      message.error("Something went wrong!");
      setLoading(false);
    }
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
              <Select
                defaultValue="inProgress"
                onChange={handleChange}
                options={[
                  {
                    value: "inProgress",
                    label: "In progress",
                  },
                  {
                    value: "not_start ",
                    label: "Not Started",
                  },
                  {
                    value: "complete",
                    label: "Complete",
                  },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
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
