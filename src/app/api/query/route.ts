/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server'


import { db } from '~/server/db'

export async function POST(request: Request) {

    const { to }: { to: string; } = await request.json()

    if (!to) {
        return NextResponse.json(
            { message: 'Text is required' },
            { status: 400 }
        )
    }

    const data = await db.email.findFirst({
        where: {
            to,
        },
        orderBy: { createdAt: "desc" },
    });

    console.log('code', data?.code);
    return NextResponse.json({ status: 200 })

}

