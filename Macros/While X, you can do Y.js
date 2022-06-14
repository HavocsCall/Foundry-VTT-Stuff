//Updates to Token DELETE ANY UNNEEDED SECTIONS
const updates = {
	embedded: {
		Item: {
			"ItemName": { //String
				type: "feat", // feat, spell
				img: "ImagePath", //Example: "icons/magic/holy/projectiles-blades-salvo-yellow.webp"
				data: {
					description: {
						value: "ItemDescription", //String
					},
					source: "", //String
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
						["DamageFormula", "DamageType"] // ["Formula", "acid, bludgeoning, cold, fire, force, lightning, necrotic, piercing, poison, psychic, radiant, slashing, thunder, healing, temphp"]
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
					level: 1, // Numeric 1-9
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
					// Active Effects
					effects: [],
				}
			}
		}
	}
};

if(args[0] === "on") {
	await warpgate.mutate(token.document, updates);
	}
else if(args[0] === "off") {
    await warpgate.revert(token.document);
	}
