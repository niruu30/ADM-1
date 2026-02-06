const quizData = [
    {
        id: "q181",
        isMultiple: true,
        question: "The administrator at Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted a case to the administrator indicating that the new field is unavailable. Which two steps should an administrator do to troubleshoot this issue? Choose 2 answers",
        options: [
            { letter: "A", text: "Update the organization-wide defaults for the object." },
            { letter: "B", text: "Run the setup audit trail for the organization." },
            { letter: "C", text: "Ensure that the page layout for the user's profile has been updated." },
            { letter: "D", text: "Review the field-level security of the field for the user profile." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q182",
        isMultiple: true,
        question: "Ursa Major Solar's administrator created a new account record type, but when marketing users are creating new account records, they are unable to choose the new record type. What are two potential causes of this issue? Choose 2 answers",
        options: [
            { letter: "A", text: "The record type is disabled on the marketing user profile." },
            { letter: "B", text: "The record type default setting is disabled." },
            { letter: "C", text: "The record type is dissociated from the page layout." },
            { letter: "D", text: "The record type is deactivated." }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q183",
        isMultiple: false,
        question: "Northern Trail Outfitters Is using one profile for all of its marketing users, providing read-only access to the Campaign object. A few marketing users now require comprehensive edit access on Campaigns. How should an administrator fulfill this request?",
        options: [
            { letter: "A", text: "Permission sets" },
            { letter: "B", text: "Marketing user checkbox" },
            { letter: "C", text: "Field-level security" },
            { letter: "D", text: "Organization-wide defaults" }
        ],
        answer: "B"
    },
    {
        id: "q184",
        isMultiple: false,
        question: "The sales manager at Cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation. What should the administrator use to fulfill the requirement?",
        options: [
            { letter: "A", text: "Two-Step Approval Process" },
            { letter: "B", text: "Approval History Related List" },
            { letter: "C", text: "Delegated Administrator" },
            { letter: "D", text: "Delegated Approver" }
        ],
        answer: "D"
    },
    {
        id: "q185",
        isMultiple: false,
        question: "Sales Reps at Universal Containers want to prioritize and flag at-risk deals. What feature should an administrator suggest to meet this requirement?",
        options: [
            { letter: "A", text: "Einstein Lead Scoring" },
            { letter: "B", text: "Einstein Opportunity Insights" },
            { letter: "C", text: "Einstein Activity Capture" },
            { letter: "D", text: "Einstein Opportunity Scoring" }
        ],
        answer: "D"
    },
    {
        id: "q186",
        isMultiple: false,
        question: "Ursa Major Solar has the following environment and requirements: * Critical, high-priority accounts have an assigned District Manager, Sales Representative, Inside Sales Representative, and Customer Service Representative. * The Sales Manager wants to prevent these accounts from being inadvertently contacted more than once on the same day. * The Sales Manager wants to report on various customer interactions. How should the administrator fulfill these requirements?",
        options: [
            { letter: "A", text: "Enter comments into the notes section on the account." },
            { letter: "B", text: "Log a separate task, call, or activity on the account." },
            { letter: "C", text: "Post customer interactions in Chatter on the account." },
            { letter: "D", text: "Log a case on the account." }
        ],
        answer: "B"
    },
    {
        id: "q187",
        isMultiple: false,
        question: "Universal Containers wants to begin selling to consumers, in addition to businesses. The Opportunity stages for selling to consumers will be different than those used for businesses. Which feature in Salesforce will allow for this to be accomplished?",
        options: [
            { letter: "A", text: "Sharing Rules" },
            { letter: "B", text: "Business Processes" },
            { letter: "C", text: "Page Layouts" },
            { letter: "D", text: "Record Types" }
        ],
        answer: "D"
    },
    {
        id: "q188",
        isMultiple: false,
        question: "Which relationship can be selected in a custom report type where Accounts is the primary object and Contacts is the related object?",
        options: [
            { letter: "A", text: "Each account may or may NOT have related contacts." },
            { letter: "B", text: "Each contact may or may NOT have a related account." },
            { letter: "C", text: "Each account must NOT have related contacts." },
            { letter: "D", text: "Each contact must have a related account." }
        ],
        answer: "A"
    },
    {
        id: "q189",
        isMultiple: false,
        question: "At Cloud Kicks, new public articles must be approved before publishing. Users are asked to click the submit for approval button to begin the process but sometimes the user forgets. How should an administrator automate submission so all new public articles will enter the approval process?",
        options: [
            { letter: "A", text: "Create a new record type and page layout" },
            { letter: "B", text: "Default the Submit for Approval button" },
            { letter: "C", text: "Update Initial Actions" },
            { letter: "D", text: "Use Process Builder" }
        ],
        answer: "D"
    },
    {
        id: "q190",
        isMultiple: false,
        question: "A user with administrator privileges accidentally deleted a custom field in an org one day ago. What should the administrator consider to restore the field?",
        options: [
            { letter: "A", text: "The deleted field can be restored up to 15 days after deletion, but all data will be lost." },
            { letter: "B", text: "The deleted field and its data can be restored up to 15 days after deletion." },
            { letter: "C", text: "The deleted field and its data CANNOT be restored." },
            { letter: "D", text: "The deleted field and its data can be restored up to 30 days after deletion." }
        ],
        answer: "B"
    },
    {
        id: "q191",
        isMultiple: false,
        question: "At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task. What should the administrator use to deliver this requirement?",
        options: [
            { letter: "A", text: "Flow Builder" },
            { letter: "B", text: "Approval Process" },
            { letter: "C", text: "Prebuilt Macro" },
            { letter: "D", text: "Formula Field" }
        ],
        answer: "A"
    },
    {
        id: "q192",
        isMultiple: false,
        question: "A new custom object called Manufacturers has been created for Universal Containers. Where should a System Administrator adjust how the object appears when it is found in the global search?",
        options: [
            { letter: "A", text: "Global Search, Manufacturers, and Global Search Layouts" },
            { letter: "B", text: "Object Manager, Manufacturers, and Page Layouts" },
            { letter: "C", text: "Object Manager, Manufacturers, and Search Layouts" },
            { letter: "D", text: "Global Search, Manufacturers, and Search Layouts" }
        ],
        answer: "C"
    },
    {
        id: "q193",
        isMultiple: false,
        question: "Which item is available in a Lightning App where visibility is limited to the Salesforce mobile app?",
        options: [
            { letter: "A", text: "Today" },
            { letter: "B", text: "Home Page" },
            { letter: "C", text: "Favorites" },
            { letter: "D", text: "Utility Bar" }
        ],
        answer: "D"
    },
    {
        id: "q194",
        isMultiple: false,
        question: "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
        options: [
            { letter: "A", text: "Validation rules that ensure that users are entering accurate sales stage Information" },
            { letter: "B", text: "Different page layouts that control the picklist values for the opportunity types" },
            { letter: "C", text: "Separate record types and sales processes for the different types of opportunities" },
            { letter: "D", text: "Public groups to limit record types and sales processes for opportunities." }
        ],
        answer: "C"
    },
    {
        id: "q195",
        isMultiple: false,
        question: "Universal Containers fs trying to Improve the user experience when searching for the right status on a case. The company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on. How should the administrator improve on the currant implementation?",
        options: [
            { letter: "A", text: "Edit the status choices directly on the record type." },
            { letter: "B", text: "Reduce the number of case status values to five." },
            { letter: "C", text: "Review which status choices are needed for each record type and create support processes for each that is necessary." },
            { letter: "D", text: "Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console." }
        ],
        answer: "C"
    },
    {
        id: "q196",
        isMultiple: false,
        question: "Management at Cloud Kicks is requesting all records from a custom object that are more than 12 months old and have a status of new be deleted. What should the administrator use to honor this request?",
        options: [
            { letter: "A", text: "Mass delete" },
            { letter: "B", text: "Data Loader" },
            { letter: "C", text: "Mass edit from lists" },
            { letter: "D", text: "Data Import Wizard" }
        ],
        answer: "B"
    },
    {
        id: "q197",
        isMultiple: false,
        question: "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals. What should the administrator configure to help with these issues?",
        options: [
            { letter: "A", text: "Einstein Search Personalization" },
            { letter: "B", text: "Einstein Opportunity Scoring" },
            { letter: "C", text: "Einstein Lead Scoring" },
            { letter: "D", text: "Einstein Activity Capture" }
        ],
        answer: "B"
    },
    {
        id: "q198",
        isMultiple: false,
        question: "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. How should the administrator complete this requirement?",
        options: [
            { letter: "A", text: "Auto-Response Rules" },
            { letter: "B", text: "Escalation Rules" },
            { letter: "C", text: "Validation Rules" },
            { letter: "D", text: "Assignment Rules" }
        ],
        answer: "B"
    },
    {
        id: "q199",
        isMultiple: false,
        question: "The administrator at DreamHouse Realty added an email quick action to the Case page layout and Is unable to see the action on the case feed. Which feature must be enabled to ensure the quick action will be displayed as expected?",
        options: [
            { letter: "A", text: "Email Alerts" },
            { letter: "B", text: "Email Notifications" },
            { letter: "C", text: "Email-to-Case" },
            { letter: "D", text: "Email Templates" }
        ],
        answer: "C"
    },
    {
        id: "q200",
        isMultiple: false,
        question: "A new custom object called parts has been created for Ursa Major Solar. Where should an administrator adjust how the object appears when it is found in the global search?",
        options: [
            { letter: "A", text: "Object manager, parts, and search layouts" },
            { letter: "B", text: "Object manager, parts, and page layouts" },
            { letter: "C", text: "Global search, parts, and search layouts" },
            { letter: "D", text: "Global search, parts, and global search Layouts" }
        ],
        answer: "A"
    },
    {
        id: "q201",
        isMultiple: false,
        question: "What must an administrator do when creating a record type?",
        options: [
            { letter: "A", text: "Create a new page layout for the record type" },
            { letter: "B", text: "Add the record type to the required user records" },
            { letter: "C", text: "Assign the record type to the appropriate profiles" },
            { letter: "D", text: "Set the field-level security for the record type" }
        ],
        answer: "C"
    },
    {
        id: "q202",
        isMultiple: false,
        question: "An administrator created a record trigger flow to update contacts. How should the administrator reference the values of the active record the flow is running on?",
        options: [
            { letter: "A", text: "Use the {!Accountld} record variable." },
            { letter: "B", text: "Use the {!Contact. Id} global variable." },
            { letter: "C", text: "Use the Get Records element to find the Id." },
            { letter: "D", text: "Use the $Record global variable." }
        ],
        answer: "C"
    },
    {
        id: "q203",
        isMultiple: false,
        question: "A Sales Manager wants all Sales Users in the department to see a Dashboard that displays Total Closed/Won Opportunity Amount by User on a monthly basis. The Opportunity sharing model is private. How can the Administrator meet this requirement?",
        options: [
            { letter: "A", text: "Create the Dashboard from the Opportunities by User Report, select the Sales Manager as Run As User and Save in the private Dashboard Folder." },
            { letter: "B", text: "Ask the Sales Manager to create the Dashboard from the Opportunities by User Report and save it to her private Dashboards Folder." },
            { letter: "C", text: "Create the Dashboard from the Opportunities by User Report, then save it in the shared Dashboard Folder as a Dynamic Dashboard." },
            { letter: "D", text: "Ask the Sales Manager to create the Dashboard from the Opportunities by User Report, select 'View Dashboard as Me' and save in the shared Dashboard Folder." }
        ],
        answer: "D"
    },
    {
        id: "q204",
        isMultiple: false,
        question: "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Create an assignment rule to email the lead." },
            { letter: "B", text: "Add a public group and Process Builder to email the lead." },
            { letter: "C", text: "Use a validation rule to trigger workflow to email the lead." },
            { letter: "D", text: "Configure an auto-response rule to email the lead." }
        ],
        answer: "D"
    },
    {
        id: "q205",
        isMultiple: false,
        question: "Universal Containers has a marketing, team setup as a public group A sales representative would like to engage the marketing team on one opportunity What should the sales representative do to ensure the marketing team can access the opportunity?",
        options: [
            { letter: "A", text: "Manually share the record with the public group." },
            { letter: "B", text: "Change the opportunity owner to the public group." },
            { letter: "C", text: "Add the public group to the opportunity team." },
            { letter: "D", text: "Add the public group to an opportunity queue." }
        ],
        answer: "A"
    },
    {
        id: "q206",
        isMultiple: false,
        question: "The Human Resources department at Northern Trail Outfitters wants employees to provide feedback about their managers using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff. How should an administrator configure the custom object to meet this requirement?",
        options: [
            { letter: "A", text: "Define a criteria-based sharing rule." },
            { letter: "B", text: "Set the Default External Access to Private." },
            { letter: "C", text: "Uncheck Grant Access Using Hierarchies." },
            { letter: "D", text: "Configure an owner-based sharing rule." }
        ],
        answer: "C"
    },
    {
        id: "q207",
        isMultiple: false,
        question: "Universal Containers uses a private sharing model. Account management is accomplished using teams and Accounts are owned by the sales rep. The rep reports to the regional director who then reports to the VP of sales. When the regional director runs reports, what records would they see with the my team’s account filter?",
        options: [
            { letter: "A", text: "Accounts they and their subordinates own." },
            { letter: "B", text: "Accounts that they are on the account team." },
            { letter: "C", text: "Accounts their subordinates can access." },
            { letter: "D", text: "Accounts their subordinates own." }
        ],
        answer: "A"
    },
    {
        id: "q208",
        isMultiple: false,
        question: "How can an administrator allow all internal users to view a dashboard as a Sales Manager within a sales region?",
        options: [
            { letter: "A", text: "Create a dashboard with multiple components." },
            { letter: "B", text: "Create a dashboard for all opportunities in the region." },
            { letter: "C", text: "Create a dashboard to run as a specified user." },
            { letter: "D", text: "Create a dashboard to run as the logged -In user." }
        ],
        answer: "C"
    },
    {
        id: "q209",
        isMultiple: false,
        question: "Dream Home Realty just announced its new Home Concierge offering. This product is unlike anything the company has offered in the past and follows a different business model. What should the administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Create a new Opportunity product." },
            { letter: "B", text: "Create a new sales process." },
            { letter: "C", text: "Create a quick action." },
            { letter: "D", text: "Create a new approval process." }
        ],
        answer: "B"
    },
    {
        id: "q210",
        isMultiple: false,
        question: "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Case Escalation Rules" },
            { letter: "B", text: "Case Scheduled Reports" },
            { letter: "C", text: "Case Assignment Rules" },
            { letter: "D", text: "Case Dashboard Refreshes" }
        ],
        answer: "A"
    }

];