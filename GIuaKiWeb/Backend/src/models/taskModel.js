const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    dueDate: {
        type: Date,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});
taskSchema.statics.getAllTask = async function() {
    return await this.find({});
};
taskSchema.methods.HoanThanhTask = async function() {
    this.completed = !this.completed;
    return await this.save();
};
taskSchema.statics.createTask = async function(taskData) {
    const task = new this(taskData);
    return await task.save();
};

taskSchema.statics.updateTask = async function(id, updateData) {
    return await this.findByIdAndUpdate(id, updateData, { new: true });
};
taskSchema.statics.deleteTask = async function(id) {
    return await this.findByIdAndDelete(id);
};

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;