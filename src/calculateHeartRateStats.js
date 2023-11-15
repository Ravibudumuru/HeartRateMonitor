const fs = require('fs');
const path = require('path');

// Build the full path to input.json in the TestData folder
const inputFilePath = path.join(__dirname, 'TestData', 'heartrate.json');

// Read heartrate.json file
const inputJson = fs.readFileSync(inputFilePath, 'utf-8');
const inputData = JSON.parse(inputJson);

// Process data and calculate statistics
const processedData = inputData.reduce((acc, entry) => {
    const date = entry.timestamps.startTime.split('T')[0];

    if (!acc[date]) {
        acc[date] = {
            min: entry.beatsPerMinute,
            max: entry.beatsPerMinute,
            sum: entry.beatsPerMinute,
            count: 1,
            timestamps: [entry.timestamps.endTime],
        };
    } else {
        acc[date].min = Math.min(acc[date].min, entry.beatsPerMinute);
        acc[date].max = Math.max(acc[date].max, entry.beatsPerMinute);
        acc[date].sum += entry.beatsPerMinute;
        acc[date].count += 1;
        acc[date].timestamps.push(entry.timestamps.endTime);
    }

    return acc;
}, {});

// Calculate median and latest data timestamp
const result = Object.keys(processedData).map((date) => {
    const stats = processedData[date];
    const median = stats.sum / stats.count;

    const sortedTimestamps = stats.timestamps.sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
    });

    return {
        date,
        min: stats.min,
        max: stats.max,
        median,
        latestDataTimestamp: sortedTimestamps[0],
    };
});

// Build the full path to output.json in the TestResults folder
const outputFilePath = path.join(__dirname, 'TestResults', 'output.json');

// Write the result to output.json file in the TestResults folder
const outputJson = JSON.stringify(result, null, 2);
fs.writeFileSync(outputFilePath, outputJson);

console.log('Output has been written to TestResults/output.json');