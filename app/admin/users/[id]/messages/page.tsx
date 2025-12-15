import prisma from "@/lib/db";

const MessagesDetailsPage = async ({ params }: Promise<{params: {id: string}}>) => {
    const { id } = await params;
    const messages = await prisma.message.findMany({
        where: {
            senderId: parseInt(id)
        }
    });
  return (
    <div>
        <main>
            {messages.length === 0 ? (
                <p className="p-5">No messages found for this user.</p>
            ) : (messages.map((message) => (
                <section key={message.id}>{message.content}</section>
            )))}
        </main>
    </div>
  )
}

export default MessagesDetailsPage