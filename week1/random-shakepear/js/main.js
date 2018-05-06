const insultGenerator = {
  firstAdjectives: [
    'artless',
    'bawdy',
    'beslubbering'
    // 'bootless',
    // 'churlish',
    // 'cockered',
    // 'clouted',
    // 'craven',
    // 'currish',
    // 'dankish',
    // 'dissembling',
    // 'droning',
    // 'errant',
    // 'fawning',
    // 'fobbing',
    // 'froward',
    // 'frothy',
    // 'gleeking',
    // 'goatish',
    // 'gorbellied',
    // 'impertinent',
    // 'infectious',
    // 'jarring',
    // 'loggerheaded',
    // 'lumpish',
    // 'mammering',
    // 'mangled',
    // 'mewling',
    // 'paunchy',
    // 'pribbling',
    // 'puking',
    // 'puny',
    // 'qualling',
    // 'rank',
    // 'reeky',
    // 'roguish',
    // 'ruttish',
    // 'saucy',
    // 'spleeny',
    // 'spongy',
    // 'surly',
    // 'tottering',
    // 'unmuzzled',
    // 'vain',
    // 'venomed',
    // 'villainous',
    // 'warped',
    // 'wayward',
    // 'weedy',
    // 'yeasty'
  ],
  secondAdjectives: [
    'base-court',
    'bat-fowling',
    'beef-witted',
    'beetle-headed',
    'boil-brained',
    'clapper-clawed',
    'clay-brained',
    'common-kissing',
    'crook-pated',
    'dismal-dreaming',
    'dizzy-eyed',
    'doghearted',
    'dread-bolted',
    'earth-vexing',
    'elf-skinned',
    'fat-kidneyed',
    'fen-sucked',
    'flap-mouthed',
    'fly-bitten',
    'folly-fallen',
    'fool-born',
    'full-gorged',
    'guts-griping',
    'half-faced',
    'hasty-witted',
    'hedge-born',
    'hell-hated',
    'idle-headed',
    'ill-breeding',
    'ill-nurtured',
    'knotty-pated',
    'milk-livered',
    'motley-minded',
    'onion-eyed',
    'plume-plucked',
    'pottle-deep',
    'pox-marked',
    'reeling-ripe',
    'rough-hewn',
    'rude-growing',
    'rump-fed',
    'shard-borne',
    'sheep-biting',
    'spur-galled',
    'swag-bellied',
    'tardy-gaited',
    'tickle-brained',
    'toad-spotted',
    'unchin-snouted',
    'weather-bitten'
  ],
  nouns: [
    'apple-john',
    'baggage',
    'barnacle',
    'bladder',
    'boar-pig',
    'bugbear',
    'bum-bailey',
    'canker-blossom',
    'clack-dish',
    'clotpole',
    'coxcomb',
    'codpiece',
    'death-token',
    'dewberry',
    'flap-dragon',
    'flax-wench',
    'flirt-gill',
    'foot-licker',
    'fustilarian',
    'giglet',
    'gudgeon',
    'haggard',
    'harpy',
    'hedge-pig',
    'horn-beast',
    'hugger-mugger',
    'joithead',
    'lewdster',
    'lout',
    'maggot-pie',
    'malt-worm',
    'mammet',
    'measle',
    'minnow',
    'miscreant',
    'moldwarp',
    'mumble-news',
    'nut-hook',
    'pigeon-egg',
    'pignut',
    'puttock',
    'pumpion',
    'ratsbane',
    'scut',
    'skainsmate',
    'strumpet',
    'varlot',
    'vassal',
    'whey-face',
    'wagtail'
  ],

 alreadyUsed: {},


//function pick a random element from an array
 generateRandomIt : function (max) {
  const random = Math.random() * max //Math.random() always between 0 - 1 (multiply to get 100) want whole number, used math.ceil to round up, used math.floor to round down, math.round will round it.
  return Math.floor(random); //remove decimal point
},

//test as you go

 getRandomElement : function (array) { //arguement is array to test for all arrays
  const randomIndex = this.generateRandomIt(array.length);
  return array[randomIndex];
},

 generateInsult : function (numberOfInsults=1) { //set default to 1
  // if (typeof numberOfInsults === "underfined") {
  //   numberOfInsults = 1;
   // default value in case user forgets to put a number
  for (let i = 0; i < numberOfInsults; i++) {

    let firstAdjective = this.getRandomElement(this.firstAdjectives);

    let retries = 0;
    while (firstAdjective in this.alreadyUsed) {
      console.log(`Found already used in phrased: ${firstAdjective}`);
      firstAdjective = this.getRandomElement(this.firstAdjectives);
      //create infinite loop easily
      retries++;
      if (retries > this.firstAdjectives.length) {
        console.log('Too many retries');
        break;
      }
    }
    //check if this phrase has already been used
    // if (firstAdjective in this.alreadyUsed) {
    //   //we found the string as a key of the object, meaing it has already been used
    //   //so pick a new one
    //   console.log(`Found already used in phrased: ${firstAdjective}`);
    //   firstAdjective = this.getRandomElement(this.firstAdjectives);
    // }

    this.alreadyUsed[firstAdjective] = true;


    const secondAdjective = this.getRandomElement(this.secondAdjectives);
    this.alreadyUsed[secondAdjective] = true;

    const noun = this.getRandomElement(this.nouns);
    this.alreadyUsed[noun] = true;

    console.log(`Tho ${firstAdjective} ${secondAdjective} ${noun}!`);
 } // end of loop
}
};


// generateInsult(0);

//generate insult 10 times
// for (var i = 0; i < 10; i++) {
//   generateInsult();
// }


// const generateEveryPossibleInsult = function () {
//   for (let i = 0; i < firstAdjectives.length; i++) {
//     for (let j = 0; j < secondAdjectives.length; j++) {
//       for (let k = 0; k < nouns.length; k++) {
//     console.log(`Tho ${firstAdjectives[i]} ${secondAdjectives[j]} ${nouns[k]}!`);
//       }
//     }
//   }
// };
//generateEveryPossibleInsult();
