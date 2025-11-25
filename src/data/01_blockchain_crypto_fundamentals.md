# Blockchain & Cryptocurrency Fundamentals Quiz

## 50 Questions on General Blockchain, Crypto Knowledge & History

---

### Question 1
Before Bitcoin, digital currency projects like DigiCash and e-gold failed because users could copy digital files and spend the same money twice, requiring trusted companies to prevent fraud. What problem did Bitcoin's blockchain solve that these earlier systems could not?

- A) Enabling fully anonymous transactions that no government agency can ever trace or monitor
- B) Allowing instant international transfers without any currency conversion fees or delays
- C) Preventing double-spending without needing a trusted central authority ✓
- D) Creating digital scarcity through advanced military-grade encryption algorithms

> **Rationale:** The correct answer is C. The double-spending problem was the core challenge—how do you prevent someone from copying digital money and spending it twice without a bank to verify balances? Bitcoin solved this through its blockchain, where the network collectively validates transactions. Option A is wrong because Bitcoin is pseudonymous, not anonymous—transactions are publicly traceable. Option B is incorrect because Bitcoin transactions aren't instant and do involve fees. Option D misunderstands the innovation; while cryptography is used, the breakthrough was the consensus mechanism, not encryption strength.

---

### Question 2
The first Bitcoin block contains a hidden message: "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks," referencing a newspaper headline about government intervention in failing financial institutions. What was Satoshi Nakamoto likely communicating by embedding this specific headline?

- A) The exact timestamp needed for cryptographic verification of the genesis block
- B) A critique of centralized banking and justification for decentralized money ✓
- C) A tribute to British journalism and the importance of free press worldwide
- D) Encoded instructions for early miners explaining how to join the network

> **Rationale:** The correct answer is B. The headline about bank bailouts during the 2008 financial crisis was deliberately chosen to highlight the failures of centralized financial systems—the very problem Bitcoin aimed to solve. Option A is wrong because any text could serve as a timestamp; this specific headline was chosen for its meaning. Option C misses the point entirely; it wasn't about journalism but about banking failures. Option D is incorrect because the genesis block doesn't contain mining instructions—it's a philosophical statement embedded in code.

---

### Question 3
In public-key cryptography, your public key is like a mailbox address anyone can send to, while your private key is the only key that opens that mailbox. If you lose your private key but still remember your public key and wallet address, what can you do to recover your cryptocurrency?

- A) Request a key reset from the blockchain's official customer support team
- B) Use your public key to mathematically derive the private key through computation
- C) Nothing—the funds become permanently inaccessible forever ✓
- D) Ask miners to conduct a community vote on reassigning your balance

> **Rationale:** The correct answer is C. Blockchains have no customer support, no password reset, and no central authority—that's the entire point of decentralization. Once a private key is lost, those funds are gone forever. Option A is wrong because there is no company or support team running Bitcoin. Option B is mathematically impossible; public-key cryptography is specifically designed so that deriving a private key from a public key would take longer than the age of the universe. Option D misunderstands how blockchains work; miners validate transactions according to protocol rules, they cannot arbitrarily reassign funds.

---

### Question 4
When you send Bitcoin, the transaction enters a waiting area called the mempool before miners include it in a block, and each subsequent block adds another "confirmation." Why do merchants typically wait for multiple confirmations before considering a payment final?

- A) Each confirmation adds another layer of military-grade encryption to the transaction
- B) More confirmations reduce the risk of reversal in a chain reorganization ✓
- C) Confirmations are required for the recipient's wallet software to display the balance
- D) The Bitcoin protocol officially requires a minimum of six confirmations for validity

> **Rationale:** The correct answer is B. Chain reorganizations can occur when competing blocks are mined, potentially reversing recent transactions. Each additional confirmation makes reversal exponentially harder because an attacker would need to outpace the entire network. Option A is wrong because confirmations don't add encryption—the transaction data remains the same. Option C is incorrect; wallets can display unconfirmed transactions. Option D is false; the protocol doesn't mandate six confirmations—it's a convention merchants choose based on risk tolerance.

---

### Question 5
Bitcoin's code limits the total supply to 21 million coins, with miners currently earning new bitcoins as block rewards that halve approximately every four years until around 2140. Once all bitcoins have been mined, how will miners be incentivized to continue securing the network?

- A) The protocol will automatically increase the supply cap through community governance voting
- B) Mining will transition to voluntary community service supported by donations
- C) Miners will earn only transaction fees paid by network users ✓
- D) A new and improved cryptocurrency will automatically replace Bitcoin entirely

> **Rationale:** The correct answer is C. Bitcoin was designed with this transition in mind—as block rewards decrease, transaction fees are expected to become the primary incentive for miners. Option A contradicts Bitcoin's core value proposition of a fixed supply; changing the cap would require consensus that would likely never happen. Option B is economically naive; mining requires significant resources and wouldn't survive on altruism. Option D is baseless; there's no mechanism for automatic replacement built into Bitcoin.

---

### Question 6
Occasionally, two miners solve the cryptographic puzzle at nearly the same moment, broadcasting two different valid blocks to the network and creating a temporary split in the blockchain. How does the Bitcoin network decide which block becomes part of the permanent record?

- A) The block containing more transactions automatically wins the selection process
- B) Miners conduct a democratic vote to decide which block to accept
- C) Whichever chain gets extended first becomes canonical; the other is orphaned ✓
- D) Both competing blocks merge together into a single combined larger block

> **Rationale:** The correct answer is C. Bitcoin follows the "longest chain rule"—miners build on whichever block they received first, and the chain that gets extended becomes the valid one while the other is abandoned (orphaned). Option A is wrong; transaction count doesn't determine validity. Option B misunderstands consensus; there's no voting mechanism—it's determined by proof-of-work. Option D is technically impossible; blocks have specific structures and cannot be merged.

---

### Question 7
Each block in a blockchain contains a cryptographic hash of the previous block, creating a chain where altering any historical data would change all subsequent hashes. Why is it practically impossible to change a transaction buried under 100 blocks?

- A) The data is protected by classified military-grade encryption that cannot be broken
- B) You must redo proof-of-work for that block and all 100 after it faster than the network ✓
- C) Historical transactions are stored on special government-protected secure servers
- D) The original sender must provide digital approval for any modifications to occur

> **Rationale:** The correct answer is B. Changing any block invalidates all subsequent block hashes, requiring an attacker to redo the computational work for every block while the honest network continues adding new blocks. This becomes exponentially impossible. Option A mischaracterizes the security model; it's not about encryption strength but computational work. Option C is completely false; Bitcoin has no central servers. Option D misunderstands immutability; no one can approve changes—that's the point.

---

### Question 8
Before blockchain, online transactions required banks, PayPal, or other intermediaries to verify that senders actually had the money they claimed to send. What innovation allowed blockchain to enable peer-to-peer transactions without these trusted middlemen?

- A) Significantly faster fiber-optic internet connections between global users worldwide
- B) A distributed ledger where network consensus replaces institutional trust ✓
- C) Official government guarantees and insurance backing all digital currencies
- D) Previously classified military encryption technology released to the public

> **Rationale:** The correct answer is B. The key innovation is that thousands of independent nodes maintain identical copies of the ledger and collectively agree on valid transactions through consensus rules. Option A is irrelevant; internet speed doesn't solve the trust problem. Option C is the opposite of reality; cryptocurrencies specifically operate without government backing. Option D is false; the cryptographic techniques used in Bitcoin were already publicly known.

---

### Question 9
Bitcoin's block reward started at 50 BTC in 2009, dropped to 25 in 2012, then 12.5 in 2016, 6.25 in 2020, and 3.125 in 2024, with each "halving" reducing new supply entering the market. What economic principle explains why halvings historically correlate with price increases?

- A) Halvings signal that Bitcoin's underlying technology has significantly improved
- B) Reduced supply with steady or growing demand creates scarcity pressure ✓
- C) Miners collectively agree to sell less Bitcoin during halving years
- D) Increased media coverage of halvings attracts waves of new investors

> **Rationale:** The correct answer is B. Basic supply and demand economics: when the rate of new supply decreases while demand remains constant or grows, prices tend to rise. Option A is wrong; halvings are predetermined events, not technology upgrades. Option C misunderstands miner behavior; miners are independent actors who sell based on their own needs. Option D confuses correlation with causation; while media coverage exists, the fundamental driver is supply reduction.

---

### Question 10
Some Bitcoin has been sent to addresses where no one knows the private key—whether through accidents, lost passwords, or intentional "burns" to provably destroy coins. What happens to Bitcoin sent to these unrecoverable addresses?

- A) It automatically returns to the sender after a standard 90-day waiting period
- B) Network miners can eventually claim it as additional bonus rewards
- C) It remains frozen forever, effectively reducing the total circulating supply ✓
- D) The network protocol redistributes it proportionally to all active wallets

> **Rationale:** The correct answer is C. Bitcoin has no mechanism for returning, redistributing, or claiming lost coins. They simply sit at that address forever, effectively making Bitcoin more scarce over time. Option A is false; there's no timeout or return mechanism in Bitcoin. Option B is wrong; miners can only earn block rewards and fees, not claim abandoned coins. Option D contradicts Bitcoin's design; there's no redistribution mechanism.

---

### Question 11
Software wallets store your private keys on internet-connected devices like phones and computers, while hardware wallets store keys on dedicated offline devices that sign transactions internally. Why are hardware wallets considered more secure even when using identical cryptographic standards?

- A) Hardware wallets utilize stronger and more advanced encryption algorithms internally
- B) The private key never leaves the device, protecting it from remote attacks ✓
- C) Hardware wallets are fully insured by their manufacturers against all losses
- D) Software wallets are legally required to share keys with developer companies

> **Rationale:** The correct answer is B. The security advantage is isolation—hardware wallets sign transactions on the device itself, so the private key is never exposed to potentially compromised computers or networks. Option A is wrong; both use the same cryptographic standards. Option C is false; hardware wallets typically aren't insured, and user error isn't covered. Option D is completely untrue; reputable software wallets don't have access to your keys.

---

### Question 12
When setting up a new cryptocurrency wallet, you receive a 12 or 24-word "seed phrase" that you must write down and store safely, as it can restore your entire wallet on any compatible device. What is the mathematical relationship between this seed phrase and your private keys?

- A) The seed phrase is a backup copy stored securely on the wallet company's servers
- B) The seed phrase deterministically generates all private keys through derivation ✓
- C) The seed phrase is simply a human-readable version of one single private key
- D) Seed phrases are proprietary and only work with the original wallet brand

> **Rationale:** The correct answer is B. Using BIP-39 and BIP-32 standards, the seed phrase generates a master key from which all wallet addresses and private keys are mathematically derived. This is why one phrase can restore an entire wallet with multiple addresses. Option A is dangerous misinformation; seed phrases should never be stored by any company. Option C understates the relationship; it generates many keys, not just one. Option D is false; seed phrases follow open standards and work across compatible wallets.

---

### Question 13
In a 51% attack, an entity controlling more than half of a proof-of-work network's mining power can rewrite recent transaction history and spend the same coins twice. Why are smaller cryptocurrencies more vulnerable to this attack than Bitcoin?

- A) Smaller cryptocurrencies use fundamentally weaker encryption standards overall
- B) Less total hash power means less cost to acquire majority control ✓
- C) Bitcoin has special legal protections that smaller coins completely lack
- D) Smaller networks actually have more honest miners percentage-wise

> **Rationale:** The correct answer is B. Bitcoin's massive hash rate would cost billions to attack, while smaller coins might be attackable by renting hash power for thousands of dollars. Several small coins have suffered successful 51% attacks. Option A is wrong; most use the same cryptographic algorithms. Option C is false; Bitcoin has no special legal status. Option D is irrelevant; the percentage of honest miners doesn't matter if an attacker can afford to overpower them.

---

### Question 14
Anyone can download Bitcoin software, run a node, and start mining without asking permission from any authority—this is called a "permissionless" system. How do permissioned blockchains used by banks and enterprises differ from this model?

- A) Permissioned chains are significantly faster because they use superior technology
- B) Permissioned chains require approval from administrators to participate ✓
- C) Permissioned chains are legally prohibited from processing financial transactions
- D) Permissionless chains require expensive government licenses to legally operate

> **Rationale:** The correct answer is B. Permissioned blockchains have gatekeepers who control who can validate transactions, join the network, or view data. This trades decentralization for control and compliance. Option A oversimplifies; while permissioned chains can be faster, it's due to fewer validators, not superior technology. Option C is backwards; permissioned chains are often designed specifically for regulated financial use. Option D is false; running Bitcoin software requires no license.

---

### Question 15
When you send a Bitcoin transaction, you attach a fee measured in satoshis per byte, and miners prioritize transactions offering higher fees because block space is limited. Why do you pay fees on a network with no company or employees?

- A) Fees are collected and distributed to the original Bitcoin creator's foundation
- B) Fees incentivize miners to include your transaction and secure the network ✓
- C) Fees are collected by governments as mandatory digital transaction taxes
- D) Fees are automatically burned by the protocol to reduce total supply

> **Rationale:** The correct answer is B. Fees create a market for block space and compensate miners for the computational work of processing and securing transactions. Option A is false; Satoshi disappeared and there's no foundation collecting fees. Option C is wrong; fees go to miners, not governments. Option D describes Ethereum's EIP-1559 mechanism, not Bitcoin, where fees go entirely to miners.

---

### Question 16
Sometimes the network temporarily accepts two competing versions of recent history, then abandons one when the other grows longer—this is called a "chain reorganization" or reorg. Why should a merchant wait for confirmations rather than accepting a zero-confirmation transaction?

- A) Zero-confirmation transactions haven't been properly encrypted yet by miners
- B) A reorg could reverse the transaction, letting buyers keep goods and money ✓
- C) Wallet software cannot technically display any unconfirmed transactions at all
- D) The Bitcoin protocol officially prohibits merchants from accepting zero confirmations

> **Rationale:** The correct answer is B. With zero confirmations, an attacker could broadcast a conflicting transaction, and if that version gets confirmed instead, the merchant loses both the goods and the payment. Option A misunderstands the process; transactions are signed before broadcast, not encrypted by miners. Option C is false; wallets commonly show pending transactions. Option D is wrong; the protocol doesn't prohibit anything—it's a risk management decision.

---

### Question 17
Bitcoin transactions are visible to everyone on the blockchain, showing amounts and addresses but not real names—this is called pseudonymity rather than anonymity. How do privacy coins like Monero hide transaction details that Bitcoin leaves exposed?

- A) They store all transaction data on private centralized servers instead of blockchain
- B) They use cryptographic techniques like ring signatures to obscure all details ✓
- C) They require government approval before revealing any transaction data publicly
- D) They automatically delete all transaction history after a standard 30-day period

> **Rationale:** The correct answer is B. Monero uses ring signatures (mixing your transaction with others), stealth addresses (one-time addresses for each transaction), and RingCT (hiding amounts) to provide privacy at the protocol level. Option A would defeat the purpose of blockchain. Option C is backwards; privacy coins specifically avoid government oversight. Option D would break the blockchain's integrity and auditability.

---

### Question 18
Cryptocurrency market capitalization is calculated by multiplying the current price by the circulating supply, but this number can be misleading when evaluating a coin's actual value. Why might a $10 billion market cap not mean $10 billion could actually be extracted from that cryptocurrency?

- A) Market cap calculations are usually mathematically incorrect due to data errors
- B) Selling large amounts would crash the price; market cap ignores liquidity ✓
- C) Market cap metrics only measure institutional holdings, not retail investors
- D) Cryptocurrency prices are arbitrarily set by exchanges, not actual markets

> **Rationale:** The correct answer is B. Market cap assumes every coin could be sold at the current price, but large sell orders move the market. A $10B market cap coin might only have $100M in actual buy orders. Option A is wrong; the math is simple multiplication. Option C misunderstands market cap; it counts all circulating coins regardless of holder type. Option D is false; prices are determined by supply and demand on exchanges.

---

### Question 19
Every Bitcoin transaction references specific previous transaction outputs as inputs, and once those outputs are spent, they cannot be used again—the network tracks which outputs remain unspent. Why can't someone simply copy a valid transaction and broadcast it repeatedly to receive multiple payments?

- A) All transactions automatically expire immediately after being broadcast once
- B) Each transaction spends specific outputs that become marked as spent ✓
- C) The network uses advanced facial recognition to prevent duplicate submissions
- D) Only the sender's registered IP address can broadcast their own transactions

> **Rationale:** The correct answer is B. The UTXO (Unspent Transaction Output) model means each "coin" can only be spent once. Once a transaction is confirmed, those inputs are marked as spent and can never be used again. Option A is false; transactions don't expire—they either confirm or stay in mempool. Option C is absurd; blockchain has no identity verification. Option D is wrong; anyone can broadcast any valid transaction from any IP.

---

### Question 20
Full nodes download and verify every transaction in blockchain history, enforcing all protocol rules independently without trusting anyone else's validation. Why is having thousands of independent nodes important for a blockchain's decentralization?

- A) More nodes directly make all transactions process significantly faster
- B) No single entity can control what transactions are considered valid ✓
- C) Nodes are responsible for storing user passwords and login credentials
- D) Nodes are physical manufacturing facilities that produce new cryptocurrency

> **Rationale:** The correct answer is B. Decentralization means no single point of control or failure. With thousands of nodes independently verifying rules, no government, company, or hacker can unilaterally change what's valid. Option A is wrong; more nodes don't speed up transactions—that's determined by block time and size. Option C is false; nodes don't store any user credentials. Option D confuses nodes with miners; nodes verify, miners create new blocks.

---

### Question 21
Traditional finance requires trusting banks to maintain accurate ledgers and not freeze your account arbitrarily—you verify your balance by trusting their statement. How does blockchain's "trustless" design change this relationship?

- A) Trustless actually means the system fundamentally cannot be trusted at all
- B) You can independently verify all transactions through cryptography yourself ✓
- C) Trustless systems require significantly more trust in government regulators
- D) Banks are actually more trustless and transparent than any blockchain

> **Rationale:** The correct answer is B. "Trustless" means you don't need to trust anyone—you can verify everything yourself using open-source code and cryptographic proofs. Option A misinterprets the term; trustless means trust isn't required, not that it's untrustworthy. Option C is backwards; blockchains reduce reliance on regulators. Option D is false; bank ledgers are private and require trust.

---

### Question 22
In Bitcoin mining, computers repeatedly hash block data with different "nonce" values—a simple number that miners increment—searching for a hash output below the network's difficulty target. Why must miners try billions of nonce values to find a valid block?

- A) The nonce value directly determines how many coins the miner will receive
- B) Finding a hash below the target is statistically rare, requiring trial and error ✓
- C) Each nonce must be officially registered with the network before being used
- D) The nonce is responsible for encrypting all transaction data for privacy

> **Rationale:** The correct answer is B. Hash functions produce unpredictable outputs, so finding one below the difficulty target is like a lottery—you must keep trying until you get lucky. Option A is wrong; block rewards are fixed by protocol, not nonce. Option C is false; nonces aren't registered anywhere. Option D misunderstands the nonce; it's for proof-of-work, not encryption.

---

### Question 23
In 2017, disagreement over whether to increase Bitcoin's block size led to a "hard fork" creating Bitcoin Cash, with one side arguing bigger blocks would enable more transactions and the other warning it would centralize mining. What was the core trade-off being debated?

- A) Whether to completely change Bitcoin's official logo and branding identity
- B) Throughput versus decentralization—larger blocks need more resources ✓
- C) Whether to remove the 21 million supply cap to allow unlimited coins
- D) Which specific country should officially host the most mining operations

> **Rationale:** The correct answer is B. Larger blocks mean more transactions per second but require more bandwidth and storage, potentially pricing out smaller node operators and centralizing the network. Option A is trivial and wasn't debated. Option C is false; neither side proposed changing the supply cap. Option D was never part of the discussion.

---

### Question 24
Bitcoin addresses are derived from public keys through hashing, and transactions are signed with private keys, but your real identity isn't recorded on the blockchain. Why is Bitcoin considered pseudonymous rather than truly anonymous?

- A) The government secretly tracks and monitors all Bitcoin users worldwide
- B) Transaction patterns can be analyzed to potentially link addresses to identities ✓
- C) Bitcoin officially requires ID verification to create any new wallet address
- D) Pseudonymous and anonymous mean exactly the same thing technically

> **Rationale:** The correct answer is B. While addresses aren't names, blockchain analysis firms can trace transaction flows, cluster addresses, and correlate with exchange KYC data to identify users. Option A overstates government capability. Option C is false; anyone can generate addresses without ID. Option D is wrong; pseudonymous means using a consistent identifier (address), while anonymous means no identifier at all.

---

### Question 25
Running a full Bitcoin node requires downloading over 500GB of blockchain data, but "light clients" or SPV wallets work on phones with minimal storage by only downloading block headers. How can light clients verify that a transaction is legitimate without the full blockchain?

- A) They completely trust a central server without performing any verification
- B) They use Merkle proofs to confirm transactions are included in valid blocks ✓
- C) They directly contact the original sender to manually verify each transaction
- D) Light clients technically cannot verify any transactions whatsoever at all

> **Rationale:** The correct answer is B. Merkle proofs let you verify a transaction is in a block using only a small branch of hashes plus the block header, without downloading all transactions. Option A describes a custodial service, not SPV. Option C is impractical and not how SPV works. Option D is false; SPV provides real verification, just with different trust assumptions than full nodes.

---

### Question 26
Bitcoin mining consumes enormous electricity, and miners only profit when the value of earned bitcoin exceeds their power costs—yet mining continues even during price crashes. What economic factors explain why miners operate during seemingly unprofitable periods?

- A) Mining operations are legally required to continue once they officially start
- B) Sunk costs, future price speculation, and cheaper electricity than competitors ✓
- C) Mining is mathematically always profitable regardless of electricity costs
- D) Governments provide substantial subsidies to mining operations during downturns

> **Rationale:** The correct answer is B. Miners with already-purchased equipment, cheap power contracts, or bullish price expectations may continue operating even at thin margins. Option A is false; miners can shut down anytime. Option C is obviously wrong; many miners go bankrupt during bear markets. Option D is false in most jurisdictions.

---

### Question 27
Block timestamps in Bitcoin come from the miner who created the block, not from any central time authority, yet the network needs roughly accurate timestamps for difficulty adjustments. What prevents miners from manipulating timestamps significantly?

- A) A central time server provides all official timestamps for every block
- B) Nodes reject blocks with timestamps too far from network time ✓
- C) Timestamps are completely optional and not validated by anyone
- D) Miners face serious legal penalties for submitting incorrect timestamps

> **Rationale:** The correct answer is B. Bitcoin nodes reject blocks with timestamps more than 2 hours in the future or before the median of the last 11 blocks. Option A contradicts decentralization; there's no central server. Option C is false; timestamps are validated. Option D is wrong; there are no legal requirements—it's enforced by protocol rules.

---

### Question 28
Transactions waiting to be confirmed sit in each node's "mempool" (memory pool), but nodes have limited memory and will eventually drop old, low-fee transactions that haven't been mined. What happens to your funds if your transaction gets dropped from the mempool?

- A) The funds are permanently lost to the network and cannot be recovered
- B) The funds remain in your wallet; you can resend with a higher fee ✓
- C) The funds automatically go to miners as a penalty for low fees
- D) Dropped transactions are automatically confirmed after exactly 24 hours

> **Rationale:** The correct answer is B. A dropped transaction simply never happened on-chain—your UTXOs remain unspent in your wallet, and you can create a new transaction. Option A is false; nothing is lost. Option C is wrong; miners can't claim unconfirmed transactions. Option D is false; dropped means dropped, not delayed.

---

### Question 29
In Bitcoin, a transaction with 6 confirmations is considered secure, but there's always a tiny probability it could theoretically be reversed with enough hash power—this is called "probabilistic finality." How does finality work differently in some proof-of-stake systems?

- A) Proof-of-stake systems have absolutely no concept of finality whatsoever
- B) Some PoS systems have checkpoints after which transactions are irreversible ✓
- C) Proof-of-work finality is actually significantly stronger than PoS finality
- D) Both systems have completely identical finality mechanisms and guarantees

> **Rationale:** The correct answer is B. Systems like Ethereum 2.0 have "finalized" checkpoints where reversal would require burning 1/3 of all staked ETH—economic finality rather than probabilistic. Option A is false; PoS systems do have finality concepts. Option C is debatable and context-dependent. Option D is wrong; the mechanisms differ significantly.

---

### Question 30
A Merkle tree organizes transaction hashes in a binary tree structure, with each parent node being the hash of its two children, culminating in a single "Merkle root" stored in the block header. Why is this data structure essential for light clients and efficient verification?

- A) Merkle trees encrypt all transaction data for enhanced privacy protection
- B) You can prove a transaction exists using only a small branch of hashes ✓
- C) Merkle trees determine the official transaction processing order in blocks
- D) They are only used for creating visual displays in blockchain explorers

> **Rationale:** The correct answer is B. To prove one transaction among thousands, you only need log₂(n) hashes—a path from the transaction to the root—not all transactions. Option A is wrong; Merkle trees don't encrypt anything. Option C is false; transaction order is separate from the Merkle structure. Option D understates their importance; they're fundamental to SPV security.

---

### Question 31
Some protocols permanently remove coins from circulation by sending them to addresses with no known private key, verifiably destroying value—this is called "burning." What economic effect does coin burning have on the remaining supply?

- A) Burning actually increases the total supply over time through inflation
- B) It creates scarcity, potentially increasing value of remaining coins ✓
- C) Burned coins can always be recovered later by the development team
- D) Burning has absolutely no effect on supply, value, or market dynamics

> **Rationale:** The correct answer is B. Reducing supply while demand stays constant or grows creates upward price pressure—basic economics. Option A is backwards; burning decreases supply. Option C is false; properly burned coins are unrecoverable by design. Option D ignores supply/demand fundamentals.

---

### Question 32
The Byzantine Generals Problem describes how distributed parties can reach agreement when some participants might be lying or malfunctioning—a challenge computer scientists struggled with for decades. How did blockchain consensus mechanisms solve this classical problem?

- A) By requiring all participants to personally know each other beforehand
- B) Through cryptographic proof and economic incentives making honesty profitable ✓
- C) By having a central authority verify and approve all messages first
- D) The problem actually remains completely unsolved in all blockchain systems

> **Rationale:** The correct answer is B. Proof-of-work makes lying expensive (wasted electricity) and honesty profitable (block rewards). Cheaters lose money; honest participants earn. Option A defeats the purpose of trustless systems. Option C contradicts decentralization. Option D is false; Bitcoin has operated securely for 15+ years.

---

### Question 33
Atomic swaps allow two people to exchange different cryptocurrencies directly without trusting each other or using an exchange—if one party doesn't complete their side, the whole swap fails. What cryptographic mechanism ensures that either both parties receive their funds or neither does?

- A) A trusted third party holds both currencies in escrow during the swap
- B) Hash time-locked contracts that automatically expire if conditions aren't met ✓
- C) Both parties must share their private keys with each other first
- D) Government regulators officially oversee and approve each individual swap

> **Rationale:** The correct answer is B. HTLCs use hash locks (requiring a secret to claim) and time locks (refund if unclaimed). Either both secrets are revealed and both claim, or time expires and both refund. Option A requires trust, defeating the purpose. Option C would compromise security. Option D contradicts the trustless nature.

---

### Question 34
When Bitcoin added SegWit in 2017, old nodes could still validate blocks even without understanding the new format—this backward compatibility defines a "soft fork." How does a "hard fork" differ in its impact on network participants?

- A) Hard forks are always temporary while soft forks are always permanent
- B) Hard forks create incompatible rules that can permanently split the network ✓
- C) Soft forks require significantly more development work than hard forks
- D) There is absolutely no practical difference between the two approaches

> **Rationale:** The correct answer is B. Hard forks change rules in ways old software rejects, forcing everyone to upgrade or split into separate networks (like Bitcoin/Bitcoin Cash). Option A is backwards; both can be permanent. Option C is situational, not a defining characteristic. Option D is wrong; the compatibility difference is fundamental.

---

### Question 35
Bitcoin's mining difficulty adjusts every 2016 blocks (roughly two weeks) based on how fast the previous blocks were mined, targeting an average of 10 minutes per block. Why does the protocol adjust difficulty periodically rather than continuously?

- A) Continuous adjustment would require far too much computing power overhead
- B) Periodic adjustment provides stability while still responding to changes ✓
- C) The two-week period has special religious significance to early developers
- D) Continuous adjustment is technically impossible with current cryptography

> **Rationale:** The correct answer is B. Periodic adjustment gives miners predictability for planning while still adapting to hash rate changes. Too frequent adjustment could be gamed. Option A overstates computational costs. Option C is absurd. Option D is false; continuous adjustment is possible, just not chosen.

---

### Question 36
In "selfish mining," a miner who finds a block keeps it secret while working on the next block, only revealing their hidden chain when it's longer than the public chain. Why does this strategy threaten the fairness of proof-of-work mining?

- A) It consumes significantly more electricity than honest mining practices
- B) It can allow miners to earn more than their proportional hash power share ✓
- C) It requires bribing other miners to participate in the scheme
- D) Selfish mining strategies only work on testnets, not real networks

> **Rationale:** The correct answer is B. By strategically withholding blocks, selfish miners can orphan honest miners' blocks, wasting their work while the selfish miner claims more rewards than their hash rate deserves. Option A is irrelevant to the fairness issue. Option C is false; selfish mining works solo. Option D is wrong; it's a real theoretical and practical concern.

---

### Question 37
Bitcoin tracks value through "Unspent Transaction Outputs" (UTXOs)—discrete chunks of bitcoin that are consumed entirely when spent, with change returned as a new UTXO. How does Ethereum's account model differ from this approach?

- A) Ethereum also uses UTXOs internally but calls them something completely different
- B) Ethereum tracks balances directly like a bank account rather than coins ✓
- C) The UTXO model is significantly more complex than Ethereum's system
- D) There is absolutely no practical difference between the two models

> **Rationale:** The correct answer is B. Ethereum maintains account balances that increase and decrease, like a bank ledger, rather than tracking individual "coins." Option A is false; Ethereum genuinely uses accounts. Option C is debatable; each has different complexity trade-offs. Option D is wrong; the models have significant implications for privacy, parallelization, and smart contracts.

---

### Question 38
When a blockchain hard forks, both the old and new chains share identical transaction history up to the fork point, meaning coins exist on both chains simultaneously. What is a "replay attack" and why is it dangerous after a fork?

- A) Hackers replaying recorded video of users entering their passwords
- B) A valid transaction on one chain being broadcast on the other unintentionally ✓
- C) Miners replaying old blocks to earn double rewards from the network
- D) Users accidentally sending the exact same transaction twice in a row

> **Rationale:** The correct answer is B. After a fork, a transaction signed for one chain may be valid on both. If you sell coins on one chain, someone could replay that transaction on the other chain, stealing your coins there too. Option A is unrelated to blockchain. Option C misunderstands how mining works. Option D describes user error, not replay attacks.

---

### Question 39
Bitcoin addresses starting with "1" use the original Pay-to-Public-Key-Hash format, those starting with "3" use Pay-to-Script-Hash (often for multisig), and "bc1" addresses use the newer Bech32 format. Why do different address formats exist and what do the prefixes indicate?

- A) Users can freely choose any prefix they prefer for personalization purposes
- B) Prefixes identify the address type, helping wallets construct valid transactions ✓
- C) Prefixes indicate the user's country of residence for regulatory compliance
- D) Only "bc1" addresses are currently valid on the modern Bitcoin network

> **Rationale:** The correct answer is B. Different formats have different features (SegWit support, error detection, script capabilities), and prefixes let wallets know how to format transactions correctly. Option A is false; prefixes are determined by the format. Option C is completely wrong. Option D is false; all formats remain valid.

---

### Question 40
Bitcoin's network hash rate—the total computational power of all miners—has grown from negligible in 2009 to hundreds of exahashes per second today. What is the relationship between hash rate and the network's resistance to attack?

- A) Higher hash rate directly means significantly faster transaction processing speeds
- B) More hash rate means attackers need more resources to overpower miners ✓
- C) Hash rate has absolutely no relationship to security or attack resistance
- D) Lower hash rate actually provides better security through efficiency gains

> **Rationale:** The correct answer is B. To perform a 51% attack, you need more hash power than the honest network. Higher total hash rate means higher attack costs. Option A is wrong; block time is fixed by difficulty adjustment. Option C is false; hash rate directly determines attack cost. Option D is backwards; lower hash rate means cheaper attacks.

---

### Question 41
"Wrapped Bitcoin" (WBTC) is an ERC-20 token on Ethereum that represents Bitcoin held in custody, allowing BTC value to be used in Ethereum's DeFi ecosystem. How do wrapped tokens enable cross-chain asset movement?

- A) They physically teleport actual coins between different blockchain networks
- B) Original assets are locked while equivalent tokens are minted elsewhere ✓
- C) They create duplicate copies that effectively double the total supply
- D) Wrapped tokens are completely independent of the original underlying asset

> **Rationale:** The correct answer is B. A custodian holds real BTC and mints equivalent WBTC on Ethereum; when you redeem, WBTC is burned and BTC is released. Option A is impossible; blockchains can't directly communicate. Option C misunderstands; total value is preserved, not doubled. Option D is wrong; wrapped tokens are backed 1:1 by the original asset.

---

### Question 42
Early proof-of-stake designs had a flaw: validators could vote for multiple competing chain forks simultaneously since voting cost nothing, unlike PoW where miners must choose one chain to dedicate resources to. How do modern PoS systems address this "nothing at stake" problem?

- A) By requiring all validators to pass extensive background checks first
- B) Through slashing penalties that destroy stake for conflicting votes ✓
- C) By limiting the number of validators to only pre-approved trusted parties
- D) The problem actually remains completely unsolved in all PoS systems

> **Rationale:** The correct answer is B. Slashing makes double-voting expensive—validators who sign conflicting blocks lose a portion of their staked coins. This creates economic cost similar to PoW's electricity cost. Option A doesn't solve the technical problem. Option C sacrifices decentralization. Option D is false; slashing effectively addresses this.

---

### Question 43
Blockchain immutability is often described as absolute, but Bitcoin's history was effectively rewritten in 2010 when a bug allowed someone to create 184 billion bitcoins and the community coordinated to roll back the chain. Under what circumstances can blockchain history actually be changed?

- A) Never—blockchain history is physically and mathematically impossible to change
- B) With sufficient consensus through attacks or coordinated forks, though difficult ✓
- C) Only the original creator has the special ability to modify history
- D) Government agencies can officially modify blockchain records at will

> **Rationale:** The correct answer is B. Immutability is economic and social, not absolute. With enough hash power (51% attack) or community agreement (emergency fork), history can change—it's just extremely costly and rare. Option A overstates immutability. Option C is false; Satoshi has no special powers. Option D is wrong; governments can't unilaterally change decentralized blockchains.

---

### Question 44
A Sybil attack involves creating many fake identities to gain disproportionate influence in a system—imagine one person creating thousands of social media accounts to manipulate polls. How do blockchain networks prevent Sybil attacks?

- A) By requiring official government ID verification for all participants
- B) By requiring scarce resources like computing power or staked tokens ✓
- C) By limiting the network to only invited and pre-approved participants
- D) Sybil attacks are technically not possible on any blockchain networks

> **Rationale:** The correct answer is B. Creating fake identities is free, but acquiring hash power or stake costs real money. This economic barrier prevents one entity from cheaply creating unlimited influence. Option A contradicts permissionless design. Option C describes permissioned chains, not Bitcoin. Option D is false; without these mechanisms, Sybil attacks would be trivial.

---

### Question 45
Ethereum smart contracts can contain loops and complex logic, but a malicious or buggy contract with an infinite loop could halt the entire network if allowed to run forever. How does the "gas" mechanism prevent this denial-of-service vector?

- A) Gas limits how many users can simultaneously access the network at once
- B) Every operation costs gas, so infinite loops exhaust the limit and halt ✓
- C) Gas is a physical resource that powers Ethereum's server infrastructure
- D) Infinite loops are automatically detected and blocked before any execution

> **Rationale:** The correct answer is B. Each transaction has a gas limit; when gas runs out, execution stops. Infinite loops simply consume all gas and fail, protecting the network. Option A misunderstands gas. Option C is metaphorically wrong; gas is computational accounting, not physical. Option D is impossible; detecting infinite loops is the halting problem.

---

### Question 46
The genesis block is block zero in any blockchain, hardcoded into the software rather than mined, serving as the foundation that all subsequent blocks reference through hash pointers. Why can't the genesis block be modified or removed?

- A) It's stored on a special government-protected server with armed guards
- B) Changing it would invalidate every block hash in the entire chain ✓
- C) The genesis block can easily be changed through community voting
- D) It contains specially encrypted data that mathematically prevents modification

> **Rationale:** The correct answer is B. Every block contains the previous block's hash. Change the genesis block, and block 1's "previous hash" no longer matches, invalidating block 1, which invalidates block 2, and so on. Option A is absurd; Bitcoin has no central servers. Option C is technically false; you'd need everyone to adopt new software. Option D misunderstands; it's the chain structure, not encryption, that prevents changes.

---

### Question 47
Before deploying smart contracts to Ethereum mainnet where bugs could lose real money, developers test on networks like Sepolia or Holesky that function identically but use worthless tokens. What is the value of testnet tokens?

- A) Testnet tokens are worth approximately 10% of mainnet token values
- B) Zero—they exist only for testing and have no monetary value ✓
- C) They can be officially converted to mainnet tokens at a fixed rate
- D) Only authorized developers can determine their actual market value

> **Rationale:** The correct answer is B. Testnet tokens are freely distributed from faucets specifically because they must be worthless—otherwise testing would be expensive and testnets would become real economies. Option A is false; they're intentionally worthless. Option C is wrong; no conversion exists. Option D misunderstands; there's no market because there's no value.

---

### Question 48
On decentralized exchanges, your pending transaction is visible in the mempool before it's confirmed, allowing others to see you're about to buy a token. What is "front-running" and why is it problematic for regular users?

- A) Being the first person to purchase a newly listed token on exchanges
- B) Others inserting transactions ahead of yours to profit at your expense ✓
- C) Running a blockchain node faster than other network competitors
- D) A legitimate trading strategy that is equally available to everyone

> **Rationale:** The correct answer is B. Bots see your pending buy order, buy before you (raising the price), then sell to you at the higher price. You get worse execution; they profit. Option A describes a different concept. Option C misunderstands the term. Option D is misleading; while technically possible for anyone, it requires sophisticated infrastructure most users lack.

---

### Question 49
Traditional payment processors like Visa can freeze accounts, reverse transactions, and block payments to certain merchants or countries based on corporate or government policies. How does blockchain's "censorship resistance" differ from this model?

- A) Blockchain transactions can easily be censored by internet service providers
- B) No single entity can prevent valid transactions from being confirmed ✓
- C) Censorship resistance primarily means hiding all illegal activity from authorities
- D) Traditional systems are actually significantly more censorship resistant overall

> **Rationale:** The correct answer is B. With thousands of independent miners/validators worldwide, no single government or company can block transactions. Even if some censor, others will include them. Option A is false; transactions can route around ISP blocks. Option C conflates censorship resistance with anonymity. Option D is backwards; traditional systems have single points of control.

---

### Question 50
Smart contracts can only access data stored on their blockchain—they cannot natively fetch stock prices, weather data, or sports scores from the internet. What is the "oracle problem" and why is it challenging to solve?

- A) Oracles are simply too expensive for most practical applications to use
- B) External data sources must be trusted, creating centralization risk ✓
- C) The oracle problem only affects gaming and gambling applications specifically
- D) Oracles have been officially banned by most governments worldwide

> **Rationale:** The correct answer is B. Blockchains are trustless, but if a smart contract relies on external data, you must trust whoever provides that data. A corrupt oracle can manipulate contract outcomes. Option A understates the problem; cost isn't the core issue. Option C is false; oracles affect DeFi, insurance, supply chain, and more. Option D is completely untrue.
