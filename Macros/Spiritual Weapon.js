const actorID = args[2].actorId;
const spellDC = game.actors.get(actorID).data.data.attributes.spelldc;
const spellAttack = spellDC - 8;
const spellAbility = game.actors.get(actorID).data.data.attributes.spellcasting;
const spellMod = game.actors.get(actorID).data.data.abilities[spellAbility].mod;
const tokenID = args[2].tokenId;
const tokenName = canvas.tokens.get(tokenID).data.name;

//Set amount of dice here
const dice = Math.floor(args[1]/2);

//Warpgate Variables
const summonType = "Spiritual Weapon";
const updates = {
	actor: {
		name:`${summonType} of ${tokenName}`,
	},
	token: {
		name:`${summonType} of ${tokenName}`,
	},
	embedded: {
		Item: {
			"Spiritual Weapon Attack": { //String
				type: "feat", // feat, spell, weapon
				img: "icons/skills/melee/strike-blade-knife-blue-red.webp", // Example: "icons/magic/holy/projectiles-blades-salvo-yellow.webp"
				data: {
					description: {
						value: "You can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.<br>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above 2nd.", // String
					},
					activation: {
						type: "bonus", // action, bonus, crew, day, hour, lair, legendary, minute, none, reaction, special, reactiondamage, reactionmanual
						cost: 1, // Numeric
					},
					target: {
						value: 1, // Numeric
						type: "creature" // ally, cone, creature, cube, cylinder, enemy, line, none, object, radius, self, space, sphere, square, wall
					},
					range: {
						value: 5, // Numeric
						units: "ft" // self, touch, spec, any, ft, mi, m, km
					},
					actionType: "msak", // mwak, rwak, msak, rsak, save, heal, abil, util, other
					attackBonus: `- @mod - @prof + ${spellAttack}`, // Formula
					damage: {
						parts: [
						[`${dice}d8 + ${spellMod}`, "force"] // ["Formula: this can be like '${dice}d8' (include the backticks) to use the spell scaling", "acid, bludgeoning, cold, fire, force, lightning, necrotic, piercing, poison, psychic, radiant, slashing, thunder, healing, temphp"]
						],
					},
				}
			}
		}
	}
};
const callbacks = {};
const options = {controllingActor: actor};

if(args[0] === "on") {
	await warpgate.spawn(summonType, updates, callbacks, options);
}
else if(args[0] === "off") {
	await warpgate.dismiss(); //Still have to figure this one out
}
