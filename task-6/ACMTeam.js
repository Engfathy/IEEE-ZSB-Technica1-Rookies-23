'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */
//-------------------------------------------------------------------------------------
function findKnownTopics(x, y) {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x.charAt(i) == '1' || y.charAt(i) == '1') {
            count++;
        }
    }
    return count;
}
function acmTeam(topic) {
    let count = {}, temp;
    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            temp = count[findKnownTopics(topic[i], topic[j])]
            if (!temp) {
                count[findKnownTopics(topic[i], topic[j])] = 0;
            }
            count[findKnownTopics(topic[i], topic[j])]++;
        }
    }

    let maxIndex = Math.max.apply(null, Object.keys(count));
    return [maxIndex, count[maxIndex]];

}
//-------------------------------------------------------------------------------------------

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    const result = acmTeam(topic);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
