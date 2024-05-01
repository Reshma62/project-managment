import connectDB from "@/config/dbConnect";
import Project from "@/models/projects.model";
import { NextResponse } from "next/server";
connectDB();
export async function POST(request) {
  try {
    const body = await request.json();

    const newProjects = new Project(body);
    await newProjects.save();
    return NextResponse.json({
      message: "project created",
      data: newProjects,
    });
  } catch (error) {
    return NextResponse.json({
      message: "fail",
      error: error,
    });
  }
}
export async function GET(request) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query2 = searchParams.entries();
    console.log(query2);
    // Convert query parameters to an object
    const query = Object.fromEntries(searchParams.entries());
    console.log(query);
    const res = await Project.find(query);
    return NextResponse.json({
      message: "get all projects",
      data: res,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      error: error.message || "Internal server error",
    });
  }
}
