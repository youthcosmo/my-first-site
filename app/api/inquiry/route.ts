import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, contact, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "이름과 문의 내용을 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const toEmail = process.env.RESEND_TO_EMAIL || "youthcosmo@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from: `사이트 문의 알림 <${fromEmail}>`,
      to: [toEmail],
      replyTo: contact && contact.includes("@") ? contact : undefined,
      subject: `[웹사이트 문의] ${name}님의 새로운 문의 사항이 도착했습니다`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #1d4ed8; padding-bottom: 12px;">새로운 문의 사항 알림 📬</h2>
          
          <table style="width: 100%; margin: 16px 0; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; width: 120px; font-weight: bold; color: #475569;">이름 / 닉네임:</td>
              <td style="padding: 8px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #475569;">연락처 / 이메일:</td>
              <td style="padding: 8px 0; color: #0f172a;">${contact || "미기재"}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; padding: 18px; border-radius: 8px; border-left: 4px solid #1d4ed8; margin-top: 12px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #475569; font-size: 14px;">문의 내용:</p>
            <div style="white-space: pre-wrap; color: #1e293b; line-height: 1.6; font-size: 14px;">${message}</div>
          </div>

          <div style="margin-top: 24px; border-top: 1px solid #f1f5f9; padding-top: 12px; font-size: 12px; color: #94a3b8; text-align: center;">
            내 첫 사이트 문의 알림 시스템 &bull; Resend API 연동
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { error: error.message || "이메일 전송에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "서버 오류가 발생했습니다.";
    console.error("Inquiry API error:", err);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
