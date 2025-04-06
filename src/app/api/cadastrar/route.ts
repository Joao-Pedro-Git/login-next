// app/api/signup/route.ts
import { signUp } from "../../../../server/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  await signUp({ email, password, name });

  return NextResponse.json({ ok: true });
}
