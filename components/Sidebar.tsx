import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="w-[250px] h-screen bg-black text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        Admin
      </h1>

      <div className="flex flex-col gap-5">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/dashboard/users">
          Users
        </Link>

        <Link href="/dashboard/products">
          Products
        </Link>
      </div>
    </div>
  )
}