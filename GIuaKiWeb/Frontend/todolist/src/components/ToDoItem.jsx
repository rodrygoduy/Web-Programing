
import '../Style/TodoItem.css';
import { EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';

const ToDoItem = ({ taskId, title, dueDate, completed, onDelete, onEdit, onHoanThanhTask }) => {
    return (
        <div className="ToDoItem">
            <input type="checkbox"
             checked = {completed}
             onChange={() => onHoanThanhTask(taskId, !completed) }/>
            <div className="ItemContent">
                <p className="Title">{title}</p>
                <p className="DueDate">
                    <CalendarOutlined style={{ marginRight: '5px', color: '#888' }} />
                    {dueDate ? new Date(dueDate).toLocaleDateString() : "Không có ngày"}
                </p>
            </div>
            <div className="Action">
                <EditOutlined onClick={() => onEdit({taskId, title,dueDate})} style={{ cursor: 'pointer', marginRight: '10px' }} />
                <DeleteOutlined onClick={() => onDelete(taskId)} style={{ cursor: 'pointer' }} />

            </div>
        </div>
    );
};

export default ToDoItem;