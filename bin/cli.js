#!/usr/bin/env node

import minimist form 'minimist';

import roll from "../lib/roll.js";

const args = minimist(process.argv.slice(2));

const sides = args.sides || 6;
const dice = args.dice || 2;
const rolls = args.rolls || 1;
const results = {sides: sides, dice: dice, rolls: roll(sides, dice, rolls)};


console.log(JSON.stringify(results));
