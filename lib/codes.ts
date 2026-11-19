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
    status: 'unverified',
    sourceNote: 'Source audit on 2026-11-19: Destructoid and GachaPocket list this code as active, while Roblox Den labels it Check rather than Active; other guides disagree. Status remains unverified until stronger evidence or an in-game test.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN, GACHA],
    lastChecked: '2026-11-19'
  },
  {
    code: 'BLOSSOMVEIL_4K',
    reward: 'Reported: 4,000 Currency + 4,000 Rename Spins',
    status: 'unverified',
    sourceNote: 'Source audit on 2026-11-19: Destructoid and GachaPocket list this code as active, while Roblox Den labels it Check rather than Active; other guides disagree. Status remains unverified until stronger evidence or an in-game test.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN, GACHA],
    lastChecked: '2026-11-19'
  },
  {
    code: '!2k2k2k!',
    reward: 'Reported: 2,000 Currency + 2,000 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Source audit on 2026-11-19: Roblox Den and Destructoid list this code as active. Status is based on published reports, not an in-game test by this site.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN],
    lastChecked: '2026-11-19'
  },
  {
    code: 'Jolly3k___',
    reward: 'Reported: 3,000 Currency + 3,000 Rename Spins',
    status: 'unverified',
    sourceNote: 'Source audit on 2026-11-19: Destructoid and GachaPocket list this code as active, while Roblox Den labels it Check rather than Active; other guides disagree. Status remains unverified until stronger evidence or an in-game test.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN, GACHA],
    lastChecked: '2026-11-19'
  },
  {
    code: 'CT4WK2KDNT',
    reward: 'Reported: 500 Currency + 500 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Source audit on 2026-11-19: Roblox Den and Destructoid list this code as active. Status is based on published reports, not an in-game test by this site.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN],
    lastChecked: '2026-11-19'
  },
  {
    code: 'DISCOMEMBA',
    reward: 'Reported: Discombobulate Katana/Weapon Skin',
    status: 'reported-active',
    sourceNote: 'Source audit on 2026-11-19: Roblox Den and Destructoid list this code as active. Status is based on published reports, not an in-game test by this site.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN],
    lastChecked: '2026-11-19'
  },
  {
    code: 'AKAYUKI',
    reward: 'Reported: 5,000 Currency + 10 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Source audit on 2026-11-19: Roblox Den and Destructoid list this code as active. Status is based on published reports, not an in-game test by this site.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN],
    lastChecked: '2026-11-19'
  },
  {
    code: 'AKAYUKITHANKYOU',
    reward: 'Reported: 1,000 Currency + 100 Rename Spins; 1,000 XP additionally reported by Roblox Den',
    status: 'reported-active',
    sourceNote: 'Source audit on 2026-11-19: Roblox Den and Destructoid list this code as active. Roblox Den additionally reports 1,000 XP; reward details differ across sources. No in-game test by this site.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN],
    lastChecked: '2026-11-19'
  },
  {
    code: 'SHOGUNATE',
    reward: 'Reported: Communiblade Katana/Weapon Skin',
    status: 'reported-active',
    sourceNote: 'Source audit on 2026-11-19: Roblox Den and Destructoid list this code as active. Status is based on published reports, not an in-game test by this site.',
    conditions: generalConditions,
    sources: [DESTRUCTOID, DEN],
    lastChecked: '2026-11-19'
  },
  {
    code: 'THANKYOU1K',
    reward: 'Reported: 5,000 Currency + 1,000 Rename Spins',
    status: 'reported-active',
    sourceNote: 'Source audit on 2026-11-19: Roblox Den and GachaPocket list this code as active and report 5,000 Currency and 1,000 Rename Spins. Destructoid does not include it in its active list. No in-game test by this site.',
    conditions: generalConditions,
    sources: [DEN, GACHA],
    lastChecked: '2026-11-19'
  },
  {
    code: 'TRIPLESPIN',
    reward: 'Reward not documented in the current sources checked',
    status: 'reported-expired',
    sourceNote: 'Source audit on 2026-11-19: Destructoid and GachaPocket list this code as expired. This site did not test redemption in-game.',
    conditions: 'Reported inactive by one current code guide; code-specific requirements and historical reward were not confirmed.',
    sources: [DESTRUCTOID, GACHA],
    lastChecked: '2026-11-19'
  },
  {
    code: 'HALLOWEEN',
    reward: 'Reward not documented in the current sources checked',
    status: 'reported-expired',
    sourceNote: 'Source audit on 2026-11-19: Destructoid and GachaPocket list this code as expired; Roblox Den also labels it expired where listed. No in-game test by this site.',
    conditions: 'Reported expired; code-specific requirements and historical reward were not confirmed.',
    sources: [DESTRUCTOID, DEN, GACHA],
    lastChecked: '2026-11-19'
  },
  {
    code: 'FIRST500',
    reward: 'Reward not documented in the current sources checked',
    status: 'reported-expired',
    sourceNote: 'Source audit on 2026-11-19: Destructoid and GachaPocket list this code as expired; Roblox Den also labels it expired where listed. No in-game test by this site.',
    conditions: 'Reported expired; code-specific requirements and historical reward were not confirmed.',
    sources: [DESTRUCTOID, DEN, GACHA],
    lastChecked: '2026-11-19'
  },
  {
    code: 'HAPPYWEEKEND2',
    reward: 'Historical reward reported: 2,000 Currency + 200 Rename Spins + 2,000 XP + 2× XP for 2 days',
    status: 'reported-expired',
    sourceNote: 'Source audit on 2026-11-19: Destructoid and GachaPocket list this code as expired; Roblox Den also labels it expired where listed. No in-game test by this site.',
    conditions: 'Reported expired; described as a limited-time weekend promotion. No rejection was observed by this site.',
    sources: [DESTRUCTOID, DEN, GACHA],
    lastChecked: '2026-11-19'
  }
];

export function findCode(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return undefined;
  return codes.find((item) => item.code.toLowerCase() === normalized);
}
