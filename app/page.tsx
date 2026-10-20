"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [daysCount, setDaysCount] = useState<number>(7);

  useEffect(() => {
    const startDate = new Date(2026, 9, 13); // 사이트 첫 공개일 2026-10-13
    const today = new Date();
    const startZero = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const todayZero = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const diffTime = todayZero.getTime() - startZero.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysCount(diffDays >= 0 ? diffDays : 0);
  }, []);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm run dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert("이름과 문의 내용을 입력해주세요.");
      return;
    }
    // 제출 완료 상태로 전환
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // 닫힐 때 폼 초기화 (지연 처리로 부드럽게)
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", contact: "", message: "" });
    }, 200);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-4 py-6 sm:px-8 sm:py-8 md:px-12">
      <div className="w-full max-w-4xl space-y-5 sm:space-y-6 text-center">
        {/* Status Badge */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-bold text-slate-900 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d4ed8] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1d4ed8]"></span>
            </span>
            <span>로컬 개발 서버 준비 완료 &bull; <span className="font-mono font-extrabold text-[#1d4ed8]">localhost:3000</span></span>
          </div>
        </div>

        {/* Hero Title, Avatar & Subtitle */}
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="flex flex-col items-center gap-1.5 tracking-tight leading-tight break-keep text-slate-950">
            <span className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
              Hello!
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wider sm:tracking-widest text-slate-900 whitespace-nowrap">
              I&apos;m <span className="text-[#1d4ed8] drop-shadow-sm tracking-normal">COCO</span>!
            </span>
          </h1>

          {/* Cute Girl Bear Avatar */}
          <div className="my-3 sm:my-4 flex justify-center">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full overflow-hidden border-3 border-white shadow-lg shadow-slate-900/10 transition-transform duration-200 hover:scale-110">
              <img
                src="/bear-avatar.jpg"
                alt="리본을 달고 반갑게 손 흔드는 귀여운 곰 캐릭터"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="mx-auto max-w-xl text-sm sm:text-base font-semibold leading-snug break-keep text-center text-slate-700">
            가장 단순하고 견고한 기본 템플릿입니다. TypeScript, App Router, Tailwind CSS가 바로 동작하도록 설정되었습니다.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-3 sm:gap-4">
          <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1d4ed8] hover:shadow-md">
            <div className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1d4ed8]/10 text-[#1d4ed8]">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-sm font-extrabold text-slate-950 transition-colors group-hover:text-[#1d4ed8]">App Router</h2>
            <p className="mt-1 text-[11px] sm:text-xs font-medium text-slate-600 leading-relaxed">
              차세대 파일 기반 라우팅 및 고성능 서버 컴포넌트 지원
            </p>
          </div>

          <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1d4ed8] hover:shadow-md">
            <div className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1d4ed8]/10 text-[#1d4ed8]">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-sm font-extrabold text-slate-950 transition-colors group-hover:text-[#1d4ed8]">TypeScript</h2>
            <p className="mt-1 text-[11px] sm:text-xs font-medium text-slate-600 leading-relaxed">
              엄격한 타입 안전성과 안정적인 개발 생산성 제공
            </p>
          </div>

          <div className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1d4ed8] hover:shadow-md">
            <div className="mb-2.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#1d4ed8]/10 text-[#1d4ed8]">
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h2 className="text-sm font-extrabold text-slate-950 transition-colors group-hover:text-[#1d4ed8]">Tailwind CSS</h2>
            <p className="mt-1 text-[11px] sm:text-xs font-medium text-slate-600 leading-relaxed">
              빠르고 유연한 모던 유틸리티 스타일링 시스템
            </p>
          </div>
        </div>

        {/* Interactive Buttons: Counter, Command, and Inquiry */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          {/* Interactive Counter Button */}
          <button
            id="interactive-counter-btn"
            onClick={() => setCount((prev) => prev + 1)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#1d4ed8] px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-[#1d4ed8]/30 transition-all duration-150 hover:bg-[#1e40af] active:scale-95 cursor-pointer"
          >
            <span>상호작용 테스트 클릭:</span>
            <span className="rounded bg-white/25 px-2 py-0.5 font-mono text-[11px] font-extrabold text-white">
              {count}
            </span>
          </button>

          {/* Quick Command Snippet */}
          <button
            id="copy-command-btn"
            onClick={copyCommand}
            className="group inline-flex items-center gap-2.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-mono text-xs font-bold text-slate-900 shadow-sm transition-all duration-150 hover:border-[#1d4ed8] hover:bg-slate-50 cursor-pointer"
          >
            <span className="text-slate-400 font-bold">$</span>
            <span>npm run dev</span>
            <span className="rounded bg-[#1d4ed8]/10 px-2 py-0.5 text-[10px] font-bold text-[#1d4ed8] group-hover:bg-[#1d4ed8]/20">
              {copied ? "복사됨!" : "명령어 복사"}
            </span>
          </button>

          {/* Inquiry Button */}
          <button
            id="open-inquiry-btn"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-rose-500/25 transition-all duration-200 hover:from-rose-600 hover:to-pink-600 hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>문의 사항 남기기</span>
          </button>
        </div>

        {/* Footer info & Commemorative notice */}
        <div className="space-y-1.5 pt-2 text-xs font-bold text-slate-600">
          <div>
            프로젝트 경로: <code className="rounded border border-slate-300 bg-white px-2 py-0.5 text-slate-900 font-mono font-bold">d:\스마트텍_2026</code>
          </div>
          <a
            href="https://my-first-site-umber-pi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs sm:text-sm font-bold underline underline-offset-4 transition-opacity hover:opacity-80"
            style={{ color: "#C84726" }}
          >
            SINE 2026.10.13 / D+{daysCount}일
          </a>
        </div>
      </div>

      {/* Inquiry Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 sm:p-7 text-left shadow-2xl transition-all">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-lg transition-colors cursor-pointer"
              aria-label="닫기"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {isSubmitted ? (
              /* Success View */
              <div className="py-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900">문의가 소중하게 접수되었습니다!</h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    작성해 주신 내용을 확인 후 빠르게 답변 드리겠습니다. 감사합니다 😊
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={closeModal}
                    className="w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 cursor-pointer"
                  >
                    확인
                  </button>
                </div>
              </div>
            ) : (
              /* Inquiry Form View */
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">문의 사항 남기기</h3>
                    <p className="text-xs font-medium text-slate-500">궁금하신 점이나 의견을 편하게 남겨주세요.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      이름 / 닉네임 <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="예: 홍길동"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      연락처 또는 이메일
                    </label>
                    <input
                      type="text"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="답변 받으실 이메일이나 전화번호"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      문의 내용 <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="남기실 문의 사항이나 의견을 입력해 주세요."
                      className="w-full resize-none rounded-lg border border-slate-300 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-[#1d4ed8] focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2.5">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-lg border border-slate-300 px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      취소
                    </button>
                    <button
                      type="submit"
                      className="rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-2.5 text-xs font-bold text-white shadow-sm shadow-rose-500/30 hover:from-rose-600 hover:to-pink-600 transition-all hover:shadow active:scale-95 cursor-pointer"
                    >
                      문의 남기기
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
