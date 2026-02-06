const quizData = [
    {
        id: "q1",
        isMultiple: false,
        question: "Universal Containers requires a different Lightning page to be displayed when Accounts are viewed In the Sales Console and In the Service Console. How should an administrator meet this requirement?",
        options: [
            { letter: "A", text: "Define multiple record types." },
            { letter: "B", text: "Create different user profiles." },
            { letter: "C", text: "Update page layout assignments." },
            { letter: "D", text: "Assign Lightning pages as app default." }
        ],
        answer: "D"
    },
    {
        id: "q2",
        isMultiple: false,
        question: "What describes the capabilities of Salesforce Knowledge?",
        options: [
            { letter: "A", text: "An automated tool that closes Cases based on historical information" },
            { letter: "B", text: "An automated Al tool that converts Leads to Opportunities given a predefined set of conditions" },
            { letter: "C", text: "A knowledge base composed of articles that can be written and used by support agents" },
            { letter: "D", text: "A knowledge base that uses AI to generate an article to solve customer support issues" }
        ],
        answer: "C"
    },
    {
        id: "q3",
        isMultiple: false,
        question: "The administrator at Cloud Kicks has been asked to replace two old workflow rules that are doing simple field updates when a lead is created to Improve processing time. What tool should the administrator use to replace the workflow rules?",
        options: [
            { letter: "A", text: "Quick Action Flow" },
            { letter: "B", text: "Screen Flow" },
            { letter: "C", text: "Scheduled Flow" },
            { letter: "D", text: "Before Save Flow" }
        ],
        answer: "D"
    },
    {
        id: "q4",
        isMultiple: false,
        question: "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should the administrator utilize to import the records to Salesforce?",
        options: [
            { letter: "A", text: "Data Import Wizard" },
            { letter: "B", text: "Manual Import" },
            { letter: "C", text: "Dataloader.io" },
            { letter: "D", text: "Data Loader" }
        ],
        answer: "A"
    },
    {
        id: "q5",
        isMultiple: false,
        question: "Universal Containers wants to provide reseller partners with discounted prices on the products they purchase. How should an administrator configure this requirement?",
        options: [
            { letter: "A", text: "Create a separate PriceBook for reseller partners." },
            { letter: "B", text: "Use a different Opportunity record type." },
            { letter: "C", text: "Create separate reseller partner products." },
            { letter: "D", text: "Add a Partner_Discount__c field to the Opportunity." }
        ],
        answer: "A"
    },
    {
        id: "q6",
        isMultiple: false,
        question: "The administrator for AW Computing is working with a user who is having trouble logging in to Salesforce. What should the administrator do to identify why the user is unable to log in?",
        options: [
            { letter: "A", text: "Review the password policies." },
            { letter: "B", text: "Review the login history." },
            { letter: "C", text: "Review the password history." },
            { letter: "D", text: "Review the security token." }
        ],
        answer: "B"
    },
    {
        id: "q7",
        isMultiple: false,
        question: "An administrator needs to create a one-to-many relationship between two objects with limited access to child records. What type of field should the administrator use?",
        options: [
            { letter: "A", text: "Cross object formula" },
            { letter: "B", text: "Roll-up summary" },
            { letter: "C", text: "Lookup field" },
            { letter: "D", text: "Master-detail field" }
        ],
        answer: "D"
    },
    {
        id: "q8",
        isMultiple: false,
        question: "Northern Trail Outfitters is partnering with a new business and needs to import 100,000 new records nightly into its Salesforce organization. Which tool should the administrator use to accomplish this task?",
        options: [
            { letter: "A", text: "Mass Transfer Records" },
            { letter: "B", text: "Third-party tool from the AppExchange" },
            { letter: "C", text: "Data Loader" },
            { letter: "D", text: "Data Import Wizard" }
        ],
        answer: "C"
    },
    {
        id: "q9",
        isMultiple: false,
        question: "At Ursa Major Solar, a workflow rule is in place that sends a reminder email 20 days before the warranty expiration date. A custom ...... another three years. What is the expected behavior for the email workflow rule?",
        options: [
            { letter: "A", text: "The email Is sent with the 30 day reminder criteria." },
            { letter: "B", text: "The email is NOT sent because the record no longer meets the criteria." },
            { letter: "C", text: "The email is locked in the job queue until It meets the criteria." },
            { letter: "D", text: "The email is NOT sent because the customers email address was missing." }
        ],
        answer: "C"
    },
    {
        id: "q10",
        isMultiple: false,
        question: "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
        options: [
            { letter: "A", text: "Setup Audit Trail" },
            { letter: "B", text: "Field History Tracking" },
            { letter: "C", text: "Organization-Wide Defaults" },
            { letter: "D", text: "Security Health Check" }
        ],
        answer: "D"
    },
    {
        id: "q11",
        isMultiple: false,
        question: "The VP of Marketing wants Sales Reps to get updates when materials are updated in the Marketing library. What feature should an Administrator recommend?",
        options: [
            { letter: "A", text: "Validation rule" },
            { letter: "B", text: "Email alert" },
            { letter: "C", text: "Approval process" },
            { letter: "D", text: "Subscribe" }
        ],
        answer: "D"
    },
    {
        id: "q12",
        isMultiple: false,
        question: "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
        options: [
            { letter: "A", text: "Path Key Fields" },
            { letter: "B", text: "Opportunity Processes" },
            { letter: "C", text: "Dynamic Forms" },
            { letter: "D", text: "Workflow Rules" }
        ],
        answer: "A"
    },
    {
        id: "q13",
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
        id: "q14",
        isMultiple: false,
        question: "An administrator at Universal Containers needs an automated way to delete records based on field values. What automated solution should the administrator use?",
        options: [
            { letter: "A", text: "Process Builder" },
            { letter: "B", text: "Flow Builder" },
            { letter: "C", text: "Workflow" },
            { letter: "D", text: "Automation Studio" }
        ],
        answer: "B"
    },
    {
        id: "q15",
        isMultiple: false,
        question: "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
        options: [
            { letter: "A", text: "External ID" },
            { letter: "B", text: "Record ID" },
            { letter: "C", text: "Rich Text field" },
            { letter: "D", text: "Auto-Number field" }
        ],
        answer: "A"
    },
    {
        id: "q16",
        isMultiple: false,
        question: "A sales ops user has been identified as the dashboards expert within Cloud Kicks. This user needs to be able to update dashboard folder access for all non-private folders. Which permission should the administrator assign to the user?",
        options: [
            { letter: "A", text: "Manage reports in public folders" },
            { letter: "B", text: "Manage dashboards in public folders" },
            { letter: "C", text: "Create dashboard folders" },
            { letter: "D", text: "Create and customize dashboards" }
        ],
        answer: "B"
    },
    {
        id: "q17",
        isMultiple: false,
        question: "At Cloud Kicks, new public articles must be approved before publishing. Users are asked to click to the submit for approval button to begin the process but sometimes the user forgets. How should an administrator automate submission so al new public articles will enter the approval process?",
        options: [
            { letter: "A", text: "Default the Submit for Approval button" },
            { letter: "B", text: "Update initial Actions" },
            { letter: "C", text: "Use Process Builder" },
            { letter: "D", text: "Create a new record type and page layout" }
        ],
        answer: "C"
    },
    {
        id: "q18",
        isMultiple: false,
        question: "Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the question that is needed. How should an administrator complete this?",
        options: [
            { letter: "A", text: "Use a new version of the flow for each scenario." },
            { letter: "B", text: "Use a decision element and a new screen to show the proper question." },
            { letter: "C", text: "A Use conditional visibility to hide the unnecessary question." },
            { letter: "D", text: "Use branching in the flow screen to show the proper scenario." }
        ],
        answer: "B"
    },
    {
        id: "q19",
        isMultiple: false,
        question: "Sales users at Cloud Kicks are requesting that the data in the Industry field on the Account object displays on the Opportunity page layout. Which type of field should an administrator create to accomplish this?",
        options: [
            { letter: "A", text: "Cross-object formula field" },
            { letter: "B", text: "Custom Account field" },
            { letter: "C", text: "Standard Account field" },
            { letter: "D", text: "Master-detail relationship field" }
        ],
        answer: "A"
    },
    {
        id: "q20",
        isMultiple: false,
        question: "The administrator at Ursa Major Solar has just finished creating new hot Account reports that filter Accounts that were modified this year with a rating of hot. The report was shared with the entire sales team. Some users are seeing some Accounts that have NOT been modified since last year and other Accounts where the rating is cold. What should the administrator do to ensure that the report works as intended for all users?",
        options: [
            { letter: "A", text: "Lock the report filters." },
            { letter: "B", text: "Create a filter using bucketing." },
            { letter: "C", text: "Create the report in a private folder." },
            { letter: "D", text: "Use a cross-object filter." }
        ],
        answer: "A"
    },
    {
        id: "q21",
        isMultiple: false,
        question: "The VP of safes at Universal Containers wants to prevent members of the sales team from changing an opportunity to a date in the past. What should an administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Assignment Rule" },
            { letter: "B", text: "Field-Level Security" },
            { letter: "C", text: "Validation Rule" },
            { letter: "D", text: "Approval Process" }
        ],
        answer: "C"
    },
    {
        id: "q22",
        isMultiple: false,
        question: "The managers at Ursa Major Solar asked the administrator to quickly provide access to sales reports and dashboards. How can this be done?",
        options: [
            { letter: "A", text: "Log a case to Salesforce Support" },
            { letter: "B", text: "Search the AppExchange for free adoption report apps." },
            { letter: "C", text: "Use the Salesforce Auto-Report Builder." },
            { letter: "D", text: "Build reports and dashboards." }
        ],
        answer: "B"
    },
    {
        id: "q23",
        isMultiple: false,
        question: "Users at Cloud Kicks are reporting different options when updating a custom picklist on the Opportunity object based on the kind of opportunity. Where should an administrator update the option in the picklist?",
        options: [
            { letter: "A", text: "Record type" },
            { letter: "B", text: "Plcklist value sets" },
            { letter: "C", text: "Fields and relationships" },
            { letter: "D", text: "Related lookup filters" }
        ],
        answer: "A"
    },
    {
        id: "q24",
        isMultiple: false,
        question: "Universal Containers wants to create a new sales team that focuses exclusively on small to medium business customers. This group will track information with the same fields and picklist values but will have 2 new options on Stage field. How should the system administrator accomplish this task?",
        options: [
            { letter: "A", text: "Create a new Record type and a new sales process." },
            { letter: "B", text: "Create a new Record type and a page layout." },
            { letter: "C", text: "Create a new Sales process." },
            { letter: "D", text: "Create a new Record Type." }
        ],
        answer: "A"
    },
    {
        id: "q25",
        isMultiple: false,
        question: "A user at Universal Containers left the company. The administrator needs to create a new user for their replacement, but they have assigned all available user licenses. What should the administrator do to free up a user license for the new user?",
        options: [
            { letter: "A", text: "Change the former user's record to the new user." },
            { letter: "B", text: "Deactivate the former employees user record." },
            { letter: "C", text: "Freeze the former employee's user record." },
            { letter: "D", text: "Delete the former employee's user record." }
        ],
        answer: "B"
    },
    {
        id: "q26",
        isMultiple: false,
        question: "The administrator at Universal Containers is unable to see the user license option when creating new users today, despite creating new users with this license type earlier in the week. What should the administrator consider first in order to diagnose the problem?",
        options: [
            { letter: "A", text: "Open a Salesforce Support Case." },
            { letter: "B", text: "Verify that Salesforce is a valid license type for the User object." },
            { letter: "C", text: "Check on the remaining available Salesforce licenses under Company Information." },
            { letter: "D", text: "Check on the remaining available Salesforce licenses under User Management Settings." }
        ],
        answer: "C"
    },
    {
        id: "q27",
        isMultiple: false,
        question: "Ursa Major Solar has an existing process for their solar panel Opportunities that include the following stages: * Prospecting * Value Proposition * Negotiation/Review * Closed Won * Closed Lost. They want to implement a new process for their battery Opportunities using the following stages: * Qualification * Value Prospection * Negotiation/Review * Closed Won * Closed Lost. What should the administrator configure to implement these changes?",
        options: [
            { letter: "A", text: "Create a new battery record type on Opportunity and add the appropriate values to the stage picklist." },
            { letter: "B", text: "Create a new sales process that includes the relevant stages and assign it to the new battery record type on opportunity." },
            { letter: "C", text: "Update the existing Opportunity sales process to includes qualification as a valid stage." },
            { letter: "D", text: "Edit the stage field on Opportunity and activate qualification as a value." }
        ],
        answer: "B"
    },
    {
        id: "q28",
        isMultiple: false,
        question: "Users at Universal Containers have reported that the related lists on the Lightning record page for Accounts are showing only four fields. They would like more fields to be visible. Which customization should an administrator use to allow for up to ten fields on related lists?",
        options: [
            { letter: "A", text: "Change the related list type to custom" },
            { letter: "B", text: "Change the related list type to default" },
            { letter: "C", text: "Change the related list type to enhanced list" },
            { letter: "D", text: "Change the related list type to list view" }
        ],
        answer: "C"
    },
    {
        id: "q29",
        isMultiple: false,
        question: "A new approval process is being adapted by Ursa Major Solar. After an opportunity has been approved, the contract is sent to the customer for signature as the final step in that process. How can the administrator implement this functionality?",
        options: [
            { letter: "A", text: "Use the Salesforce Autosign flow." },
            { letter: "B", text: "Hire a consulting firm to develop a document signing workflow." },
            { letter: "C", text: "Check the 'Send PDF' box on the approval process setup." },
            { letter: "D", text: "Install an app from the AppExchange." }
        ],
        answer: "D"
    },
    {
        id: "q30",
        isMultiple: false,
        question: "Universal Containers wants to set up a customer service community where existing and potential customers can view public discussions, collaborate with other members, and search for solutions posted by other members without logging into the community. How should an administrator allow access to the community?",
        options: [
            { letter: "A", text: "Use the community's guest user profile" },
            { letter: "B", text: "Use Linkedin or Facebook as authentication providers" },
            { letter: "C", text: "Create a custom community profile" },
            { letter: "D", text: "Set up self-registration for the community" }
        ],
        answer: "A"
    },
];