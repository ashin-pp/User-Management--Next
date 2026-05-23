"use client"

import axios from "axios"
import { useEffect, useState } from "react"

export default function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await axios.get(
      "/api/users"
    )

    setUsers(res.data)
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">
        Users
      </h1>

      <div className="grid gap-4">
        {users.map((user: any) => (
          <div
            key={user._id}
            className="border p-4 rounded-lg"
          >
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}