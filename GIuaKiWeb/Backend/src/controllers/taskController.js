const Task = require('../models/taskModel');

exports.getAllTask = async (req, res) => {
    try {
        const result = await Task.getAllTask();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.createTask = async (req, res) => {
    try {
        const result = await Task.createTask(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const result = await Task.updateTask(req.params.id, req.body);
        if (!result) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.deleteTask(req.params.id);
        res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.HoanThanhTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });

        const updatedTask = await task.HoanThanhTask();
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};