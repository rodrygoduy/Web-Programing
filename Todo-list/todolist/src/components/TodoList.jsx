import React, { useState } from 'react'; 
import ToDoItem from './TodoItem';
import { PlusCircleOutlined } from '@ant-design/icons'; 

const ToDoList = () => {
    const [tasks, setTasks] = useState([ 
        { title: "Gửi email nộp bài tập về nhà", dueDate: "Hôm nay" },
        { title: "Học từ vựng tiếng anh mỗi ngày", dueDate: "Ngày mai" },
        { title: "Viết tiểu luận môn Triết học", dueDate: "Tuần tới" }
    ]);
    
    const [newTaskTitle, setNewTaskTitle] = useState(''); 
    const [editingIndex, setEditingIndex] = useState(null);

    const addTask = () => {
        if (newTaskTitle) { 
            const newTask = { title: newTaskTitle, dueDate: "Ngày mai" };
            setTasks([...tasks, newTask]); 
            setNewTaskTitle(''); 
        }
    };

    const editTask = (index) => {
        setNewTaskTitle(tasks[index].title); 
        setEditingIndex(index); 
    };

    const updateTask = () => {
        if (editingIndex !== null) { 
            const updatedTasks = tasks.map((task, index) => 
                index === editingIndex ? { ...task, title: newTaskTitle } : task
            );
            setTasks(updatedTasks); 
            setNewTaskTitle(''); 
            setEditingIndex(null);
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="ToDoList" style={{marginLeft: '10px'}}>
            <h1>My work 🎯</h1> 
            <div>
                {tasks.map((task, index) => ( 
                    <ToDoItem 
                        key={index} 
                        title={task.title} 
                        dueDate={task.dueDate} 
                        onEdit={() => editTask(index)}
                        onDelete={() => deleteTask(index)}
                    />
                ))}
            </div>
            <input 
                type="text" 
                value={newTaskTitle} 
                onChange={(e) => setNewTaskTitle(e.target.value)} 
                placeholder="Nhập công việc mới hoặc chỉnh sửa" 
            />
            <div style={{marginTop: '5px', cursor: 'pointer'}} onClick={editingIndex !== null ? updateTask : addTask}>
                <PlusCircleOutlined style={{fontSize: '20px', color: '#d1453b'}} /> 
                {editingIndex !== null ? 'Cập nhật công việc' : 'Thêm công việc'}
            </div>
        </div>
    );
}

export default ToDoList; 
