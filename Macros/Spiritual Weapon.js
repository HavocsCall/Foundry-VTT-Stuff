//Data from Args
const actorID = args[1]; // Gets actor ID
const tokenID = args[2]; // Gets Token ID
const summonerDC = actorID.data.data.attributes.spelldc;
const summonerAttack = summonerDC - 8;
const summonerMod = getProperty(tokenID.actor, `data.data.abilities.${getProperty(tokenID.actor, 'data.data.attributes.spellcasting')}.mod`);

const level = args[3] - 1 //Gets spell level and + or - to equal amount of dice

//Warpgate Variables
const summonType = "Spiritual Weapon";
const updates = {
	actor: {
		name:`${summonType} of ${tokenID.name}`,
	},
	token: {
		name:`${summonType} of ${tokenID.name}`,
	},
	embedded: {
		Item: {
			"Spiritual Weapon Attack": { //String
				type: "feat", // feat, spell
				img: "icons/skills/melee/strike-blade-knife-blue-red.webp", //Example: "icons/magic/holy/projectiles-blades-salvo-yellow.webp"
				data: {
					description: {
						value: "You can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier.", //String
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
					attackBonus: `- @mod - @prof + ${summonerAttack}`, // Formula
					damage: {
						parts: [
						[`${level}d8 + ${summonerMod}`, "force"] // ["Formula", "acid, bludgeoning, cold, fire, force, lightning, necrotic, piercing, poison, psychic, radiant, slashing, thunder, healing, temphp"]
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
	await warpgate.dismiss(summonType);
}
