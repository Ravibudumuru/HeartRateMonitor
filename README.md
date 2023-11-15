Project Details

    Heart Rate Monitor Project

Background

    For a clinical trial, it is required to calculate statistics for patients' heart rate data. The input data is stored in the "heartrate.json" file, containing heart rate measurements collected by a patient over several days. Each measurement consists of beats per minute and timestamps indicating when the measurement was taken (start and end timestamps).

Problem Statement

    The task is to calculate the minimum, maximum, and median beats per minute, along with the latest data timestamp (timestamp of the last measurement in the day) for each day. The output should be formatted as an array of objects, where each object represents a day and includes the date, minimum, maximum, median beats per minute, and the latest data timestamp.

Example output: 

    [
    {
        "date": "2023-04-28",
        "min": 60,
        "max": 119,
        "median": 81,
        "latestDataTimestamp": "2023-04-28T21:54:00"
    },
    // ... more entries
    ]

    The calculated statistics should be written to an "TestResults/output.json" file.

Author Details

    Name: Ravi Budumuru
    Mobile: +91-9063732645
    Email: ravidotmail@gmail.com

Language Used

    The project is implemented using TypeScript.

Instructions for Build and Run

    Clone the Repository:
    git clone <repository-url>
    cd project-root

Install Dependencies:

    npm install

Add Input Data:
    Place your heart rate input data in the TestData folder. Ensure the file is named heartrate.json.

Run the Script:
   
    node src/calculateStats.js

Check Output:
    The calculated statistics will be written to TestResults/output.json.

Notes

    Make sure Node.js and npm are installed on your machine.
    Adjust the input file path in the script if needed.
    Review the output in the specified output file.

Contact

    For any issues or inquiries, please contact the author:

    Name: Ravi Budumuru
    Mobile: +91-9063732645
    Email: ravidotmail@gmail.com

GitHub Repository

The code for this project is available on GitHub at <repository-url>. Please ensure open access for reviewers to access the code.