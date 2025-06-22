import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_TOKEN = process.env.TRAKTEER_TOKEN; // Change this to your actual token

/**
 * @swagger
 * /api/trakteer:
 *   post:
 *     tags:
 *       - Trakteer
 *     description: Receives Trakteer webhook (public, token required)
 *     parameters:
 *       - in: header
 *         name: x-webhook-token
 *         required: true
 *         schema:
 *           type: string
 *         description: Webhook verification token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Webhook received
 *       401:
 *         description: Unauthorized
 */
export async function POST(req: NextRequest) {
  const token = req.headers.get('x-webhook-token');
  if (token !== WEBHOOK_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  // TODO: handle webhook payload

  return NextResponse.json({ message: 'Webhook received', data: body }, { status: 200 });
}