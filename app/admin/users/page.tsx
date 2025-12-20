"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllUsersPage = () => {
  const getUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/users");
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
      }
      else {
        alert(data.message);
        setUsers([]);
      };
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Error fetching users");
      setUsers([]);
    }
  };

  const blockUser = async (id: number) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}/block`, {
      method: "POST",
    });
    const data = await res.json();
    if (data.success) {
      toast.success(data.message);
      getUsers();
    } else {
      toast.error(data.message);
    }
  }
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="h-screen w-full p-5 py-15">
      <table className="w-full table-auto border-collapse border-2 border-green-700">
        <thead>
          <tr className="cell">
            <th>User ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Messages</th>
            <th>Blocked?</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (user: {
              id: number;
              username: string;
              email: string;
              role: string;
              messagesSent: number[];
              blocked: boolean;
            }) => (
              <tr key={user.id} className="text-center cell">
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td><Link href={`/admin/users/${user.id}/messages`}>{user.messagesSent.length}</Link></td>
                <td>
                  <button onClick={() => blockUser(user.id)} className={`btn w-30 ${user.blocked ? "" : "bg-red-700"}`}>{user.blocked ? "Unblock" : "Block"} User</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsersPage;
