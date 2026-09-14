export interface EventRound {
	t: string;
	d: string;
}

export interface EventTimelineRow {
	r: string;
	day: string;
	time: string;
	loc: string;
}

export interface EventSplit {
	p: string;
	a: string;
	w: number;
}

export interface EventConvenor {
	n: string;
	ph: string;
}

export interface AxiosEvent {
	key: string;
	name: string;
	icon: string;
	category: 'Technical' | 'Non Technical' | 'Gaming';
	teamSize: string;
	prize: string;
	tag: string;
	signature?: boolean;
	about: string;
	rounds: EventRound[];
	timeline: EventTimelineRow[];
	splits: EventSplit[];
	convenors: EventConvenor[];
}

export const events: AxiosEvent[] = [
	{
		key: 'tri', name: 'Technical Triathlon', icon: 'gear', category: 'Technical', teamSize: '3 Members',
		prize: '₹25,000', tag: 'Relay · 3 Rounds', signature: true,
		about: "Step into TRIATHLON, an epic battle where knowledge meets strategy and code! Compete through rapid-fire technical challenges, strategic aptitude face-offs, and an intense multi-agent programming arena.",
		rounds: [
			{ t: 'Chrono Casino', d: 'A carnival of fast-paced technical face-offs where your knowledge is currency.' },
			{ t: 'Card Conquest', d: 'A high-stakes battle of aptitude and strategy — capture your rivals’ question cards.' },
			{ t: 'Turf Wars', d: 'Program Python bots to capture territory in a hidden multi-agent battlefield.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '09:00–13:00', loc: 'G Block Classroom' },
			{ r: 'R2', day: 'Day 1', time: '14:30–16:00', loc: 'G Block Classroom' },
			{ r: 'R3', day: 'Day 2', time: '16:30–17:30', loc: 'F-Block Hall' },
		],
		splits: [
			{ p: 'Champion', a: '₹35,000', w: 100 },
			{ p: 'Runner-up', a: '₹15,000', w: 58 },
			{ p: 'Third', a: '₹10,000', w: 38 },
		],
		convenors: [{ n: 'Arul Kevin', ph: '+91 80569 90243' }, { n: 'Anirudhan', ph: '+91 80885 72371' }],
	},
	{
		key: 'brc', name: 'Breach Point', icon: 'lock', category: 'Technical', teamSize: '4 Members',
		prize: '₹22,500', tag: 'CTF · 5 Tracks',
		about: "Every system has a weakness, every story a hidden layer. Cybersecurity meets narrative — crack a jeopardy-style storyline, then defend your systems while breaching your rivals’.",
		rounds: [
			{ t: 'Signal Zero', d: 'A jeopardy-style CTF told through an unfolding investigation into a system called ECHO.' },
			{ t: 'Red vs Blue', d: 'Attack-Defence — patch and defend your own systems while breaching opponents’ infrastructure.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '09:30–17:00', loc: 'D Block Hall' },
			{ r: 'R2', day: 'Day 2', time: '09:30–14:00', loc: 'M503' },
		],
		splits: [
			{ p: 'Champion', a: '₹40,000', w: 100 },
			{ p: 'Runner-up', a: '₹20,000', w: 56 },
			{ p: 'Third', a: '₹15,000', w: 42 },
		],
		convenors: [{ n: 'Aditya', ph: '+91 77955 88955' }, { n: 'Saivenketraj', ph: '+91 80569 92112' }],
	},
	{
		key: 'dq', name: 'DataQuest', icon: 'flask', category: 'Technical', teamSize: '3 Members',
		prize: '₹15,000', tag: 'Data · 3 Rounds',
		about: "Time doesn’t wait, and neither does data. Race the clock, decode the patterns, and turn chaos into insight in a full data-science showdown.",
		rounds: [
			{ t: 'Blitz', d: 'A rapid volley of challenges tests how quickly and accurately you can think on your feet.' },
			{ t: 'Odyssey', d: 'A web of interconnected puzzles, each one unlocking the next.' },
			{ t: 'Forge', d: 'Armed with a real-world dataset, forge insight into impact and present to the judges.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '10:00–11:30', loc: 'SIL / OSL / NSL / IIL' },
			{ r: 'R2', day: 'Day 1', time: '13:00–15:30', loc: 'SIL / OSL' },
			{ r: 'R3', day: 'Day 2', time: '08:30–13:00', loc: 'SIL / OSL' },
		],
		splits: [
			{ p: 'Champion', a: '₹40,000', w: 100 },
			{ p: 'Runner-up', a: '₹20,000', w: 56 },
			{ p: 'Third', a: '₹10,000', w: 34 },
		],
		convenors: [{ n: 'Tanaz', ph: '+91 63800 22981' }, { n: 'Livin Joseph', ph: '+91 99943 92653' }],
	},
	{
		key: 'mm', name: 'Math Mania', icon: 'compass', category: 'Technical', teamSize: '2 Members',
		prize: '₹15,000', tag: 'Math · 3 Rounds',
		about: "Precision is power. Logic, strategy, and problem-solving decide who advances through calculated risks and challenging puzzles.",
		rounds: [
			{ t: 'Base Case', d: 'A qualifier testing mathematics, logic, reasoning, and visual problem-solving.' },
			{ t: 'Math Heist', d: 'Risk it, solve it, build your loot — calculated decisions and strategic power-ups.' },
			{ t: 'Trail to Triumph', d: 'A race through an interconnected trail of mathematical and logical puzzles.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '09:30–12:30', loc: 'J515 / J514 / J516' },
			{ r: 'R2', day: 'Day 1', time: '14:00–17:00', loc: 'J515 / J516' },
			{ r: 'R3', day: 'Day 2', time: '09:30–12:00', loc: 'J515' },
		],
		splits: [
			{ p: 'Champion', a: '₹28,000', w: 100 },
			{ p: 'Runner-up', a: '₹14,000', w: 58 },
			{ p: 'Third', a: '₹8,000', w: 40 },
		],
		convenors: [{ n: 'Keerthi Menon', ph: '+91 93632 58127' }, { n: 'Niveda', ph: '+971 54 744 0352' }],
	},
	{
		key: 'qz', name: 'QFactor', icon: 'sparkle', category: 'Non Technical', teamSize: '2 Members',
		prize: '₹15,000', tag: 'Quiz · Prelim + Final',
		about: "Prelims to knockout finals. Mind-boggling questions from almost every topic — no expertise required, just the will to test your knowledge against the brightest minds.",
		rounds: [
			{ t: 'Written Prelims', d: 'Questions on screen; top 6 teams advance to the finals.' },
			{ t: 'On-Stage Finals', d: 'Dry rounds, pounce and bounce, and specials for those who challenge time itself.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 2', time: '09:30–12:00', loc: 'F-Block Hall' },
			{ r: 'R2', day: 'Day 2', time: '13:00–16:00', loc: 'F-Block Hall' },
		],
		splits: [
			{ p: 'Champion', a: '₹25,000', w: 100 },
			{ p: 'Runner-up', a: '₹12,000', w: 50 },
			{ p: 'Third', a: '₹8,000', w: 32 },
		],
		convenors: [{ n: 'Kaaviya', ph: '+91 63825 80231' }, { n: 'Shambhavi', ph: '+91 80959 43626' }],
	},
	{
		key: 'svc', name: "Survivors' Court", icon: 'scroll', category: 'Non Technical', teamSize: 'Solo Entry',
		prize: '₹15,000', tag: 'Strategy · Elimination',
		about: "High-stakes crises where every decision has consequences. Navigate chaos, make strategic choices, gather evidence — because when the dust settles, you’ll defend your actions in court.",
		rounds: [
			{ t: 'R1 · Survival', d: 'An unfolding crisis with limited resources — every choice creates consequence.' },
			{ t: 'R2 · Conflict', d: 'Your decisions collide with another team’s. Build your case as conflicts arise.' },
			{ t: 'R3 · Trial', d: 'Enter the courtroom — present evidence, respond to opposition, justify your choices.' },
			{ t: 'R4 · Verdict', d: 'The final verdict, delivered after every case has been heard.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '10:00–12:00', loc: 'M503 / M504' },
			{ r: 'R2', day: 'Day 1', time: '14:00–16:00', loc: 'M503 / M504' },
			{ r: 'R3', day: 'Day 2', time: '10:00–12:00', loc: 'D-Block Conf. Hall' },
			{ r: 'R4', day: 'Day 2', time: '16:15–17:00', loc: 'D-Block Conf. Hall' },
		],
		splits: [
			{ p: 'Champion', a: '₹20,000', w: 100 },
			{ p: 'Runner-up', a: '₹12,000', w: 60 },
			{ p: 'Third', a: '₹8,000', w: 40 },
		],
		convenors: [{ n: 'Mithun Senthil', ph: '+91 74182 50339' }, { n: 'Ranjana', ph: '94957 71225' }],
	},
	{
		key: 'bb', name: 'Big Bull', icon: 'bull', category: 'Non Technical', teamSize: '2–4 Members',
		prize: '₹22,500', tag: 'Stock Market · Strategy',
		about: "Read the market, back your instincts. Build a simulated portfolio, react to breaking news, and defend the choices behind every trade as the next Big Bull.",
		rounds: [
			{ t: 'Market Open', d: 'Build a balanced portfolio from the stocks and market data provided.' },
			{ t: 'The Bull Run', d: 'Respond to price swings, news alerts, and changing conditions while protecting returns.' },
			{ t: 'Closing Bell', d: 'Present your final portfolio and defend the strategy and risk behind it.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '09:30–13:00', loc: 'F-Block Hall' },
			{ r: 'R2', day: 'Day 2', time: '14:00–17:00', loc: 'F-Block Hall' },
			{ r: 'R3', day: 'Day 2', time: '09:30–13:00', loc: 'F201' },
		],
		splits: [
			{ p: 'Winner', a: '₹15,000', w: 100 },
			{ p: 'Runner-up', a: '₹7,000', w: 47 },
			{ p: 'Third', a: '₹3,000', w: 20 },
		],
		convenors: [{ n: 'Durga', ph: '+91 96989 20880' }, { n: 'Shansita', ph: '+91 83348 12473' }],
	},
	{
		key: 'val', name: 'Valorant', icon: 'shield', category: 'Gaming', teamSize: '5 Members',
		prize: '₹10,000', tag: '5v5 · Knockout',
		about: "Lock in your agent. Precise gunplay, tactical synergy, and high-stakes strategy — only the sharpest aim and smartest utility usage withstand the crossfire.",
		rounds: [
			{ t: 'Knockout Phase', d: 'Single-elimination matches. Top 4 teams advance to Round 2.' },
			{ t: 'Semis & Grand Final', d: 'Best-of-series showdown — adaptation and economy management decide the champion.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '09:30–17:00', loc: 'F203' },
			{ r: 'R2', day: 'Day 2', time: '09:30–12:00', loc: 'F203' },
		],
		splits: [
			{ p: 'Champion', a: '₹30,000', w: 100 },
			{ p: 'Runner-up', a: '₹16,000', w: 54 },
			{ p: 'Third', a: '₹9,000', w: 32 },
		],
		convenors: [{ n: 'Harshavardhan', ph: '+91 63697 21991' }, { n: 'Dharaneesh', ph: '+91 86678 57284' }],
	},
	{
		key: 'fifa', name: 'FIFA', icon: 'target', category: 'Gaming', teamSize: 'Solo Entry',
		prize: '₹4,000', tag: '1v1 · Knockout',
		about: "Lace up your boots. Tactical build-up play and stunning long-range screamers — glory is only 90 minutes away.",
		rounds: [
			{ t: 'Knockout Phase', d: 'One mistake ends your run. Top 4 players advance to Round 2.' },
			{ t: 'Semis & Grand Final', d: 'Tactical adaptability and composure under pressure decide the champion.' },
		],
		timeline: [
			{ r: 'R1', day: 'Day 1', time: '09:30–17:00', loc: 'F202' },
			{ r: 'R2', day: 'Day 2', time: '09:30–12:00', loc: 'F202' },
		],
		splits: [
			{ p: 'Champion', a: '₹16,000', w: 100 },
			{ p: 'Runner-up', a: '₹9,000', w: 56 },
			{ p: 'Third', a: '₹5,000', w: 32 },
		],
		convenors: [{ n: 'Harshavardhan', ph: '+91 63697 21991' }, { n: 'Dharaneesh', ph: '+91 86678 57284' }],
	},
	{
		key: 'chess', name: 'Chess', icon: 'chess', category: 'Gaming', teamSize: 'Solo Entry',
		prize: '₹6,000', tag: 'Board · Strategy',
		about: "Sit across the board and outsmart your opponent. Absolute concentration, deep calculation, and flawless long-term strategy for the sharpest minds.",
		rounds: [
			{ t: 'League Stage', d: 'A custom matching system pairs leaders against leaders on their exact point level. Top 10 secure a spot on the prize leaderboard.' },
		],
		timeline: [{ r: 'R1', day: 'Day 1', time: '09:30–17:00', loc: 'CSL 1 / 2 / 3' }],
		splits: [],
		convenors: [{ n: 'Harshavardhan', ph: '+91 63697 21991' }, { n: 'Dharaneesh', ph: '+91 86678 57284' }],
	},
];

export interface Convenor {
	name: string;
	phone: string;
	events: { name: string; key: string; icon: string; category: AxiosEvent['category'] }[];
}

/** Convenors deduped across events — the domain experts running each arena. */
export const convenors: Convenor[] = (() => {
	const map = new Map<string, Convenor>();
	for (const ev of events) {
		for (const c of ev.convenors) {
			const existing = map.get(c.n);
			const entry = { name: ev.name, key: ev.key, icon: ev.icon, category: ev.category };
			if (existing) {
				existing.events.push(entry);
			} else {
				map.set(c.n, { name: c.n, phone: c.ph, events: [entry] });
			}
		}
	}
	return Array.from(map.values());
})();
