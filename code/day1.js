const now = require('performance-now');

/**
 * The night before Christmas, one of Santa's Elves calls you in a panic. "The
 * printer's broken! We can't print the Naughty or Nice List!" By the time you make it to sub-basement 17, there are
 * only a few minutes until midnight. "We have a big problem," she says; "there must be almost fifty bugs in this
 * system, but nothing else can print The List. Stand in this square, quick! There's no time to explain; if you can
 * convince them to pay you in stars, you'll be able to--" She pulls a lever and the world goes blurry.
 *
 * When your eyes can focus again, everything seems a lot more pixelated than before. She must have sent you inside
 * the computer! You check the system clock: 25 milliseconds until midnight. With that much time, you should be able
 * to collect all fifty stars by December 25th.
 *
 * Collect stars by solving puzzles. Two puzzles will be made available on each day millisecond in the advent calendar;
 * the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
 *
 * You're standing in a room with "digitization quarantine" written in LEDs along one wall. The only door is locked,
 * but it includes a small interface. "Restricted Area - Strictly No Digitized Users Allowed."
 *
 * It goes on to explain that you may only leave by solving a captcha to prove you're not a human. Apparently, you only
 * get one millisecond to solve the captcha: too fast for a normal human, but it feels like hours to you.
 *
 * The captcha requires you to review a sequence of digits (your puzzle input) and find the sum of all digits that
 * match the next digit in the list. The list is circular, so the digit after the last digit is the first digit in
 * the list.
 *
 * 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
 * 1111 produces 4 because each digit (all 1) matches the next.
 * 1234 produces 0 because no digit matches the next.
 * 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
 */

const input = `6592822488931338589815525425236818285229555616392928433262436847386544514648645288129834834862363847542262953164877694234514375164927616649264122487182321437459646851966649732474925353281699895326824852555747127547527163197544539468632369858413232684269835288817735678173986264554586412678364433327621627496939956645283712453265255261565511586373551439198276373843771249563722914847255524452675842558622845416218195374459386785618255129831539984559644185369543662821311686162137672168266152494656448824719791398797359326412235723234585539515385352426579831251943911197862994974133738196775618715739412713224837531544346114877971977411275354168752719858889347588136787894798476123335894514342411742111135337286449968879251481449757294167363867119927811513529711239534914119292833111624483472466781475951494348516125474142532923858941279569675445694654355314925386833175795464912974865287564866767924677333599828829875283753669783176288899797691713766199641716546284841387455733132519649365113182432238477673375234793394595435816924453585513973119548841577126141962776649294322189695375451743747581241922657947182232454611837512564776273929815169367899818698892234618847815155578736875295629917247977658723868641411493551796998791839776335793682643551875947346347344695869874564432566956882395424267187552799458352121248147371938943799995158617871393289534789214852747976587432857675156884837634687257363975437535621197887877326295229195663235129213398178282549432599455965759999159247295857366485345759516622427833518837458236123723353817444545271644684925297477149298484753858863551357266259935298184325926848958828192317538375317946457985874965434486829387647425222952585293626473351211161684297351932771462665621764392833122236577353669215833721772482863775629244619639234636853267934895783891823877845198326665728659328729472456175285229681244974389248235457688922179237895954959228638193933854787917647154837695422429184757725387589969781672596568421191236374563718951738499591454571728641951699981615249635314789251239677393251756396`;

const inputs = ['1122', '1111', '1234', '91212129', input];

class DayOneSolver {

    /**
     * Setting up all the initial data
     */
    constructor() {}

    /**
     *  Solution for Step1
     * @param input
     * @returns {Array} number that have a pair
     */
    getSumOfPairs (input) {
        console.log(`Input ${input}`);
        const numbers = input.split('');
        console.log(`Input ${input}`);
        let pairs = [];
        let t0 = now();
        console.log(`Finding All the pairs`);
        for(let i = 0; i < numbers.length; i++) {
            // End of numbers
            if (i === numbers.length-1) {
                if(numbers[i] === numbers[0]) {
                    pairs.push(parseInt(numbers[i]));
                }
            } else {
                if (numbers[i] === numbers[i+1]) {
                    pairs.push(parseInt(numbers[i]));
                }
            }
        }

        let t1 = now();
        console.log(`Finding All the pairs ended, took ${ (t1 - t0).toFixed(3) }`);

        return pairs;
    }

    /**
     *  Solution for Step1
     * @param input
     * @returns {Array} number that have a pair
     */
    getSumOfPairsStep2 (input) {
        console.log(`Input ${input}`);
        const numbers = input.split('');
        console.log(`Input ${input}`);
        let pairs = [];
        let t0 = now();
        console.log(`Finding All the pairs`);
        for(let i = 0; i < numbers.length; i++) {
            // End of numbers
            if (i === numbers.length-1) {
                if(numbers[i] === numbers[(numbers.length/2)] ) {
                    pairs.push(parseInt(numbers[i] * 2));
                }
            } else {
                if (numbers[i] === numbers[i + (numbers.length/2)]) {
                    pairs.push(parseInt(numbers[i] * 2));
                }
            }
        }

        let t1 = now();
        console.log(`Finding All the pairs ended, took ${ (t1 - t0).toFixed(3) }`);

        return pairs;
    }

    /**
     *
     * @param a
     * @param b
     * @returns {Number} sum
     */
    sum (a, b) {
        return a + b;
    }

    /**
     *
     * @param numbers
     * @returns {*|Any}
     */
    sumArray (numbers) {
        console.log(`Summing Array`);
        return numbers.reduce(this.sum, 0);
    }

    /**
     *
     * @param input
     * @returns {*|Any}
     */
    getResult (input) {
        return this.sumArray(this.getSumOfPairs(input));
    }

    /**
     *
     * @param input
     * @returns {*|Any}
     */
    getResultStep2 (input) {
        return this.sumArray(this.getSumOfPairsStep2(input));
    }
}

console.log(new DayOneSolver().getResultStep2(input));