/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type NextApiRequest, type NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // 仅接受 POST 请求
    if (req.method === 'POST') {
        const { text } = req.body;

        // 如果没有传入 text 参数
        if (!text) {
            return res.status(400).json({ message: 'Text is required' });
        }

        // 返回处理后的响应
        return res.status(200).json({ greeting: `Hello ${text}` });
    }

    // 如果不是 POST 请求，返回 405 方法不允许
    return res.status(405).json({ message: 'Method Not Allowed' });
}
