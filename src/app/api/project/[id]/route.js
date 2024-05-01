import connectDB from "@/config/dbConnect";
import Project from "@/models/projects.model";
import { NextResponse } from "next/server";
connectDB();

export async function GET(request, { params }) {
  try {
    const id = params.id;
    const res = await Project.findOne({ _id: id });

    return NextResponse.json({
      message: "get single project",
      data: res,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
}
export async function PATCH(request, { params }) {
  try {
    const id = params.id;
    const data = await request.json();
    const res = await Project.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });

    return NextResponse.json({
      message: "get single project",
      data: res,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
}

export async function DELETE(request, { params }) {
  const id = params.id;
  try {
    await Project.findOneAndDelete({ _id: id });

    return NextResponse.json({
      message: "Delete project successfully",
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
}
