# Ethereum Ecosystem & Community Quiz

## 50 Questions on Ethereum, Proof-of-Stake, Validators, Layer 2s & Community Jargon

---

### Question 1
Bitcoin's scripting language is intentionally limited to simple operations like multisig, while Ethereum introduced a virtual machine capable of running arbitrary code with loops and complex logic. What fundamental capability did Ethereum introduce that Bitcoin intentionally limited?

- A) Significantly faster transaction processing speeds than Bitcoin's network
- B) Turing-complete smart contracts that can execute arbitrary programmable logic ✓
- C) Lower transaction fees compared to Bitcoin's fee market structure
- D) Better privacy features for hiding transaction details from observers

> **Rationale:** The correct answer is B. Ethereum's EVM can run any computable program, enabling DeFi, NFTs, DAOs, and more. Bitcoin's script is limited by design for security. Option A is debatable and not the key innovation. Option C isn't consistently true. Option D is false; Ethereum is similarly transparent.

---

### Question 2
When Ethereum transitioned from Proof-of-Work to Proof-of-Stake in "The Merge" of September 2022, the network's energy consumption dropped by over 99%, but an entire industry of GPU miners suddenly had obsolete equipment. What happened to Ethereum miners after The Merge?

- A) They automatically became validators using their existing mining equipment
- B) Their mining hardware became obsolete; many switched chains or sold equipment ✓
- C) Ethereum Foundation compensated all miners for their equipment investments
- D) Mining continues alongside staking in a permanent hybrid consensus system

> **Rationale:** The correct answer is B. GPUs can't stake ETH—validators need 32 ETH, not hardware. Many miners moved to Ethereum Classic or other PoW chains, or sold their rigs. Option A is technically impossible. Option C never happened. Option D is false; Ethereum is pure PoS now.

---

### Question 3
To run an Ethereum validator node, you must deposit exactly 32 ETH into the staking contract—not 31, not 33—a requirement that prices out many retail participants while limiting total validator count. What is the minimum ETH required to run your own validator, and why this specific number?

- A) Just 1 ETH, designed to maximize participation from all users
- B) 32 ETH, balancing accessibility with limiting validator count for efficiency ✓
- C) 100 ETH, ensuring only serious and committed participants can validate
- D) No minimum exists; anyone can validate with any amount of ETH

> **Rationale:** The correct answer is B. 32 ETH was chosen to balance decentralization (not too high) with network efficiency (not too many validators). Too low would create millions of validators, slowing consensus. Option A would create too many validators. Option C would be too exclusionary. Option D is false; 32 ETH is mandatory.

---

### Question 4
Ethereum validators who misbehave—like signing two different blocks at the same height or going offline for extended periods—face "slashing," where a portion of their staked ETH is permanently destroyed. How does slashing work and what behaviors trigger it?

- A) Slashing is a mechanism that reduces transaction fees during network congestion
- B) Validators lose staked ETH for malicious actions like double-signing or extended downtime ✓
- C) Slashing is a reward bonus mechanism for the most active validators
- D) Only the Ethereum Foundation has authority to slash validator stakes

> **Rationale:** The correct answer is B. Slashing creates economic consequences for attacks. Double-signing (equivocation) gets slashed immediately; extended downtime triggers inactivity leaks. Option A confuses slashing with fee mechanisms. Option C is backwards. Option D is false; slashing is automatic and protocol-enforced.

---

### Question 5
The "Superchain" vision describes a future where dozens of Layer 2 rollups share security, standards, and interoperability, functioning almost like one unified network rather than isolated chains. What is the Superchain and how does it relate to Layer 2 scaling?

- A) A single new blockchain designed to completely replace Ethereum mainnet
- B) A network of interoperable L2 chains sharing security and enabling cross-chain communication ✓
- C) Ethereum's official marketing name for its mainnet proof-of-stake network
- D) A competing blockchain ecosystem that rivals Ethereum for market share

> **Rationale:** The correct answer is B. The Superchain (Optimism's vision) connects OP Stack L2s with shared standards, making cross-chain transfers seamless and pooling security. Option A misunderstands; it builds on Ethereum, not replaces it. Option C is wrong; mainnet isn't called Superchain. Option D confuses it with competitors.

---

### Question 6
Staking 32 ETH locks your funds in a contract, but liquid staking protocols like Lido give you a tradeable token (stETH) representing your staked position, letting you earn rewards while still using your capital in DeFi. If you stake ETH through Lido, what do you receive and why is it useful?

- A) Nothing additional; your ETH is simply locked until you manually unstake
- B) A liquid token (stETH) representing your stake that can be used in DeFi while earning rewards ✓
- C) A paper certificate that must be physically held until the unstaking period
- D) Direct access to validator rewards without any token representation needed

> **Rationale:** The correct answer is B. Liquid staking tokens like stETH let you have your cake and eat it too—earn staking yield while using the token as collateral in lending, LPs, etc. Option A describes native staking without liquid tokens. Option C is absurd. Option D misunderstands how liquid staking works.

---

### Question 7
Every Ethereum transaction requires "gas"—a unit measuring computational work—and users pay for gas in ETH based on network demand, with fees sometimes spiking to hundreds of dollars during congestion. What is gas and why do fees vary so dramatically?

- A) Gas is a fixed fee set permanently by the Ethereum Foundation governance
- B) Gas measures computational work; fees rise when demand exceeds block space ✓
- C) Gas only applies to smart contract transactions, not simple ETH transfers
- D) Gas fees are determined solely by the recipient of each transaction

> **Rationale:** The correct answer is B. Gas is Ethereum's unit of computation. When many users compete for limited block space, they bid up gas prices. Option A is wrong; gas prices are market-driven. Option C is false; all transactions use gas. Option D misunderstands; senders pay gas.

---

### Question 8
In 2016, a smart contract called "The DAO" raised $150 million in ETH before a hacker exploited a bug to drain funds, leading to a controversial decision to hard fork and reverse the theft—a move that split the community. How did The DAO hack lead to Ethereum Classic?

- A) The DAO was a hack of the Ethereum Foundation's official treasury reserves
- B) The fork to reverse the hack split the community; dissenters continued the original chain as ETC ✓
- C) The hack was never resolved and the funds remain stolen to this day
- D) Ethereum Classic was a planned upgrade that coincidentally happened during the hack

> **Rationale:** The correct answer is B. The community voted to hard fork and return funds, but some believed "code is law" and refused to accept the reversal, continuing the original chain as Ethereum Classic. Option A misidentifies The DAO. Option C is false; funds were recovered on ETH. Option D is wrong; ETC exists because of the split.

---

### Question 9
Many new blockchains advertise themselves as "EVM-compatible," meaning developers can deploy the same Solidity code and use the same tools like MetaMask without modifications. What does EVM-compatible mean and why do chains pursue this compatibility?

- A) They use the exact same logo and branding as Ethereum for marketing
- B) They can run Ethereum smart contracts and tools, leveraging existing developer ecosystem ✓
- C) They are officially approved and certified by the Ethereum Foundation
- D) They share the same validator set as Ethereum mainnet for security

> **Rationale:** The correct answer is B. EVM compatibility means instant access to Ethereum's vast tooling, libraries, and developer knowledge. It's a massive adoption shortcut. Option A is superficial and wrong. Option C is false; no certification exists. Option D describes shared security, different concept.

---

### Question 10
Rollups process transactions off the main Ethereum chain, then post compressed data back to L1 for security, dramatically increasing throughput while inheriting Ethereum's security guarantees. How do rollups scale Ethereum, and what's the difference between optimistic and ZK rollups?

- A) Rollups completely replace Ethereum with faster independent blockchains
- B) Rollups batch transactions off-chain; optimistic uses fraud proofs, ZK uses cryptographic validity proofs ✓
- C) Rollups are exclusively used for NFT transactions and nothing else
- D) There is no meaningful technical difference between optimistic and ZK approaches

> **Rationale:** The correct answer is B. Both batch transactions, but optimistic assumes validity (challenged via fraud proofs in ~7 days), while ZK proves validity cryptographically (instant finality). Option A misunderstands; rollups depend on Ethereum. Option C is false; rollups handle all transaction types. Option D ignores fundamental differences.

---

### Question 11
Validators and sophisticated actors can see pending transactions in the mempool and reorder, insert, or censor transactions to extract profit—sometimes at regular users' expense through worse trade execution. What is MEV and why is it a concern for Ethereum users?

- A) The maximum amount of ETH that can be transferred in a single transaction
- B) Value extracted by reordering or inserting transactions, often harming regular users ✓
- C) A special reward mechanism designed for long-term ETH holders only
- D) The maximum earnings theoretically possible from staking activities

> **Rationale:** The correct answer is B. MEV (Maximal Extractable Value) includes front-running, sandwich attacks, and arbitrage that can cost users money through worse prices. Option A misunderstands the term. Option C confuses MEV with staking. Option D is also wrong about what MEV means.

---

### Question 12
Ethereum's Proof-of-Stake divides time into 12-second "slots" (one block each) grouped into "epochs" of 32 slots, with validator duties and finality checkpoints organized around these time periods. What happens during an Ethereum epoch and why is it significant?

- A) An epoch is when new ETH tokens are created and distributed
- B) A 32-slot period (~6.4 minutes) where validator duties rotate and finality checkpoints occur ✓
- C) An epoch marks the yearly schedule for major protocol upgrades
- D) Epochs only mattered for mining and are irrelevant after The Merge

> **Rationale:** The correct answer is B. Epochs organize validator committees, attestation duties, and finality. After two epochs, transactions are considered final. Option A misunderstands ETH issuance. Option C confuses epochs with upgrade schedules. Option D is backwards; epochs are central to PoS.

---

### Question 13
Before EIP-1559 in August 2021, Ethereum fees were unpredictable and all went to miners; after the upgrade, fees split into a burned base fee and optional priority tip, making costs more predictable. What did EIP-1559 change about Ethereum's fee mechanism?

- A) It completely removed all transaction fees from the Ethereum network
- B) It introduced base fee burning and priority tips, making fees predictable and ETH deflationary ✓
- C) It increased fees specifically to fund Ethereum Foundation development
- D) It only affected smart contract deployment costs, not regular transfers

> **Rationale:** The correct answer is B. EIP-1559 burns the base fee (reducing ETH supply) while tips go to validators. Users can estimate fees better. Option A is false; fees still exist. Option C misunderstands; burned ETH goes nowhere. Option D is wrong; all transactions were affected.

---

### Question 14
After The Merge reduced ETH issuance by ~90% and EIP-1559 started burning fees, Ethereum community members began calling ETH "ultrasound money"—a play on Bitcoin's "sound money" narrative. What does "ultrasound money" mean in the Ethereum context?

- A) Ethereum transactions now include audio verification for security purposes
- B) With reduced issuance and fee burning, ETH can become deflationary during high usage ✓
- C) Ethereum is now officially backed by physical gold reserves in vaults
- D) A marketing term with no technical or economic meaning whatsoever

> **Rationale:** The correct answer is B. "Ultrasound" one-ups Bitcoin's "sound money" by pointing out ETH can actually decrease in supply when burn exceeds issuance. Option A is absurd wordplay. Option C is false. Option D dismisses real tokenomics changes.

---

### Question 15
Running an Ethereum validator requires two separate pieces of software: an execution client (like Geth or Nethermind) and a consensus client (like Prysm or Lighthouse), which must communicate with each other. Why do validators need both an execution client and a consensus client?

- A) Validator clients are optional software only for advanced technical users
- B) Execution handles transactions and smart contracts; consensus handles PoS duties and finality ✓
- C) Only one client is actually needed; the other serves as an optional backup
- D) Clients are exclusively provided by centralized staking services only

> **Rationale:** The correct answer is B. Post-Merge, the execution layer processes transactions while the consensus layer manages validator duties, attestations, and block proposals. Both are required. Option A is wrong; they're mandatory. Option C is false; both are necessary. Option D misunderstands; anyone can run clients.

---

### Question 16
Traditional Ethereum wallets require users to manage private keys, pay gas only in ETH, and sign each transaction individually—friction that makes onboarding difficult for mainstream users. How does account abstraction (ERC-4337) improve the wallet experience?

- A) It completely removes the need for private keys or any security measures
- B) It enables smart contract wallets with social recovery, gas payment in any token, and batched transactions ✓
- C) It abstracts away all transaction fees so users never pay anything
- D) It only provides benefits for large institutional users and funds

> **Rationale:** The correct answer is B. Account abstraction allows wallets to be smart contracts with programmable logic—recover via friends, pay gas in USDC, batch multiple actions. Option A is dangerous; security still matters. Option C is false; fees still exist. Option D is wrong; it benefits all users.

---

### Question 17
The Beacon Chain launched in December 2020, running Proof-of-Stake consensus in parallel with Ethereum's Proof-of-Work chain for nearly two years before they merged in September 2022. What was the Beacon Chain and what role did it play in Ethereum's transition?

- A) A completely separate blockchain that replaced Ethereum entirely
- B) The PoS coordination layer that ran parallel to PoW before becoming the consensus layer ✓
- C) A testnet exclusively for experimental features and developer testing
- D) A Layer 2 scaling solution for reducing transaction costs

> **Rationale:** The correct answer is B. The Beacon Chain proved PoS worked and accumulated staked ETH before The Merge joined it with the execution layer. Option A misunderstands; it merged with Ethereum. Option C is wrong; it was mainnet with real ETH. Option D confuses it with L2s.

---

### Question 18
Unlike Bitcoin where 6 confirmations is a convention, Ethereum PoS has explicit finality—after a certain point, reversing transactions would require attackers to sacrifice enormous amounts of staked ETH. What does finality mean in Ethereum and how long does it take?

- A) Transactions are considered final immediately upon submission to the network
- B) After two epochs (~12.8 minutes), transactions cannot be reversed without burning 1/3 of staked ETH ✓
- C) Finality takes a full 24 hours to achieve on the Ethereum network
- D) Finality is identical to having just one block confirmation

> **Rationale:** The correct answer is B. Ethereum's Casper FFG finalizes checkpoints every two epochs. Reverting finalized blocks requires 1/3 of validators to be slashed—billions of dollars. Option A is false; finality takes time. Option C overstates the duration. Option D understates the security.

---

### Question 19
Rollups must post transaction data to Ethereum for security, but this data competes with regular transactions for expensive block space; EIP-4844 introduced "blobs"—a new data type specifically for rollups. What is proto-danksharding and how does it help Layer 2s?

- A) A method to increase Ethereum's base block size for all transactions
- B) It introduces blob data that rollups use for cheaper data availability without permanent storage ✓
- C) A full sharding implementation that splits Ethereum into multiple parallel chains
- D) A compression algorithm specifically for smart contract bytecode

> **Rationale:** The correct answer is B. Blobs are temporary data (~18 days) with separate fee markets, dramatically reducing L2 costs without bloating permanent state. Option A misunderstands; blobs are separate from block space. Option C describes full sharding, not proto-danksharding. Option D is wrong about what it does.

---

### Question 20
Solo staking requires 32 ETH and technical expertise, but staking pools let users deposit any amount and share rewards proportionally, though they charge fees and introduce additional trust assumptions. What are the trade-offs between direct staking and using a staking pool?

- A) There is absolutely no difference; both provide completely identical returns
- B) Direct staking requires 32 ETH and setup but avoids fees; pools allow smaller amounts but charge fees and add risk ✓
- C) Staking pools always provide significantly higher returns than solo staking
- D) Direct staking is illegal in most countries and jurisdictions worldwide

> **Rationale:** The correct answer is B. Solo staking keeps all rewards but needs capital and knowledge. Pools democratize access but take cuts and introduce smart contract/custodial risk. Option A ignores fee differences. Option C is false; pools take fees. Option D is wrong; staking is legal.

---

### Question 21
DeFi protocols on Ethereum can interact with each other permissionlessly—you can deposit ETH into Aave, borrow USDC, swap it on Uniswap, and provide liquidity to Curve, all in one transaction. What is composability and why is it called "money legos"?

- A) The ability to physically break apart smart contracts into pieces
- B) Protocols can interact and build on each other like stackable building blocks ✓
- C) A hardware requirement for running DeFi applications locally
- D) The process of combining multiple cryptocurrency wallets together

> **Rationale:** The correct answer is B. Composability means protocols are interoperable building blocks—combine lending, trading, and yield in novel ways. This permissionless innovation is unique to DeFi. Option A misunderstands the metaphor. Option C is wrong. Option D confuses wallets with protocols.

---

### Question 22
Every epoch, validators are assigned to committees and must "attest" to blocks they believe are valid, with these votes aggregated to reach consensus and eventually finalize the chain. What is an attestation and why is it important for network security?

- A) A legal document that validators must sign with their real identity
- B) Validators voting on block validity; aggregated attestations reach consensus and finalize blocks ✓
- C) A one-time verification process when first becoming a validator
- D) Attestations are only required during major network upgrades

> **Rationale:** The correct answer is B. Attestations are the core of PoS consensus—validators vote on what they see, and supermajority agreement finalizes blocks. Option A confuses with legal attestation. Option C misunderstands; attestations happen every epoch. Option D is false; they're continuous.

---

### Question 23
Moving assets between Ethereum and other blockchains requires "bridges"—smart contracts that lock tokens on one chain and mint equivalents on another—but bridges have been hacked for billions of dollars. How do bridges work and what risks do they introduce?

- A) Bridges physically move actual tokens between different blockchain networks
- B) Assets are locked on one chain while equivalents are minted on another; bridges are high-value hack targets ✓
- C) Bridges are completely trustless with absolutely no security risks
- D) Only the Ethereum Foundation is authorized to operate bridge contracts

> **Rationale:** The correct answer is B. Bridges hold massive value in locked assets, making them attractive targets. Ronin ($600M), Wormhole ($320M), and others have been exploited. Option A misunderstands; tokens don't move, they're locked/minted. Option C ignores billions in hacks. Option D is false; anyone can build bridges.

---

### Question 24
EigenLayer introduced "restaking"—using ETH that's already staked on Ethereum to simultaneously secure other protocols, potentially earning additional yield but also additional slashing risk. What is restaking and how does it extend Ethereum's security?

- A) Simply staking the same ETH twice to earn double the standard rewards
- B) Using already-staked ETH to secure additional protocols, extending Ethereum's economic security ✓
- C) The process of unstaking and then immediately staking again
- D) A method specifically designed to avoid all slashing penalties

> **Rationale:** The correct answer is B. Restaking lets staked ETH secure oracles, bridges, and other services, bootstrapping their security from Ethereum's massive stake. Option A oversimplifies. Option C describes a different action. Option D is backwards; restaking adds slashing risk.

---

### Question 25
Ethereum gas prices are typically quoted in "gwei"—one billionth of an ETH—because saying "0.000000030 ETH" is awkward while "30 gwei" is convenient for discussing transaction costs. What does gwei represent and why is it the standard unit?

- A) A type of Ethereum token used exclusively for governance voting
- B) One billionth of an ETH, providing a convenient scale for gas prices ✓
- C) The name of one of Ethereum's anonymous co-founders
- D) A measurement of transaction processing speed on the network

> **Rationale:** The correct answer is B. Gwei (giga-wei) = 10^9 wei = 10^-9 ETH. It's the Goldilocks unit for gas prices—not too big, not too small. Option A confuses with governance tokens. Option C is false; it's named after Wei Dai. Option D misunderstands; gwei measures cost, not speed.

---

### Question 26
Ethereum's code included a "difficulty bomb" that would progressively make mining harder until blocks became impossibly slow, creating pressure to transition away from Proof-of-Work. What was the difficulty bomb and why was it implemented?

- A) A security feature specifically designed to prevent 51% attacks on the network
- B) A mechanism that increased mining difficulty to incentivize the transition to Proof-of-Stake ✓
- C) A bug that was accidentally introduced during an early network upgrade
- D) A feature that increases staking rewards over time for loyal validators

> **Rationale:** The correct answer is B. The difficulty bomb was a "ticking clock" forcing the community to either upgrade to PoS or face an unusable chain. It was delayed several times before The Merge. Option A misunderstands its purpose. Option C is wrong; it was intentional. Option D confuses with staking mechanics.

---

### Question 27
Bitcoin tracks individual "coins" (UTXOs) that are created and destroyed in transactions, while Ethereum maintains account balances that increase and decrease like a bank ledger. How does Ethereum's state model differ from Bitcoin's UTXO model?

- A) They are completely identical systems using different terminology
- B) Ethereum tracks account balances globally, enabling complex contracts but creating state bloat ✓
- C) Bitcoin's UTXO model is significantly more complex than Ethereum's approach
- D) State models only matter for NFTs, not regular token transactions

> **Rationale:** The correct answer is B. Ethereum's account model simplifies smart contract logic but requires storing everyone's balance forever (state bloat). UTXOs are stateless but harder for complex contracts. Option A ignores real differences. Option C is debatable. Option D is false; state affects everything.

---

### Question 28
Chain reorganizations—where the network switches to a different fork of recent history—were relatively common in Proof-of-Work Ethereum but became much rarer after The Merge. What is a reorg and why are they less common in Proof-of-Stake?

- A) A planned network upgrade coordinated by the Ethereum Foundation
- B) When the chain switches to a different fork; PoS finality makes deep reorgs require burning massive stake ✓
- C) The process of reorganizing validator committee assignments each epoch
- D) Reorgs actually became more common and problematic after The Merge

> **Rationale:** The correct answer is B. PoW reorgs just needed more hash power; PoS reorgs past finality require sacrificing 1/3 of all staked ETH (~$40B+). Option A confuses with upgrades. Option C misunderstands the term. Option D is backwards; reorgs decreased.

---

### Question 29
Some features are built directly into Ethereum's protocol (like the EVM), while others exist as smart contracts on top (like Uniswap)—the debate over what should be "enshrined" in the protocol is ongoing. What does "enshrined" mean and why is there debate about it?

- A) Features that have been blessed by religious authorities for the community
- B) Built into the protocol rather than application layer; enshrining adds security but reduces flexibility ✓
- C) Features that can never be changed or upgraded under any circumstances
- D) Marketing terminology with no actual technical meaning or implications

> **Rationale:** The correct answer is B. Enshrined features get protocol-level security and efficiency but are harder to change. The community debates whether things like account abstraction or PBS should be enshrined. Option A is absurd. Option C overstates immutability. Option D dismisses real technical debates.

---

### Question 30
In each slot, one validator is randomly selected to propose a block while thousands of others attest to its validity—these roles rotate to distribute responsibility across the validator set. What is the difference between proposers and attesters in Ethereum PoS?

- A) Proposers and attesters are exactly the same role with different names
- B) Proposers create new blocks; attesters vote on validity; both roles rotate among validators ✓
- C) Only proposers earn any rewards; attesters participate voluntarily
- D) Attesters are optional participants who can choose whether to vote

> **Rationale:** The correct answer is B. Each slot has one proposer (creates block) and many attesters (vote on it). Roles rotate randomly. Both earn rewards; both can be slashed. Option A is wrong; they're distinct roles. Option C is false; attesters earn rewards. Option D is wrong; attesting is mandatory.

---

### Question 31
Most Layer 2 rollups currently use a single "sequencer" operated by the team to order transactions and submit batches to Ethereum, creating a potential point of centralization and censorship. How do sequencers work and why is decentralization important?

- A) Sequencers are specialized hardware devices required for validator operations
- B) Sequencers order and batch transactions; centralized sequencers create censorship and liveness risks ✓
- C) Sequencers only exist on Ethereum mainnet, not on Layer 2 networks
- D) All major rollups already have fully decentralized sequencer networks

> **Rationale:** The correct answer is B. A single sequencer can censor transactions or go offline, breaking the L2. Decentralizing sequencers is a major goal for rollup maturity. Option A confuses with hardware. Option C is backwards; sequencers are L2 components. Option D is false; most are still centralized.

---

### Question 32
For rollups to be secure, anyone must be able to verify the rollup's state by accessing the underlying transaction data—if this data were hidden, fraud proofs couldn't work. What is data availability and why is it crucial for rollup security?

- A) How quickly data can be downloaded from the blockchain network
- B) Ensuring transaction data is accessible so anyone can verify state and detect fraud ✓
- C) The availability of block explorer websites for viewing transactions
- D) A measure of overall network uptime and reliability percentage

> **Rationale:** The correct answer is B. If rollup data isn't available, no one can prove fraud occurred. Data availability guarantees that verification is always possible. Option A confuses with bandwidth. Option C is superficial. Option D confuses with uptime.

---

### Question 33
Some view ETH purely as "gas token" for paying transaction fees, while others argue it functions as money—a store of value, medium of exchange, and unit of account within the Ethereum economy. What does "ETH is money" mean as a narrative?

- A) ETH can only be used to pay transaction fees and nothing else
- B) Beyond gas utility, ETH serves as collateral, store of value, and medium of exchange ✓
- C) ETH is officially recognized as legal tender by governments worldwide
- D) This is purely a marketing slogan with no economic substance

> **Rationale:** The correct answer is B. ETH is used as collateral in DeFi, payment for NFTs, store of value, and unit of account—monetary functions beyond just gas. Option A understates ETH's roles. Option C is false; no country recognizes ETH as legal tender. Option D dismisses real economic usage.

---

### Question 34
Light clients need to verify the chain without downloading everything, so Ethereum uses "sync committees"—rotating groups of 512 validators who sign block headers for easy verification. What is the sync committee and what role does it play?

- A) A committee responsible for synchronizing validator schedules across time zones
- B) A rotating validator subset that signs headers, enabling light clients to verify the chain ✓
- C) The core team responsible for coordinating all protocol upgrades
- D) A governance body that votes on Ethereum Improvement Proposals

> **Rationale:** The correct answer is B. Sync committees let light clients verify the chain by checking 512 signatures rather than processing all attestations. Option A misunderstands the purpose. Option C confuses with core devs. Option D confuses with governance.

---

### Question 35
Before the Shanghai upgrade in April 2023, staked ETH was locked indefinitely with no way to withdraw—stakers had to trust that withdrawals would eventually be enabled. How do withdrawals work after Shanghai and what prevents mass exits?

- A) Withdrawals are instant with no waiting period or limitations whatsoever
- B) Validators enter an exit queue with rate limits to prevent destabilizing mass exits ✓
- C) Withdrawals require approval from the Ethereum Foundation governance team
- D) Staked ETH still cannot be withdrawn and remains locked permanently

> **Rationale:** The correct answer is B. The exit queue limits how many validators can leave per epoch, preventing a bank run that could destabilize consensus. Option A is false; there are queues. Option C is wrong; it's permissionless. Option D is outdated; Shanghai enabled withdrawals.

---

### Question 36
Vitalik Buterin has emphasized that Ethereum should maintain "credible neutrality"—not favoring any particular users, applications, or use cases over others. What is credible neutrality and why does it matter for Ethereum's success?

- A) A legal requirement imposed on all blockchain platforms by regulators
- B) The principle that the protocol shouldn't favor any users or apps, maintaining trust through impartiality ✓
- C) Ethereum's official political stance on global governance issues
- D) A consensus mechanism that serves as an alternative to Proof-of-Stake

> **Rationale:** The correct answer is B. If Ethereum favored certain apps or censored others, it would lose trust as a neutral platform. Credible neutrality is why diverse projects build on Ethereum. Option A is false; it's a design principle. Option C misunderstands. Option D confuses with consensus.

---

### Question 37
Certain operations like cryptographic signature verification would be extremely expensive if implemented in regular Solidity, so Ethereum includes "precompiles"—optimized implementations built directly into the protocol. What are precompiles and why do they exist?

- A) Smart contracts that are compiled before deployment to save gas
- B) Optimized protocol-level implementations of operations too expensive for regular EVM bytecode ✓
- C) Smart contracts written in programming languages other than Solidity
- D) Contracts that can only be called by validators, not regular users

> **Rationale:** The correct answer is B. Precompiles (like ecrecover for signatures) run native code instead of EVM bytecode, making complex cryptography affordable. Option A misunderstands the term. Option C confuses with language choice. Option D is false; anyone can call precompiles.

---

### Question 38
EIP-4844 introduced a separate fee market for blob data, meaning rollup data costs can fluctuate independently from regular transaction gas prices. How does the blob fee market differ from the regular gas market?

- A) Blobs and regular gas use exactly the same unified fee market
- B) Blobs have independent pricing, allowing rollup costs to fluctuate separately from execution costs ✓
- C) Blob fees are always significantly higher than regular gas fees
- D) Only validators can participate in the blob data fee market

> **Rationale:** The correct answer is B. Separate markets mean L2 costs don't spike just because mainnet is congested with NFT mints. Option A is false; they're separate. Option C isn't necessarily true; blobs are often cheaper. Option D is wrong; anyone posting blobs pays fees.

---

### Question 39
When The DAO hack occurred, there was no on-chain vote—the community debated on forums, social media, and mining pools before deciding to fork, demonstrating that human consensus ultimately governs blockchain. What is social consensus and how did it affect The DAO decision?

- A) Voting conducted exclusively through social media platforms like Twitter
- B) The community's collective agreement on protocol direction, which decided to fork despite no formal vote ✓
- C) A consensus mechanism that completely replaced Proof-of-Stake
- D) Automated governance conducted entirely through smart contracts

> **Rationale:** The correct answer is B. Ultimately, humans decide what software to run. The DAO fork showed that social consensus—rough community agreement—can override "code is law." Option A is too narrow. Option C misunderstands. Option D describes on-chain governance, different concept.

---

### Question 40
Validators have an "effective balance" used for reward calculations that's capped at 32 ETH and rounds down to whole numbers, even if their actual balance differs due to accumulated rewards or partial slashing. What is effective balance and why doesn't it always match actual balance?

- A) Effective balance is always exactly 32 ETH for every single validator
- B) It's capped at 32 ETH and rounds down, affecting rewards even if actual balance differs ✓
- C) Effective balance includes all pending rewards not yet distributed
- D) Only the Ethereum Foundation tracks and calculates effective balance

> **Rationale:** The correct answer is B. Effective balance simplifies consensus calculations. A validator with 32.9 ETH has 32 effective balance; one with 31.5 has 31. This affects rewards proportionally. Option A is false; it can be less than 32. Option C is backwards. Option D is wrong; it's protocol-calculated.

---

### Question 41
Optimistic rollups assume all transactions are valid by default, but anyone can challenge suspicious state transitions during a "challenge period"—typically seven days—by submitting a fraud proof. How do fraud proofs work in optimistic rollups?

- A) Fraud proofs must be submitted before any transactions are processed
- B) Anyone can challenge invalid state during a window; if proven fraudulent, the state is corrected ✓
- C) Fraud proofs are exclusively used by ZK-rollups, not optimistic rollups
- D) The challenge period is exactly 24 hours on all optimistic rollups

> **Rationale:** The correct answer is B. The 7-day window lets anyone prove fraud by re-executing disputed transactions. If fraud is proven, the rollup reverts to the correct state. Option A misunderstands timing. Option C is backwards; ZK uses validity proofs. Option D is wrong; it's typically 7 days.

---

### Question 42
Currently, validators both build blocks (choosing which transactions to include) and propose them, but this creates MEV centralization pressure; Proposer-Builder Separation would split these roles. What is PBS and what problem does it solve?

- A) A method to separate staking operations from validation duties
- B) Separating block building from proposing to democratize MEV and reduce centralization ✓
- C) A privacy feature that hides transaction details from validators
- D) Separating Layer 1 operations from Layer 2 rollup activities

> **Rationale:** The correct answer is B. PBS lets specialized builders compete to create optimal blocks while proposers just choose the best bid, preventing MEV from centralizing validation. Option A misunderstands. Option C confuses with privacy. Option D confuses with L2 separation.

---

### Question 43
If a Layer 2 sequencer goes offline or starts censoring transactions, users need a way to exit back to Ethereum mainnet without the sequencer's cooperation—this safety mechanism is called an "escape hatch." What is an escape hatch and why is it important?

- A) A mechanism to quickly exit staking positions without waiting
- B) A way for users to withdraw to L1 even if the L2 sequencer is malicious or offline ✓
- C) An emergency shutdown switch for smart contracts during exploits
- D) A feature exclusively available to validators and node operators

> **Rationale:** The correct answer is B. Escape hatches ensure L2s can't hold funds hostage. Users can force withdrawals through L1 contracts even if the L2 is compromised. Option A confuses with staking. Option C describes circuit breakers. Option D is false; it's for all users.

---

### Question 44
If too many validators go offline and the chain can't finalize, Ethereum activates an "inactivity leak" that gradually drains offline validators' stakes until finality can resume with the remaining active validators. What is the inactivity leak and when does it activate?

- A) A bug that causes validators to lose network connectivity randomly
- B) A penalty that drains inactive validators' stakes when finality fails, eventually restoring it ✓
- C) A reward mechanism for validators who remain consistently active
- D) The inactivity leak was removed from the protocol after The Merge

> **Rationale:** The correct answer is B. If >1/3 of validators go offline, finality stops. The inactivity leak slowly reduces their stake until active validators control >2/3 again. Option A misunderstands. Option C is backwards; it's a penalty. Option D is false; it's still active.

---

### Question 45
Running a validator requires 100% uptime, but hardware fails and internet drops—Distributed Validator Technology lets multiple operators collectively run one validator, reducing single points of failure. How does DVT improve staking?

- A) It distributes staking rewards more evenly among all network participants
- B) Multiple operators run one validator together, reducing downtime risk and enabling smaller participants ✓
- C) It distributes validators across different blockchain networks simultaneously
- D) DVT is exclusively designed for large institutional staking operations

> **Rationale:** The correct answer is B. DVT splits validator keys among multiple parties who must cooperate to sign. No single failure takes the validator offline. Option A confuses with reward distribution. Option C misunderstands. Option D is false; it helps small stakers too.

---

### Question 46
Vitalik's Ethereum roadmap includes phases with playful names: Surge (scaling), Scourge (MEV), Verge (statelessness), Purge (history expiry), and Splurge (everything else). What are these roadmap phases about?

- A) Marketing names with no actual technical meaning or development plans
- B) Planned upgrades for scaling, MEV mitigation, statelessness, history expiry, and misc improvements ✓
- C) Different versions of Ethereum that will run simultaneously as separate networks
- D) Historical phases that have already been fully completed and deployed

> **Rationale:** The correct answer is B. Each phase addresses specific challenges: Surge = rollup scaling, Scourge = MEV fairness, Verge = light nodes, Purge = reduce bloat, Splurge = cleanup. Option A dismisses real plans. Option C misunderstands; they're upgrades to one network. Option D is false; most are ongoing.

---

### Question 47
Most rollups use their own sequencers, but "based rollups" use Ethereum L1 validators for transaction ordering, inheriting mainnet's decentralization and liveness properties directly. What is a based rollup and how does it differ from standard rollups?

- A) A rollup built using basic, unoptimized technology and infrastructure
- B) A rollup using Ethereum L1 validators for sequencing, inheriting L1's decentralization ✓
- C) The original rollup design before any optimizations were developed
- D) A rollup that only supports basic token transfers, not smart contracts

> **Rationale:** The correct answer is B. Based rollups outsource sequencing to L1, gaining decentralization and censorship resistance but potentially sacrificing some speed. Option A misunderstands the term. Option C is wrong. Option D confuses with functionality limits.

---

### Question 48
Currently, Ethereum nodes must store the entire state (all account balances, contract storage) to validate blocks, requiring hundreds of gigabytes; statelessness would let nodes verify without storing state. What is statelessness and why would it benefit node operators?

- A) Removing all smart contract state from the Ethereum network entirely
- B) Enabling nodes to verify blocks without storing full state, dramatically reducing requirements ✓
- C) A feature that removes the need for validators completely
- D) Statelessness has already been fully implemented on Ethereum mainnet

> **Rationale:** The correct answer is B. With statelessness, blocks would include proofs letting anyone verify without local state. This could let phones run nodes. Option A misunderstands; state still exists. Option C is wrong. Option D is false; it's still in development.

---

### Question 49
Developers test smart contracts on Sepolia and Holesky—networks that mirror Ethereum's functionality but use tokens with no value, allowing experimentation without financial risk. What is the relationship between mainnet and testnets?

- A) Testnets are backup networks that activate if mainnet fails catastrophically
- B) Testnets mirror mainnet functionality with worthless tokens for safe development testing ✓
- C) Testnets are faster versions of mainnet with higher throughput
- D) Only Ethereum Foundation employees are permitted to use testnet networks

> **Rationale:** The correct answer is B. Testnets let developers deploy, test, and break things without losing real money. They're essential for safe development. Option A misunderstands their purpose. Option C isn't necessarily true. Option D is false; testnets are public.

---

### Question 50
Some projects emphasize being "Ethereum-aligned"—committed to decentralization, open source, and contributing to the ecosystem rather than extracting value from it. What does Ethereum alignment mean in the ecosystem?

- A) Using the same visual branding and color scheme as Ethereum
- B) Commitment to Ethereum's values of decentralization and contributing to rather than extracting from the ecosystem ✓
- C) A formal legal partnership agreement with the Ethereum Foundation
- D) Simply running nodes on Ethereum mainnet without any other requirements

> **Rationale:** The correct answer is B. Alignment means sharing Ethereum's ethos—open source, decentralization, public goods—rather than just building on Ethereum to extract value. Option A is superficial. Option C doesn't exist. Option D is too narrow; alignment is about values.
