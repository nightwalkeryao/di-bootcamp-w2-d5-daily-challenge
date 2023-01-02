"use strict"

/**
 * @author Yao Kan KOUASSI
 * @date Jan 2, 2023
 * @abstract Daily challenge: 99 Bottles of Beer, print the lyrics of the infamous song "99 Bottles of Beer" according a number of bottles defined by the user
 * @var numberOfBottles number, user input number of bottles to start the song from
 * @var round number, number of times the song has been played
 * @var remainingBottles number, number of bottles to take down
 */

let numberOfBottles = Number(prompt("Enter a number to begin counting down bottles: ")),
    round = 0,
    remainingBottles = numberOfBottles

while (remainingBottles > 0) {
    round++
    // we can't take down more bottles than we have remaining
    // so let's force the remainingBottles to be zero at the end of the round 
    // by setting the round equal the remainingBottles
    if (round > remainingBottles) round = remainingBottles
    console.log(`${remainingBottles} bottle${remainingBottles > 1 ? 's' : ''} of beer on the wall`)
    console.log(`${remainingBottles} bottle${remainingBottles > 1 ? 's' : ''} of beer`)
    console.log(`Take ${round} down, pass ${(round > 1 ? 'them' : 'it')} around`)
    remainingBottles -= round // take down some bottles according to the round and remainingBottles
    console.log(`${(remainingBottles)} bottle${remainingBottles > 1 ? 's' : ''} of beer on the wall`)
    console.log("\n")
}