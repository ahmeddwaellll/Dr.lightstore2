import { Card, Account } from './constants';

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

// Common Cards
export const commonCards: Card[] = [
  { id: 'minions', name: 'Minions', elixir: 3, type: 'troop', rarity: 'common', hasEvolution: false, description: 'Three fast, moderate-damage single-target ranged air troops.' },
  { id: 'archers', name: 'Archers', elixir: 3, type: 'troop', rarity: 'common', hasEvolution: true, description: 'Two low-damage yet medium-ranged single-target troops.' },
  { id: 'knight', name: 'Knight', elixir: 3, type: 'troop', rarity: 'common', hasEvolution: true, description: 'A moderate-damage single-target melee troop.' },
  { id: 'spear-goblins', name: 'Spear Goblins', elixir: 2, type: 'troop', rarity: 'common', hasEvolution: false, description: 'Three very fast, low-damage single-target ranged troops.' },
  { id: 'goblins', name: 'Goblins', elixir: 2, type: 'troop', rarity: 'common', hasEvolution: false, description: 'Four very fast, moderate damage, single-target melee troops.' },
  { id: 'bomber', name: 'Bomber', elixir: 2, type: 'troop', rarity: 'common', hasEvolution: true, description: 'A 2 Elixir high-damage and medium-ranged splash troop.' },
  { id: 'skeletons', name: 'Skeletons', elixir: 1, type: 'troop', rarity: 'common', hasEvolution: true, description: 'Three fast, low-damage single-target melee troops.' },
  { id: 'barbarians', name: 'Barbarians', elixir: 5, type: 'troop', rarity: 'common', hasEvolution: true, description: 'Five single-target melee troops with thoroughly average stats.' },
  { id: 'electro-spirit', name: 'Electro Spirit', elixir: 1, type: 'troop', rarity: 'common', hasEvolution: false, description: 'Costing a shockingly low 1 Elixir, the Electro Spirit shows his killer mustache.' },
  { id: 'skeleton-dragons', name: 'Skeleton Dragons', elixir: 4, type: 'troop', rarity: 'common', hasEvolution: false, description: 'Two skeletal cousins of the Baby Dragon.' },
  { id: 'fire-spirit', name: 'Fire Spirit', elixir: 1, type: 'troop', rarity: 'common', hasEvolution: false, description: 'One very fast, near-melee splash troop that packs a flaming hot punch.' },
  { id: 'bats', name: 'Bats', elixir: 2, type: 'troop', rarity: 'common', hasEvolution: true, description: 'Five single-target melee units that offer good defensive and offensive value.' },
  { id: 'royal-recruits', name: 'Royal Recruits', elixir: 7, type: 'troop', rarity: 'common', hasEvolution: true, description: 'Six fairly tough melee ground troops spread out in a horizontal formation.' },
  { id: 'firecracker', name: 'Firecracker', elixir: 3, type: 'troop', rarity: 'common', hasEvolution: true, description: 'This former Archer has turned rebellious, bringing a firework to cause havoc.' },
  { id: 'rascals', name: 'Rascals', elixir: 5, type: 'troop', rarity: 'common', hasEvolution: false, description: 'A 5 Elixir value pack of a trio of trouble.' },
  { id: 'arrows', name: 'Arrows', elixir: 3, type: 'spell', rarity: 'common', hasEvolution: false, description: 'Shoot into the sky with a 3 Elixir rain of Arrows.' },
  { id: 'zap', name: 'Zap', elixir: 2, type: 'spell', rarity: 'common', hasEvolution: true, description: '2 Elixir, instant effect and stunning.' },
  { id: 'giant-snowball', name: 'Giant Snowball', elixir: 2, type: 'spell', rarity: 'common', hasEvolution: true, description: 'Is a push too hot to handle? A giant, 2 Elixir snowball will make them slow down.' },
  { id: 'royal-delivery', name: 'Royal Delivery', elixir: 3, type: 'spell', rarity: 'common', hasEvolution: false, description: 'I\'m sorry, did anyone order pure defensive destruction?' },
  { id: 'cannon', name: 'Cannon', elixir: 3, type: 'building', rarity: 'common', hasEvolution: true, description: 'For 3 Elixir, you get a building which has moderate hitpoints, damage.' },
  { id: 'mortar', name: 'Mortar', elixir: 4, type: 'building', rarity: 'common', hasEvolution: true, description: 'It\'s quite hard to stop these explosive shells from hitting a tower.' },
  { id: 'tesla', name: 'Tesla', elixir: 4, type: 'building', rarity: 'common', hasEvolution: true, description: 'Peek-a-boo! For 4 Elixir, it has moderate health and damage.' },
  { id: 'tower-princess', name: 'Tower Princess', elixir: 0, type: 'tower-troop', rarity: 'common', hasEvolution: false, description: 'The King decides to guard his secondary towers with his classic trusted daughter.' }
];

// Rare Cards
export const rareCards: Card[] = [
  { id: 'mini-pekka', name: 'Mini P.E.K.K.A.', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'The classic glass cannon — a mighty punch packed within a moderate health.' },
  { id: 'musketeer', name: 'Musketeer', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: true, description: 'A consistent 4 Elixir single-target shot attacking both air and ground.' },
  { id: 'giant', name: 'Giant', elixir: 5, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'The "original" tank, the Giant is a 5 Elixir meat shield with high health.' },
  { id: 'valkyrie', name: 'Valkyrie', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: true, description: 'A 4 Elixir powerhouse with high health.' },
  { id: 'mega-minion', name: 'Mega Minion', elixir: 3, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'A 3 Elixir flying armored gargoyle with below-average health and high damage.' },
  { id: 'battle-ram', name: 'Battle Ram', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: true, description: 'A fast but fragile 4 Elixir surprise to smash into buildings.' },
  { id: 'wizard', name: 'Wizard', elixir: 5, type: 'troop', rarity: 'rare', hasEvolution: true, description: 'For 5 Elixir, the Wizard burns foes on the ground and in the air.' },
  { id: 'flying-machine', name: 'Flying Machine', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'A 4 Elixir flying card with moderately-low hitpoints.' },
  { id: 'hog-rider', name: 'Hog Rider', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'A reliable card against towers. Zoom past troops with his moderate-high health.' },
  { id: 'royal-hogs', name: 'Royal Hogs', elixir: 5, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'For 5 Elixir, four moderate health, low damage pigs that rush the enemy tower.' },
  { id: 'three-musketeers', name: 'Three Musketeers', elixir: 9, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'Three independent, very powerful markswomen with high burst damage.' },
  { id: 'battle-healer', name: 'Battle Healer', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'Selflessly, the Battle Healer has relatively high hitpoints and medium damage.' },
  { id: 'ice-golem', name: 'Ice Golem', elixir: 2, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'A cheap yet versatile mini-tank, the Ice Golem provides a wide range of uses.' },
  { id: 'dart-goblin', name: 'Dart Goblin', elixir: 3, type: 'troop', rarity: 'rare', hasEvolution: true, description: 'A 3 Elixir card with a fast fire rate, long range, and high speed.' },
  { id: 'furnace', name: 'Furnace', elixir: 4, type: 'building', rarity: 'rare', hasEvolution: true, description: 'This 4 Elixir metallic oven has magically grown feet and arms.' },
  { id: 'zappies', name: 'Zappies', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'If it moves, then it won\'t for much longer.' },
  { id: 'goblin-demolisher', name: 'Goblin Demolisher', elixir: 4, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'For 4 Elixir, this Goblin is packed with explosions and dynamite.' },
  { id: 'heal-spirit', name: 'Heal Spirit', elixir: 1, type: 'spell', rarity: 'rare', hasEvolution: false, description: 'This little guy runs, jumps, and splashes just like his Spirit siblings.' },
  { id: 'suspicious-bush', name: 'Suspicious Bush', elixir: 2, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'For 2 Elixir, this totally normal bush crawls towards the nearest building.' },
  { id: 'elixir-golem', name: 'Elixir Golem', elixir: 3, type: 'troop', rarity: 'rare', hasEvolution: false, description: 'A hefty mound of Elixir, dividing into two Elixir Golemites.' },
  { id: 'fireball', name: 'Fireball', elixir: 4, type: 'spell', rarity: 'rare', hasEvolution: false, description: 'It\'s a bird! It\'s a plane! It\'s a… meteor? No! A Fireball!' },
  { id: 'rocket', name: 'Rocket', elixir: 6, type: 'spell', rarity: 'rare', hasEvolution: false, description: 'For a hefty 6 Elixir you can destroy a push, a building, or... your Elixir.' },
  { id: 'earthquake', name: 'Earthquake', elixir: 3, type: 'spell', rarity: 'rare', hasEvolution: false, description: 'Rocking the ground for 3 Elixir, this spell is perfect for clearing small swarms.' },
  { id: 'goblin-cage', name: 'Goblin Cage', elixir: 4, type: 'building', rarity: 'rare', hasEvolution: true, description: 'For 4 Elixir, you can drop a building containing a Goblin Brawler.' },
  { id: 'goblin-hut', name: 'Goblin Hut', elixir: 4, type: 'building', rarity: 'rare', hasEvolution: false, description: 'Here come the Spear Goblins!' },
  { id: 'tombstone', name: 'Tombstone', elixir: 3, type: 'building', rarity: 'rare', hasEvolution: false, description: 'A cheap spawner with moderate hitpoints at the cost of only 3 Elixir.' },
  { id: 'bomb-tower', name: 'Bomb Tower', elixir: 4, type: 'building', rarity: 'rare', hasEvolution: false, description: 'Bombs away! This ground-only building throws bombs dealing moderate splash damage.' },
  { id: 'inferno-tower', name: 'Inferno Tower', elixir: 5, type: 'building', rarity: 'rare', hasEvolution: false, description: 'Things get really hot with this building.' },
  { id: 'barbarian-hut', name: 'Barbarian Hut', elixir: 6, type: 'building', rarity: 'rare', hasEvolution: false, description: 'This crude but high-hitpoint barrack spawns a trio of Barbarians.' },
  { id: 'elixir-collector', name: 'Elixir Collector', elixir: 6, type: 'building', rarity: 'rare', hasEvolution: false, description: 'You gotta spend Elixir to make Elixir!' }
];

// Epic Cards
export const epicCards: Card[] = [
  { id: 'baby-dragon', name: 'Baby Dragon', elixir: 4, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'A flying, fire-breathing baby dragon with splash damage.' },
  { id: 'prince', name: 'Prince', elixir: 5, type: 'troop', rarity: 'epic', hasEvolution: false, description: 'Don\'t let his good looks fool you, when he\'s charging for a target he deals double damage.' },
  { id: 'witch', name: 'Witch', elixir: 5, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'Spawns Skeletons and attacks with an area-damage spell.' },
  { id: 'balloon', name: 'Balloon', elixir: 5, type: 'troop', rarity: 'epic', hasEvolution: false, description: 'A slow, flying building-targeter that drops heavy bombs.' },
  { id: 'pekka', name: 'P.E.K.K.A.', elixir: 7, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'A heavily armored, high-damage melee troop.' },
  { id: 'goblin-barrel', name: 'Goblin Barrel', elixir: 3, type: 'spell', rarity: 'epic', hasEvolution: true, description: 'Throws a barrel full of Goblins anywhere in the Arena.' },
  { id: 'freeze', name: 'Freeze', elixir: 4, type: 'spell', rarity: 'epic', hasEvolution: false, description: 'Freezes enemy troops and buildings, making them unable to move or attack.' },
  { id: 'rage', name: 'Rage', elixir: 2, type: 'spell', rarity: 'epic', hasEvolution: false, description: 'Increases the attack and movement speed of friendly troops and buildings.' },
  { id: 'poison', name: 'Poison', elixir: 4, type: 'spell', rarity: 'epic', hasEvolution: false, description: 'Damages and slows enemy troops and buildings within its radius over time.' },
  { id: 'mirror', name: 'Mirror', elixir: 0, type: 'spell', rarity: 'epic', hasEvolution: false, description: 'Plays the last card you played for +1 Elixir.' },
  { id: 'guards', name: 'Guards', elixir: 3, type: 'troop', rarity: 'epic', hasEvolution: false, description: 'Three armored Skeletons with shields.' },
  { id: 'dark-prince', name: 'Dark Prince', elixir: 4, type: 'troop', rarity: 'epic', hasEvolution: false, description: 'A shielded melee troop with splash damage and a charge ability.' },
  { id: 'bowler', name: 'Bowler', elixir: 5, type: 'troop', rarity: 'epic', hasEvolution: false, description: 'A ranged troop that rolls a large rock, dealing splash damage and knocking back ground troops.' },
  { id: 'executioner', name: 'Executioner', elixir: 5, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'Throws an axe that deals damage on its way out and back.' },
  { id: 'cannon-cart', name: 'Cannon Cart', elixir: 5, type: 'building', rarity: 'epic', hasEvolution: false, description: 'A Cannon that moves! When its shield is broken, it becomes a stationary Cannon building.' },
  { id: 'goblin-drill', name: 'Goblin Drill', elixir: 4, type: 'building', rarity: 'epic', hasEvolution: true, description: 'Spawns Goblins and moves underground, appearing near enemy towers.' },
  { id: 'electro-dragon', name: 'Electro Dragon', elixir: 5, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'A flying troop that chains electricity to multiple targets.' },
  { id: 'hunter', name: 'Hunter', elixir: 4, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'A shotgun-wielding troop that deals more damage the closer his target is.' },
  { id: 'lumberjack', name: 'Lumberjack', elixir: 4, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'A fast-moving melee troop with high damage.' },
  { id: 'goblin-giant', name: 'Goblin Giant', elixir: 6, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'A tanky building-targeter with two Spear Goblins on his back.' },
  { id: 'clone', name: 'Clone', elixir: 3, type: 'spell', rarity: 'epic', hasEvolution: false, description: 'Duplicates all friendly troops in its radius.' },
  { id: 'wall-breakers', name: 'Wall Breakers', elixir: 2, type: 'troop', rarity: 'epic', hasEvolution: true, description: 'Two fast, building-targeting troops that deal high damage upon impact.' }
];

// Legendary Cards
export const legendaryCards: Card[] = [
  { id: 'mega-knight', name: 'Mega Knight', elixir: 7, type: 'troop', rarity: 'legendary', hasEvolution: true, description: 'Lands with a BOOM! This armored, jumpy brute deals area damage.' },
  { id: 'inferno-dragon', name: 'Inferno Dragon', elixir: 4, type: 'troop', rarity: 'legendary', hasEvolution: true, description: 'Flies high and burns tanks with an infernal beam that increases in damage over time.' },
  { id: 'lumberjack', name: 'Lumberjack', elixir: 4, type: 'troop', rarity: 'legendary', hasEvolution: true, description: 'A fast, high-damage troop that drops a bottle of Rage when defeated.' },
  { id: 'royal-ghost', name: 'Royal Ghost', elixir: 3, type: 'troop', rarity: 'legendary', hasEvolution: true, description: 'An invisible spirit that becomes visible and attacks only when near a target.' },
  { id: 'electro-dragon', name: 'Electro Dragon', elixir: 5, type: 'troop', rarity: 'legendary', hasEvolution: true, description: 'Fires an electric bolt that can chain to multiple enemies.' },
  { id: 'ram-rider', name: 'Ram Rider', elixir: 5, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Dashes to the nearest building. The rider snares and damages nearby troops.' },
  { id: 'electro-wizard', name: 'Electro Wizard', elixir: 4, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Spawns with a zap and targets two units simultaneously.' },
  { id: 'sparky', name: 'Sparky', elixir: 6, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'A massive machine that charges up a huge area damage blast.' },
  { id: 'miner', name: 'Miner', elixir: 3, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Can be placed anywhere in the Arena, acting as a mini-tank or tower damage dealer.' },
  { id: 'princess', name: 'Princess', elixir: 3, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Shoots flaming arrows with a very long range, dealing area damage.' },
  { id: 'phoenix', name: 'Phoenix', elixir: 4, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'When defeated, it lays an Egg that can respawn the Phoenix if not destroyed.' },
  { id: 'ice-wizard', name: 'Ice Wizard', elixir: 3, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Deals low area damage and significantly slows enemy troops.' },
  { id: 'magic-archer', name: 'Magic Archer', elixir: 4, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Fires an arrow that pierces through units and can hit targets at long range.' },
  { id: 'bandit', name: 'Bandit', elixir: 3, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Dashes from one target to the next, becoming immune to damage during the dash.' },
  { id: 'lava-hound', name: 'Lava Hound', elixir: 7, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'A high-HP, building-targeting air tank that splits into smaller Lava Pups upon death.' },
  { id: 'night-witch', name: 'Night Witch', elixir: 4, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Spawns flying Bats over time and upon death.' },
  { id: 'spirit-empress', name: 'Spirit Empress', elixir: 0, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Deploys on foot or on a dragon, depending on your Elixir level.' },
  { id: 'goblin-machine', name: 'Goblin Machine', elixir: 5, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'A mech with high health and a powerful long-range Rocket ability.' },
  { id: 'mother-witch', name: 'Mother Witch', elixir: 4, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Curses enemies; if a cursed troop is defeated, it turns into a Cursed Hog.' },
  { id: 'fisherman', name: 'Fisherman', elixir: 3, type: 'troop', rarity: 'legendary', hasEvolution: false, description: 'Pulls enemies towards him with his hook, and pulls himself towards buildings.' },
  { id: 'the-log', name: 'The Log', elixir: 2, type: 'spell', rarity: 'legendary', hasEvolution: false, description: 'Rolls across the arena, dealing area damage and knocking back all ground troops.' },
  { id: 'graveyard', name: 'Graveyard', elixir: 5, type: 'spell', rarity: 'legendary', hasEvolution: false, description: 'Spawns Skeletons over time anywhere in the Arena.' },
  { id: 'dagger-duchess', name: 'Dagger Duchess', elixir: 0, type: 'tower-troop', rarity: 'legendary', hasEvolution: false, description: 'A tower troop that throws daggers and unleashes a powerful charge-up flurry.' },
  { id: 'royal-chef', name: 'Royal Chef', elixir: 0, type: 'tower-troop', rarity: 'legendary', hasEvolution: false, description: 'A tower troop that cooks pancakes to temporarily level up friendly troops.' }
];

// Champion Cards
export const championCards: Card[] = [
  { id: 'golden-knight', name: 'Golden Knight', elixir: 4, type: 'troop', rarity: 'champion', hasEvolution: true, description: 'Dashes through enemies with his ability.', ability: { name: 'Dashing Dash', cost: 1, cooldown: 8, description: 'Dashes through up to 10 enemies, dealing damage.' } },
  { id: 'skeleton-king', name: 'Skeleton King', elixir: 4, type: 'troop', rarity: 'champion', hasEvolution: true, description: 'Summons Skeletons based on souls collected.', ability: { name: 'Soul Summoning', cost: 2, cooldown: 20, description: 'Releases Skeletons based on the Soul Counter.' } },
  { id: 'boss-bandit', name: 'Boss Bandit', elixir: 6, type: 'troop', rarity: 'champion', hasEvolution: false, description: 'Turns invisible while teleporting back.', ability: { name: 'Getaway Grenade', cost: 1, cooldown: 'N/A', description: 'Turns invisible while teleporting back 6 tiles.' } },
  { id: 'archer-queen', name: 'Archer Queen', elixir: 5, type: 'troop', rarity: 'champion', hasEvolution: true, description: 'Turns invisible and increases fire rate.', ability: { name: 'Cloaking Cape', cost: 1, cooldown: 17, description: 'Turns invisible for 3.5 seconds and increases fire output.' } },
  { id: 'mighty-miner', name: 'Mighty Miner', elixir: 4, type: 'troop', rarity: 'champion', hasEvolution: true, description: 'Drills underground and leaves explosive.', ability: { name: 'Explosive Escape', cost: 1, cooldown: 13, description: 'Drills to the opposite side and leaves behind an explosive bomb.' } },
  { id: 'goblinstein', name: 'Goblinstein', elixir: 5, type: 'troop', rarity: 'champion', hasEvolution: false, description: 'Links to Monster with electrical passage.', ability: { name: 'Lightning Link', cost: 2, cooldown: 17, description: 'Links Goblinstein to the Monster, creating an electrical passage.' } },
  { id: 'little-prince', name: 'Little Prince', elixir: 3, type: 'troop', rarity: 'champion', hasEvolution: false, description: 'Summons guardian Guardienne.', ability: { name: 'Royal Rescue', cost: 3, cooldown: 30, description: 'Summons his guardian, Guardienne, who dashes forward to tank.' } },
  { id: 'monk', name: 'Monk', elixir: 5, type: 'troop', rarity: 'champion', hasEvolution: false, description: 'Forms zen shield and reflects projectiles.', ability: { name: 'Pensive Protection', cost: 1, cooldown: 'N/A', description: 'Forms a zen shield that reduces incoming damage and reflects projectiles.' } }
];

// Combine all cards
export const allCards: Card[] = [...commonCards, ...rareCards, ...epicCards, ...legendaryCards, ...championCards];

// Mock account data
export const mockAccounts: Account[] = [
  {
    id: 'acc1',
    name: 'Ultimate Champion Deck',
    trophies: 8200,
    maxTrophies: 8500,
    arena: 15,
    league: 'Ultimate Champion',
    champions: 4,
    emotes: 150,
    towerSkins: 25,
    price: 299.99,
    maxDeck: true,
    starLevel3: true,
    cards: [
      { cardId: 'golden-knight', level: 14, evolution: true },
      { cardId: 'skeleton-king', level: 14, evolution: true },
      { cardId: 'archer-queen', level: 14, evolution: true },
      { cardId: 'mighty-miner', level: 14, evolution: true },
      { cardId: 'mega-knight', level: 14, evolution: true },
      { cardId: 'princess', level: 14, evolution: false },
      { cardId: 'ice-wizard', level: 14, evolution: false },
      { cardId: 'graveyard', level: 14, evolution: false }
    ]
  },
  {
    id: 'acc2',
    name: 'Champion League Beast',
    trophies: 6800,
    maxTrophies: 7200,
    arena: 15,
    league: 'Grand Champion',
    champions: 3,
    emotes: 120,
    towerSkins: 18,
    price: 199.99,
    maxDeck: true,
    starLevel3: false,
    cards: [
      { cardId: 'pekka', level: 14, evolution: true },
      { cardId: 'wizard', level: 14, evolution: false },
      { cardId: 'minipekka', level: 14, evolution: true },
      { cardId: 'hog-rider', level: 14, evolution: false },
      { cardId: 'fireball', level: 14, evolution: false },
      { cardId: 'arrows', level: 14, evolution: false },
      { cardId: 'knight', level: 14, evolution: true },
      { cardId: 'archers', level: 14, evolution: true }
    ]
  },
  {
    id: 'acc3',
    name: 'Master League Starter',
    trophies: 5200,
    maxTrophies: 5800,
    arena: 14,
    league: 'Master',
    champions: 2,
    emotes: 80,
    towerSkins: 12,
    price: 129.99,
    maxDeck: false,
    starLevel3: false,
    cards: [
      { cardId: 'giant', level: 13, evolution: true },
      { cardId: 'witch', level: 13, evolution: false },
      { cardId: 'prince', level: 13, evolution: true },
      { cardId: 'minipekka', level: 13, evolution: false },
      { cardId: 'fireball', level: 13, evolution: false },
      { cardId: 'arrows', level: 13, evolution: false },
      { cardId: 'knight', level: 13, evolution: false },
      { cardId: 'archers', level: 13, evolution: false }
    ]
  },
  {
    id: 'acc4',
    name: 'Guardian League Maxed',
    trophies: 4200,
    maxTrophies: 4800,
    arena: 13,
    league: 'Guardian',
    champions: 1,
    emotes: 60,
    towerSkins: 8,
    price: 89.99,
    maxDeck: false,
    starLevel3: false,
    cards: [
      { cardId: 'giant', level: 12, evolution: false },
      { cardId: 'wizard', level: 12, evolution: false },
      { cardId: 'pekka', level: 12, evolution: false },
      { cardId: 'minipekka', level: 12, evolution: false },
      { cardId: 'fireball', level: 12, evolution: false },
      { cardId: 'arrows', level: 12, evolution: false },
      { cardId: 'knight', level: 12, evolution: false },
      { cardId: 'archers', level: 12, evolution: false }
    ]
  },
  {
    id: 'acc5',
    name: 'Archer League Budget',
    trophies: 2800,
    maxTrophies: 3200,
    arena: 10,
    league: 'Archer',
    champions: 0,
    emotes: 25,
    towerSkins: 3,
    price: 49.99,
    maxDeck: false,
    starLevel3: false,
    cards: [
      { cardId: 'giant', level: 11, evolution: false },
      { cardId: 'wizard', level: 11, evolution: false },
      { cardId: 'knight', level: 11, evolution: false },
      { cardId: 'archers', level: 11, evolution: false },
      { cardId: 'fireball', level: 11, evolution: false },
      { cardId: 'arrows', level: 11, evolution: false },
      { cardId: 'goblins', level: 11, evolution: false },
      { cardId: 'cannon', level: 11, evolution: false }
    ]
  }
];