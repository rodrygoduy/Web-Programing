import React, { useState, useEffect } from "react";
import { DatePicker, Button } from "antd";
import dayjs from "dayjs";

const AddTaskForm = ({ onAddTask, onCancel, initialData }) => {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState(null);

    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title);
            setDueDate(dayjs(initialData.dueDate));
        }
    }, [initialData]);

    const handleSubmit = () => {
        if (title && dayjs(dueDate).isValid()) {
            onAddTask({ title,dueDate: dueDate.toISOString(), completed: false });
            setTitle("");
            setDueDate(null);
        }else {
            console.log("Du lieuu khong hop le")
        }
    };

    return (
        <div className="AddTaskForm" style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
                type="text"
                placeholder="Tiêu đề nhiệm vụ"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            <DatePicker
                value={dueDate}
                onChange={(date) => setDueDate(date)}
                placeholder="Ngày đến hạn"
            />
            <Button type="primary" onClick={handleSubmit}>Xác nhận</Button>
            <Button onClick={onCancel}>Hủy</Button>
        </div>
    );
};

export default AddTaskForm;  