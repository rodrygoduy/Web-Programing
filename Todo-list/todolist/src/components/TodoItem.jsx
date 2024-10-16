import '../style.css'; 
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; 

const ToDoItem = ({ title, dueDate, onEdit, onDelete }) => { 
    return (
        <div className="ToDoItem">
            <input type="checkbox" /> 
            <div className='ItemContent'>
                <p className='Title'>{title}</p>
                <p className='DueDate'>{dueDate}</p>
            </div>
            <div className='Action'>
                <EditOutlined onClick={onEdit} style={{ cursor: 'pointer' }} /> 
                <DeleteOutlined onClick={onDelete} style={{ cursor: 'pointer' }} /> 
            </div>
        </div>
    );
}

export default ToDoItem; 

