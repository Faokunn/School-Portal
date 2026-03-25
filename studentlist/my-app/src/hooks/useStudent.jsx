import { useState, useEffect } from "react";
import { getStudents, deleteStudent, addStudent } from "../service/studentService";

export default function useStudents() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const data = await getStudents();
            setStudents(data);
        } catch (err) {
            setError("Failed to fetch students");
        } finally {
            setLoading(false);
        }
    };

    const removeStudent = async (id) => {
        try {
            setLoading(true);
            await deleteStudent(id);
            fetchStudents();
        } catch (err) {
            setError("Failed to delete student");
        } finally {
            setLoading(false);
        }
    };

    const editStudent = async (id, student) => {
        try {
            setLoading(true);
            await updateStudent(id, student);
            fetchStudents();
        } catch (err) {
            setError("Failed to update student");
        } finally {
            setLoading(false);
        }
    };

    const createStudent = async (student) => {
        try {
            setLoading(true)
            await addStudent(student);
            fetchStudents();
        } catch (error) {
            setError("Failed to add student");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStudents();
    }, []);

    return {
        students,
        loading,
        error,
        removeStudent,
        fetchStudents,
        editStudent,
        createStudent
    };
}