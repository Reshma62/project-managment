"use client";

import LoadingPage from "@/app/loading";
import AddProjectModal from "@/components/modals/AddProjectModal";
import Card from "@/components/projects/Card";
import useProjects from "@/hooks/useProjects";
import { Button } from "antd";
import { useState } from "react";

const ProjectPage = () => {
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
  const { data: projects, isLoading } = useProjects();
  isLoading && <LoadingPage />;
  return (
    <div>
      <div className="flex justify-between mt-3 items-center">
        <h2 className="max-md:text-2xl text-4xl my-5 font-semibold">
          Project Overview
        </h2>
        <Button type="primary" onClick={showModal}>
          Add Project
        </Button>
      </div>
      <div className="">
        {projects?.map((project) => (
          <Card key={project.project_id} project={project} />
        ))}
      </div>
      <AddProjectModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};

export default ProjectPage;
