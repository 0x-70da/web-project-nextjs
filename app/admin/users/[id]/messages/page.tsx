import prisma from "@/lib/db";

const MessagesDetailsPage = async ({ params }: Promise<{params: {id: string}}>) => {
    const { id } = await params;
    const messages = await prisma.message.findMany({
        where: {
            senderId: parseInt(id)
        }
    });
  return (
    <div className="py-15">
        <main className="p-5">
            {messages.length === 0 ? (
                <p className="p-5">No messages found for this user.</p>
            ) : (messages.map((message) => (
                <section key={message.id} className="flex justify-between w-full border-2 border-green-700 p-5 mb-5 rounded-2xl">
                    <p>{message.content}</p>
                    <p>Was send on {new Date(message.timestamp).toLocaleString()}</p>
                </section>
            )))}
        </main>
    </div>
  )
}

export default MessagesDetailsPage