"use client";

import {
  EditOutlined,
  FolderViewOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import ProjectEditModal from "../modals/ProjectEditModal";
import Link from "next/link";

const Card = ({ project }) => {
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
  return (
    <div className="bg-white rounded-lg p-4 mb-5">
      <div className="flex justify-between items-center">
        <h3>{project.project_name}</h3>
        <p>{project.status}</p>
        <div>
          <div className="flex gap-3">
            <EditOutlined onClick={showModal} className="text-2xl" />
            <Link href={`/projects/${project.project_id}`}>
              <FolderViewOutlined className="text-2xl" />
            </Link>
            <DeleteOutlined className="text-2xl cursor-pointer !text-red-400" />
          </div>
        </div>
      </div>
      <ProjectEditModal
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
