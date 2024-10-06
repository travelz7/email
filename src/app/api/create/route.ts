/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server'


import { db } from '~/server/db'

export async function POST(request: Request) {

    const { to, title }: { to: string; title: string } = await request.json()

    if (!to) {
        return NextResponse.json(
            { message: 'Text is required' },
            { status: 400 }
        )
    }

    if (!title) {
        return NextResponse.json(
            { message: 'Title is required' },
            { status: 400 })
    }

    console.log('title', title);

    const codeMatch = (/\d{6}/).exec(title);
    await db.email.create({
        data: {
            to,
            code: codeMatch ? codeMatch[0] : null
        }
    })
    if (codeMatch) {
        console.log('codeMatch', codeMatch[0]);
    }

    return NextResponse.json({ status: 200 })

}

