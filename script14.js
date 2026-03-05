const quizData = [
    {
        id: "q391",
        isMultiple: false,
        question: "A Platform Administrator created a new prompt template and is testing it. Every time the administrator tests the template, it gives a different response. Why is the prompt template giving different responses each time it's run?",
        options: [
            { letter: "A", text: "Prompt Builder caches the large language model's response, so the prompt is only sent once for every template the administrator creates." },
            { letter: "B", text: "Every time the administrator runs a prompt template in Prompt Builder, it creates a unique call to the large language model." },
            { letter: "C", text: "The prompt is only sent to the large language model after the administrator deploys the template to a live agent, not when the prompt is run in the builder." },
            { letter: "D", text: "Prompt Builder runs a simulated call to the large language model to save on costs, so the prompt is never sent to the actual model." }
        ],
        answer: "B"
    },
    {
        id: "q392",
        isMultiple: false,
        question: "The sales and service teams at Cloud Kicks would like to have more visibility into their pipeline and stay on top of every case. A Platform Administrator needs to quickly create dashboards for each of the teams but does not know where to start. What should the administrator do?",
        options: [
            { letter: "A", text: "Use the Salesforce Labs Field Service Dashboards for service teams from AppExchange." },
            { letter: "B", text: "Enable Einstein Analytics and build custom dashboards using advanced analytics tools." },
            { letter: "C", text: "Use the Salesforce Labs CRM Dashboards for sales teams from AppExchange." },
            { letter: "D", text: "Manually create dashboards without using any prebuilt templates or packages." }
        ],
        answer: "C"
    },
    {
        id: "q393",
        isMultiple: false,
        question: "A Platform Administrator deactivates an agent to add a new topic and action. What happens to any ongoing user conversations with the agent?",
        options: [
            { letter: "A", text: "The agent will pause the conversation and resume once reactivated." },
            { letter: "B", text: "The agent will continue conversations using the deactivated agent until reactivated." },
            { letter: "C", text: "The agent window automatically closes to prevent new messages." },
            { letter: "D", text: "The agent will send a system error message as a response to any new messages." }
        ],
        answer: "B"
    },
    {
        id: "q394",
        isMultiple: false,
        question: "Management at Universal Containers would like to share dashboard components with their team in Chatter but currently does not have access to this capability. How should a Platform Administrator make this functionality available to management?",
        options: [
            { letter: "A", text: "Enable reporting snapshots." },
            { letter: "B", text: "Select Download Chart on the component." },
            { letter: "C", text: "Set View Dashboard As to the dashboard viewer." },
            { letter: "D", text: "Enable dashboard feed tracking." }
        ],
        answer: "D"
    },
    {
        id: "q395",
        isMultiple: true,
        question: "Which two data loss considerations should a Platform Administrator keep in mind when changing a custom field type from Text to Picklist?",
        options: [
            { letter: "A", text: "Auto updates will be made to Visualforce references to prevent data loss." },
            { letter: "B", text: "Any list view based on the custom field is deleted." },
            { letter: "C", text: "There will be no data loss with use of a global value set." },
            { letter: "D", text: "Assignment and escalation rules may be affected." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q396",
        isMultiple: false,
        question: "A sales rep typically has several open opportunities for each of their accounts. Which tool should a Platform Administrator suggest to the sales rep to obtain the total number of accounts associated with open opportunities in a report?",
        options: [
            { letter: "A", text: "Bucket Column" },
            { letter: "B", text: "Report Filter" },
            { letter: "C", text: "Unique Count" },
            { letter: "D", text: "Group Rows" }
        ],
        answer: "C"
    },
    {
        id: "q397",
        isMultiple: false,
        question: "A Platform Administrator at Cloud Kicks is trying to set up a new user but receives an error about a duplicate username when trying to save the user record. What is causing this error to happen?",
        options: [
            { letter: "A", text: "The username was not configured in the format of an email address." },
            { letter: "B", text: "The email address and username must be unique across all Salesforce orgs." },
            { letter: "C", text: "The username must be unique across all Salesforce orgs." },
            { letter: "D", text: "The username has a restricted domain name within it." }
        ],
        answer: "C"
    },
    {
        id: "q398",
        isMultiple: true,
        question: "A user at Northern Trail Outfitters is having trouble logging in to Salesforce. The user's login history shows that this person has attempted to log in multiple times and has been locked out of the organization. Which two steps should a Platform Administrator take to help the user log in to Salesforce?",
        options: [
            { letter: "A", text: "Log in as the user to unlock the user and reset the password." },
            { letter: "B", text: "Use the unlock button on the user's record detail page." },
            { letter: "C", text: "Reset password on the user's record detail page." },
            { letter: "D", text: "Reset the password policies to allow the user to login." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q399",
        isMultiple: false,
        question: "A Platform Administrator needs to create a new prompt template to automatically summarize customer cases for a sales team. The administrator wants to dynamically populate the response with data from the case record. What should the administrator use to display real Salesforce data in an agent response from a prompt template?",
        options: [
            { letter: "A", text: "Flow" },
            { letter: "B", text: "Picklists" },
            { letter: "C", text: "Agent Instructions" },
            { letter: "D", text: "Merge Fields" }
        ],
        answer: "D"
    },
    {
        id: "q400",
        isMultiple: false,
        question: "When Agentforce performs its grounding check, it examines source information, the topic instructions, and scope. Which additional information does the agent look for during its grounding check?",
        options: [
            { letter: "A", text: "Incompatible data types" },
            { letter: "B", text: "Prompt injection risks" },
            { letter: "C", text: "Encrypted fields" },
            { letter: "D", text: "The web for information verification" }
        ],
        answer: "B"
    },
    {
        id: "q401",
        isMultiple: false,
        question: "Which feature gives a sales team the ability to prioritize deals with recent updates in the List view and Kanban view?",
        options: [
            { letter: "A", text: "Big Deal Alerts" },
            { letter: "B", text: "Report Filters" },
            { letter: "C", text: "Deal Change Highlights" },
            { letter: "D", text: "Opportunity Path" }
        ],
        answer: "C"
    },
    {
        id: "q402",
        isMultiple: false,
        question: "An agent is being developed with several actions that all retrieve information from different databases. A Platform Administrator has named the actions as follows: GetCustomerInfo, GetOrderDetails, GetShippingStatus. Which best practice should the administrator follow to improve these names?",
        options: [
            { letter: "A", text: "Remove all verbs and use only nouns, such as CustomerInfo, OrderDetails, and ShippingStatus." },
            { letter: "B", text: "Add the word 'Salesforce' to the beginning of each action name to improve context for the large language model." },
            { letter: "C", text: "Use a consistent naming convention by starting each action with the verb 'Get'." },
            { letter: "D", text: "Use additional related verbs, such as Find, Retrieve, or Identify." }
        ],
        answer: "C"
    },
    {
        id: "q403",
        isMultiple: false,
        question: "Leadership at Cloud Kicks wants to go beyond knowing how long a case has been open for, to knowing how long a case has sat with different teams. Which tool gives a Platform Administrator the ability to track the time a case sits and provide relevant reporting?",
        options: [
            { letter: "A", text: "Escalation Rules with Business Hours" },
            { letter: "B", text: "Record-Triggered Flows with Business Hours" },
            { letter: "C", text: "Case Assignment Rules with Business Hours" },
            { letter: "D", text: "Milestones with Business Hours" }
        ],
        answer: "D"
    },
    {
        id: "q404",
        isMultiple: false,
        question: "Cloud Kicks has hired a new sales executive who wants to implement a document merge solution in Salesforce. How should a Platform Administrator implement this solution?",
        options: [
            { letter: "A", text: "Download the solution from AppExchange." },
            { letter: "B", text: "Install a package from the Partner Portal." },
            { letter: "C", text: "Create a managed package in AppExchange." },
            { letter: "D", text: "Configure the package from Salesforce Setup." }
        ],
        answer: "A"
    },
    {
        id: "q405",
        isMultiple: false,
        question: "What is an Agentforce use case in a sales organization?",
        options: [
            { letter: "A", text: "Generating cold calls" },
            { letter: "B", text: "Automating all marketing content" },
            { letter: "C", text: "Providing basic web bot chats" },
            { letter: "D", text: "Automating Lead Qualification" }
        ],
        answer: "D"
    },
    {
        id: "q406",
        isMultiple: false,
        question: "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generates leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year. Which AppExchange item should help a Platform Administrator meet the request?",
        options: [
            { letter: "A", text: "Bolt Solutions" },
            { letter: "B", text: "Lightning Community" },
            { letter: "C", text: "Lightning Data" },
            { letter: "D", text: "Flow Solutions" }
        ],
        answer: "D"
    },
    {
        id: "q407",
        isMultiple: false,
        question: "A user is unable to relate a task to the Course custom object. What should a Platform Administrator do to allow tasks to be related to the courses?",
        options: [
            { letter: "A", text: "Create a sharing rule for the Course object to grant the user Read/Write access." },
            { letter: "B", text: "Select Allow Activities on the Course object in Object Manager." },
            { letter: "C", text: "Add the Open Activities related list to the Course page layout." },
            { letter: "D", text: "Update the user's profile to grant them Edit access to the Task object." }
        ],
        answer: "B"
    },
    {
        id: "q408",
        isMultiple: true,
        question: "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. Managers and directors need to review this process. Which two tools should a Platform Administrator configure?",
        options: [
            { letter: "A", text: "Outbound Message" },
            { letter: "B", text: "Email Alert Action" },
            { letter: "C", text: "Quick Action" },
            { letter: "D", text: "Approval Process" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q409",
        isMultiple: false,
        question: "A sales manager at Cloud Kicks would like a dashboard to emphasize some important data and tell a more compelling data story to the sales reps. How should a Platform Administrator achieve this for the sales manager?",
        options: [
            { letter: "A", text: "Use a Text Widget." },
            { letter: "B", text: "Assign a new Task to each rep." },
            { letter: "C", text: "Use the Highlights Panel." },
            { letter: "D", text: "Send out a mass email." }
        ],
        answer: "A"
    },
    {
        id: "q410",
        isMultiple: false,
        question: "Which component of an approval process defines the chain of approval, determines which records can advance, and specifies where to assign approval requests?1717",
        options: [
            { letter: "A", text: "Process Definition Detail" },
            { letter: "B", text: "Approval Steps" },
            { letter: "C", text: "Entry Criteria" },
            { letter: "D", text: "Approval Actions" }
        ],
        answer: "B"
    },
    {
        id: "q411",
        isMultiple: true,
        question: "An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app. Which two types of pages should a Platform Administrator build and customize using the Lightning App Builder?",
        options: [
            { letter: "A", text: "App page" },
            { letter: "B", text: "User page" },
            { letter: "C", text: "Record page" },
            { letter: "D", text: "Dashboard page" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q412",
        isMultiple: false,
        question: "A Platform Administrator is building an agent to nurture leads. How does Agentforce SDR help?",
        options: [
            { letter: "A", text: "Generate a dynamic call script and talking points for the human sales reps to use." },
            { letter: "B", text: "Autonomously negotiate pricing with the lead and close the final deal." },
            { letter: "C", text: "Analyze the performance of human sales reps and provide coaching tips." },
            { letter: "D", text: "Answer the lead's questions with responses that are grounded in company data." }
        ],
        answer: "D"
    },
    {
        id: "q413",
        isMultiple: false,
        question: "Users have reported that the new Lightning account record page is loading very slowly. Which feature should a Platform Administrator use to determine the cause of the performance issues?2424",
        options: [
            { letter: "A", text: "Lightning Analytics" },
            { letter: "B", text: "Lightning Usage App" },
            { letter: "C", text: "Lightning Page Visibility Rule" },
            { letter: "D", text: "Lightning App Builder Analytics" }
        ],
        answer: "D"
    }

];