class SinhVien {
    constructor(maSV, hoTen, gioiTinh) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
    }
}

class QuanLySinhVien {
    constructor() {
        this.students = JSON.parse(localStorage.getItem('students')) || [];
        this.renderTable();
    }

    addStudent(student) {
        this.students.push(student);
        this.saveToLocal();
        this.renderTable();
    }

    deleteStudent(index) {
        this.students.splice(index, 1);
        this.saveToLocal();
        this.renderTable();
    }

    editStudent(index, updatedStudent) {
        this.students[index] = updatedStudent;
        this.saveToLocal();
        this.renderTable();
    }

    saveToLocal() {
        localStorage.setItem('students', JSON.stringify(this.students));
    }

    renderTable() {
        const tableBody = document.querySelector('#studentTable tbody');
        tableBody.innerHTML = '';
        this.students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.maSV}</td>
                <td>${student.hoTen}</td>
                <td>${student.gioiTinh}</td>
                <td>
                    <button onclick="editStudent(${index})">Sửa</button>
                    <button onclick="deleteStudent(${index})">Xóa</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}

const qlsv = new QuanLySinhVien();

document.getElementById('add').addEventListener('click', function() { 
    const maSV = document.getElementById('studentId').value;
    const hoTen = document.getElementById('studentName').value;
    const gioiTinh = document.getElementById('gender').value;
    const newStudent = new SinhVien(maSV, hoTen, gioiTinh);
    qlsv.addStudent(newStudent);

    document.getElementById('studentForm').reset();
});

function editStudent(index) {
    const student = qlsv.students[index];
    document.getElementById('studentId').value = student.maSV;
    document.getElementById('studentName').value = student.hoTen;
    document.getElementById('gender').value = student.gioiTinh;

    // Hiển thị nút "Cập Nhật"
    const updateButton = document.getElementById('updateButton');
    updateButton.style.display = 'inline-block';

    updateButton.onclick = function() {
        student.maSV = document.getElementById('studentId').value;
        student.hoTen = document.getElementById('studentName').value;
        student.gioiTinh = document.getElementById('gender').value;

        qlsv.editStudent(index, student);

        document.getElementById('studentForm').reset();
        updateButton.style.display = 'none';
        document.getElementById('add').style.display = 'inline-block'; 
    };
}

function deleteStudent(index) {
    qlsv.deleteStudent(index);
}