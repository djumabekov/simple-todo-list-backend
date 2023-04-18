import mongoose from 'mongoose';

// "id": 0,
// "description": "Write Essay",
// "status": 0,
// "isChecked": false

const toDoListSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    default: 0,
    required: true,
  },
  isChecked: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('ToDoList', toDoListSchema);
