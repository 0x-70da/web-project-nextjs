import Button from "@/components/Button"
import Link from "next/link"

const MePage = async () => {
  return (
    <main className="py-20 px-5">
      <section className="mb-5">
        <Link href="/me/change-password" className="bg-green-700 rounded-2xl p-2 text-white">Change Password</Link>
      </section>
        <section>
            <p>We are sad to see you go😢</p>
            <Button styles="bg-red-700">Logout</Button>
        </section>
    </main>
  )
}

export default MePage