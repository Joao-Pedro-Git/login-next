// app/api/login/route.ts
import { signIn } from "../../../../server/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, senha } = await req.json();

  try {
    await signIn({ email, senha });
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Login inválido" },
      { status: 401 }
    );
  }
}
