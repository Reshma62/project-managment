import DashboardCard from "@/components/DashboardCard";

const DashboardPage = () => {
  return (
    <div>
      <h1 className=" max-md:text-2xl text-4xl my-5 font-semibold">
        Welcome Peter Richards!
      </h1>
      <p className="text-lg font-medium mb-2">Here is your dashboard</p>
      <DashboardCard />
    </div>
  );
};

export default DashboardPage;
