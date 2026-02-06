import { useEffect, useState } from "react";
import * as api from '../api/usersApi';

export function useUsers() {
    // Custom hook logic for managing users can be added , removed, or modified here

    const [users,setUsers ]= useState([]);

    const [selectedUser, setSelectedUser]= useState(null);

    const fetchUsers = async ()=>{
        try {
            const response = await api.getUsers();
            // setUsers(response.data);
            setUsers(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
           console.error("Error fetching users:", error); 
        }
    }

    const addUser =async (data) => {
        try {
            const response = await api.addUser(data);
            setUsers(prevUsers => [...prevUsers, response.data]);
            fetchUsers();
        } catch (error) {
            console.error("Error adding user:", error);
        }
    }
    const updateUser = async (id, data) => {
        try {
            const response = await api.updateUser(id, data);
            setUsers(prevUsers => prevUsers.map(user => user.id === id ? response.data : user));
            fetchUsers();
            setSelectedUser(null);
        } catch (error) {
            console.error("Error updating user:", error);
        }

    }

    const removeUser = async(id)=>{
        try {
            await api.deleteUser(id);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
            fetchUsers();

        } catch (error) {
            console.error("Error removing user:", error);
        }
    }
    useEffect(()=>{
        fetchUsers();
    },[]);
    return {users, addUser, removeUser,selectedUser, setSelectedUser, updateUser};
}