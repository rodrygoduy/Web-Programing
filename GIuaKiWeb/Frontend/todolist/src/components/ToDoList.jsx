import ToDoItem from "./ToDoItem";
import { PlusCircleOutlined , LogoutOutlined } from '@ant-design/icons';
import '../Style/TodoList.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTaskForm from "./AddTaskForm";

const TodoList = ({onLogout}) => {
    const [tasks, setTasks] = useState([]);
    const [addForm, setAddForm] = useState(false);
    const [editTask, setEditTask] = useState(null);
    const [editTaskForm, setEditTaskForm] = useState(false);

    const fetchTasks = async () => {
        try {
            const response = await axios.get("/api/task");
            setTasks(response.data);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách nhiệm vụ", error);
        }
    };
    const addTask = async (taskData) => {
        try {
            await axios.post("/api/task", taskData);
            fetchTasks();
            setAddForm(false);
        } catch (error) {
            console.error("Lỗi khi thêm nhiệm vụ", error);
        }
    };
    const updateTask = async (taskId, updateData) => {
        try {
            await axios.put(`/api/task/${taskId}`, updateData);
            fetchTasks();
            setEditTaskForm(false);
            setEditTask(null);
        } catch (error) {
            console.error("Lỗi khi sửa nhiệm vụ", error);
        }
    };
    const deleteTask = async(taskId) => {
        try{
            await axios.delete(`/api/task/${taskId}`)
            fetchTasks();
        }catch(error){
            console.error("lỗi xoa nv", error)
        }
    };
    const HoanThanhTask = async (taskId, newComplete) => {
        try{
            await axios.put(`/api/task/${taskId}`, {completed : newComplete })
            fetchTasks()
        } catch(error){
            console.error("Loi khi hoan thanh task", error)
        }
    }

    const handleCancel = () => {
        setAddForm(false);
        setEditTaskForm(false);
    };
    const chinhSua = (task) => {
        setEditTask(task);
        setEditTaskForm(true);
    };
    useEffect(() => {
        fetchTasks();
    }, []);
    return (
        <div className="ToDoList">
            <h1 style={{ textAlign: 'center' }}>Todo List</h1>
            <div>
                {tasks.map((task) => (
                    <ToDoItem
                        key={task._id}
                        taskId={task._id}
                        title={task.title}
                        dueDate={task.dueDate}
                        completed={task.completed}
                        onEdit={() => chinhSua(task)}
                        onDelete={()=> deleteTask(task._id)}
                        onHoanThanhTask = {HoanThanhTask}
                        
                    />
                ))}
            </div>
            {addForm && <AddTaskForm onAddTask={addTask} onCancel={handleCancel} />}
            {editTaskForm && (
                <AddTaskForm
                    onAddTask={(updatedData) => updateTask(editTask._id, updatedData)}
                    onCancel={handleCancel}
                    initialData={editTask}
                />
            )}
            <div className="backsite">
            <div style={{ marginTop: '5px', cursor: 'pointer' }} onClick={() => setAddForm(true)}>
                <PlusCircleOutlined style={{ fontSize: "20px", color: 'red' }} /> Add Task
            </div>
            <div style={{ marginTop: '5px', cursor: 'pointer' }} onClick= {onLogout}>
                <LogoutOutlined style={{ fontSize: "20px", color: 'red' }} /> Log Out
            </div>
            </div>
            
        </div>
    );
};

export default TodoList