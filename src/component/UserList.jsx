import React from 'react'

const UserList = ({ users, onDelete, onEdit }) => {
    console.log("🔥 THIS UserList FILE IS LOADED");

    console.log("UserList props:", { users, onDelete, onEdit });
  if (!users.length) return null;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {Object.keys(users[0])
              .filter((key) => key !== "id")
              .map((key) => (
                <th key={key} className="border p-2 text-left">
                  {key}
                </th>
              ))}
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {Object.entries(user)
                .filter(([key]) => key !== "id")
                .map(([key, value]) => (
                  <td key={key} className="border p-2">
                    {value}
                  </td>
                ))}
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList
