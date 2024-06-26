"use client";

import { useQuery } from "@tanstack/react-query";

const useProjects = () => {
  const { isPending, error, data, isLoading, refetch } = useQuery({
    queryKey: ["project_data"],
    queryFn: async () => {
      const res = await fetch("/api/project");
      const data = await res.json();
      console.log(data);
      return data.data;
    },
  });
  return { isPending, error, data, isLoading, refetch };
};

export default useProjects;
