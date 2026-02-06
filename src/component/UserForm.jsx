import React, { useEffect } from 'react'
import { userFields } from '../config/userFields';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const UserForm = ({ onCreate, selectedUser, onUpdate}) => {

    const schema = yup.object(
        userFields.reduce((acc, field) => {
            acc[field.name] = field.required ? yup.string().required(`${field.label} is required`) : yup.string();
            return acc;
        }, {})
    );

   const { register, handleSubmit,reset, formState: { errors } } = useForm({resolver : yupResolver(schema)});

   // fetch user data for editing if selectedUser is not null
    useEffect(()=>{
        if(selectedUser){
            reset(selectedUser);
        }
    },[selectedUser, reset]);

    const submitHandler = (data) => {
        if(selectedUser){
            onUpdate(selectedUser.id, data);
        }else{
            onCreate(data);
        }
        reset();
    }

  return (
    <form
    onSubmit={handleSubmit(submitHandler)}
     className='bg-white p-6 rounded-lg shadow-md mb-6 space-y-4'>
       <h2 className='text-xl font-semibold text-center mb-6'>{selectedUser ? "Edit User" : "Add User"}</h2>
        {/* Form fields will go here */}
        {userFields.map(field =>(
            <div key={field.name} className='mb-4'>
                <label className='block text-sm font-medium mb-1'>{field.label}</label>
                <input {...register(field.name)} className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                {errors[field.name] && (
                    <p className="text-red-500 text-sm">{errors[field.name].message}</p>
                )}
            </div>
        ))}

        <button
        type="submit"
        className={`px-4 py-2 rounded text-white ${
          selectedUser ? "bg-green-600" : "bg-blue-600"
        }`}
      >
        {selectedUser ? "Update User" : "Save User"}
      </button>
    </form>
  )
}

export default UserForm
