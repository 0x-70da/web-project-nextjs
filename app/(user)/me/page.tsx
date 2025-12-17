import Button from "@/components/Button"

const MePage = async () => {
  return (
    <main className="py-15">
        <section>
            <p>We are sad to see you go😢</p>
            <Button styles="bg-red-700">Logout</Button>
        </section>
    </main>
  )
}

export default MePage