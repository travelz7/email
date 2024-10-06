/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
    try {
        const { text } = await request.json()

        if (!text) {
            return NextResponse.json(
                { message: 'Text is required' },
                { status: 400 }
            )
        }
        console.log('text', text);

        return NextResponse.json({ greeting: `Hello ${text}` }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { message: 'Invalid request body' },
            { status: 400 }
        )
    }
}

