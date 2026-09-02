import prisma from "@/lib/db";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    try {
        const isBlocked = await prisma.user.findUnique({
            where: { id: parseInt(id) },
            select: { blocked: true },
        });
        await prisma.user.update({
            where: { id: parseInt(id) },
            data: { blocked : !isBlocked?.blocked },
        });
        return Response.json({ success: true, message: isBlocked?.blocked ? "User unblocked successfully" : "User blocked successfully" }, { status: 200 });
    } catch (err) {
        return Response.json({ success: false, message: "Error blocking user" }, { status: 500 });
    }
}