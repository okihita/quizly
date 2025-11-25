"use client";

import { useState, useMemo, useEffect } from "react";
import { questions, categories } from "@/data/questions";

const categoryMeta = [
  { name: "Blockchain Fundamentals", icon: "⛓️", desc: "Core blockchain & crypto concepts" },
  { name: "Crypto Economics", icon: "📊", desc: "Business, trading & regulations" },
  { name: "Ethereum Ecosystem", icon: "◆", desc: "ETH, PoS, L2s & community" },
  { name: "Lisk Platform", icon: "🔷", desc: "Lisk L2, RWA & features" },
  { name: "dApps & Ecosystem", icon: "🌐", desc: "Applications & user problems" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quizStarted, setQuizStarted] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "all") return questions;
    return questions.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correctIndex) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setQuizStarted(false);
  };

  const startQuiz = (cat: string) => {
    setSelectedCategory(cat);
    setQuizStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setQuizComplete(false);
  };

  const bg = darkMode
    ? "bg-[#0a0a0f]"
    : "bg-gradient-to-br from-slate-100 to-cyan-50";
  const cardBg = darkMode
    ? "bg-gradient-to-br from-[#12121a] to-[#1a1a2e] border-cyan-500/20"
    : "bg-white/90 border-cyan-200";
  const text = darkMode ? "text-white" : "text-slate-900";
  const textMuted = darkMode ? "text-cyan-100/60" : "text-slate-500";
  const accent = darkMode ? "text-cyan-400" : "text-cyan-600";

  const GridBg = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className={`absolute inset-0 ${darkMode ? "opacity-20" : "opacity-10"}`}
        style={{
          backgroundImage: `linear-gradient(${darkMode ? "rgba(0,255,255,0.1)" : "rgba(0,150,150,0.1)"} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? "rgba(0,255,255,0.1)" : "rgba(0,150,150,0.1)"} 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />
      {darkMode && (
        <>
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />
        </>
      )}
    </div>
  );

  const DarkModeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed top-4 right-4 z-50 p-2.5 rounded-xl ${cardBg} border backdrop-blur-xl shadow-lg transition-all hover:scale-105`}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );

  if (!quizStarted) {
    return (
      <main className={`min-h-screen ${bg} relative overflow-hidden`}>
        <GridBg />
        <DarkModeToggle />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${darkMode ? "bg-cyan-500/10 border border-cyan-500/30" : "bg-cyan-100 border border-cyan-300"} mb-4`}>
              <span className={`w-2 h-2 rounded-full ${darkMode ? "bg-cyan-400 animate-pulse" : "bg-cyan-500"}`} />
              <span className={`text-xs font-mono uppercase tracking-wider ${accent}`}>Web3 Knowledge Protocol</span>
            </div>
            <h1 className={`text-4xl md:text-6xl font-black ${text} mb-3 tracking-tight`}>
              <span className={accent}>Q</span>uizly
            </h1>
            <p className={`${textMuted} text-sm md:text-base max-w-md mx-auto`}>
              Decentralized knowledge verification for Blockchain, Crypto, Ethereum, Lisk & dApps
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6">
            {categoryMeta.map((cat, idx) => {
              const count = questions.filter((q) => q.category === cat.name).length;
              return (
                <button
                  key={cat.name}
                  onClick={() => startQuiz(cat.name)}
                  className={`group relative ${cardBg} border rounded-2xl p-4 md:p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 overflow-hidden`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? "from-cyan-500/5 to-purple-500/5" : "from-cyan-100/50 to-purple-100/50"} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-xs ${accent} opacity-60`}>
                        MODULE_{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xl md:text-2xl">{cat.icon}</span>
                    </div>
                    <h3 className={`font-bold ${text} text-sm md:text-base mb-1`}>{cat.name}</h3>
                    <p className={`text-xs ${textMuted} mb-3 line-clamp-2`}>{cat.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono ${accent}`}>{count} blocks</span>
                      <span className={`text-xs ${darkMode ? "text-cyan-400/40" : "text-cyan-600/40"} group-hover:translate-x-1 transition-transform`}>→</span>
                    </div>
                  </div>
                </button>
              );
            })}

            <button
              onClick={() => startQuiz("all")}
              className={`group relative ${cardBg} border-2 border-dashed rounded-2xl p-4 md:p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${darkMode ? "from-cyan-500/10 to-purple-500/10" : "from-cyan-100 to-purple-100"} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs ${accent}`}>FULL_SYNC</span>
                  <span className="text-xl md:text-2xl">🎯</span>
                </div>
                <h3 className={`font-bold ${text} text-sm md:text-base mb-1`}>All Modules</h3>
                <p className={`text-xs ${textMuted} mb-3`}>Complete protocol challenge</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono ${accent}`}>{questions.length} blocks</span>
                  <span className={`text-xs ${darkMode ? "text-cyan-400/40" : "text-cyan-600/40"} group-hover:translate-x-1 transition-transform`}>→</span>
                </div>
              </div>
            </button>
          </div>

          <div className={`text-center ${textMuted} text-xs font-mono`}>
            <span className={darkMode ? "text-cyan-500/40" : "text-cyan-600/40"}>◈</span> Powered by decentralized knowledge <span className={darkMode ? "text-cyan-500/40" : "text-cyan-600/40"}>◈</span>
          </div>
        </div>
      </main>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <main className={`min-h-screen ${bg} flex items-center justify-center p-4 relative`}>
        <GridBg />
        <DarkModeToggle />
        <div className={`relative z-10 ${cardBg} border rounded-2xl p-6 md:p-8 max-w-md w-full text-center`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${darkMode ? "bg-cyan-500/10 border border-cyan-500/30" : "bg-cyan-100 border border-cyan-300"} mb-4`}>
            <span className={`text-xs font-mono uppercase ${accent}`}>Verification Complete</span>
          </div>
          <div className="text-5xl md:text-6xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "✓" : "◇"}
          </div>
          <p className={`text-3xl md:text-4xl font-black ${text} mb-1`}>
            {score}<span className={textMuted}>/{filteredQuestions.length}</span>
          </p>
          <p className={`${accent} font-mono text-lg mb-4`}>{percentage}% verified</p>
          <div className={`w-full h-2 ${darkMode ? "bg-white/10" : "bg-slate-200"} rounded-full mb-6 overflow-hidden`}>
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <button
            onClick={handleRestart}
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all text-sm md:text-base"
          >
            ← Return to Protocol
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen ${bg} flex items-center justify-center p-3 md:p-4 relative`}>
      <GridBg />
      <DarkModeToggle />
      <div className={`relative z-10 ${cardBg} border rounded-2xl p-4 md:p-6 max-w-2xl w-full`}>
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <span className={`font-mono text-xs ${accent} truncate mr-2`}>{currentQuestion.category}</span>
          <span className={`font-mono text-xs ${textMuted} whitespace-nowrap`}>
            {currentIndex + 1}/{filteredQuestions.length}
          </span>
        </div>

        <div className={`w-full h-1 ${darkMode ? "bg-white/10" : "bg-slate-200"} rounded-full mb-4 md:mb-6 overflow-hidden`}>
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>

        <h2 className={`text-base md:text-lg ${text} font-medium mb-4 md:mb-6 leading-relaxed`}>
          {currentQuestion.question}
        </h2>

        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
          {currentQuestion.options.map((option, index) => {
            let btnClass = `w-full p-3 md:p-4 text-left rounded-xl transition-all border text-sm md:text-base `;
            if (!showResult) {
              btnClass += darkMode
                ? "bg-white/5 border-white/10 text-white hover:bg-cyan-500/10 hover:border-cyan-500/30"
                : "bg-white border-slate-200 text-slate-900 hover:bg-cyan-50 hover:border-cyan-300";
            } else if (index === currentQuestion.correctIndex) {
              btnClass += "bg-emerald-500/20 border-emerald-400 text-emerald-100";
            } else if (index === selectedAnswer) {
              btnClass += "bg-red-500/20 border-red-400 text-red-100";
            } else {
              btnClass += darkMode
                ? "bg-white/5 border-white/5 text-white/30"
                : "bg-slate-50 border-slate-100 text-slate-400";
            }
            return (
              <button key={index} onClick={() => handleAnswer(index)} className={btnClass} disabled={showResult}>
                <span className={`font-mono ${accent} mr-2 text-xs`}>{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`mb-4 md:mb-6 p-3 md:p-4 ${darkMode ? "bg-cyan-500/5 border border-cyan-500/20" : "bg-cyan-50 border border-cyan-200"} rounded-xl`}>
            <p className={`${textMuted} text-xs md:text-sm leading-relaxed`}>
              <span className={`font-bold ${accent}`}>◈ Rationale: </span>
              {currentQuestion.rationale}
            </p>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className={`font-mono text-xs ${accent}`}>
            Score: {score}
          </span>
          {showResult && (
            <button
              onClick={handleNext}
              className="px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-xl hover:opacity-90 transition-all text-xs md:text-sm"
            >
              {currentIndex < filteredQuestions.length - 1 ? "Next Block →" : "Complete →"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
