"use client";

import {
  EditOutlined,
  FolderViewOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import ProjectEditModal from "../modals/ProjectEditModal";
import Link from "next/link";
import { deleteHooks } from "@/hooks/apiHooks";
import { message } from "antd";

const Card = ({ project, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = async () => {
    const responseData = await deleteHooks("project", project._id);
    console.log(responseData);
    if (responseData.message) {
      message.success(" project deleted successfully!");
      refetch();
    } else {
      message.error("Something went wrong!");
    }
  };
  return (
    <div className="bg-white rounded-lg p-4 mb-5">
      <div className="flex justify-between items-center">
        <h3>{project.project_name}</h3>
        <p>{project.status}</p>
        <div>
          <div className="flex gap-3">
            <EditOutlined onClick={showModal} className="text-2xl" />
            <Link href={`projects/${project._id}`}>
              <FolderViewOutlined className="text-2xl" />
            </Link>
            <DeleteOutlined
              onClick={handleDelete}
              className="text-2xl cursor-pointer !text-red-400"
            />
          </div>
        </div>
      </div>
      <ProjectEditModal
        refetch={refetch}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        project={project}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default Card;
