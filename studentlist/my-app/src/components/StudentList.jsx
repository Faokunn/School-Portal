import React, { useState } from "react";
import UpdateStudent from "../modals/UpdateStudent";

const StudentList = ({ students, loading, error, onDelete, onFetch, onSave }) => {
    const [editingId, setEditingId] = useState(null);

    const handleEditClick = (id) => setEditingId(id);
    const handleCancelEdit = () => setEditingId(null);
    const handleUpdated = () => {
        setEditingId(null);
        onFetch();
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {students.map((s) => (
                <li key={s.id} style={{ marginBottom: "10px" }}>
                    {editingId === s.id ? (
                        <UpdateStudent
                            student={s}
                            onUpdated={handleUpdated}
                            onCancel={handleCancelEdit}
                            onSave={onSave}
                        />
                    ) : (
                        <>
                            {s.firstName} {s.lastName} - Year {s.yearLevel} - {s.course || "No course"}
                            <button onClick={() => handleEditClick(s.id)}>Edit</button>
                            <button onClick={() => onDelete(s.id)}>Delete</button>
                        </>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default StudentList;