const mongoose=require('mongoose');
const db=require('../db').larunaCM;


const creature=new mongoose.Schema({
	name: String,
	type: String,
	legacy: String,
	size: String,
	legacy_value: Number,
	description: String,
	habitat: String,
	additional_info: String,
	attributes: {
		STR: Number, AGI: Number,
		END: Number, INT: Number,
		PER: Number, CHM: Number
	},
	stats: {//? These are all calculated values... should we store them or......
		health: Number,//200+other_bonuses
		stamina: Number,//50+5*END+other_bonuses
		mana: Number,//50+5*INT+other_bonuses
		evasion: Number,//PER+AGI+other_bonuses
		reaction: Number//PER+AGI+other_bonuses
	},
	protection: {
		acid: Number, cold: Number, electricity: Number, poison: Number, space: Number,
		arcane: Number, curse: Number, fire: Number, shadow: Number, time: Number,
		celestial: Number, disease: Number, mind: Number, sonic: Number
	},
	resistance: {
		light: Number, dark: Number, calling: Number, change: Number, elements: Number
	},
	armor: {//? Hindrance is a sum of all the below parts
		impact: Number, slashing: Number, piercing: Number,
		shield: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		gloves: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		boots: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		pauldrons: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		helm: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		coif: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		cuirass: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		chest: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		},
		legs: {
			name: String,
			type: String,
			impact: Number, slashing: Number, piercing: Number,
			hindrance: Number
		}
	},
	//* Allows the array to initially be undefined and thereby allow it to not be saved if it's empty
	//? May need to use `known_spells=known_spells||[]` before doing a push to prevent errors
	known_spells: {type: Array, default: void 0},
	skills: {
		academics: {
			skill: Number, //this is added to all the advanced skills as part of their bonus
			attr: Number, //Maybe have it reference a subdoc? I have no idea how this works yet
			bonus: Number, //this is where "inherent" legacy bonuses go, as well as any other oddball bonuses
			legacy_bonus: Number, // Gained solely by legacy arc, not from the "inherent" section of a legacy
			adv_skills: { //! The bonus section of these will *not* include the base skill, this is specific to bonuses specific to the adv skill
				kingdoms: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				languages: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				religions: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				appraisal: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				investigation: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				medicine: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		},
		craft: {
			skill: Number,
			attr: Number,
			bonus: Number,
			legacy_bonus: Number,
			adv_skills: {
				alchemy: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				enchanting: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				jewelcrafting: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				leatherworking: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				metalsmithing: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				woodworking: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		},
		skullduggery: {
			skill: Number,
			attr: Number,
			bonus: Number,
			legacy_bonus: Number,
			adv_skills: {
				deception: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				lockpicking: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				pickpocketing: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				stealth: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		},
		social: {
			skill: Number,
			attr: Number,
			bonus: Number,
			legacy_bonus: Number,
			adv_skills: {
				intimidation: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				interrogation: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				leadership: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				negotiation: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				performance: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				seduction: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		},
		survival: {
			skill: Number,
			attr: Number,
			bonus: Number,
			legacy_bonus: Number,
			adv_skills: {
				climbing: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				foraging: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				mining: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				riding: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				skinning: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				swimming: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				tracking: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		},
		melee: {
			skill: Number,
			attr: Number,
			bonus: Number,
			legacy_bonus: Number,
			adv_skills: {
				brawling: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				natural_weapons: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				oneH_slashing: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				oneH_piercing: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				oneH_impact: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				twoH_slashing: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				twoH_piercing: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				twoH_impact: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		},
		ranged: {
			skill: Number,
			attr: Number,
			bonus: Number,
			legacy_bonus: Number,
			adv_skills: {
				bows: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				crossbows: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				slings: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				throwing_weapons: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		},
		magic: {
			skill: Number,
			attr: Number,
			bonus: Number,
			legacy_bonus: Number,
			adv_skills: {
				calling: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				change: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				elements: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				light: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number},
				dark: {skill: Number, attr: Number, bonus: Number, legacy_bonus: Number}
			}
		}
	}
});
creature.set('versionKey', false);

//! ###############################################
module.exports=db.model('Creature', creature);//! This string *MUST* be a name of a collection in the `db` database. Must. Must. Must. MUST BE.
//! ###############################################