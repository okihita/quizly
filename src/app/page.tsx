"use client";

import { useState, useMemo, useEffect } from "react";
import { questions, categories } from "@/data/questions";

const categoryMeta = [
  { name: "Blockchain Fundamentals", icon: "🔗", desc: "Core blockchain & crypto concepts" },
  { name: "Crypto Economics", icon: "💰", desc: "Business, trading & regulations" },
  { name: "Ethereum Ecosystem", icon: "⟠", desc: "ETH, PoS, L2s & community" },
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
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    : "bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100";
  const card = darkMode ? "bg-white/10" : "bg-white/80";
  const text = darkMode ? "text-white" : "text-gray-900";
  const textMuted = darkMode ? "text-gray-300" : "text-gray-600";

  const DarkModeToggle = () => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`absolute top-4 right-4 p-2 rounded-full ${card} backdrop-blur-lg`}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );

  if (!quizStarted) {
    return (
      <main className={`min-h-screen ${bg} p-4 relative`}>
        <DarkModeToggle />
        <div className="max-w-4xl mx-auto pt-12">
          <div className="text-center mb-8">
            <h1 className={`text-4xl font-bold ${text} mb-2`}>🧠 Quizly</h1>
            <p className={textMuted}>
              Test your knowledge on Blockchain, Crypto, Ethereum, Lisk & dApps!
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            {categoryMeta.map((cat, idx) => {
              const count = questions.filter((q) => q.category === cat.name).length;
              return (
                <button
                  key={cat.name}
                  onClick={() => startQuiz(cat.name)}
                  className={`${card} backdrop-blur-lg rounded-xl p-5 text-left hover:scale-105 transition-transform border ${darkMode ? "border-white/10 hover:border-purple-500/50" : "border-gray-200 hover:border-purple-400"}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-xs font-mono ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-2xl">{cat.icon}</span>
                  </div>
                  <h3 className={`font-semibold ${text} mb-1`}>{cat.name}</h3>
                  <p className={`text-sm ${textMuted} mb-2`}>{cat.desc}</p>
                  <span className={`text-xs ${darkMode ? "text-purple-300" : "text-purple-600"}`}>
                    {count} questions
                  </span>
                </button>
              );
            })}

            <button
              onClick={() => startQuiz("all")}
              className={`${card} backdrop-blur-lg rounded-xl p-5 text-left hover:scale-105 transition-transform border-2 border-dashed ${darkMode ? "border-purple-500/50 hover:border-purple-400" : "border-purple-300 hover:border-purple-500"}`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-mono ${darkMode ? "text-purple-400" : "text-purple-600"}`}>
                  ALL
                </span>
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className={`font-semibold ${text} mb-1`}>All Categories</h3>
              <p className={`text-sm ${textMuted} mb-2`}>Complete challenge</p>
              <span className={`text-xs ${darkMode ? "text-purple-300" : "text-purple-600"}`}>
                {questions.length} questions
              </span>
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <main className={`min-h-screen ${bg} flex items-center justify-center p-4 relative`}>
        <DarkModeToggle />
        <div className={`${card} backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center`}>
          <h2 className={`text-3xl font-bold ${text} mb-4`}>Quiz Complete!</h2>
          <div className="text-6xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "👍" : "📚"}
          </div>
          <p className={`text-2xl ${text} mb-2`}>
            {score} / {filteredQuestions.length}
          </p>
          <p className={`${textMuted} mb-6`}>{percentage}% correct</p>
          <button
            onClick={handleRestart}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen ${bg} flex items-center justify-center p-4 relative`}>
      <DarkModeToggle />
      <div className={`${card} backdrop-blur-lg rounded-2xl p-6 max-w-2xl w-full`}>
        <div className="flex justify-between items-center mb-4">
          <span className={`${textMuted} text-sm`}>{currentQuestion.category}</span>
          <span className={`${textMuted} text-sm`}>
            {currentIndex + 1} / {filteredQuestions.length}
          </span>
        </div>

        <div className={`w-full ${darkMode ? "bg-white/20" : "bg-gray-200"} rounded-full h-2 mb-6`}>
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>

        <h2 className={`text-xl ${text} font-medium mb-6`}>{currentQuestion.question}</h2>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            let btnClass = `w-full p-4 text-left rounded-lg transition-all border `;
            if (!showResult) {
              btnClass += darkMode
                ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50";
            } else if (index === currentQuestion.correctIndex) {
              btnClass += "bg-green-500/30 border-green-400 text-green-100";
            } else if (index === selectedAnswer) {
              btnClass += "bg-red-500/30 border-red-400 text-red-100";
            } else {
              btnClass += darkMode
                ? "bg-white/5 border-white/10 text-white/50"
                : "bg-gray-50 border-gray-100 text-gray-400";
            }
            return (
              <button key={index} onClick={() => handleAnswer(index)} className={btnClass} disabled={showResult}>
                <span className="font-medium mr-2">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className={`mb-6 p-4 ${darkMode ? "bg-white/10" : "bg-purple-50"} rounded-lg`}>
            <p className={`${textMuted} text-sm`}>
              <span className={`font-semibold ${text}`}>Explanation: </span>
              {currentQuestion.rationale}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className={textMuted}>Score: {score}</span>
          {showResult && (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              {currentIndex < filteredQuestions.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
