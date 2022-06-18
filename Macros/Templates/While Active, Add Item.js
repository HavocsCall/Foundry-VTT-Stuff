//Set amount of dice here
const level = args[1]; // Gets spell level and allows for any math related to spell level to dice conversion

const updates = { // Updates to token while effect is active
	embedded: {
		Item: { // Define the item that you want in the caster's inventory
			"ItemName": { // String
				type: "ItemType", // feat, spell, weapon
				img: "ImagePath", // Example: "icons/magic/holy/projectiles-blades-salvo-yellow.webp"
				data: {
					description: {
						value: "ItemDescription", // String
					},
					source: "", // String
					activation: {
						type: "", // action, bonus, crew, day, hour, lair, legendary, minute, none, reaction, special, reactiondamage, reactionmanual
						cost: null, // Numeric
						condition: "" // String
					},
					duration: {
						value: null, // Numeric
						units: "" // inst, turn, round, minute, hour, day, month, year, perm, spec
					},
					target: {
						value: null, // Numeric
						width: null, // Numeric
						units: "", // self, touch, spec, any, ft, mi, m, km
						type: "" // ally, cone, creature, cube, cylinder, enemy, line, none, object, radius, self, space, sphere, square, wall
					},
					range: {
						value: null, // Numeric
						long: null, // Numeric
						units: "" // self, touch, spec, any, ft, mi, m, km
					},
					uses: {
						value: null, // Numeric
						max: "", // Formula
						per: "" // sr, lr, day, charges
					},
					consume: {
						type: "", // ammo, attribute, hitDice, charges, material
						target: "", // Leave blank until the item is on the character sheet
						amount: null // Numeric
					},
					ability: "", // str, dex, con, int, wis, cha
					actionType: "", // mwak, rwak, msak, rsak, save, heal, abil, util, other
					attackBonus: "", // Formula
					chatFlavor: "", // String
					critical: {
						threshold: null, // Numeric
						damage: "" // Formula
					},
					damage: {
						parts: [
						["DamageFormula", "DamageType"] // ["Formula: this can be like '${level}d8' (include the backticks) to use the spell level", "acid, bludgeoning, cold, fire, force, lightning, necrotic, piercing, poison, psychic, radiant, slashing, thunder, healing, temphp"]
						],
						versatile: "" // Formula
					},
					formula: "", // Formula (Labeled as Other Formula)
					save: {
						ability: "", // str, dex, con, int, wis, cha
						dc: null, // Numeric
						scaling: "spell", // spell, str, dex, con, int, wis, cha, flat
					},
					requirements: "",
					recharge: {
						value: null, // Numeric 1-6
						charged: false // true, false
					},
					//Spell section
					level: 1, // Numeric 0-9, 0 = cantrip
					school: "abj", // abj, con, div, enc, evo, ill, nec, trs
					components: {
						value: "", // String
						vocal: false, // true, false
						somatic: false, // true, false
						material: false, // true, false
						ritual: false, // true, false
						concentration: false // true, false
					},
					materials: {
						value: "", // String
						consumed: false, // true, false
						cost: null, // Numeric
						supply: null // Numeric
					},
					preparation: {
						mode: "prepared", // prepared, pact, always, atwill, innate
						prepared: false // true, false
					},
					scaling: {
						mode: "none", // cantrip, none, level
						formula: "" // Formula
					},
					//End of spell section
					//Weapon section
					rarity: "common", // common, uncommon, rare, veryRare, legendary, artifact
					weaponType: "simpleM", // simpleM, simpleR, martialM, martialR, natural, improv, siege
					baseItem: "club", // club, dagger, greatclub, handaxe, javelin, lighthammer, mace, quarterstaff, sickle, spear, dart, lightcrossbow, shortbow, sling, battleaxe, flail, glaive, greataxe, greatsword, halberd, lance, longsword, maul, morningstar, pike, rapier, scimitar, shortsword, trident, warpick, warhammer, whip, blowgun, handcrossbow, heavycrossbow, longbow, net
					quantity: 1, // Numeric
					weight: 0, // Numeric
					price: "0", // String
					attunement: 0, // 0 = Attunement not Required, 1 = Attunement Required, 2 = Attuned
					proficient: true, // true, false
					equipped: true, // true, false
					identified: true, // true, false
					properties: {
						ada: false, // Adamantine: true, false
						amm: false, // Ammunition: true, false
						fin: false, // Finesse: true, false
						fir: false, // Firearm: true, false
						foc: false, // Focus: true, false
						hvy: false, // Heavy: true, false
						lgt: false, // Light: true, false
						lod: false, // Loading: true, false
						mgc: false, // Magical: true, false
						rch: false, // Reach: true, false
						rel: false, // Reload: true, false
						ret: false, // Returning: true, false
						sil: false, // Silvered: true, false
						spc: false, // Special: true, false
						thr: false, // Thrown: true, false
						two: false, // Two-Handed: true, false
						ver: false // Veratile: true, false
					},
					//End of weapon section
				}
			}
		}
	}
};

if(args[0] === "on") {
	await warpgate.mutate(token.document, updates);
	ui.notifications.notify("Something has appeared in your character sheet"); // Edit this to what you want it to say
}
else if(args[0] === "off") {
	await warpgate.revert(token.document);
}