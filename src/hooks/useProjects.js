import { useQuery } from "@tanstack/react-query";
import projects from "../data/projects.json";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.get("/api/projects", () => {
      return projects;
    });
  },
});

const useProjects = () => {
  const { isPending, error, data, isLoading } = useQuery({
    queryKey: ["project_data"],
    queryFn: async () => {
      const res = await fetch("/api/projects");
      return res.json();
    },
  });
  return { isPending, error, data, isLoading };
};

export default useProjects;
