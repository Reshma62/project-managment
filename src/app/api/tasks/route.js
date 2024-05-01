import connectDB from "@/config/dbConnect";
import Project from "@/models/projects.model";
import Task from "@/models/task.model";
import { NextResponse } from "next/server";
connectDB();
export async function POST(request) {
  try {
    const data = await request.json();
    const newTask = new Task(data);
    await newTask.save();
    await Project.findOneAndUpdate(
      { _id: data.project_id },
      {
        $push: {
          tasks: newTask._id,
        },
      },
      { new: true }
    );
    return NextResponse.json({ message: "task created", data: newTask });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
}
