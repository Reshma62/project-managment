"use client";

import LoadingPage from "@/app/loading";
import Card from "@/components/projects/Card";
import useProjects from "@/hooks/useProjects";

const ProjectPage = () => {
  const { data: projects, isLoading } = useProjects();
  isLoading && <LoadingPage />;
  return (
    <div>
      <h2 className="max-md:text-2xl text-4xl my-5 font-semibold">
        Project Overview
      </h2>
      <div className="">
        {projects?.map((project) => (
          <Card key={project.project_id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
