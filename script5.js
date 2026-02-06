const quizData = [
    {
        id: "q121",
        isMultiple: false,
        question: "The sales operations team at Universal Containers purchase a list of shipping companies they would like to be imported into the Salesforce org using import Wizard. Some companies on the list may already be customers. Which fields should administrator use to prevent duplicates when importing these Account records?",
        options: [
            { letter: "A", text: "Owner name and Account Name." },
            { letter: "B", text: "Account name and Created Date." },
            { letter: "C", text: "Account name and Account Site." },
            { letter: "D", text: "Account name and Billing Address." }
        ],
        answer: "C"
    },
    {
        id: "q122",
        isMultiple: false,
        question: "Universal Containers created a new job posting on the first of the month. It triggered a process scheduled action that send a Chatter post to the department VP in 30 days if the position is still open and the status is NOT equal to Interviewing On the 10th of the month, an applicant interview, and the posting status is updated to Interviewing. What will happen to the Chatter post in this situation?",
        options: [
            { letter: "A", text: "The pending Chatter post will be sent in 30 days." },
            { letter: "B", text: "The pending Chatter post will be will be paused." },
            { letter: "C", text: "The pending Chatter post will be sent on the 10th of the month." },
            { letter: "D", text: "The pending Chatter post will be canceled." }
        ],
        answer: "D"
    },
    {
        id: "q123",
        isMultiple: false,
        question: "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
        options: [
            { letter: "A", text: "Modify compact Case page layout to include the action." },
            { letter: "B", text: "Create a custom Lightning App with the action." },
            { letter: "C", text: "Include the action in the Salesforce Mobile Navigation menu" },
            { letter: "D", text: "Add the Salesforce Mobile and Lightning Experience action to the page layout." }
        ],
        answer: "D"
    },
    {
        id: "q124",
        isMultiple: false,
        question: "The events manager at DreamHouse Realty has a hot lead from a successful open house that needs to become a Contact with an associated Opportunity. How should this be accomplished from the Campaign keeping the associated Campaign Member history?",
        options: [
            { letter: "A", text: "Add a Contact from the Campaign Member Detail page." },
            { letter: "B", text: "Clone the lead and convert the cloned record to a Contact." },
            { letter: "C", text: "Convert the lead from the Campaign Member Detail page." },
            { letter: "D", text: "Delete the lead and create a new Contact and Opportunity." }
        ],
        answer: "C"
    },
    {
        id: "q125",
        isMultiple: false,
        question: "What are the defaults for Org wide Default (OWD) and Profile permissions for all Profiles that have View All Data or Modify All Data disabled on a custom object?",
        options: [
            { letter: "A", text: "Private for OWD and No Access for Profiles" },
            { letter: "B", text: "Public Read/Write for OWD and CRED for Profiles" },
            { letter: "C", text: "Private for OWD and CRED for Profiles" },
            { letter: "D", text: "Public Read/Write for OWD and No Access for Profiles" }
        ],
        answer: "D"
    },
    {
        id: "q126",
        isMultiple: false,
        question: "An administrator at Ursa Major Solar needs to send information to an external accounting system whenever an opportunity closes. What workflow action should the administrator use to accomplish this?",
        options: [
            { letter: "A", text: "Create a Record" },
            { letter: "B", text: "Custom Notification" },
            { letter: "C", text: "Assign Task" },
            { letter: "D", text: "Outbound Message" }
        ],
        answer: "D"
    },
    {
        id: "q127",
        isMultiple: false,
        question: "The DreamHouse Realty team has a master-detail relationship set up with Open House as the parent object and Visitors as the child object. What type of field should the administrator add to the Open House object to track the number of Visitors?",
        options: [
            { letter: "A", text: "Indirect lookup" },
            { letter: "B", text: "Roll-up summary" },
            { letter: "C", text: "Cross-object formula" },
            { letter: "D", text: "Multi-select picklist" }
        ],
        answer: "B"
    },
    {
        id: "q128",
        isMultiple: false,
        question: "The administrator has added the company IP address ranges to the network access section. What will happen when a user tries to log in from outside the company network?",
        options: [
            { letter: "A", text: "Login attempts by all users are denied." },
            { letter: "B", text: "Users must enter a verification code." },
            { letter: "C", text: "Login attempts using the API are denied." },
            { letter: "D", text: "Users are redirected to the VPN." }
        ],
        answer: "B"
    },
    {
        id: "q129",
        isMultiple: false,
        question: "Ursa Major Solar recently acquired a company whose sales team has a unique sales process, with stages that are different from the current setup of stages in Salesforce. The Chief Technology Officer (CTO) has decided that the new sales team should NOT change their process at all. What should the administrator do to incorporate the new sales teams process?",
        options: [
            { letter: "A", text: "Create new values for the opportunity stage field and use field-level security to control which teams see which fields." },
            { letter: "B", text: "Create a record type and page layout for the new sales team and a custom field for the new stages." },
            { letter: "C", text: "Create new values for the opportunity stage field; create a new sales process assigned to a custom record type for the new sales team." },
            { letter: "D", text: "Create new values for the opportunity stage field; order them so that the new Sales team's values are at the bottom of the picklist." }
        ],
        answer: "C"
    },
    {
        id: "q130",
        isMultiple: false,
        question: "The administrator has created new users for 10 new employees at Universal Containers. Why are these users unable to access the account object in the Salesforce org?",
        options: [
            { letter: "A", text: "Users' profile requires permission to the account object." },
            { letter: "B", text: "Organization-wide defaults are set to private." },
            { letter: "C", text: "Users' roles are low on the Role hierarchy." },
            { letter: "D", text: "Users' profile requires a sharing rule for accounts." }
        ],
        answer: "A"
    },
    {
        id: "q131",
        isMultiple: false,
        question: "DreamHouse Realty has an approval process. A manager attempts to approve the record but receives an error. What should the administrator review to troubleshoot this request?",
        options: [
            { letter: "A", text: "Update the field-level security to view on fields that are updated in the process." },
            { letter: "B", text: "Review the page layout to ensure the fields updated in the process are visible." },
            { letter: "C", text: "Add a delegated approver for the next approver in the process" },
            { letter: "D", text: "Check if the user in the next approver is inactive or missing." }
        ],
        answer: "D"
    },
    {
        id: "q132",
        isMultiple: false,
        question: "Which tool should an administrator use to review recent configuration changes made in their org?",
        options: [
            { letter: "A", text: "Debug Logs" },
            { letter: "B", text: "Setup Audit Trail" },
            { letter: "C", text: "Field History Tracking" },
            { letter: "D", text: "Critical Updates" }
        ],
        answer: "B"
    },
    {
        id: "q133",
        isMultiple: false,
        question: "Universal Containers uses Salesforce Content to store technical manuals and videos used by support agents when troubleshooting product issues. They would like to organize these files by product to make it easier to find the correct information and limit access to support agents only. Which Content feature can be used to organize these files?",
        options: [
            { letter: "A", text: "Libraries" },
            { letter: "B", text: "60 Groups" },
            { letter: "C", text: "Featured Topics" },
            { letter: "D", text: "Data Categories" }
        ],
        answer: "A"
    },
    {
        id: "q134",
        isMultiple: false,
        question: "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to Implement this request?",
        options: [
            { letter: "A", text: "Outbound Message" },
            { letter: "B", text: "Quick Action" },
            { letter: "C", text: "Flow Builder" },
            { letter: "D", text: "Workflow Rule" }
        ],
        answer: "C"
    },
    {
        id: "q135",
        isMultiple: false,
        question: "The administrator at AW Computing wants to send off client welcome tasks and a welcome email to the primary contact automatically when an opportunity is closed won. What automation tool best accomplishes this?",
        options: [
            { letter: "A", text: "Approval Process" },
            { letter: "B", text: "Outbound Message" },
            { letter: "C", text: "Validation Rules" },
            { letter: "D", text: "Process Builder" }
        ],
        answer: "D"
    },
    {
        id: "q136",
        isMultiple: false,
        question: "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and senes. How should the administrator set up the Campaign to simplify reporting?",
        options: [
            { letter: "A", text: "Configure Campaign Member Statuses to record which event Members attended." },
            { letter: "B", text: "Add different record types for the monthly event types." },
            { letter: "C", text: "Use Campaign Hierarchy where the monthly events roll up to a parent Campaign." },
            { letter: "D", text: "Create individual Campaigns that all have the same name." }
        ],
        answer: "A"
    },
    {
        id: "q137",
        isMultiple: false,
        question: "Which setting on a profile makes a tab hidden in the App Launcher, but still allows a user to view records that would normally be found under these tab?",
        options: [
            { letter: "A", text: "App Permissions" },
            { letter: "B", text: "Object Permissions" },
            { letter: "C", text: "Tab Settings" },
            { letter: "D", text: "Org-wide Defaults" }
        ],
        answer: "C"
    },
    {
        id: "q138",
        isMultiple: false,
        question: "High Priority cases at Ursa Major Solar need to get a response in less than 3 hours or escalated to a Queue called 'High Priority Queue.' An administrator needs to configure the case management process to implement this requirement. How should the administrator achieve this goal?",
        options: [
            { letter: "A", text: "Create an assignment rule to assign all cases where status = high to the high priority queue." },
            { letter: "B", text: "Create an escalation rule to assign all cases where status = high to the high priority queue based on when the case is created." },
            { letter: "C", text: "Create an escalation rule to assign all cases where status = high to the high priority queue based on the last modification time and set the age over to 3 (hours)" },
            { letter: "D", text: "Create a case milestone to assign all cases where status = high to the high priority queue based on the last modification time and set the age over to 3 (hours)." }
        ],
        answer: "C"
    },
    {
        id: "q139",
        isMultiple: false,
        question: "Sales reps at Northern Trail Outfitters have asked for a way to change the Probability field value of their Opportunities. What should an administrator suggest to meet this request?",
        options: [
            { letter: "A", text: "Define a new Stage picklist value." },
            { letter: "B", text: "Configure Forecasting support." },
            { letter: "C", text: "Make the field editable on page layouts." },
            { letter: "D", text: "Create a custom field on Opportunity." }
        ],
        answer: "C"
    },
    {
        id: "q140",
        isMultiple: false,
        question: "A company has a complicated Sales process regarding its opportunities. The company has three different lines of business (Widget A, Widget B, Widget C) that each contain fields specific to that line of business's industry and customers. For each line of business, there is a specific set of fields that Sales users should see and a different set of fields that Marketing users should see. allow should an Administrator configure Page Layouts and Record Types for the Opportunity object so that each team sees what it needs to see, without cluttered layouts containing unnecessary fields?",
        options: [
            { letter: "A", text: "Create three Record Types (Widget A, Widget B, Widget C) with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C)." },
            { letter: "B", text: "Create one Record Type with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C)." },
            { letter: "C", text: "Create six Record Types (Sales Widget A, Sales Widget B. Sales Widget C. Marketing Widget A, Marketing Widget B, and Marketing Widget C) with one Page Layout." },
            { letter: "D", text: "Create six Record Types (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C) with six total Page Layouts, one for each Record Type." }
        ],
        answer: "A"
    },
    {
        id: "q141",
        isMultiple: false,
        question: "Northern Trail Outfitters converts support requests submitted through its website with web-to-case. The support team wants an email automatically sent to the customer containing the password reset instructions when the case subject contains the words 'forgot' and 'password'. What should the administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Omni-Channel" },
            { letter: "B", text: "Auto-response rule" },
            { letter: "C", text: "Email-to-case" },
            { letter: "D", text: "Escalation rule" }
        ],
        answer: "B"
    },
    {
        id: "q142",
        isMultiple: false,
        question: "The administrator at Cloud Kicks needs to automatically route support cases, regardless of how they are created, to a queue based on case priority. What tool should the administrator use?",
        options: [
            { letter: "A", text: "Assignment Rules" },
            { letter: "B", text: "Web-to-Case" },
            { letter: "C", text: "Email-to-Case" },
            { letter: "D", text: "Auto-Response Rules" }
        ],
        answer: "A"
    },
    {
        id: "q143",
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
        id: "q144",
        isMultiple: false,
        question: "Ursa Major Solar wants to know which of its marketing efforts are helping the team win opportunities. What should an administrator configure to provide these insights?",
        options: [
            { letter: "A", text: "List Email Activities" },
            { letter: "B", text: "Campaign Influence" },
            { letter: "C", text: "Map Custom Lead Fields" },
            { letter: "D", text: "Campaign Hierarchy" }
        ],
        answer: "B"
    },
    {
        id: "q145",
        isMultiple: false,
        question: "An administrator wants to create a form in Salesforce for users to fill out when they lose a client. Which automation tool supports creating a wizard to accomplish this goal?",
        options: [
            { letter: "A", text: "Process Builder" },
            { letter: "B", text: "Approval Process" },
            { letter: "C", text: "Outbound Message" },
            { letter: "D", text: "Flow Builder" }
        ],
        answer: "D"
    },
    {
        id: "q146",
        isMultiple: false,
        question: "Cloud Kicks needs to be able to show different picklist values for sales and marketing users. Which option will meet this requirement?",
        options: [
            { letter: "A", text: "Two page layouts, one record type, two picklists" },
            { letter: "B", text: "Two Permission sets, one record type, one picklist" },
            { letter: "C", text: "One record type, two profiles, one picklist" },
            { letter: "D", text: "One page layout, two record types, one picklist" }
        ],
        answer: "D"
    },
    {
        id: "q147",
        isMultiple: false,
        question: "A user at Ursa Major Solar attempts to log in to Salesforce from an IP address that is outside the login IP range on the user’s profile but within the organization-wide trusted IP range. What occurs as a result of this scenario?",
        options: [
            { letter: "A", text: "The user will be to log in after answering one security question." },
            { letter: "B", text: "The user will be able to log in without activating the computer." },
            { letter: "C", text: "The user will be unable to log in at all." },
            { letter: "D", text: "The user will be able to log in after the computer is activated." }
        ],
        answer: "C"
    },
    {
        id: "q148",
        isMultiple: false,
        question: "Universal Containers has decided to implement Salesforce Einstein Analytics for a subset of its users. How should the administrator enable users with permissions to use Einstein Analytics features?",
        options: [
            { letter: "A", text: "Create a custom permission set, then add the permission set to existing user profiles." },
            { letter: "B", text: "Create a new permission set for each type of Einstein Analytics permissions, then assign users." },
            { letter: "C", text: "Create a sharing group for users, then add the Einstein Analytics permissions." },
            { letter: "D", text: "Create new profiles for users that will have Einstein Analytics permissions." }
        ],
        answer: "B"
    },
    {
        id: "q149",
        isMultiple: false,
        question: "Northern Trail Outfitters has a new flow that automatically sets field values when a new account is created. The flow is launched by a process, but the flow is not working properly. How should an administrator check why it's not working properly?",
        options: [
            { letter: "A", text: "Set up email logs and review the send error logs." },
            { letter: "B", text: "Review debug logs with the flow logging level." },
            { letter: "C", text: "Use the native feature in the Flow Builder." },
            { letter: "D", text: "View the setup audit trail and review for errors." }
        ],
        answer: "C"
    },
    {
        id: "q150",
        isMultiple: false,
        question: "Cloud Kicks wants a report Co categorize accounts into small, medium, and large based on the dollar value found In the Contract Value field. What feature should an administrator use to meet this request?",
        options: [
            { letter: "A", text: "Group Rows" },
            { letter: "B", text: "Filter Logic" },
            { letter: "C", text: "Detail Column" },
            { letter: "D", text: "Bucket Column" }
        ],
        answer: "D"
    }
];