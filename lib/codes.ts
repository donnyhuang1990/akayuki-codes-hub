export type CodeStatus = 'unverified' | 'reported-active' | 'reported-expired';
export type CodeSource = { label: string; url: string };
export type GameCode = {
  code: string;
  reward: string;
  status: CodeStatus;
  sourceNote: string;
  conditions: string;
  sources: CodeSource[];
  lastChecked: string;
};

const PGG = { label: 'Pro Game Guides', url: 'https://progameguides.com/roblox/akayuki-codes/' };
const DEN = { label: 'Roblox Den', url: 'https://robloxden.com/game-codes/akayuki-steel-blossoms-red' };
const DESTRUCTOID = { label: 'Destructoid', url: 'https://www.destructoid.com/akayuki-codes/' };
const GACHA = { label: 'GachaPocket', url: 'https://gachapocket.com/akayuki-codes/' };

const generalConditions =
  'No code-specific level, group, or gamepass requirement was documented in the sources checked. Third-party guides say codes are case-sensitive and redeem once per account; these conditions are not confirmed by the developer.';

export const codes: GameCode[] = [
  {
    code: 'R0NIN!TIDE_5K',
    reward: 'Reported: 5,000 Currency + 5,000 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides and Destructoid; Roblox Den currently labels it “Check”, not active. Conflicting status evidence; no test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'BLOSSOMVEIL_4K',
    reward: 'Reported: 4,000 Currency + 4,000 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides and Destructoid; Roblox Den currently labels it “Check”, not active. Conflicting status evidence; no test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: '!2k2k2k!',
    reward: 'Reported: 2,000 Currency + 2,000 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides, Destructoid, and Roblox Den. These are third-party reports, not an official developer confirmation or a test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'Jolly3k___',
    reward: 'Reported: 3,000 Currency + 3,000 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides and Destructoid; Roblox Den currently labels it “Check”, not active. Conflicting status evidence; no test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'CT4WK2KDNT',
    reward: 'Reported: 500 Currency + 500 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides, Destructoid, and Roblox Den. These are third-party reports, not an official developer confirmation or a test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'DISCOMEMBA',
    reward: 'Reported: Discombobulate Katana/Weapon Skin',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides, Destructoid, and Roblox Den. Reward label varies slightly by source; no test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'AKAYUKI',
    reward: 'Reported: 5,000 Currency + 10 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides, Destructoid, and Roblox Den. Sources call the currency Currency or Gold; no test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'AKAYUKITHANKYOU',
    reward: 'Reported: 1,000 Currency + 100 Rename Spins; 1,000 XP additionally reported by Roblox Den',
    status: 'reported-active',
    sourceNote: 'Pro Game Guides and Destructoid list 1,000 Currency and 100 Rename Spins. Roblox Den additionally lists 1,000 XP. The XP reward is not consistent across the checked sources.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'SHOGUNATE',
    reward: 'Reported: Communiblade Katana/Weapon Skin',
    status: 'reported-active',
    sourceNote: 'Listed as active by Pro Game Guides, Destructoid, and Roblox Den. These are third-party reports, not an official developer confirmation or a test by this site.',
    conditions: generalConditions,
    sources: [PGG, DESTRUCTOID, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'THANKYOU1K',
    reward: 'Reported: 5,000 Currency + 1,000 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Newly added to this database on 2026-11-15. Roblox Den and GachaPocket list it as active with this reward. No direct developer announcement was independently verified during this check.',
    conditions: generalConditions,
    sources: [DEN, GACHA],
    lastChecked: '2026-11-15'
  },
  {
    code: 'TRIPLESPIN',
    reward: 'Reward not documented in the current sources checked',
    status: 'reported-expired',
    sourceNote: 'Listed as inactive by Pro Game Guides. Roblox Den does not include this code in its three expired entries; status is a third-party report, not a rejection observed by this site.',
    conditions: 'Reported inactive by one current code guide; code-specific requirements and historical reward were not confirmed.',
    sources: [PGG, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'HALLOWEEN',
    reward: 'Reward not documented in the current sources checked',
    status: 'reported-expired',
    sourceNote: 'Listed as inactive by Pro Game Guides and expired by Roblox Den. No rejection was observed by this site.',
    conditions: 'Reported expired; code-specific requirements and historical reward were not confirmed.',
    sources: [PGG, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'FIRST500',
    reward: 'Reward not documented in the current sources checked',
    status: 'reported-expired',
    sourceNote: 'Listed as inactive by Pro Game Guides and expired by Roblox Den. No rejection was observed by this site.',
    conditions: 'Reported expired; code-specific requirements and historical reward were not confirmed.',
    sources: [PGG, DEN],
    lastChecked: '2026-11-15'
  },
  {
    code: 'HAPPYWEEKEND2',
    reward: 'Historical reward reported: 2,000 Currency + 200 Rename Spins + 2,000 XP + 2× XP for 2 days',
    status: 'reported-expired',
    sourceNote: 'Listed as inactive by Pro Game Guides and expired by Roblox Den. The historical reward is shown by Pro Game Guides; it should not be presented as currently claimable.',
    conditions: 'Reported expired; described as a limited-time weekend promotion. No rejection was observed by this site.',
    sources: [PGG, DEN],
    lastChecked: '2026-11-15'
  }
];

export function findCode(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return undefined;
  return codes.find((item) => item.code.toLowerCase() === normalized);
}
