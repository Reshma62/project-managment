const ProjectDetails = async ({ params }) => {
  console.log(params);
  const project = await fetch(`/api/projects/${params.id}`);
  console.log(project);
  return <div>Hello I am from ProjectDetails</div>;
};

export default ProjectDetails;
