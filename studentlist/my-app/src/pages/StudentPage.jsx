import React, { useState } from "react";
import useStudents from "../hooks/useStudent";
import StudentList from "../components/StudentList";
import AddStudentModal from "../modals/AddStudentModal";

const StudentPage = () => {
    const {
        students,
        loading,
        error,
        removeStudent,
        fetchStudents,
        createStudent,
        editStudent,
    } = useStudents();

    const [showModal, setShowModal] = useState(false);

    const handleCreate = async (data) => {
        await createStudent(data);
        fetchStudents();
    };

    const handleUpdate = async (id, data) => {
        await editStudent(id, data);
        fetchStudents();
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Student Page</h1>

            <button onClick={() => setShowModal(true)}>
                + Add Student
            </button>

            <StudentList
                students={students}
                loading={loading}
                error={error}
                onDelete={removeStudent}
                onFetch={fetchStudents}
                onSave={handleUpdate}
            />

            {showModal && (
                <AddStudentModal
                    onClose={() => setShowModal(false)}
                    onCreate={handleCreate}
                />
            )}
        </div>
    );
};

export default StudentPage;