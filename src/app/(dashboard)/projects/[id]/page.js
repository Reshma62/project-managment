const ProjectDetails = async ({ params }) => {

  const project = await fetch(`http://localhost:3000/api/project/${params.id}`);
  const data = await project.json();
  console.log(data.data);
  const { project_name, status, team } = data.data || {};
  return (
    <div className="bg-white rounded-lg p-4 mb-5 text-center space-y-5 mt-10">
      <h1 className="max-md:text-2xl text-4xl my-5 font-semibold">
        {" "}
        Project Name {project_name}
      </h1>
      <p className="capitalize text-lg">
        {" "}
        Project Status: {status.split("_").join(" ")}
      </p>

      <div className="flex gap-3 justify-center items-center">
        {team?.map((t, index) => (
          <p className="bg-slate-100 px-5 py-2 rounded-lg" key={index}>
            {t}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
