import React from 'react'
import UserForm from './component/UserForm'
import { useUsers } from './hooks/useUsers';
import UserList from './component/UserList';
import { updateUser } from './api/usersApi';

const App = () => {
  const {
    users,
    selectedUser,
    setSelectedUser,
    addUser,
    updateUser,
    removeUser } = useUsers();
  return (
    <div className='min-h-screen bg-gray-200 p-6'>
        <div className='max-w-3xl mx-auto'>
            <h2 className='text-2xl font-bold text-gray-800 text-center mb-6'>Welcome to the Users Management System</h2>
            <UserForm 
            onCreate={addUser}
            onUpdate={updateUser}
            selectedUser={selectedUser}
             />
            <UserList users={users} onDelete={removeUser} onEdit={setSelectedUser} />
        </div>
    </div>
  )
}

export default App
