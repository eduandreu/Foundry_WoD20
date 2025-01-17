import { rollDice } from "../scripts/roll-dice.js";
import { DiceRoll } from "../scripts/roll-dice.js";
import ActionHelper from "../scripts/action-helpers.js";
import CombatHelper from "../scripts/combat-helpers.js";

export class Gift {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = item.system["dice1"];
        this.dice2 = item.system["dice2"];
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = item.system["description"];
        this.system = item.system["details"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "werewolfDialog";
    }
}

export class Charm {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = item.system["dice1"];
        this.dice2 = item.system["dice2"];
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = "";
        this.system = item.system["description"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "spiritDialog";
    }
}

export class CharmGift {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = ActionHelper._transformToSpiritAttributes(item.system["dice1"]);
        this.dice2 = "";
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = "";
        this.system = item.system["description"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "spiritDialog";
    }
}

export class Power {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = item.system["dice1"];
        this.dice2 = item.system["dice2"];
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = "";
        this.system = item.system["description"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "creatureDialog";
    }
}

export class DisciplinePower {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = item.system["dice1"];
        this.dice2 = item.system["dice2"];
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = item.system["description"];
        this.system = item.system["details"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "vampireDialog";
    }
}

export class PathPower {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = item.system["dice1"];
        this.dice2 = item.system["dice2"];
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = item.system["description"];
        this.system = item.system["details"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "vampireDialog";
    }
}

export class RitualPower {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = item.system["dice1"];
        this.dice2 = item.system["dice2"];
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = item.system["description"];
        this.system = item.system["details"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "vampireDialog";
    }
}

export class ArtPower {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item.system["type"];
        this.parentid = item.system["parentid"];

        this.dice1 = "art";
        this.dice2 = "realm";
        this.bonus = 0;
        this.difficulty = 8;
        this.description = item.system["description"];
        this.system = item.system["details"];

        this.selectedRealms = [];
        this.isUnleashing = false;

        this.canRoll = false;
        this.close = false;
        this.sheettype = "changelingDialog";
    }

    _lowestRank() {
        let lowestRank = 99;
        let affinitySelected = false;
        let difficultRealm = false;

        for (const realm of this.selectedRealms) {
            if ((realm.label != "wod.realms.scene") && (realm.label != "wod.realms.time") && (realm.isselected)) {
                if (lowestRank > realm.value) {
                    lowestRank = realm.value;
                }                
            }
            if ((realm.isaffinity) && (realm.isselected)) {
                affinitySelected = true;
            }
            if (((realm.label == "wod.realms.scene") || (realm.label == "wod.realms.time")) && (realm.isselected)) {
                difficultRealm = true;
            }
        }

        if ((affinitySelected) || (difficultRealm)) {
            this.difficulty = 8;

            if (affinitySelected) {
                this.difficulty -= 1;
            }
            if (difficultRealm) {
                this.difficulty += 1;
            }
        }

        if (lowestRank == 99) {
            lowestRank = 0;
        }

        return lowestRank;
    }
}

export class EdgePower {
    constructor(item) {
        this.attributeValue = 0;
        this.attributeName = "";

        this.abilityValue = 0;
        this.abilityName = "";

        this.hasSpeciality = false;
        this.specialityText = "";

        this.name = item["name"];
        this.type = item["type"];
        this.dice1 = item.system["dice1"];
        this.dice2 = item.system["dice2"];
        this.bonus = parseInt(item.system["bonus"]);
        this.difficulty = parseInt(item.system["difficulty"]);
        this.description = item.system["description"];
        this.system = item.system["details"];

        this.canRoll = this.difficulty > -1 ? true : false;
        this.close = false;
        this.sheettype = "hunterDialog";
    }
}

export class DialogPower extends FormApplication {
    constructor(actor, power) {
        super(power, {submitOnChange: true, closeOnSubmit: false});
        this.actor = actor;
        this.isDialog = true;

        if (this.actor.system.settings.powers.hasarts) {
            // if ((this.actor.system.listdata != undefined) && (this.actor.system.listdata.powers.arts.realms != undefined)) {
            this.object.selectedRealms = this.actor.system.listdata.powers.arts.realms;

            for (const realm of this.object.selectedRealms) {
                realm.isselected = false;
            }
            // }
        }
        
        this.options.title = `${this.actor.name}`;
    }


    /**
        * Extend and override the default options used by the 5e Actor Sheet
        * @returns {Object}
    */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["power-dialog"],
            template: "systems/worldofdarkness/templates/dialogs/dialog-power.html",
            closeOnSubmit: false,
            submitOnChange: true,
            resizable: true
        });
    }

    getData() {
        const data = super.getData();

        let attributeSpeciality = "";
        let abilitySpeciality = "";
        let specialityText = "";

        data.actorData = this.actor.system;
        data.config = CONFIG.wod;

        // is dice1 an Attributes
        if ((this.actor.system?.attributes != undefined) && (this.actor.system.attributes[data.object.dice1]?.value != undefined)) {
            data.object.attributeValue = parseInt(this.actor.system.attributes[data.object.dice1].total);
            data.object.attributeName = game.i18n.localize(this.actor.system.attributes[data.object.dice1].label);

            if (parseInt(this.actor.system.attributes[data.object.dice1].value) >= 4) {
                data.object.hasSpeciality = true;
                attributeSpeciality = this.actor.system.attributes[data.object.dice1].speciality;
            }
        }
        // is dice1 an Advantage
        else if (this.actor.system.advantages[data.object.dice1]?.roll != undefined) { 
            data.object.attributeValue = parseInt(this.actor.system.advantages[data.object.dice1].roll);
            data.object.attributeName = game.i18n.localize(this.actor.system.advantages[data.object.dice1].label);

            // om willpower
            if ((this.actor.system.advantages[data.object.dice1].label == "wod.advantages.willpower") && (CONFIG.wod.attributeSettings == "5th")) {
                if (parseInt(this.actor.system.attributes?.composure.value) >= 4) {
                    data.object.hasSpeciality = true;

                    if (attributeSpeciality != "") {
                        attributeSpeciality += ", ";
                    }
                    attributeSpeciality += this.actor.system.attributes.composure.speciality;
                }
                if (parseInt(this.actor.system.attributes?.resolve.value) >= 4) {
                    data.object.hasSpeciality = true;

                    if (attributeSpeciality != "") {
                        attributeSpeciality += ", ";
                    }
                    attributeSpeciality += this.actor.system.attributes.resolve.speciality;
                }
            }
        }        
        // virtues
        else if ((this.actor.system.advantages.virtues != undefined) && (this.actor.system.advantages.virtues[data.object.dice1]?.roll != undefined)) {
            data.object.attributeValue = parseInt(this.actor.system.advantages.virtues[data.object.dice1].roll);
            data.object.attributeName = game.i18n.localize(this.actor.system.advantages.virtues[data.object.dice1].label);
        }
        else if (data.object.dice1 == "path") {
            data.object.attributeValue = parseInt(this.actor.system.advantages.path?.roll);
            data.object.attributeName = game.i18n.localize(this.actor.system.advantages.path?.label);
        }
        else if ((data.object.dice1 == "art") && (data.object.type == "wod.types.artpower")) {
            if (!this.object.isUnleashing) {
                const art = this.actor.getEmbeddedDocument("Item", data.object.parentid);
                data.object.attributeValue = art.system.value;
                data.object.attributeName = art.name;
            }
            else {
                data.object.attributeValue = parseInt(this.actor.system.advantages.glamour.roll);
                data.object.attributeName = game.i18n.localize(this.actor.system.advantages.glamour.label);
                data.object.difficulty = 7;                
            }
        }

        if (data.object.dice2 != "") {
            // is dice2 a Talent
            if ((this.actor.system?.abilities != undefined) && (this.actor.system.abilities.talent[data.object.dice2]?.value != undefined)) {
                data.object.abilityValue = parseInt(this.actor.system.abilities.talent[data.object.dice2].value);
                data.object.abilityName = game.i18n.localize(this.actor.system.abilities.talent[data.object.dice2].label);

                if (parseInt(this.actor.system.abilities.talent[data.object.dice2].value) >= 4) {
                    data.object.hasSpeciality = true;
                    abilitySpeciality = this.actor.system.abilities.talent[data.object.dice2].speciality;
                }
            }
            // is dice2 a Skill
            else if ((this.actor.system?.abilities != undefined) && (this.actor.system.abilities.skill[data.object.dice2]?.value != undefined)) {
                data.object.abilityValue = parseInt(this.actor.system.abilities.skill[data.object.dice2].value);
                data.object.abilityName = game.i18n.localize(this.actor.system.abilities.skill[data.object.dice2].label);

                if (parseInt(this.actor.system.abilities.skill[data.object.dice2].value) >= 4) {
                    data.object.hasSpeciality = true;
                    abilitySpeciality = this.actor.system.abilities.skill[data.object.dice2].speciality;
                }
            }
            // is dice2 a Knowledge
            else if ((this.actor.system?.abilities != undefined) && (this.actor.system.abilities.knowledge[data.object.dice2]?.value != undefined)) {
                data.object.abilityValue = parseInt(this.actor.system.abilities.knowledge[data.object.dice2].value);
                data.object.abilityName = game.i18n.localize(this.actor.system.abilities.knowledge[data.object.dice2].label);

                if (parseInt(this.actor.system.abilities.knowledge[data.object.dice2].value) >= 4) {
                    data.object.hasSpeciality = true;
                    abilitySpeciality = this.actor.system.abilities.knowledge[data.object.dice2].speciality;
                }
            }                
            // virtues
            else if ((this.actor.system.advantages.virtues != undefined) && (this.actor.system.advantages.virtues[data.object.dice2]?.roll != undefined)) {
                data.object.abilityValue = parseInt(this.actor.system.advantages.virtues[data.object.dice2].roll);
                data.object.abilityName = game.i18n.localize(this.actor.system.advantages.virtues[data.object.dice2].label);
            }    
            else if (data.object.dice2 == "path") {
                data.object.abilityValue = parseInt(this.actor.system.advantages.path?.roll);
                data.object.abilityName = game.i18n.localize(this.actor.system.advantages.path?.label);
            } 
            else if ((data.object.dice2 == "realm") && (data.object.type == "wod.types.artpower")) {
                if (!this.object.isUnleashing) {
                    const realm = data.object._lowestRank();
                    data.object.bonus = parseInt(realm);
                }
                else {
                    data.object.abilityValue = parseInt(this.actor.system.advantages.nightmare.roll);
                    data.object.abilityName = game.i18n.localize(this.actor.system.advantages.nightmare.label);
                    data.object.bonus = 0;

                    for (const realm of data.object.selectedRealms) {
                        realm.isselected = false;
                    }
                }
            }
        }

        if (data.object.hasSpeciality) {
            if ((attributeSpeciality != "") && (abilitySpeciality != "")) {
                specialityText = attributeSpeciality + ", " + abilitySpeciality;
            }
            else if (attributeSpeciality != "") {
                specialityText = attributeSpeciality;
            }
            else if (abilitySpeciality != "") {
                specialityText = abilitySpeciality;
            }
        }

        data.object.specialityText = specialityText;

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html
            .find('.dialog-difficulty-button')
            .click(this._setDifficulty.bind(this));        

        html
            .find('.actionbutton')
            .click(this._rollPower.bind(this));

        html
            .find('.dialog-realm-button')
            .click(this._selectRealm.bind(this));            

        html
            .find('.closebutton')
            .click(this._closeForm.bind(this));
    }

    async _updateObject(event, formData){
        if (this.object.close) {
            this.close();
            return;
        }

        event.preventDefault();      
        
        // add the lowest number of dices from selected Realms
        if (this.object.type == "wod.types.artpower") {
            this.object.isUnleashing = formData["isUnleashing"];
        }
        
        this.object.useSpeciality = formData["specialty"];
        this.object.canRoll = this.object.difficulty > -1 ? true : false;

        this.render(false);
    }

    _setDifficulty(event) {
        event.preventDefault();

        const element = event.currentTarget;
        const parent = $(element.parentNode);
        const steps = parent.find(".dialog-difficulty-button");
        const index = parseInt(element.value);   

        this.object.difficulty = index;   
        this.object.canRoll = this.object.difficulty > -1 ? true : false;     

        if (index < 0) {
            return;
        }

        steps.removeClass("active");

        steps.each(function (i) {
            if (this.value == index) {
                $(this).addClass("active");
            }
        });
    }

    _selectRealm(event) {
        const element = event.currentTarget;
        const parent = $(element.parentNode);
        const steps = parent.find(".dialog-realm-button");
        const key = element.value;

        if (key == "") {
            steps.removeClass("active");            
            return;
        }

        event.preventDefault();

        const isactive = element.classList.contains("active");
        this.object.selectedRealms = this._changedSelectedRealm(this.object.selectedRealms, key);

        this.render();
    }

    _changedSelectedRealm(selected, realmid) {
        for (const i of selected) {
            if (i._id == realmid) {
                i.isselected = !i.isselected;
            }
        }

        return selected;
    }

    // if rolling art/glamour then replace Nightmare number of dices to Nightmare dice (black dices) (p275)

    //     Players can reduce the difficulty of a cantrip roll by 1 by
    // replacing another three dice in the pool with Nightmare dice.
    // The character must have three non-Nightmare dice in the pool
    // to gain this benefit. Doing so does not increase the character’s
    // Nightmare pool past that one roll (unless the player rolls some
    // 10s, of course).

    //      Nightmare dice function like normal dice for the roll,
    // except that when the player rolls a 10 on a Nightmare die, she
    // immediately adds another point to the character’s Nightmare
    // pool. The character can accumulate multiple Nightmare points
    // during a single roll, but the Nightmare rating never exceeds 10.
    
    _rollPower(event) {
        if (this.object.close) {
            this.close();
            return;
        }

        this.object.canRoll = this.object.difficulty > -1 ? true : false;
        let woundPenaltyVal = 0;
        let numSpecialDices = 0;
        let specialDiceText = "";

        if (!this.object.canRoll) {
            ui.notifications.warn(game.i18n.localize("wod.dialog.missingdifficulty"));
            return;
        }

        let templateHTML = `<h2>${this.object.name}</h2>`;
        templateHTML += `<strong>${this.object.attributeName} (${this.object.attributeValue})`;

        if (this.object.abilityName != "") {
            templateHTML += ` + ${this.object.abilityName} (${this.object.abilityValue})`;
        }

        if (this.object.bonus > 0) {
            templateHTML += ` + ${this.object.bonus}`;
        }

        // add selected Realms
        if (this.object.type == "wod.types.artpower") {
            if (!this.object.isUnleashing) {
                this.object.canRoll = false;

                for (const realm of this.object.selectedRealms) {
                    if (realm.isselected) {
                        templateHTML += `<br />${game.i18n.localize(realm.label)} (${realm.value})`;
                        this.object.canRoll = true;
                    }
                }

                if (!this.object.canRoll) {
                    ui.notifications.warn(game.i18n.localize("wod.dialog.power.missingrealm"));
                    return;
                }

                numSpecialDices = parseInt(this.actor.system.advantages.nightmare.temporary);
                specialDiceText = game.i18n.localize('wod.dialog.power.nightmaredice');
            }
            else {
                templateHTML += `<br />${game.i18n.localize('wod.dialog.power.unleashing')}`;
            }
        }

        templateHTML += `</strong>`;

        const numDices = parseInt(this.object.attributeValue) + parseInt(this.object.abilityValue) + parseInt(this.object.bonus);
        let specialityText = "";
        this.object.close = true;

        if (this.object.useSpeciality) {
            specialityText = this.object.specialityText;
        }

        if (CombatHelper.ignoresPain(this.actor)) {
            woundPenaltyVal = 0;
        }				
        else {
            woundPenaltyVal = parseInt(this.actor.system.health.damage.woundpenalty);
        }
        
        const powerRoll = new DiceRoll(this.actor);
        powerRoll.handlingOnes = CONFIG.wod.handleOnes;    
        powerRoll.origin = "power";
        powerRoll.numDices = numDices;
        powerRoll.numSpecialDices = numSpecialDices;
        powerRoll.specialDiceText = specialDiceText;
        powerRoll.woundpenalty = parseInt(woundPenaltyVal);
        powerRoll.difficulty = parseInt(this.object.difficulty);          
        powerRoll.templateHTML = templateHTML;        
        powerRoll.systemText = this.object.system;
        powerRoll.speciality = this.object.useSpeciality;
        powerRoll.specialityText = specialityText;

        rollDice(powerRoll);
    }

    /* clicked to close form */
    _closeForm(event) {
        this.object.close = true;
    }    

}
