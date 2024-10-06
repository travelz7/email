/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server'


import { db } from '~/server/db'

export async function POST(request: Request) {

    const { text } = await request.json()
    console.log('text', text);

    if (!text) {
        return NextResponse.json(
            { message: 'Text is required' },
            { status: 400 }
        )
    }

    return NextResponse.json({ greeting: `Hello ${text}` }, { status: 200 })

}

