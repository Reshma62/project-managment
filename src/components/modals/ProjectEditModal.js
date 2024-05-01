import { Button, Flex, Form, Modal, Input, message, Select } from "antd";
import { useEffect, useState } from "react";
import AddTeam from "../projects/AddTeam";

import { patchHooks } from "@/hooks/apiHooks";

const ProjectEditModal = ({
  setIsModalOpen,
  isModalOpen,
  handleCancel,
  handleOk,
  project,
  refetch,
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    setTags(project.team);
  }, [project.team]);

  const onFinish = async (values) => {
    setLoading(true);

    const data = {
      project_name: values.project_name,
      status: values.status,
      team: tags,
    };

    const responseData = await patchHooks(data, "project", project._id);
    console.log(responseData);
    if (responseData.data) {
      message.success(" project updated successfully!");
      refetch();
      setLoading(false);
      setIsModalOpen(false);
      form.resetFields();
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
            initialValues={{
              project_name: project.project_name || "",
              status: project.status || "",
            }}
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
                Update projects
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Modal>
    </div>
  );
};

export default ProjectEditModal;
