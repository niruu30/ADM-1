const quizData = [
    {
        id: "q241",
        isMultiple: true,
        question: "Executives at Cloud Kicks have reported that their dashboards are showing Inaccurate data. The administrator has discovered that users have been changing the source reports. Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers",
        options: [
            { letter: "A", text: "Move the dashboard to the user's private folder." },
            { letter: "B", text: "Move the dashboard reports to the view-only folder." },
            { letter: "C", text: "Change the dashboard to be a dynamic dashboard." },
            { letter: "D", text: "Create a new report folder with viewer access." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q242",
        isMultiple: false,
        question: "Sales and Customer Care users at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact. What should the administrator use to achieve this?",
        options: [
            { letter: "A", text: "Related Lookup Filters" },
            { letter: "B", text: "Page Layout Editor" },
            { letter: "C", text: "Compact Layout Editor" },
            { letter: "D", text: "Search Layout Editor" }
        ],
        answer: "B"
    },
    {
        id: "q243",
        isMultiple: false,
        question: "New leads need to be routed to the correct sales person based on the lead address. How should the administrator configure this requirement?",
        options: [
            { letter: "A", text: "Use lead assignment rules." },
            { letter: "B", text: "Configure a validation rule." },
            { letter: "C", text: "Create a formula field." },
            { letter: "D", text: "Assign with an escalation rule." }
        ],
        answer: "A"
    },
    {
        id: "q244",
        isMultiple: false,
        question: "The administrator at AW Computing wants Account details, related lists, and Chatter feeds to each appear on separate tabs when viewing an Account. Which type of page should the administrator create?",
        options: [
            { letter: "A", text: "Lightning app page" },
            { letter: "B", text: "Lightning record page" },
            { letter: "C", text: "Lightning page component" },
            { letter: "D", text: "Lightning page tab" }
        ],
        answer: "D"
    },
    {
        id: "q245",
        isMultiple: false,
        question: "The Support Manager wants to send an automatic email to the Case Contact when a case is closed. Which automation tool can the administrator use?",
        options: [
            { letter: "A", text: "Sharing Rule" },
            { letter: "B", text: "Case Auto-Response Rule" },
            { letter: "C", text: "Validation Rule" },
            { letter: "D", text: "Workflow Rule" }
        ],
        answer: "D"
    },
    {
        id: "q246",
        isMultiple: false,
        question: "Sales representatives use a custom report type for Account reports. New fields have been created on the Account Object. What should a System Administrator do to report on the newly created fields?",
        options: [
            { letter: "A", text: "From the Custom Report Type, Edit Layout, then add the new fields to the report." },
            { letter: "B", text: "Create a new account report and add the new fields from the Report Builder." },
            { letter: "C", text: "From the Custom Report Type, Edit Object Relationships, then add the new fields to the report." },
            { letter: "D", text: "Create a new account report folder, go to share, and then add the new fields." }
        ],
        answer: "A"
    },
    {
        id: "q247",
        isMultiple: false,
        question: "An administrator needs to store the ID of a record type for later use in a flow. Which kind of variable should the administrator use?",
        options: [
            { letter: "A", text: "Record variable" },
            { letter: "B", text: "Text variable" },
            { letter: "C", text: "ID variable" },
            { letter: "D", text: "Boolean variable" }
        ],
        answer: "B"
    },
    {
        id: "q248",
        isMultiple: false,
        question: "A senior realtor at Ursa Major Solar has received a long list of new residential homes to sell to for the spring. Management needs the spreadsheet of the new residential homes and a separate spreadsheet of pricebooks loaded into Salesforce. Which Salesforce data tool will meet this request?",
        options: [
            { letter: "A", text: "Data Import Wizard" },
            { letter: "B", text: "Data Loader" },
            { letter: "C", text: "Mass Create Records" },
            { letter: "D", text: "Mass Transfer Records" }
        ],
        answer: "B"
    },
    {
        id: "q249",
        isMultiple: false,
        question: "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest form online. The team currently does not have access to the Lead object. How should an administrator provide proper access?",
        options: [
            { letter: "A", text: "Assign a new role" },
            { letter: "B", text: "Create a new profile" },
            { letter: "C", text: "Set up Manual sharing" },
            { letter: "D", text: "Configure permission sets" }
        ],
        answer: "D"
    },
    {
        id: "q250",
        isMultiple: false,
        question: "What should an administrator take into consideration when creating Content tags?",
        options: [
            { letter: "A", text: "Tags are case insensitive." },
            { letter: "B", text: "Tags combine singular and plural versions" },
            { letter: "C", text: "Tags are updatable." },
            { letter: "D", text: "Tags are case sensitive" }
        ],
        answer: "A"
    },
    {
        id: "q251",
        isMultiple: false,
        question: "Ursa Major Solar wants to upload 10,000 Campaigns to Salesforce. Which tool should the administrator utilize to accomplish this task?",
        options: [
            { letter: "A", text: "Data Import Wizard" },
            { letter: "B", text: "Data Loader" },
            { letter: "C", text: "Bulk Data Load Jobs" },
            { letter: "D", text: "AppExchange package" }
        ],
        answer: "B"
    },
    {
        id: "q252",
        isMultiple: false,
        question: "Universal Containers has enabled Data Protection and Privacy for its org. Which page layouts will have the Individual field available for tracking data privacy information?",
        options: [
            { letter: "A", text: "Account and User" },
            { letter: "B", text: "Individual, User, and Account" },
            { letter: "C", text: "Case and Opportunity" },
            { letter: "D", text: "Contact, Lead, and Person Account" }
        ],
        answer: "D"
    },
    {
        id: "q253",
        isMultiple: false,
        question: "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response Include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
        options: [
            { letter: "A", text: "Email Alerts" },
            { letter: "B", text: "Assignment Rules" },
            { letter: "C", text: "Auto-Response Rules" },
            { letter: "D", text: "Knowledge Articles" }
        ],
        answer: "C"
    },
    {
        id: "q254",
        isMultiple: false,
        question: "Cloud Kicks wants to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal. What feature should the administrator use to meet this requirement?",
        options: [
            { letter: "A", text: "Splits" },
            { letter: "B", text: "Stages" },
            { letter: "C", text: "Queues" },
            { letter: "D", text: "List Views" }
        ],
        answer: "A"
    },
    {
        id: "q255",
        isMultiple: false,
        question: "The administrator has been asked to automate a simple field update on the account. When a support agent changes the status of the account to Audited', they would like the system to automatically update the Audited Date field on the account with today's date. Which tool should the administrator use to complete this automation?",
        options: [
            { letter: "A", text: "Approval Process" },
            { letter: "B", text: "Formula Field" },
            { letter: "C", text: "Validation Rule" },
            { letter: "D", text: "Flow Builder" }
        ],
        answer: "D"
    },
    {
        id: "q256",
        isMultiple: false,
        question: "At Universal Containers, if an account is consistently late or defaults on payments, users should be prevented from creating new Os) opportunities for that account. The administrator has created a custom checkbox called Account_Credit_Alert__c on the Account object. What should the administrator do to prevent new Opportunities from being created if the Account_Credit_Alert__c checkbox is checked?",
        options: [
            { letter: "A", text: "Create a validation rule on Opportunities." },
            { letter: "B", text: "Create a cross-object formula on Accounts." },
            { letter: "C", text: "Create a Process Builder and a field update on Opportunities." },
            { letter: "D", text: "Create a criteria-based sharing rule on Accounts." }
        ],
        answer: "A"
    },
    {
        id: "q257",
        isMultiple: false,
        question: "An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount. How should the administrator export this file?",
        options: [
            { letter: "A", text: "Data Export Service" },
            { letter: "B", text: "Data Import Wizard" },
            { letter: "C", text: "Data Export Wizard" },
            { letter: "D", text: "Data Loader" }
        ],
        answer: "D"
    },
    {
        id: "q258",
        isMultiple: false,
        question: "The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error. How can the administrator validate the error the user is receiving?",
        options: [
            { letter: "A", text: "View the setup audit trail." },
            { letter: "B", text: "Edit the page layout." },
            { letter: "C", text: "Review the sharing model." },
            { letter: "D", text: "Log in as the user" }
        ],
        answer: "D"
    },
    {
        id: "q259",
        isMultiple: false,
        question: "An administrator has reviewed an upcoming critical update. How should the administrator proceed with activation of the critical update?",
        options: [
            { letter: "A", text: "Allow the critical update to auto-activate." },
            { letter: "B", text: "Activate the critical update in a sandbox" },
            { letter: "C", text: "Allow the critical update to auto-activate In a sandbox." },
            { letter: "D", text: "Activate the critical update in production." }
        ],
        answer: "B"
    },
    {
        id: "q260",
        isMultiple: false,
        question: "Cloud Kicks (CK) Is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
        options: [
            { letter: "A", text: "Set up a scheduled process in Process Builder." },
            { letter: "B", text: "Create a workflow rule with an outbound message." },
            { letter: "C", text: "Use a process to update the account when It is edited." },
            { letter: "D", text: "Configure a scheduled flow in Flow Builder." }
        ],
        answer: "D"
    },
    {
        id: "q261",
        isMultiple: false,
        question: "The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
        options: [
            { letter: "A", text: "Workflow Rule" },
            { letter: "B", text: "Validation Rule" },
            { letter: "C", text: "Lead Conversion" },
            { letter: "D", text: "Require Field" }
        ],
        answer: "B"
    },
    {
        id: "q262",
        isMultiple: false,
        question: "Cloud Kicks (CK) has a new administrator who is asked to put together a memo detailing Salesforce usage to budget for upcoming license purchases. Where should the administrator go to find out what type of licenses CK has purchased and how many are available?",
        options: [
            { letter: "A", text: "Search for licenses types in setup" },
            { letter: "B", text: "Entitlements related list in company information" },
            { letter: "C", text: "User management settings in setup" },
            { letter: "D", text: "User licenses related list in company information" }
        ],
        answer: "D"
    },
    {
        id: "q263",
        isMultiple: false,
        question: "Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
        options: [
            { letter: "A", text: "Chatter Recommendations" },
            { letter: "B", text: "Chatter Stream" },
            { letter: "C", text: "Chatter Broadcast Group" },
            { letter: "D", text: "Chatter Unlisted Group" }
        ],
        answer: "C"
    },
    {
        id: "q264",
        isMultiple: false,
        question: "Cloud Kicks wants users to only be able to choose Opportunity stage closed won If the Lead source has been selected. How should the administrator accomplish this goal?",
        options: [
            { letter: "A", text: "Configure a validation rule requiring Lead source when the stage is set to closed won." },
            { letter: "B", text: "Change the Opportunity stage field to read only on the page layout." },
            { letter: "C", text: "Modify the Opportunity stage a dependent picklist to the Lead source field." },
            { letter: "D", text: "Make Lead source a dependent picklist to the Opportunity stage field." }
        ],
        answer: "A"
    },
    {
        id: "q265",
        isMultiple: false,
        question: "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record. How should an administrator ensure this requirement?",
        options: [
            { letter: "A", text: "Require the field on the record type." },
            { letter: "B", text: "Make the field universally required." },
            { letter: "C", text: "Create a Process Builder to set the field." },
            { letter: "D", text: "Define an approval process for the field." }
        ],
        answer: "B"
    },
    {
        id: "q266",
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
    {
        id: "q267",
        isMultiple: false,
        question: "Ursa Major Solar has selected report folders that are shared with a small group of users who are on Lightning Experience. The administrator needs to prevent these users from customizing the information in the reports. What should the administrator do to achieve this goal?",
        options: [
            { letter: "A", text: "Change Field Level Security." },
            { letter: "B", text: "Lock report filters." },
            { letter: "C", text: "Run the report as a specified user." },
            { letter: "D", text: "Utilize Custom Report Types." }
        ],
        answer: "B"
    },
    {
        id: "q268",
        isMultiple: false,
        question: "An administrator has been asked to update a flow that was created as part of a recent update. When the administrator opens the flow for editing, the Flow Builder toolbox offers only four elements: Assignment, Decision, Get Records, and Loop. What would cause this?",
        options: [
            { letter: "A", text: "The version of the flow is active." },
            { letter: "B", text: "The version of the flow is inactive." },
            { letter: "C", text: "The flow is a before save flow." },
            { letter: "D", text: "The flow Is a screen flow." }
        ],
        answer: "C"
    },
    {
        id: "q269",
        isMultiple: false,
        question: "Ursa Major Solar's default, organization-wide sharing for accounts is set to public read/write. The administrator needs to ensure that marketing never modifies an account record. Which action should the administrator take to accomplish this goal?",
        options: [
            { letter: "A", text: "Remove edit access on accounts from the custom marketing profile." },
            { letter: "B", text: "Assign a permission set to marketing users which removes edit permission." },
            { letter: "C", text: "Switch organization-wide default sharing to public read only." },
            { letter: "D", text: "Separate the marketing role hierarchy from the sales role hierarchy." }
        ],
        answer: "A"
    },
    {
        id: "q270",
        isMultiple: false,
        question: "The VP of marketing has asked the administrator to restrict marketers from deleting campaign records. The marketers are currently assigned to the marketing user profile. What action should the administrator take to satisfy the request?",
        options: [
            { letter: "A", text: "Assign a permission set with campaign create, read and edit permissions." },
            { letter: "B", text: "Update the current profile by removing the campaign delete permission." },
            { letter: "C", text: "Create a validation rule to prevent delete for marketing users only." },
            { letter: "D", text: "Use a custom profile with the campaign delete permission disabled." }
        ],
        answer: "B"
    }

];