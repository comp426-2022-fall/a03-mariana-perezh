#!/usr/bin/env node

import minimist form 'minimist';

import {roll} from "/lib/roll.js";

const args = minimist(process.argv.slice(2));

const sides = args.sides || 6;
const dice = args.dice || 2;
const rolls = args.rolls || 1;
const results = roll(sides, dice, rolls);


JSON.stringify(sides, dice, rolls, results);
