import React, { useState } from "react";

const AddStudentModal = ({ onClose, onCreate }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [yearLevel, setYearLevel] = useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await onCreate({
                firstName,
                lastName,
                yearLevel,
                course,
            });

            onClose();
        } catch (err) {
            alert("Failed to create student");
        }
    };

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <h2>Add Student</h2>

                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Year Level"
                        value={yearLevel}
                        onChange={(e) => setYearLevel(e.target.value)}
                        required
                    />
                    <input
                        placeholder="Course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button type="submit">Create</button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        width: "300px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
};

export default AddStudentModal;