const now = require('performance-now');

const data =`0	5	10	0	11	14	13	4	11	8	8	7	1	4	12	11`;
const data2= `4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`;

const data1 = `0	2	7	0`;

class Day6 {

    /**
     *
     * @param data
     * @returns {Array|*}
     */
    createArrayFromString (data) {
        let resultingArray = data.split(/\t/g).map(item => parseInt(item));
        return resultingArray;
    }

    doIterations (data) {
        let cont = true;
        let count = 0;
        while(cont) {
            //console.log(`${data}`, Math.max(...data))

            let maxIndex = data.indexOf(Math.max(...data));
            let currentIterationValues = [];

            let temp = data[maxIndex];

            let index = maxIndex + 1;
            // TODO: logic
            // let redistrValue = Math.ceil(temp /data.length);
            data[maxIndex] = 0;
            while(temp > 0) {
                index === data.length ? index = 0 : '';
                //currentIterationValues.push(maxIndex === key ? data[key] = redistrValue : data[key] = parseInt(data[key]) + redistrValue);
                data[index] = data[index] + 1;
                index++;
                temp--;
            }


            count++;
            if(!this.checkIfiterationExists(data.join(''))) {
                this.collectionOfIterationableData.push(data.join(''));
            } else {
                console.log('done', count);
                cont = false;
            }

        }
    }

    checkIfiterationExists (data) {
        return !!this.collectionOfIterationableData.find((stored, index) => {
            if (data === stored) {
                console.log(index)
                return true
            }
            return false;
        });
    }

    getResult (data) {
        this.collectionOfIterationableData = ['123', '12232'];
        this.doIterations(this.createArrayFromString(data));
        // console.log(this.checkIfiterationExists('1223'));
        // console.log(this.createArrayFromString(data));
        return data;
    }
}

new Day6().getResult(data2);