export type CodeStatus = 'unverified' | 'reported-active' | 'reported-expired';
export type GameCode = { code: string; reward: string; status: CodeStatus; sourceNote: string; lastChecked: string };

// IMPORTANT: These community-mentioned strings are deliberately marked UNVERIFIED.
// Confirm each code in the live Roblox experience before changing its status.
export const codes: GameCode[] = [
  { code: 'R0NIN!TIDE_5K', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: 'BLOSSOMVEIL_4K', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: '!2k2k2k!', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: 'Jolly3k___', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: 'CT4WK2KDNT', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: 'DISCOMEMBA', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: 'AKAYUKI', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: 'AKAYUKITHANKYOU', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' },
  { code: 'SHOGUNATE', reward: 'Reward not independently confirmed', status: 'unverified', sourceNote: 'Previously mentioned in third-party code listings; in-game test required.', lastChecked: '2026-11-14' }
];

export function findCode(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return undefined;
  return codes.find((item) => item.code.toLowerCase() === normalized);
}
