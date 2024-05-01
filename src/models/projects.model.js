import mongoose from "mongoose";
const Schema = mongoose.Schema;

const dataSchema = new Schema(
  {
    project_name: String,
    start_date: Date,
    end_date: Date,
    status: String,
    team: [String],
    tasks: [
      {
        type: Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  { timestamps: true } // Automatically add createdAt and updatedAt to
);

const Project =
  mongoose.models.Project || mongoose.model("Project", dataSchema);

export default Project;
