const updates = { // Updates to token/actor
		actor: { // Updates to the token's actor
			name: "ActorName", // Change the name of the token's actor
			img: "ImagePath", // Example: "icons/magic/holy/projectiles-blades-salvo-yellow.webp"
			data: {
				abilities: {
					str: { // Strength
						value: 10, // Numeric
						proficient: 0, // 0 = No, 1 = Yes
						bonuses: {
							check: "", // Formula
							save: "" // Formula
						}
					},
					dex: { // Dexterity
						value: 10, // Numeric
						proficient: 0, // 0 = No, 1 = Yes
						bonuses: {
							check: "", // Formula
							save: "" // Formula
						}
					},
					con: { // Constitution
						value: 10, // Numeric
						proficient: 0, // 0 = No, 1 = Yes
						bonuses: {
							check: "", // Formula
							save: "" // Formula
						}
					},
					int: { // Intelligence
						value: 10, // Numeric
						proficient: 0, // 0 = No, 1 = Yes
						bonuses: {
							check: "", // Formula
							save: "" // Formula
						}
					},
					wis: { //Wisdom
						value: 10, // Numeric
						proficient: 0, // 0 = No, 1 = Yes
						bonuses: {
							check: "", // Formula
							save: "" // Formula
						}
					},
					cha: { // Charisma
						value: 10, // Numeric
						proficient: 0, // 0 = No, 1 = Yes
						bonuses: {
							check: "", // Formula
							save: "" // Formula
						}
					},
				},
				attributes: {
					ac: {
						flat: null, // AC if using the Flat or Natural calculation
						calc: "", // flat, natural, default, mage, draconic, unarmoredMonk, unarmoredBarb, custom
						formula: "" // Formula if using the Custom Formula calculation
					},
					hp: {
						value: 103, // Numeric
						min: 0, // Numeric
						max: 103, // Numeric
						temp: null, // Numeric
						tempmax: null // Numeric
					},
					movement: {
						burrow: 0, // Numeric
						climb: 0, // Numeric
						fly: 0, // Numeric
						swim: 0, // Numeric
						walk: 30, // Numeric
						units: "", // ft, mi, m, km
					},
					senses: {
						darkvision: 0, // Numeric
						blindsight: 0, // Numeric
						tremorsense: 0, // Numeric
						truesight: 0, // Numeric
						units: "ft", // ft, mi, m, km
						special: "" // String separated by semicolons
					}
				},
				traits: {
					size: "", // tiny, sm, med, lg, huge, grg
					di: { // Damage Immunity
						value: [
							"",// Each damage type is in quotes separated by commas: "acid", "bludgeoning", "cold", "fire", "force", "lightning", "necrotic", "physical", "piercing", "poison", "psychic", "radiant", "slashing", "thunder"
						], 
						custom: "" // String seperated by semicolons
					},
					dr: { // Damage Resistance
						value: [
							"",// Each damage type is in quotes separated by commas: "acid", "bludgeoning", "cold", "fire", "force", "lightning", "necrotic", "physical", "piercing", "poison", "psychic", "radiant", "slashing", "thunder"
						],
						custom: "" // String seperated by semicolons
					},
					dv: { // Damage Vulnerability
						value: [
							"",// Each damage type is in quotes separated by commas: "acid", "bludgeoning", "cold", "fire", "force", "lightning", "necrotic", "physical", "piercing", "poison", "psychic", "radiant", "slashing", "thunder"
						],
						custom: "" // String seperated by semicolons
						},
					ci: { // Condition Immunities
						value: [ 
							"", // Each condition is in quotes separated by commas: "blinded", "charmed", "deafened", "diseased", "exhaustion", "frightened", "grappled", "incapacitated", "invisible", "paralyzed", "petrified", "poisoned", "prone", "restrained", "stunned", "unconscious"
						],
						custom: "" // String seperated by semicolons
					},
				}
			}
		},
		token: { // Updates to the token
			name: "TokenName", // Change the name of the token
			img: "ImagePath", // Example: "icons/magic/holy/projectiles-blades-salvo-yellow.webp"
			width: 1, // Numeric
			height: 1, // Numeric
			scale: 1, // Numeric 0.2-3
			elevation: 0, // Numeric
			alpha: 1, // Numeric 0-1
			hidden: false, // true, false
			dimSight: 0, // Numeric
			brightSight: 0, // Numeric
			sightAngle: 0, // Numeric
			light: {
				alpha: 0.5, // Numeric 0-1
				angle: 0, // Numeric 0-360
				bright: 0, // Numeric
				coloration: 1,
				dim: 0,  // Numeric
				gradual: true, // true, false
				luminosity: 0.5, // Numeric decimals -1 to 1
				saturation: 0, // Numeric decimals -1 to 1
				contrast: 0, // Numeric decimals -1 to 1
				shadows: 0, // Numeric decimals 0-1
				animation: {
					speed: 5, // Numeric decimals 0-10
					intensity: 5, // Numeric decimals 1-10
					reverse: false, // true, false
					type: "" // torch, pulse, chroma, wave, fog, sunburst, dome, emanation, hexa, ghost, energy, roiling, hole, vortex, witchwave, rainbowswirl, radialrainbow, fairy
				},
				color: "#000000" // Hex code for color
			},
		},
		embedded: {
			Item: { // Update or add an item in the summoned token actor's inventory
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
						level: 1, // Numeric 0-9, 0 = Cantrip
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
					},
					effects: []
				}
			}
		}
	};
