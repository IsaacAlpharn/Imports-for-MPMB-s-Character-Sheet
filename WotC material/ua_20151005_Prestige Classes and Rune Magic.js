var iFileName = "ua_20151005_Prestige Classes and Rune Magic.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Unearthed Arcana: Prestige Classes and Rune Magic article to MPMB's Character Record Sheet

// Define the source
SourceList["UA:PCRM"] = {
	name : "Unearthed Arcana: Prestige Classes and Rune Magic",
	abbreviation : "UA:PCRM",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2015/downloads/dnd/UA_Rune_Magic_Prestige_Class.pdf",
	date : "2015/10/05"
};

// Adds a prestige class, called "Rune Scribe" (includes contributions by K.12)
ClassList["rune scribe"] = {
	regExpSearch : /^(?=.*rune)(?=.*scribe).*$/i,
	name : "Rune Scribe",
	source : ["UA:PCRM", 2],
	primaryAbility : "\n \u2022 Rune Scribe: Dexterity, Intelligence;",
	prereqs : "\n \u2022 Rune Scribe:\n   - Dexterity 13, Intelligence 13;\n   - Proficiency in the Arcana skill\n   - Complete a special task: You must find a rune and present it to an NPC rune scribe who accepts it in return for tutoring you in the ways of rune magic.",
	die : 8,
	improvements : levels.map(function (n) {return 0}),
	saves : ["", ""],
	skills : [""],
	toolProfs : {
		secondary : ["Calligrapher's Supplies", "Mason's Tools", "Woodcarver's Tools"]
	},
	armor : [
		[false, false, false, false]
	],
	weapons : [
		[false, false]
	],
	equipment : "",
	subclasses : ["", []],
	prestigeClassPrereq : 5,
	attacks : levels.map(function (n) {return 1}),
	spellcastingFactor : 1,
	features : {
		"rune lore" : {
			name : "Rune Lore",
			source : ["UA:PCRM", 3],
			minlevel : 1,
			description : desc([
				"I learn the basics of scribing runes, and can activate all properties of a master rune",
				"The first rune I master is the one I found to qualify to become a rune scribe",
				"To use any features of a master rune, I need to first attune to it just like a magic item",
				"Use the \"Choose Feature\" button above to add master runes to the third page"
			]),
			extraname : "Master Rune",
			extrachoices : ["Opal of the Ild Rune", "Orb of the Stein Rune", "Pennant of the Vind Rune", "Shard of the Kalt Rune"],	
			"opal of the ild rune" : {
				name : "Opal of the Ild Rune",
				source : ["UA:PCRM", 4],
				description : " [rare, requires attunement]" + desc([
					"- Ignite (simple): As an action, ignite touched flammable object; Fire extends 1 ft from it",
					"- Fire Tamer (simple): As an action, extinguish touched open flame up to 10-ft radius",
					"   I can expend a spell slot to extend that radius by 20 ft/SL",
					"- Fire's Friend (simple): While attuned, I have resistance to cold damage",
					"- Combustion (complex): As an action, I expend spell slot and touch a creature",
					"   The target automatically takes 1d10 + 1d10/SL fire damage",
					"- Flame Brand (complex): During a short rest, I can augment a weapon, or 20 ammo",
					"   The weapon or ammo deals fire damage; It lasts for 24 hours or until I use this again",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"- Flame Stoker (complex): While attuned, I roll any fire damage twice and use the higher"
				]),
				dmgres : ["Cold"],
				eval : "AddAction('action', 'Ild Rune (Ignite, Fire Tamer, Combusion)', 'Opal of the Ild Rune');",
				removeeval : "RemoveAction('action', 'Ild Rune (Ignite, Fire Tamer, Combusion)');"
			},
			"orb of the stein rune" : {
				name : "Orb of the Stein Rune",
				source : ["UA:PCRM", 5],
				description : " [rare, requires attunement]" + desc([
					"- Indomitable Stand (simple): As an action, I gain abilities until I move",
					"   I have advantage on all ability checks and saving throws to resist being moved",
					"   Anyone moving within 10 ft makes a DC 12 Str save or has speed 0 until its next turn",
					"- Stone Soul (simple): While attuned, I cannot be petrified",
					"- Stone's Secrets (simple): As an action, I learn everybody's current location within 30 ft",
					"   They have to touch the same surface as I'm touching with my hand",
					"- Crushing Brand (complex): During a short rest, I can augment a bludgeoning weapon",
					"   The weapon's bludgeoning damage ignores resistances and immunities",
					"   If the weapon deals its maximum damage, the target is also knocked prone",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"   These effects last for 24 hours or until I use Crushing Brand again",
					"- Earthen Step (complex): I can cast Meld Into Stone as a bonus action once per short rest",
					"- Overwhelming Bolt (complex): As an action, I expend spell slot and touch a creature",
					"   It takes 2d8+1d8/SL bludg. dmg and is prone; DC 12+SL Str save for half \u0026 not prone"
				]),
				eval : "AddAction('bonus action', 'Stein Rune (Earthen Step)', 'Orb of the Stein Rune'); AddAction('action', 'Stein Rune (Indomitable Stand, Secrets, Bolt)', 'Orb of the Stein Rune');",
				removeeval : "RemoveAction('bonus action', 'Stein Rune (Earthen Step)'); RemoveAction('action', 'Stein Rune (Indomitable Stand, Secrets, Bolt)');",
				savetxt : { immune : ["petrified"] },
				spellcastingBonus : {
					name : "Orb of the Stein Rune",
					spells : ["meld into stone"],
					selection : ["meld into stone"], 
					oncesr : true
				}
			},
			"pennant of the vind rune" : {
				name : "Pennant of the Vind Rune",
				source : ["UA:PCRM", 5],
				description : " [rare, requires attunement]" + desc([
					"- Comforting Wind (simple): While attuned, I can't suffocate or drown",
					"   Also, I gain advantage on saves against inhaled poisons, toxins, and similar effects",
					"- Wind Step (simple): As an action, I fly 20 ft, after which I fall if I'm still airborne",
					"- Wind's Grasp (simple): As a reaction when falling, I can take no damage from the fall",
					"- Howling Brand (complex): During a short rest, I can augment a ranged weapon",
					"   Its range is doubled and attacks with it do not suffer disadvantage due to range",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"   These effects last for 24 hours or until I use Howling Brand again",
					"- Shrieking Bolt (complex): As an action, I expend spell slot to target a creature I can see",
					"   It 2d8+1d8/SL bludg. dmg \u0026 pushed 10 ft; DC 12+SL Str save for half \u0026 not pushed",
					"- Wind Walker (complex): I can cast Levitate as a bonus action once per short rest"
				]),
				eval : "AddAction('bonus action', 'Vind Rune (Wind Walker)', 'Pennant of the Vind Rune'); AddAction('action', 'Vind Rune (Wind Step, Shrieking Bolt)', 'Pennant of the Vind Rune'); AddAction('reaction', \"Vind Rune (Wind's Grasp)\", 'Pennant of the Vind Rune');",
				removeeval : "RemoveAction('bonus action', 'Vind Rune (Wind Walker)'); RemoveAction('action', 'Vind Rune (Wind Step, Shrieking Bolt)'); RemoveAction('reaction', 'Vind Rune (Wind Step, Shrieking Bolt)');",
				savetxt : { adv_vs : ["inhaled poison"] },
				spellcastingBonus : {
					name : "Pennant of the Vind Rune",
					spells : ["levitate"],
					selection : ["levitate"], 
					oncesr : true
				}
			},
			"shard of the kalt rune" : {
				name : "Shard of the Kalt Rune",
				source : ["UA:PCRM", 6],
				description : " [rare, requires attunement]" + desc([
					"- Frigid Touch (simple): As an action, I freeze water that I touch a 10-ft radius",
					"- Frost Friend (simple): While attuned, I have resistance to fire damage",
					"- Icy Mantle (simple): As an action, me or a creature I touch gains a protective mantle",
					"   The next time taking bludg., slash., pierc. damage, it absorbs the damage and falls apart",
					"- Freezing Bolt (complex): As an action, I expend spell slot and touch a creature",
					"   It takes 2d8+1d8/SL cold damage and its speed is 0 until the end of my next turn",
					"   If it succeeds on a DC 12+SL Con save, it takes only half damage and has normal speed",
					"- Ice Brand (complex):  During a short rest, I can augment a weapon, or 20 ammo pieces",
					"   The weapon or ammo deals cold damage; It lasts for 24 hours or until I use this again",
					"   I can expend a spell slot to also give the weapon a magic bonus of slot level dived by 3",
					"- Winter's Howl (complex): I can cast Sleet Storm as an action once per short rest"
				]),
				dmgres : ["Fire"],
				eval : "AddAction('action', 'Kalt Rune (Touch, Mantle, Bolt, Howl)', 'Shard of the Kalt Rune');",
				removeeval : "RemoveAction('action', 'Kalt Rune (Touch, Mantle, Bolt, Howl)');",
				spellcastingBonus : {
					name : "Shard of the Kalt Rune",
					spells : ["sleet storm"],
					selection : ["sleet storm"],
					oncesr : true
				}
			}
		},
		"runic magic" : {
			name : "Runic Magic",
			source : ["UA:PCRM", 3],
			minlevel : 1,
			description : "\n   " + "I obtain spell slots as if gaining a level in a full spellcasting class, but don't learn spells"
		},
		"runic discovery" : {
			name : "Runic Discovery",
			source : ["UA:PCRM", 3],
			minlevel : 2,
			description : desc([
				"I know a number of master runes which I can attune to, even if not in my possession",
				"Attuning or de-attuning in this manner can be done over the course of a short rest"
			]),
			additional : levels.map(function (n) {
				if (n < 2) return "";
				return (n < 3 ? 1 : n < 5 ? 2 : 3) + " known master runes";
			})
		},
		"living rune" : {
			name : "Living Rune",
			source : ["UA:PCRM", 3],
			minlevel : 4,
			description : desc([
				"I get 2 points that I can add to one or two of my ability scores as I see fit",
				"When I finish a long rest, I can re-allocate these point(s) from a single score to another"
			])
		},
		"rune mastery" : {
			name : "Rune Mastery",
			source : ["UA:PCRM", 3],
			minlevel : 5,
			description : "\n   " + "One rune I'm attuned to doesn't count toward the limit of magic items I can attune to"
		}
	}
};
