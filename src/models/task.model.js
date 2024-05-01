import mongoose from "mongoose";
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task_name: String,
  assigned_to: String,
  due_date: Date,
  status: String,
  project_id: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
});
const Task = mongoose.models.Task || mongoose.model("Task", taskSchema);

export default Task;
