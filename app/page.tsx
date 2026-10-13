"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npm run dev");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 sm:px-12 sm:py-28 md:px-16 md:py-32 lg:px-24">
      <div className="w-full max-w-4xl space-y-12 sm:space-y-16 text-center">
        {/* Status Badge */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-400/80 bg-white px-5 py-2 text-xs font-bold text-slate-900 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d4ed8] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1d4ed8]"></span>
            </span>
            <span>로컬 개발 서버 준비 완료 &bull; <span className="font-mono font-extrabold text-[#1d4ed8]">localhost:3000</span></span>
          </div>
        </div>

        {/* Hero Title, Avatar & Subtitle */}
        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <h1 className="flex flex-col items-center gap-3 tracking-tight leading-tight break-keep text-slate-950">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
              Hello!
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider sm:tracking-widest text-slate-900 whitespace-nowrap">
              I&apos;m <span className="text-[#1d4ed8] drop-shadow-sm tracking-normal">COCO</span>!
            </span>
          </h1>

          {/* Cute Girl Bear Avatar with generous breathing room */}
          <div className="my-8 sm:my-10 flex justify-center">
            <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-slate-900/15 transition-transform duration-200 hover:scale-110">
              <img
                src="/bear-avatar.jpg"
                alt="리본을 달고 반갑게 손 흔드는 귀여운 곰 캐릭터"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl font-bold leading-relaxed break-keep text-center text-slate-800">
            가장 단순하고 견고한 기본 템플릿입니다. TypeScript, App Router, Tailwind CSS가 바로 동작하도록 설정되었습니다.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
          <div className="group rounded-2xl border-2 border-slate-300/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1d4ed8] hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d4ed8]/10 text-[#1d4ed8]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-base font-extrabold text-slate-950 transition-colors group-hover:text-[#1d4ed8]">App Router</h2>
            <p className="mt-2 text-xs font-medium text-slate-700 leading-relaxed">
              차세대 파일 기반 라우팅 및 고성능 서버 컴포넌트 지원
            </p>
          </div>

          <div className="group rounded-2xl border-2 border-slate-300/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1d4ed8] hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d4ed8]/10 text-[#1d4ed8]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-base font-extrabold text-slate-950 transition-colors group-hover:text-[#1d4ed8]">TypeScript</h2>
            <p className="mt-2 text-xs font-medium text-slate-700 leading-relaxed">
              엄격한 타입 안전성과 안정적인 개발 생산성 제공
            </p>
          </div>

          <div className="group rounded-2xl border-2 border-slate-300/90 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#1d4ed8] hover:shadow-md">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d4ed8]/10 text-[#1d4ed8]">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h2 className="text-base font-extrabold text-slate-950 transition-colors group-hover:text-[#1d4ed8]">Tailwind CSS</h2>
            <p className="mt-2 text-xs font-medium text-slate-700 leading-relaxed">
              빠르고 유연한 모던 유틸리티 스타일링 시스템
            </p>
          </div>
        </div>

        {/* Interactive Test & Quick Command */}
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row pt-2">
          {/* Interactive Counter Button with Point Color */}
          <button
            id="interactive-counter-btn"
            onClick={() => setCount((prev) => prev + 1)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1d4ed8] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#1d4ed8]/30 transition-all duration-150 hover:bg-[#1e40af] active:scale-95"
          >
            <span>상호작용 테스트 클릭:</span>
            <span className="rounded-md bg-white/25 px-2.5 py-0.5 font-mono text-xs font-extrabold text-white">
              {count}
            </span>
          </button>

          {/* Quick Command Snippet */}
          <button
            id="copy-command-btn"
            onClick={copyCommand}
            className="group inline-flex items-center gap-3 rounded-xl border-2 border-slate-300 bg-white px-5 py-3.5 font-mono text-xs font-bold text-slate-900 shadow-sm transition-all duration-150 hover:border-[#1d4ed8] hover:bg-slate-50"
          >
            <span className="text-slate-400 font-bold">$</span>
            <span>npm run dev</span>
            <span className="rounded bg-[#1d4ed8]/10 px-2.5 py-1 text-[10px] font-bold text-[#1d4ed8] group-hover:bg-[#1d4ed8]/20">
              {copied ? "복사됨!" : "명령어 복사"}
            </span>
          </button>
        </div>

        {/* Footer info */}
        <div className="pt-6 sm:pt-8 text-xs font-bold text-slate-700">
          프로젝트 경로: <code className="rounded border border-slate-400 bg-white px-2 py-0.5 text-slate-950 font-mono font-bold">d:\스마트텍_2026</code>
        </div>

        <p className="text-sm font-bold" style={{ color: "#C84726" }}>
          [오늘 처음 인터넷에 사이트를 올렸어요!]
        </p>
      </div>
    </main>
  );
}
