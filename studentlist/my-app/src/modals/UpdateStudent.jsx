import React, { useState } from "react";

const UpdateStudent = ({ student, onUpdated, onCancel, onSave }) => {
    const [firstName, setFirstName] = useState(student.firstName);
    const [lastName, setLastName] = useState(student.lastName);
    const [yearLevel, setYearLevel] = useState(student.yearLevel);
    const [course, setCourse] = useState(student.course || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await onSave(student.id, {
                firstName,
                lastName,
                yearLevel,
                course,
            });

            onUpdated();
        } catch (err) {
            alert("Failed to update student");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="number" value={yearLevel} onChange={(e) => setYearLevel(e.target.value)} />
            <input value={course} onChange={(e) => setCourse(e.target.value)} />

            <button type="submit">Save</button>
            <button type="button" onClick={onCancel}>Cancel</button>
        </form>
    );
};

export default UpdateStudent;