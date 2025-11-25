import q1 from "./01_blockchain_crypto_fundamentals.md";
import q2 from "./02_crypto_business_economics_regulations.md";
import q3 from "./03_ethereum_ecosystem.md";
import q4 from "./04_lisk_features.md";
import q5 from "./05_dapps_ecosystem_user_problems.md";

export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

const categoryNames: Record<string, string> = {
  "01": "Blockchain Fundamentals",
  "02": "Crypto Economics",
  "03": "Ethereum Ecosystem",
  "04": "Lisk Platform",
  "05": "dApps & Ecosystem",
};

function parseMarkdown(content: string, categoryKey: string): Question[] {
  const questions: Question[] = [];
  const blocks = content.split(/---\s*\n/).filter(b => b.includes("### Question"));

  blocks.forEach((block) => {
    const qMatch = block.match(/### Question (\d+)\s*\n([\s\S]*?)(?=\n- [A-D]\))/);
    if (!qMatch) return;

    const id = parseInt(qMatch[1]);
    const questionText = qMatch[2].trim();

    // Extract each option individually to find which has ✓
    const optionAMatch = block.match(/- A\)\s*([\s\S]*?)(?=\n- B\))/);
    const optionBMatch = block.match(/- B\)\s*([\s\S]*?)(?=\n- C\))/);
    const optionCMatch = block.match(/- C\)\s*([\s\S]*?)(?=\n- D\))/);
    const optionDMatch = block.match(/- D\)\s*([\s\S]*?)(?=\n\n>|\n>)/);

    if (!optionAMatch || !optionBMatch || !optionCMatch || !optionDMatch) return;

    const rawOptions = [
      optionAMatch[1].trim(),
      optionBMatch[1].trim(),
      optionCMatch[1].trim(),
      optionDMatch[1].trim(),
    ];

    // Find correct answer by checking which option contains ✓
    let correctIndex = -1;
    const options = rawOptions.map((opt, idx) => {
      if (opt.includes("✓")) {
        correctIndex = idx;
        return opt.replace(/\s*✓\s*/g, "").trim();
      }
      return opt;
    });

    const rationaleMatch = block.match(/>\s*\*\*Rationale:\*\*\s*([\s\S]*?)(?=\n\n---|\n\n###|$)/);
    const rationale = rationaleMatch ? rationaleMatch[1].trim() : "";

    if (correctIndex >= 0) {
      questions.push({
        id,
        category: categoryNames[categoryKey],
        question: questionText,
        options,
        correctIndex,
        rationale,
      });
    }
  });

  return questions;
}

export const questions: Question[] = [
  ...parseMarkdown(q1, "01"),
  ...parseMarkdown(q2, "02"),
  ...parseMarkdown(q3, "03"),
  ...parseMarkdown(q4, "04"),
  ...parseMarkdown(q5, "05"),
];

export const categories = [...new Set(questions.map(q => q.category))];
