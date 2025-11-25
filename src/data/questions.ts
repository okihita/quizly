export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  rationale: string;
}

export const questions: Question[] = [
  // Category 1: Blockchain & Cryptocurrency Fundamentals
  {
    id: 1,
    category: "Blockchain Fundamentals",
    question: "What problem did Bitcoin's blockchain solve that earlier digital currency projects like DigiCash could not?",
    options: [
      "Enabling fully anonymous transactions",
      "Allowing instant international transfers",
      "Preventing double-spending without a trusted central authority",
      "Creating digital scarcity through encryption"
    ],
    correctIndex: 2,
    rationale: "Bitcoin solved the double-spending problem through its blockchain, where the network collectively validates transactions without needing a bank."
  },
  {
    id: 2,
    category: "Blockchain Fundamentals",
    question: "If you lose your private key but still remember your public key and wallet address, what can you do to recover your cryptocurrency?",
    options: [
      "Request a key reset from customer support",
      "Use your public key to derive the private key",
      "Nothing—the funds become permanently inaccessible",
      "Ask miners to reassign your balance"
    ],
    correctIndex: 2,
    rationale: "Blockchains have no customer support or password reset. Once a private key is lost, those funds are gone forever."
  },
  {
    id: 3,
    category: "Blockchain Fundamentals",
    question: "Once all bitcoins have been mined (around 2140), how will miners be incentivized to continue securing the network?",
    options: [
      "The protocol will increase the supply cap",
      "Mining will become voluntary community service",
      "Miners will earn only transaction fees",
      "A new cryptocurrency will replace Bitcoin"
    ],
    correctIndex: 2,
    rationale: "Bitcoin was designed with this transition in mind—as block rewards decrease, transaction fees become the primary incentive for miners."
  },
  {
    id: 4,
    category: "Blockchain Fundamentals",
    question: "Why is it practically impossible to change a transaction buried under 100 blocks?",
    options: [
      "Military-grade encryption protects the data",
      "You must redo proof-of-work for that block and all 100 after it faster than the network",
      "Historical transactions are on government-protected servers",
      "The original sender must approve modifications"
    ],
    correctIndex: 1,
    rationale: "Changing any block invalidates all subsequent block hashes, requiring an attacker to redo computational work for every block while the network continues adding new blocks."
  },
  {
    id: 5,
    category: "Blockchain Fundamentals",
    question: "Why are hardware wallets considered more secure than software wallets?",
    options: [
      "They use stronger encryption algorithms",
      "The private key never leaves the device, protecting it from remote attacks",
      "They are fully insured by manufacturers",
      "Software wallets share keys with developers"
    ],
    correctIndex: 1,
    rationale: "Hardware wallets sign transactions on the device itself, so the private key is never exposed to potentially compromised computers or networks."
  },
  {
    id: 6,
    category: "Blockchain Fundamentals",
    question: "What is the mathematical relationship between a seed phrase and your private keys?",
    options: [
      "The seed phrase is stored on the wallet company's servers",
      "The seed phrase deterministically generates all private keys",
      "The seed phrase is a human-readable version of one private key",
      "Seed phrases only work with the original wallet brand"
    ],
    correctIndex: 1,
    rationale: "Using BIP-39 and BIP-32 standards, the seed phrase generates a master key from which all wallet addresses and private keys are mathematically derived."
  },
  {
    id: 7,
    category: "Blockchain Fundamentals",
    question: "Why are smaller cryptocurrencies more vulnerable to 51% attacks than Bitcoin?",
    options: [
      "They use weaker encryption standards",
      "Less total hash power means less cost to acquire majority control",
      "Bitcoin has special legal protections",
      "Smaller networks have more honest miners"
    ],
    correctIndex: 1,
    rationale: "Bitcoin's massive hash rate would cost billions to attack, while smaller coins might be attackable by renting hash power for thousands of dollars."
  },
  {
    id: 8,
    category: "Blockchain Fundamentals",
    question: "What is a 'Merkle tree' and why is it essential for blockchain?",
    options: [
      "It encrypts all transaction data for privacy",
      "You can prove a transaction exists using only a small branch of hashes",
      "It determines transaction processing order",
      "It's only used for visual displays in explorers"
    ],
    correctIndex: 1,
    rationale: "To prove one transaction among thousands, you only need log₂(n) hashes—a path from the transaction to the root—not all transactions."
  },
  {
    id: 9,
    category: "Blockchain Fundamentals",
    question: "What is the 'oracle problem' in blockchain?",
    options: [
      "Oracles are too expensive for most applications",
      "External data sources must be trusted, creating centralization risk",
      "The problem only affects gaming applications",
      "Oracles have been banned by governments"
    ],
    correctIndex: 1,
    rationale: "Blockchains are trustless, but if a smart contract relies on external data, you must trust whoever provides that data. A corrupt oracle can manipulate contract outcomes."
  },
  {
    id: 10,
    category: "Blockchain Fundamentals",
    question: "How does Bitcoin's account model differ from Ethereum's?",
    options: [
      "They use identical systems with different names",
      "Bitcoin tracks UTXOs (unspent outputs); Ethereum tracks account balances like a bank",
      "Bitcoin's model is more complex than Ethereum's",
      "The models only matter for NFTs"
    ],
    correctIndex: 1,
    rationale: "Ethereum maintains account balances that increase and decrease, like a bank ledger, rather than tracking individual 'coins' (UTXOs) like Bitcoin."
  },
  // Category 2: Crypto Business & Economics
  {
    id: 11,
    category: "Crypto Economics",
    question: "What does 'HODL' mean in crypto culture?",
    options: [
      "A sophisticated algorithmic trading strategy",
      "Holding through volatility rather than panic selling",
      "An SEC-approved investment approach",
      "Selling at predetermined profit targets"
    ],
    correctIndex: 1,
    rationale: "HODL became a meme representing the strategy of holding through market turbulence rather than trying to time the market."
  },
  {
    id: 12,
    category: "Crypto Economics",
    question: "Which government body has primary authority over crypto trading in Indonesia?",
    options: [
      "Bank Indonesia",
      "Bappebti (Commodity Futures Trading Regulatory Agency)",
      "OJK (Financial Services Authority)",
      "Ministry of Finance"
    ],
    correctIndex: 1,
    rationale: "Since crypto is classified as a commodity in Indonesia, it falls under Bappebti, which regulates commodity futures trading."
  },
  {
    id: 13,
    category: "Crypto Economics",
    question: "What does 'DYOR' mean and why is it crucial?",
    options: [
      "Deposit Your Own Reserves",
      "Do Your Own Research—because scams are common and losses aren't reimbursed",
      "Diversify Your Own Risk",
      "Document Your Own Records"
    ],
    correctIndex: 1,
    rationale: "The unregulated nature of crypto means scams and failed projects are common. No one will refund your losses, so personal due diligence is essential."
  },
  {
    id: 14,
    category: "Crypto Economics",
    question: "What is a 'rug pull' in crypto?",
    options: [
      "A legitimate exit strategy for founders",
      "Developers draining funds after attracting investment",
      "A routine smart contract upgrade",
      "A fair token distribution mechanism"
    ],
    correctIndex: 1,
    rationale: "Rug pulls involve developers removing liquidity or dumping tokens, leaving investors holding worthless assets. Warning signs include anonymous teams and inability to sell."
  },
  {
    id: 15,
    category: "Crypto Economics",
    question: "Why are extremely high yield farming returns (1000%+ APY) often unsustainable?",
    options: [
      "High yields are guaranteed by smart contract insurance",
      "Returns often come from inflationary token emissions that dilute value",
      "DeFi yields are regulated and capped by authorities",
      "Yield farming has no risks for participants"
    ],
    correctIndex: 1,
    rationale: "Sky-high APYs typically come from newly minted tokens—but as more tokens are created, each becomes worth less. Early farmers often profit while latecomers lose."
  },
  {
    id: 16,
    category: "Crypto Economics",
    question: "What causes 'impermanent loss' for liquidity providers?",
    options: [
      "Exchange platform fees eating into capital",
      "The pool rebalancing gives you more of the token that dropped in relative value",
      "Hackers stealing from liquidity pools",
      "It's just a temporary display bug"
    ],
    correctIndex: 1,
    rationale: "AMMs constantly rebalance to maintain price ratios. When prices diverge, you end up with more of the cheaper token and less of the expensive one compared to just holding."
  },
  {
    id: 17,
    category: "Crypto Economics",
    question: "What are the key trade-offs between centralized (CEX) and decentralized (DEX) exchanges?",
    options: [
      "They function identically with different branding",
      "CEX offers convenience and support but requires trust; DEX offers self-custody but more complexity",
      "DEX always provides better prices",
      "CEX is only for institutional investors"
    ],
    correctIndex: 1,
    rationale: "CEXs are user-friendly with support but hold your funds (counterparty risk). DEXs give you control but require more knowledge and offer no recourse for mistakes."
  },
  {
    id: 18,
    category: "Crypto Economics",
    question: "What does 'diamond hands' vs 'paper hands' mean?",
    options: [
      "Different hardware wallet security features",
      "Diamond hands hold through crashes; paper hands sell at the first drop",
      "Diamond hands = wealthy investors; paper hands = retail",
      "Technical analysis chart patterns"
    ],
    correctIndex: 1,
    rationale: "Diamond hands = strong conviction holders who don't sell during volatility. Paper hands = those who sell quickly when prices drop. It's about psychological resilience."
  },
  {
    id: 19,
    category: "Crypto Economics",
    question: "What is 'dollar-cost averaging' (DCA)?",
    options: [
      "Converting crypto back to dollars regularly",
      "Regular fixed purchases that reduce timing risk and emotional decisions",
      "Only buying when prices hit all-time lows",
      "A strategy only for dollar-denominated assets"
    ],
    correctIndex: 1,
    rationale: "DCA removes the stress of timing by spreading purchases over time. You buy more when prices are low, less when high, averaging your cost basis."
  },
  {
    id: 20,
    category: "Crypto Economics",
    question: "What is 'wash trading' and why does it matter?",
    options: [
      "A method of cleaning illegally obtained crypto",
      "Fake volume that misleads investors about actual market activity",
      "A standard market-making strategy",
      "Trading during exchange maintenance"
    ],
    correctIndex: 1,
    rationale: "Wash trading creates fake volume to make exchanges or tokens appear more liquid and popular than they are, deceiving investors."
  },
  // Category 3: Ethereum Ecosystem
  {
    id: 21,
    category: "Ethereum Ecosystem",
    question: "What fundamental capability did Ethereum introduce that Bitcoin intentionally limited?",
    options: [
      "Faster transaction processing",
      "Turing-complete smart contracts that can execute arbitrary programmable logic",
      "Lower transaction fees",
      "Better privacy features"
    ],
    correctIndex: 1,
    rationale: "Ethereum's EVM can run any computable program, enabling DeFi, NFTs, DAOs, and more. Bitcoin's script is limited by design for security."
  },
  {
    id: 22,
    category: "Ethereum Ecosystem",
    question: "What is the minimum ETH required to run your own Ethereum validator?",
    options: [
      "1 ETH",
      "32 ETH",
      "100 ETH",
      "No minimum exists"
    ],
    correctIndex: 1,
    rationale: "32 ETH was chosen to balance decentralization (not too high) with network efficiency (not too many validators)."
  },
  {
    id: 23,
    category: "Ethereum Ecosystem",
    question: "What is 'slashing' in Ethereum Proof-of-Stake?",
    options: [
      "A mechanism that reduces transaction fees",
      "Validators lose staked ETH for malicious actions like double-signing",
      "A reward bonus for active validators",
      "Only the Ethereum Foundation can slash validators"
    ],
    correctIndex: 1,
    rationale: "Slashing creates economic consequences for attacks. Double-signing gets slashed immediately; extended downtime triggers inactivity leaks."
  },
  {
    id: 24,
    category: "Ethereum Ecosystem",
    question: "What is the 'Superchain' vision?",
    options: [
      "A single blockchain to replace Ethereum",
      "A network of interoperable L2 chains sharing security and enabling cross-chain communication",
      "Ethereum's marketing name for mainnet",
      "A competing blockchain ecosystem"
    ],
    correctIndex: 1,
    rationale: "The Superchain connects OP Stack L2s with shared standards, making cross-chain transfers seamless and pooling security."
  },
  {
    id: 25,
    category: "Ethereum Ecosystem",
    question: "What is 'gas' in Ethereum?",
    options: [
      "A fixed fee set by the Ethereum Foundation",
      "A unit measuring computational work; fees rise when demand exceeds block space",
      "Only applies to smart contract transactions",
      "Determined solely by the recipient"
    ],
    correctIndex: 1,
    rationale: "Gas is Ethereum's unit of computation. When many users compete for limited block space, they bid up gas prices."
  },
  {
    id: 26,
    category: "Ethereum Ecosystem",
    question: "How do rollups scale Ethereum?",
    options: [
      "They completely replace Ethereum",
      "They batch transactions off-chain; optimistic uses fraud proofs, ZK uses validity proofs",
      "They're only for NFT transactions",
      "There's no difference between optimistic and ZK"
    ],
    correctIndex: 1,
    rationale: "Both batch transactions, but optimistic assumes validity (challenged via fraud proofs), while ZK proves validity cryptographically (instant finality)."
  },
  {
    id: 27,
    category: "Ethereum Ecosystem",
    question: "What did EIP-1559 change about Ethereum's fee mechanism?",
    options: [
      "It removed all transaction fees",
      "It introduced base fee burning and priority tips, making fees predictable and ETH deflationary",
      "It increased fees to fund development",
      "It only affected smart contract costs"
    ],
    correctIndex: 1,
    rationale: "EIP-1559 burns the base fee (reducing ETH supply) while tips go to validators. Users can estimate fees better."
  },
  {
    id: 28,
    category: "Ethereum Ecosystem",
    question: "What does 'ultrasound money' mean in the Ethereum context?",
    options: [
      "Transactions include audio verification",
      "With reduced issuance and fee burning, ETH can become deflationary during high usage",
      "ETH is backed by gold reserves",
      "A marketing term with no meaning"
    ],
    correctIndex: 1,
    rationale: "'Ultrasound' one-ups Bitcoin's 'sound money' by pointing out ETH can actually decrease in supply when burn exceeds issuance."
  },
  {
    id: 29,
    category: "Ethereum Ecosystem",
    question: "What is MEV (Maximal Extractable Value)?",
    options: [
      "Maximum ETH transferable in one transaction",
      "Value extracted by reordering or inserting transactions, often harming regular users",
      "A reward mechanism for ETH holders",
      "Maximum earnings from staking"
    ],
    correctIndex: 1,
    rationale: "MEV includes front-running, sandwich attacks, and arbitrage that can cost users money through worse prices."
  },
  {
    id: 30,
    category: "Ethereum Ecosystem",
    question: "What does finality mean in Ethereum PoS?",
    options: [
      "Transactions are final immediately",
      "After two epochs (~12.8 minutes), transactions cannot be reversed without burning 1/3 of staked ETH",
      "Finality takes 24 hours",
      "Finality equals one block confirmation"
    ],
    correctIndex: 1,
    rationale: "Ethereum's Casper FFG finalizes checkpoints every two epochs. Reverting finalized blocks requires 1/3 of validators to be slashed—billions of dollars."
  },
  // Category 4: Lisk Features
  {
    id: 31,
    category: "Lisk Platform",
    question: "What major transformation did Lisk undergo in 2024?",
    options: [
      "Became a private enterprise blockchain",
      "Migrated from its own Layer 1 to become an Ethereum Layer 2",
      "Merged with Bitcoin as a sidechain",
      "Abandoned blockchain technology"
    ],
    correctIndex: 1,
    rationale: "Lisk transitioned from an independent L1 blockchain to an Ethereum L2 built on the OP Stack, gaining access to Ethereum's security and ecosystem."
  },
  {
    id: 32,
    category: "Lisk Platform",
    question: "What consensus mechanism did the original Lisk blockchain use?",
    options: [
      "Proof-of-Work like Bitcoin",
      "Delegated Proof-of-Stake with 101 elected delegates",
      "No consensus mechanism",
      "Proof-of-Authority selected by Lisk Foundation"
    ],
    correctIndex: 1,
    rationale: "Lisk's DPoS had 101 elected delegates who produced blocks in rounds. This was efficient but created delegate cartels and political dynamics."
  },
  {
    id: 33,
    category: "Lisk Platform",
    question: "Why did Lisk choose the Optimism Superchain rather than building its own rollup infrastructure?",
    options: [
      "The Superchain is Lisk's proprietary technology",
      "Shared security, interoperability standards, and proven infrastructure",
      "Regulators required Lisk to use the Superchain",
      "The Superchain is the only L2 technology that exists"
    ],
    correctIndex: 1,
    rationale: "Using the OP Stack gives Lisk battle-tested code, shared upgrades, and Superchain interoperability without reinventing the wheel."
  },
  {
    id: 34,
    category: "Lisk Platform",
    question: "How does Lisk's RWA (Real World Assets) focus differentiate it from general-purpose L2s?",
    options: [
      "Lisk only supports tokenized real estate",
      "Lisk builds specialized infrastructure and partnerships for bringing off-chain assets onto blockchain",
      "RWA focus means Lisk doesn't support crypto transactions",
      "All L2s have identical RWA capabilities"
    ],
    correctIndex: 1,
    rationale: "Lisk's RWA focus means building compliance tools, identity solutions, and partnerships specifically for tokenizing real-world assets."
  },
  {
    id: 35,
    category: "Lisk Platform",
    question: "How does being an L2 change Lisk's security compared to its L1 days?",
    options: [
      "Lisk L2 is less secure than the original L1",
      "Lisk now inherits Ethereum's security by posting transaction data to mainnet",
      "Security is identical between L1 and L2 versions",
      "Lisk L2 uses its own independent security model"
    ],
    correctIndex: 1,
    rationale: "L2 security comes from Ethereum—transaction data posted to mainnet means Ethereum's validators effectively secure Lisk."
  },
  {
    id: 36,
    category: "Lisk Platform",
    question: "What is the OP Stack?",
    options: [
      "A proprietary Lisk technology",
      "Open-source modular components providing battle-tested code and ecosystem compatibility",
      "A marketing framework for blockchain projects",
      "A hardware specification for validators"
    ],
    correctIndex: 1,
    rationale: "The OP Stack gives Lisk proven infrastructure, automatic security updates, and compatibility with other Superchain members."
  },
  {
    id: 37,
    category: "Lisk Platform",
    question: "What happened to LSK tokens during the migration to L2?",
    options: [
      "All LSK tokens were converted to ETH",
      "A migration process allowed users to claim their LSK on the new Ethereum L2",
      "LSK tokens became worthless",
      "Users had to purchase new tokens"
    ],
    correctIndex: 1,
    rationale: "Lisk provided a migration mechanism for existing holders to claim equivalent tokens on the new L2, preserving their holdings."
  },
  {
    id: 38,
    category: "Lisk Platform",
    question: "Why might a developer choose Lisk L2 over Ethereum mainnet?",
    options: [
      "Lisk uses different programming languages",
      "Lower fees, faster confirmations, and access to Lisk's ecosystem while maintaining Ethereum compatibility",
      "Ethereum mainnet doesn't support smart contracts",
      "Lisk L2 is the only way to reach Ethereum users"
    ],
    correctIndex: 1,
    rationale: "Lisk offers cheaper transactions and faster UX while staying EVM-compatible, plus access to Lisk's RWA-focused ecosystem."
  },
  {
    id: 39,
    category: "Lisk Platform",
    question: "What is the withdrawal period when moving assets from Lisk L2 back to Ethereum mainnet?",
    options: [
      "Withdrawals are instant",
      "A delay (typically 7 days) allows time for fraud proofs if the L2 state is invalid",
      "The withdrawal period is 30 days",
      "Assets can never be withdrawn"
    ],
    correctIndex: 1,
    rationale: "The challenge period ensures invalid states can be caught before withdrawals finalize. It's a security trade-off for optimistic rollups."
  },
  {
    id: 40,
    category: "Lisk Platform",
    question: "What role does the Lisk DAO play in network governance?",
    options: [
      "Lisk has no governance mechanism",
      "The DAO enables token holders to participate in ecosystem development and treasury decisions",
      "Only the Lisk Foundation makes decisions",
      "DAOs are incompatible with L2 solutions"
    ],
    correctIndex: 1,
    rationale: "The Lisk DAO gives LSK holders voice in grants, development priorities, and ecosystem direction."
  },
  // Category 5: dApps & User Problems
  {
    id: 41,
    category: "dApps & Ecosystem",
    question: "What fundamentally makes an application 'decentralized'?",
    options: [
      "Being available on mobile app stores",
      "Running on blockchain where no single entity controls the code, data, or user access",
      "Having servers in multiple data centers",
      "Being developed by a distributed team"
    ],
    correctIndex: 1,
    rationale: "Decentralization means no single point of control—code runs on blockchain, users control their keys, and no company can unilaterally censor or change rules."
  },
  {
    id: 42,
    category: "dApps & Ecosystem",
    question: "What user problem do decentralized applications fundamentally solve?",
    options: [
      "Faster loading times",
      "Elimination of intermediaries who can arbitrarily restrict access to your assets",
      "Lower costs through efficient databases",
      "Better customer support"
    ],
    correctIndex: 1,
    rationale: "dApps remove the 'trusted third party' who can freeze, censor, or seize your assets. Self-custody means you control access."
  },
  {
    id: 43,
    category: "dApps & Ecosystem",
    question: "Why would someone choose Uniswap over Coinbase for trading?",
    options: [
      "Uniswap always has lower fees",
      "Self-custody, no KYC requirements, and access to tokens not listed on centralized exchanges",
      "Uniswap has better customer support",
      "Centralized exchanges don't support crypto trading"
    ],
    correctIndex: 1,
    rationale: "DEXs let you trade without giving up custody, without ID verification, and access long-tail tokens CEXs won't list."
  },
  {
    id: 44,
    category: "dApps & Ecosystem",
    question: "What is the 'gas UX problem' and why does it hurt adoption?",
    options: [
      "Gas is too cheap",
      "Requiring native tokens for fees creates friction; users need ETH before doing anything",
      "Gas fees are perfectly intuitive",
      "The gas problem was solved years ago"
    ],
    correctIndex: 1,
    rationale: "Needing ETH before you can use any dApp is a massive barrier. Account abstraction aims to solve this by letting users pay gas in any token."
  },
  {
    id: 45,
    category: "dApps & Ecosystem",
    question: "What makes bridges particularly risky?",
    options: [
      "Bridges are completely safe",
      "Bridges concentrate value in smart contracts that become attractive hack targets",
      "Bridge risks only affect operators",
      "Users can easily recover funds if hacked"
    ],
    correctIndex: 1,
    rationale: "Bridges hold massive TVL in contracts—hack one contract, steal millions. Ronin ($600M), Wormhole ($320M), and others have been exploited."
  },
  {
    id: 46,
    category: "dApps & Ecosystem",
    question: "What does 'composability' enable in DeFi?",
    options: [
      "It makes protocols slower",
      "Permissionless protocol interaction enables complex financial strategies in single transactions",
      "Traditional finance has better composability",
      "It only works for simple transfers"
    ],
    correctIndex: 1,
    rationale: "Composability means protocols can interact without permission. Flash loans, yield aggregators, and complex strategies emerge from this."
  },
  {
    id: 47,
    category: "dApps & Ecosystem",
    question: "How does ENS (Ethereum Name Service) solve the address usability problem?",
    options: [
      "ENS makes transactions reversible",
      "Human-readable names like 'vitalik.eth' map to complex addresses, reducing errors",
      "ENS eliminates blockchain addresses",
      "ENS is only for emails"
    ],
    correctIndex: 1,
    rationale: "ENS lets you send to 'friend.eth' instead of a 42-character hex string—dramatically reducing error risk and improving UX."
  },
  {
    id: 48,
    category: "dApps & Ecosystem",
    question: "What user problems could account abstraction solve?",
    options: [
      "It provides no benefits over traditional wallets",
      "It enables social recovery, transaction batching, and flexible gas payment",
      "It makes wallets more difficult to use",
      "These features already exist in all wallets"
    ],
    correctIndex: 1,
    rationale: "AA wallets could feel like traditional apps—recover via email, pay gas in USDC, set spending limits—while remaining self-custodial."
  },
  {
    id: 49,
    category: "dApps & Ecosystem",
    question: "What user problem could RWA-focused dApps on Lisk solve?",
    options: [
      "RWA tokenization has no practical applications",
      "Enabling fractional ownership and global access to assets previously limited to wealthy or local investors",
      "Only crypto holders benefit from RWA",
      "Traditional asset markets are already accessible to everyone"
    ],
    correctIndex: 1,
    rationale: "Imagine buying $100 of Singapore real estate or US treasury bonds from Indonesia—RWAs could democratize access to global investments."
  },
  {
    id: 50,
    category: "dApps & Ecosystem",
    question: "When evaluating a dApp idea, what first-principles question should you ask?",
    options: [
      "Does it use blockchain technology?",
      "What specific problem does decentralization solve that centralization cannot?",
      "All blockchain ideas are equally good",
      "First principles thinking is irrelevant"
    ],
    correctIndex: 1,
    rationale: "Blockchain adds complexity and cost—it's only worth it when decentralization provides unique value: censorship resistance, trustlessness, composability, or global access."
  }
];

export const categories = [...new Set(questions.map(q => q.category))];
