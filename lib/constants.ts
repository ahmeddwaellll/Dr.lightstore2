// Global Constants
export const COLORS = {
  primary: '#7C3AED',
  secondary: '#A78BFA',
  darkBg: '#110C1B',
  cardBg: 'rgba(42,28,67,0.55)',
  accentGold: '#FFC700'
} as const;

export const PRICING = {
  pricePer1kTrophies: 5,
  pricePerLeague: 5,
  maxTrophies: 15000
} as const;

export const LEAGUES = [
  "Herald",
  "Archer", 
  "Guardian",
  "Master",
  "Champion",
  "Grand Champion",
  "Ultimate Champion"
] as const;

export const FEATURES = {
  autoApproveBoost: false
} as const;

// Evolution Cards Data
export const evoCards = [
  {
    id: 'barbarians-evo',
    name: 'Barbarians',
    elixir: 5,
    cycles: 1,
    totalCost: 10,
    statBoosts: '+10% Health',
    specialAbility: '+35% Attack and Movement Speed every time they attack lasting 3 seconds. This 3-second timer resets if they keep attacking.'
  },
  {
    id: 'royal-giant-evo',
    name: 'Royal Giant',
    elixir: 6,
    cycles: 1,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'Every time the Royal Giant attacks, a 2.5-tile radius, low damage, and a 1-tile knockback-inducing shockwave briefly appears around him. Can only affect ground.'
  },
  {
    id: 'firecracker-evo',
    name: 'Firecracker',
    elixir: 3,
    cycles: 2,
    totalCost: 9,
    statBoosts: 'Identical Stats',
    specialAbility: 'Sparks that deal very low damage every 0.25 seconds appear after the initial attack is finished. Lasting 3 seconds. The center spark has a 2.5-tile radius while the shrapnel sparks have a 1.2-tile radius. Additionally, these sparks will slow the movement speed of all troops in their radius by 15%.'
  },
  {
    id: 'skeletons-evo',
    name: 'Skeletons',
    elixir: 1,
    cycles: 2,
    totalCost: 3,
    statBoosts: 'Identical Stats',
    specialAbility: 'Every time a Skeletons attacks, another Skeleton spawns right next to it. Stops replicating at 8 Skeletons.'
  },
  {
    id: 'mortar-evo',
    name: 'Mortar',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: '-20% Attack Time Interval',
    specialAbility: 'Every time a Mortar shot lands, a Goblin spawns with it.'
  },
  {
    id: 'knight-evo',
    name: 'Knight',
    elixir: 3,
    cycles: 2,
    totalCost: 9,
    statBoosts: 'Identical Stats',
    specialAbility: 'While the Knight is moving or deploying, a shield is applied that reduces all sources of damage coming towards him by 60%. This shield loses its effect when an opposing troop is 1.2 tiles or less from the Knight.'
  },
  {
    id: 'royal-recruits-evo',
    name: 'Royal Recruits',
    elixir: 7,
    cycles: 1,
    totalCost: 14,
    statBoosts: 'Identical Stats',
    specialAbility: 'When the shield on a Royal Recruit is knocked off and the troop has traveled 1.5 tiles, it will charge at a Very Fast movement speed and will do 2x damage once connected to an opposing troop. These attributes apply to all 6 Royal Recruits.'
  },
  {
    id: 'bats-evo',
    name: 'Bats',
    elixir: 2,
    cycles: 2,
    totalCost: 6,
    statBoosts: '+50% Health',
    specialAbility: 'Every time the Bats attack, they\'ll start healing at a rate of 2 pulses every second. This heal goes beyond their health bar and acts as an overheal, doubling their max health.'
  },
  {
    id: 'archers-evo',
    name: 'Archers',
    elixir: 3,
    cycles: 2,
    totalCost: 9,
    statBoosts: '+10% Range',
    specialAbility: 'Deals 50% bonus damage to an opposing troop if they\'re 4-6 tiles away from the Archers.'
  },
  {
    id: 'ice-spirit-evo',
    name: 'Ice Spirit',
    elixir: 1,
    cycles: 2,
    totalCost: 3,
    statBoosts: '+33% Splash Radius',
    specialAbility: 'Once the Ice Spirit jumps on an opposing troop, it freezes them for 1.2 seconds. After 3 seconds, it freezes the troop for another 1.2 seconds. If the troop is defeated midway through, a 2-tile radius is left behind. Maintaining the same pattern on the ground.'
  },
  {
    id: 'valkyrie-evo',
    name: 'Valkyrie',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: '+10% Health',
    specialAbility: 'Every time the Valkyrie attacks, she summons a Tornado which pulls all troops within a 5.5-tile radius into the Valkyrie. This Tornado lasts for 0.5 seconds and deals low damage to all ground and air troops in its radius, including Crown Towers.'
  },
  {
    id: 'bomber-evo',
    name: 'Bomber',
    elixir: 2,
    cycles: 2,
    totalCost: 6,
    statBoosts: 'Identical Stats',
    specialAbility: 'Every time the Bomber attacks, the bomb he throws bounces twice after the initial attack. Each damage radius is 2.5 tiles apart.'
  },
  {
    id: 'wall-breakers-evo',
    name: 'Wall Breakers',
    elixir: 2,
    cycles: 2,
    totalCost: 6,
    statBoosts: 'Identical Stats',
    specialAbility: 'If the Wall Breakers are initially defeated, the barrels they roll on break. Dealing moderately damage (reduced to crown towers) in a 1.5-tile radius. After, they continue to run to the nearest building at a Very Fast movement speed. Dealing 50% of the original damage in a 1.5-tile radius once connecting to the nearest building.'
  },
  {
    id: 'tesla-evo',
    name: 'Tesla',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'When deployed, 9 bombs (4 on your side and 5 on the opponents) will rain from the sky; dealing damage and knockback to air and ground units.'
  },
  {
    id: 'zap-evo',
    name: 'Zap',
    elixir: 2,
    cycles: 2,
    totalCost: 6,
    statBoosts: 'Identical Stats',
    specialAbility: 'Once the initial Zap is used, the radius stays in the arena, growing 0.5 tiles and doing the same stun and damage of the initial Zap.'
  },
  {
    id: 'battle-ram-evo',
    name: 'Battle Ram',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Barbarians: +10% Health',
    specialAbility: 'Once the Battle Ram starts charging, anything that comes in contact with it will be hit with moderate damage while small to medium troops will be knocked back 2 tiles. Additionally, upon connecting with its target, the Battle Ram will knock itself back and deal double its regular connection damage, constantly ramming into its target until either the Battle Ram or its target is destroyed. This will deal the same double damage for every connection made. Once the Battle Ram breaks, 2 Evolved Barbarians will be revealed from underneath to fight for longer.'
  },
  {
    id: 'wizard-evo',
    name: 'Wizard',
    elixir: 5,
    cycles: 1,
    totalCost: 10,
    statBoosts: 'Identical Stats',
    specialAbility: 'Spawns with a shield, that protects him from damage and once destroyed, will deal moderate damage and knockback to all small to medium troops within its 3 tile radius.'
  },
  {
    id: 'goblin-barrel-evo',
    name: 'Goblin Barrel',
    elixir: 3,
    cycles: 2,
    totalCost: 9,
    statBoosts: 'Identical Stats',
    specialAbility: 'Spawns 2 Goblin Barrels with identical appearances (the fake will glow for 1 sec), with the placement mirroring each other in their respective lanes. The Goblin Barrel manually deployed by the player will contain 3 Goblins while the other Goblin Barrel will contain 3 Decoy Goblins. These are identical to Goblins, but with significantly less health.'
  },
  {
    id: 'goblin-giant-evo',
    name: 'Goblin Giant',
    elixir: 6,
    cycles: 1,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'After the Goblin Giant reaches 50% of his original hitpoints, a Goblin will spawn 2.5 tiles behind him every 1.8 seconds. These Goblins have no deploy time.'
  },
  {
    id: 'goblin-drill-evo',
    name: 'Goblin Drill',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'After the Goblin Drill reaches 66% of its original hitpoints, it\'ll go back underground and spawn 2 death Goblins. Afterwards, it\'ll emerge 90 degrees around the Crown Tower from where it originally was deployed and spawn another Goblin upon going back underground. After reaching 33% of its original hitpoints, it\'ll rotate another 90 degrees around the Crown Tower and spawn another 2 death Goblins. The spawn damage and pushback upon emerging is done only once, during the first emerge. If it hasn\'t been placed next to the Crown Tower, it\'ll emerge in the same spot all 3 times.'
  },
  {
    id: 'goblin-cage-evo',
    name: 'Goblin Cage',
    elixir: 4,
    cycles: 1,
    totalCost: 8,
    statBoosts: 'Goblin Brawler: +10% Health',
    specialAbility: 'Once a ground troop comes within 3 tiles of the Goblin Cage, they\'re dragged into the cage and attacked with 10% higher than the Goblin Brawler. During this time, the troop is unable to attack and the Goblin Brawler is immune to all damage.'
  },
  {
    id: 'pekka-evo',
    name: 'P.E.K.K.A',
    elixir: 7,
    cycles: 1,
    totalCost: 14,
    statBoosts: 'Identical Stats',
    specialAbility: 'After the P.E.K.K.A deals the final blow to any troop or building, a butterfly will spawn around her sword. This butterfly will heal depending on the killed units hp. Additionally, this can overheal to add 66% more hitpoints until it reaches its maximum capacity.'
  },
  {
    id: 'mega-knight-evo',
    name: 'Mega Knight',
    elixir: 7,
    cycles: 1,
    totalCost: 14,
    statBoosts: 'Identical Stats',
    specialAbility: 'On every attack, the Mega Knight will do an uppercut, dealing a 4-tile knockback to the targeted troop. The troop will always be hit in the direction of the nearest enemy Crown Tower, even if the Mega Knight is directly between the tower and the targeted troop. Additionally, if a troop gets knocked back, the Mega Knight will do an uppercut-jump combo on it.'
  },
  {
    id: 'electro-dragon-evo',
    name: 'Electro Dragon',
    elixir: 5,
    cycles: 1,
    totalCost: 10,
    statBoosts: 'Identical Stats',
    specialAbility: 'The Electro Dragon\'s bolts can now infinitely chain across and onto units multiple times as long as they\'re 4 tiles from each other. After the 3rd chain, the bolts lose their stun effect, the damage gets reduced and chain moves 20% slower until they dissipate.'
  },
  {
    id: 'musketeer-evo',
    name: 'Musketeer',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'The Musketeer gets 3 limited sniper shots, that will shoot things in the 2 tile width area. These shots deal increased damage at infinite range. Does not work against Crown Towers.'
  },
  {
    id: 'cannon-evo',
    name: 'Cannon',
    elixir: 3,
    cycles: 2,
    totalCost: 9,
    statBoosts: 'Identical Stats',
    specialAbility: 'When deployed, 9 bombs (4 on your side and 5 on the opponents) will rain from the sky; dealing damage and knockback to air and ground units.'
  },
  {
    id: 'giant-snowball-evo',
    name: 'Giant Snowball',
    elixir: 2,
    cycles: 2,
    totalCost: 6,
    statBoosts: '+25% Slowdown Duration',
    specialAbility: 'This evolution will sacrifice the knock back for a 4.5 tile roll; pulling all troops in its path.'
  },
  {
    id: 'dart-goblin-evo',
    name: 'Dart Goblin',
    elixir: 3,
    cycles: 2,
    totalCost: 9,
    statBoosts: 'Identical Stats',
    specialAbility: 'The Dart Goblin\'s attacks add a poison effect to the troop, until they die, adding poison trail (that last 4 sec) when walking. The poison stacks and becomes stronger, the more the Dart Goblin attacks on that troop. His poison also inflicts a large area damage.'
  },
  {
    id: 'lumberjack-evo',
    name: 'Lumberjack',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'After the Lumberjack dies, his ghost will spawn. The ghost has unlimited health and cannot be targeted by troops but is affected by spells. The ghost will disappear shortly after moving away from a Rage Spell, or when the dropped Rage Spell expires. While the Lumberjack\'s range can be increased with a Rage Spell, the one dropped upon death decides the life of the ghost.'
  },
  {
    id: 'hunter-evo',
    name: 'Hunter',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'The Hunter throws a net at the closest troop, making them unable to move or attack. If that troop is flying, it brings them to the ground and can be attacked as if it was on the ground. The net lasts only for 3 seconds and recharges at 5 seconds.'
  },
  {
    id: 'executioner-evo',
    name: 'Executioner',
    elixir: 5,
    cycles: 1,
    totalCost: 10,
    statBoosts: 'Identical Stats',
    specialAbility: 'The Executioner throws an axe that at less than 3.5 tiles deals extra damage and knockback, pushing troops back 1.5 tiles. The axe does not deal knockback when returning to the Executioner, and its knockback does not work against heavy units, though.'
  },
  {
    id: 'witch-evo',
    name: 'Witch',
    elixir: 5,
    cycles: 1,
    totalCost: 10,
    statBoosts: 'Identical Stats',
    specialAbility: 'Whenever her own Skeletons dies, the Witch regains a set amount of hitpoints. This healing can overheal, bringing her up to 124% of her hitpoints.'
  },
  {
    id: 'inferno-dragon-evo',
    name: 'Inferno Dragon',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'While there are no troops inside the Inferno Dragon\'s range, it will keep that damage stage on the following troops until after 9 seconds pass by without it hitting a troop or it is hit by a stun attack. After 20 seconds of attacking, it will have a 4th damage stage which deals double damage of the 3rd stage.'
  },
  {
    id: 'skeleton-barrel-evo',
    name: 'Skeleton Barrel',
    elixir: 3,
    cycles: 2,
    totalCost: 9,
    statBoosts: '+64% Death Damage\n+25% Health',
    specialAbility: 'After the Skeleton Barrel reaches 75% of its original hitpoints, 1 of the 2 barrels will drop. After the Skeleton Barrel dies, the second barrel will drop. Each barrel deals death damage while spawning 7 Skeletons.'
  },
  {
    id: 'furnace-evo',
    name: 'Furnace',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'While the Furnace attacks; the spawn speed will be decreased to 2.4 seconds, and the Fire Spirits will be spawned to the left/right.'
  },
  {
    id: 'baby-dragon-evo',
    name: 'Baby Dragon',
    elixir: 4,
    cycles: 2,
    totalCost: 12,
    statBoosts: 'Identical Stats',
    specialAbility: 'A burst of wind is created in a 8x9 area, reducing enemies\' movement speed by 30% and increasing troops\' movement speed by 50%.'
  },
  {
    id: 'skeleton-army-evo',
    name: 'Skeleton Army',
    elixir: 3,
    cycles: 'TBA',
    totalCost: 'TBA',
    statBoosts: 'TBA',
    specialAbility: 'TBA'
  },
  {
    id: 'royal-ghost-evo',
    name: 'Royal Ghost',
    elixir: 3,
    cycles: 'TBA',
    totalCost: 'TBA',
    statBoosts: 'TBA',
    specialAbility: 'TBA'
  }
];

// Card data structure
export interface Card {
  id: string;
  name: string;
  elixir: number;
  type: 'troop' | 'spell' | 'building' | 'tower-troop';
  rarity: 'common' | 'rare' | 'epic' | 'legendary' | 'champion';
  hasEvolution: boolean;
  description: string;
  ability?: {
    name: string;
    cost: number | string;
    cooldown: number | string;
    description: string;
  };
}

// Account data structure
export interface Account {
  id: string;
  name: string;
  trophies: number;
  maxTrophies: number;
  arena: number;
  league: string;
  champions: number;
  emotes: number;
  towerSkins: number;
  price: number;
  maxDeck: boolean;
  starLevel3: boolean;
  cards: Array<{
    cardId: string;
    level: number;
    evolution: boolean;
  }>;
}

// Order data structure
export interface Order {
  id: string;
  buyer: string;
  type: 'account' | 'boost';
  price: number;
  status: 'pending_payment' | 'waiting_review' | 'in_progress' | 'completed' | 'refunded';
  deck?: Array<{
    cardId: string;
    level: number;
    evo: boolean;
  }>;
  deckAvg?: number;
  createdAt: Date;
}

// Boost calculator types
export interface BoostConfig {
  type: 'trophies' | 'ranked';
  currentTrophies?: number;
  targetTrophies?: number;
  currentLeague?: string;
  targetLeague?: string;
  express: boolean;
}