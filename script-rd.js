const quizData = [
    {
        id: "q1",
        isMultiple: false,
        question: "Cloud Kicks wants a report Co categorize accounts into small, medium, and large based on the dollar value found In the Contract Value field. What feature should an administrator use to meet this request?",
        options: [
            { letter: "A", text: "Group Rows" },
            { letter: "B", text: "Filter Logic" },
            { letter: "C", text: "Detail Column" },
            { letter: "D", text: "Bucket Column" }
        ],
        answer: "D"
    },
    {
        id: "q2",
        isMultiple: false,
        question: "The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner. What should a Platform Administrator add to the dashboard to fulfill the request?",
        options: [
            { letter: "A", text: "Dashboard Filter" },
            { letter: "B", text: "Dashboard Widget" },
            { letter: "C", text: "Combination Chart" },
            { letter: "D", text: "Bucket Column" }
        ],
        answer: "A"
    },
    {
        id: "q3",
        isMultiple: false,
        question: "A sales rep wants to be able to categorize multiple picklist values into a single value on a report. Which option should a Platform Administrator suggest to the sales rep to accomplish this?",
        options: [
            { letter: "A", text: "Bucket Column" },
            { letter: "B", text: "Unique Count" },
            { letter: "C", text: "Report Filter" },
            { letter: "D", text: "Chart" }
        ],
        answer: "A"
    },
    {
        id: "q4",
        isMultiple: false,
        question: "Ursa Major Solar needs its sales users to be able to do the following: • View their open Opportunities grouped by Stage • View their open Opportunities grouped by source report on a dashboard component. Which report format needs to be used to accomplish this goal?",
        options: [
            { letter: "A", text: "Tabular" },
            { letter: "B", text: "Summary" },
            { letter: "C", text: "Joined" },
            { letter: "D", text: "Matrix" }
        ],
        answer: "B"
    },
    {
        id: "q5",
        isMultiple: true,
        question: "Ursa Major wants to add charts to a Salesforce dashboard. What are three standard chart types that are available? Choose 3 answers",
        options: [
            { letter: "A", text: "Venn Diagram" },
            { letter: "B", text: "Bar charts" },
            { letter: "C", text: "Tables" },
            { letter: "D", text: "Heat maps" },
            { letter: "E", text: "Gauge charts" }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q6",
        isMultiple: true,
        question: "Ursa Major Solar uses data from the grand total of a custom report to create their dashboard. Which two components will populate the grand total properly? Choose 2 answers",
        options: [
            { letter: "A", text: "Chart" },
            { letter: "B", text: "Gauge" },
            { letter: "C", text: "Table" },
            { letter: "D", text: "Metric" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q7",
        isMultiple: false,
        question: "The VP of Sales at Cloud Kicks would like a graphic on the company performance dashboard to display the total current pipeline against the goal for the year. Which type of component should be used to display the requested information?",
        options: [
            { letter: "A", text: "Stacked Bar" },
            { letter: "B", text: "Table" },
            { letter: "C", text: "Metric" },
            { letter: "D", text: "Gauge" }
        ],
        answer: "A"
    },
    {
        id: "q8",
        isMultiple: false,
        question: "The VP of sales at DreamHouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key piece of data is the total of all sales for the year and the progress to the enterprise sales goal. What dashboard component will effectively show this number and the proximity to the total goal as a single value?",
        options: [
            { letter: "A", text: "Donut" },
            { letter: "B", text: "Stacked Bar" },
            { letter: "C", text: "Gauge" },
            { letter: "D", text: "Table" }
        ],
        answer: "C"
    },
];