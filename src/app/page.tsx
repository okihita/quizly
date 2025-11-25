"use client";

import { useState, useMemo } from "react";
import { questions, categories } from "@/data/questions";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [quizStarted, setQuizStarted] = useState(false);

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "all") return questions;
    return questions.filter((q) => q.category === selectedCategory);
  }, [selectedCategory]);

  const currentQuestion = filteredQuestions[currentIndex];

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
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

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setQuizComplete(false);
  };

  if (!quizStarted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">🧠 Quizly</h1>
          <p className="text-purple-200 mb-6">
            Test your knowledge on Blockchain, Crypto, Ethereum, Lisk & dApps!
          </p>
          <div className="mb-6">
            <label className="block text-purple-200 mb-2 text-sm">
              Select Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              <option value="all" className="text-gray-900">
                All Categories ({questions.length} questions)
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="text-gray-900">
                  {cat} ({questions.filter((q) => q.category === cat).length})
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={startQuiz}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Start Quiz
          </button>
        </div>
      </main>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
          <div className="text-6xl mb-4">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "👍" : "📚"}
          </div>
          <p className="text-2xl text-white mb-2">
            {score} / {filteredQuestions.length}
          </p>
          <p className="text-purple-200 mb-6">{percentage}% correct</p>
          <p className="text-purple-300 mb-6">
            {percentage >= 80
              ? "Excellent! You're a blockchain expert!"
              : percentage >= 60
              ? "Good job! Keep learning!"
              : "Keep studying, you'll get there!"}
          </p>
          <button
            onClick={handleRestart}
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-purple-300 text-sm">
            {currentQuestion.category}
          </span>
          <span className="text-purple-300 text-sm">
            {currentIndex + 1} / {filteredQuestions.length}
          </span>
        </div>

        <div className="w-full bg-white/20 rounded-full h-2 mb-6">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
            style={{
              width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%`,
            }}
          />
        </div>

        <h2 className="text-xl text-white font-medium mb-6">
          {currentQuestion.question}
        </h2>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            let btnClass =
              "w-full p-4 text-left rounded-lg transition-all border ";
            if (!showResult) {
              btnClass +=
                "bg-white/10 border-white/20 text-white hover:bg-white/20";
            } else if (index === currentQuestion.correctIndex) {
              btnClass += "bg-green-500/30 border-green-400 text-green-100";
            } else if (index === selectedAnswer) {
              btnClass += "bg-red-500/30 border-red-400 text-red-100";
            } else {
              btnClass += "bg-white/5 border-white/10 text-white/50";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={btnClass}
                disabled={showResult}
              >
                <span className="font-medium mr-2">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {showResult && (
          <div className="mb-6 p-4 bg-white/10 rounded-lg">
            <p className="text-purple-200 text-sm">
              <span className="font-semibold text-white">Explanation: </span>
              {currentQuestion.rationale}
            </p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-purple-300">Score: {score}</span>
          {showResult && (
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              {currentIndex < filteredQuestions.length - 1
                ? "Next Question"
                : "See Results"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
