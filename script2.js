const quizData = [
    {
        id: "q101",
        isMultiple: true,
        question: "Ursa Major Solar uses Validation Rule Fields. What are two of these fields? Choose 2 answers",
        options: [
            { letter: "A", text: "Owner" },
            { letter: "B", text: "Error Message" },
            { letter: "C", text: "Error Condition Formula" },
            { letter: "D", text: "Active Date" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q102",
        isMultiple: true,
        question: "Universal Containers wants to increase the security of their org by requiring stricter user passwords. Which two of the following should an administrator configure? Choose 2 answers",
        options: [
            { letter: "A", text: "Prevent common words" },
            { letter: "B", text: "Password different than username" },
            { letter: "C", text: "Minimum password length" },
            { letter: "D", text: "Password complexity requirement" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q103",
        isMultiple: true,
        question: "An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app. Which two types of pages could an administrator build and customize using the Lightning App Builder? Choose 2 answers",
        options: [
            { letter: "A", text: "Record page" },
            { letter: "B", text: "App page" },
            { letter: "C", text: "User page" },
            { letter: "D", text: "Dashboard page" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q104",
        isMultiple: true,
        question: "Campaign member can be associated with which two objects? Choose 2 answers",
        options: [
            { letter: "A", text: "Opportunity" },
            { letter: "B", text: "Contact" },
            { letter: "C", text: "Account" },
            { letter: "D", text: "Lead" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q105",
        isMultiple: true,
        question: "Which three can be modified on standard object fields? Choose 3 answers",
        options: [
            { letter: "A", text: "Field type" },
            { letter: "B", text: "Label" },
            { letter: "C", text: "Help text" },
            { letter: "D", text: "Default text" },
            { letter: "E", text: "Picklist values" }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q106",
        isMultiple: true,
        question: "Which two actions should an administrator perform with Case escalation rules? Choose 2 answers",
        options: [
            { letter: "A", text: "Change the Case Priority." },
            { letter: "B", text: "Re-open the Case." },
            { letter: "C", text: "Re-assign the Case." },
            { letter: "D", text: "Send email notifications." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q107",
        isMultiple: true,
        question: "Sales reps miss key fields when filling out an opportunity record through the sales process. Reps need to move forward in stages but are unable to enter a previous stage. Which three options should the administrator use to address this need? Choose 3 answers",
        options: [
            { letter: "A", text: "Use validation rules." },
            { letter: "B", text: "Configure Opportunity Path." },
            { letter: "C", text: "Enable guided selling." },
            { letter: "D", text: "Mark fields required on the page layout" },
            { letter: "E", text: "Use Flow to mark fields required." }
        ],
        answer: ["A", "B", "D"]
    },
    {
        id: "q108",
        isMultiple: true,
        question: "Ursa Major Solar uses a validation rule to prevent invalid data. What are three conditions where these rule is used? Choose 3 answers",
        options: [
            { letter: "A", text: "When records are imported" },
            { letter: "B", text: "When records are updated by a workflow rule" },
            { letter: "C", text: "When records are deleted by a user." },
            { letter: "D", text: "When records are submitted using web-to-lead." },
            { letter: "E", text: "When records are edited and saved by @ user." }
        ],
        answer: ["A", "C", "D"]
    },
    {
        id: "q109",
        isMultiple: true,
        question: "Ursa Major (UH) is using an approval process. Which two statements are correct about this scenario? Choose 2 answers",
        options: [
            { letter: "A", text: "To track the process, UM can use the approval history related list." },
            { letter: "B", text: "An approval action defines the result of record approval or rejection." },
            { letter: "C", text: "UM can use an assignment rule to define the approver for each step in the process." },
            { letter: "D", text: "A delegated approver can reassign approval requests." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q110",
        isMultiple: true,
        question: "Sales users at Universal Containers are reporting that it Is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field. Which two options should the administrator recommend to help simplify the process? Choose 2 answers",
        options: [
            { letter: "A", text: "Add a Path for stage to the opportunity record page." },
            { letter: "B", text: "Use a Kanban list view for Opportunity." },
            { letter: "C", text: "Configure an autolaunched flow for Opportunity editing." },
            { letter: "D", text: "Create a simplified Opportunity page layout." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q111",
        isMultiple: true,
        question: "The sales director at Cloud Kicks wants to be able to predict upcoming revenue In the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure? Choose 2 answers",
        options: [
            { letter: "A", text: "Opportunity List View" },
            { letter: "B", text: "Forecasting" },
            { letter: "C", text: "Sales Quotas" },
            { letter: "D", text: "Opportunity Stages" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q112",
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
        id: "q113",
        isMultiple: true,
        question: "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases. Which two options should the administrator use to help the support team? Choose 2 answers",
        options: [
            { letter: "A", text: "Create a new queue and add Cases as an available object." },
            { letter: "B", text: "Configure a flow to assign the cases to the queue." },
            { letter: "C", text: "Add Cases to the existing queue as available object." },
            { letter: "D", text: "Use assignment rules to set the queue as the owner of the case." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q114",
        isMultiple: true,
        question: "The administrator at Cloud Kicks has created an approval process for time off requests. Which two automated actions are available to be added as part of approval process? Choose 2 answers",
        options: [
            { letter: "A", text: "Autolaunched Flow" },
            { letter: "B", text: "Field Update" },
            { letter: "C", text: "Chatter Post" },
            { letter: "D", text: "Email Alert" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q115",
        isMultiple: true,
        question: "Cloud Kicks has the organization-wide defaults for Opportunity set to Private. Which two features should the administrator use to open up access to opportunity records for sales users working on collaborative deals? Choose 2 answers",
        options: [
            { letter: "A", text: "Profiles" },
            { letter: "B", text: "Sharing rules" },
            { letter: "C", text: "Sharing set" },
            { letter: "D", text: "Role hierarchy" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q116",
        isMultiple: true,
        question: "Universal Containers has a Contact Lightning record page with a component that shows Unkedln data. The sales team would like to only show this component to sales users when they are on their mobile phones. Which two solutions should the administrator use to fulfill this requirement? Choose 2 answers",
        options: [
            { letter: "A", text: "Filter the component visibility with View = Mobile/Tablet." },
            { letter: "B", text: "Filter the component visibility with Form Factor = Phone." },
            { letter: "C", text: "Filter the component visibility with User > Role > Name = Sales User." },
            { letter: "D", text: "Filter the component visibility with User > Profile > Name = Sales User." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q117",
        isMultiple: true,
        question: "Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages. Which two steps should the administrator configure to meet this requirement? Choose 2 answers",
        options: [
            { letter: "A", text: "Create a custom object for shoe designs." },
            { letter: "B", text: "Add a custom master-detail field for shoe designs on the Product object." },
            { letter: "C", text: "Configure a custom lookup field for shoe designs on the Product object." },
            { letter: "D", text: "Use the standard object for designs." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q118",
        isMultiple: true,
        question: "Cloud Kicks has asked the administrator to test a new screen flow that creates contacts. What are two key components of testing the flow? Choose 2 answers",
        options: [
            { letter: "A", text: "Set up a flow interview to test the flow." },
            { letter: "B", text: "Run the flow using it to create contacts." },
            { letter: "C", text: "Test the flow in a sandbox." },
            { letter: "D", text: "Use Debug to test the flow in Flow Builder." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q119",
        isMultiple: true,
        question: "Which two objects can an administrator customize the Stage Setup Flow? Choose 2 answers",
        options: [
            { letter: "A", text: "Opportunities" },
            { letter: "B", text: "Leads" },
            { letter: "C", text: "Campaign Members" },
            { letter: "D", text: "Campaigns" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q120",
        isMultiple: true,
        question: "Universal Containers wants to ensure that Its org Is secure and has asked an Administrator to configure password requirements for its users. Which three actions are Administrators able to configure? Choose 3 answers",
        options: [
            { letter: "A", text: "Set the length of time before passwords expire." },
            { letter: "B", text: "Set requirement that passwords must be unique for each user." },
            { letter: "C", text: "Set password complexity requirements." },
            { letter: "D", text: "Set prohibited password values." },
            { letter: "E", text: "Set maximum invalid login attempts." }
        ],
        answer: ["A", "C", "E"]
    },
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
    },
    {
        id: "q151",
        isMultiple: false,
        question: "Universal Containers is using lead assignment rules and record types. The sales team has the record type 'Corporate Leads' assigned as their default record type. The sales team has reported that Leads assigned to them are assigned to a different record type. They have requested to have all Leads assigned to them be assigned to the 'Corporate Leads' record type. How should an administrator configure the sales team's request?",
        options: [
            { letter: "A", text: "Select keep the existing record type in Lead settings." },
            { letter: "B", text: "Select preserve lead status in Lead settings." },
            { letter: "C", text: "Select override the existing record type with the assignee's default record type in Lead settings." },
            { letter: "D", text: "Select require validation for converted Leads in Lead settings." }
        ],
        answer: "C"
    },
    {
        id: "q152",
        isMultiple: false,
        question: "What is the maximum number of objects that can be added to a custom report type?",
        options: [
            { letter: "A", text: "One as long as the object has a master-child relationship" },
            { letter: "B", text: "Unlimited as long as the objects have associations" },
            { letter: "C", text: "Four as long as the objects have associations" },
            { letter: "D", text: "Two as long as the objects have associations" }
        ],
        answer: "C"
    },
    {
        id: "q153",
        isMultiple: false,
        question: "Which set of small and large data backup methods are available in native Salesforce?",
        options: [
            { letter: "A", text: "Report Exports, Weekly Data Export Service, and Data Loader Exports" },
            { letter: "B", text: "Dashboard Exports, Report Exports, and Weekly Data Export Service" },
            { letter: "C", text: "Mass Export Wizard, Weekly Data Export Service, and Data Loader Exports Calculator" },
            { letter: "D", text: "Mass Exports, Weekly Data Export Service, and Data Loader Exports" }
        ],
        answer: "A"
    },
    {
        id: "q154",
        isMultiple: false,
        question: "Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product. What should an administrator do to satisfy this requirement?",
        options: [
            { letter: "A", text: "Create a queue and a criteria-based sharing rule." },
            { letter: "B", text: "Create a user-based sharing rule and an ad-hoc case team." },
            { letter: "C", text: "Create an auto-response rule and a public group." },
            { letter: "D", text: "Create a predefined case team and an assignment rule." }
        ],
        answer: "D"
    },
    {
        id: "q155",
        isMultiple: false,
        question: "Sales executives at Ursa Major Solar (USM) frequently schedule virtual and remote meetings with key customer stakeholders. USM wants to track activities for this meeting category to clearly display customer meetings in the account, contact, or opportunity page layouts, as well as adding this data to reports. What should the administrator do to meet this goal?",
        options: [
            { letter: "A", text: "Inform the user to manually enter the meeting details in the description field on accounts, contacts, and opportunities." },
            { letter: "B", text: "Inform the user to manually enter the meeting details in the account comments." },
            { letter: "C", text: "Add a new value to the type field on accounts, contacts, and opportunities." },
            { letter: "D", text: "Add a new value to the type field on tasks used for accounts, contacts, and opportunities." }
        ],
        answer: "D"
    },
    {
        id: "q156",
        isMultiple: false,
        question: "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
        options: [
            { letter: "A", text: "Hire a consultant to build the custom dashboards." },
            { letter: "B", text: "Build the dashboards manually to meet the deadline." },
            { letter: "C", text: "Check the AppExchange for a prebuilt solution that can be easily customized." },
            { letter: "D", text: "Train someone on the sales and marketing teams to build dashboards." }
        ],
        answer: "C"
    },
    {
        id: "q157",
        isMultiple: false,
        question: "The administrator at Cloud Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, they want to reference fields from the associated contact record. What should the administrator do to pull contact fields into the custom report?",
        options: [
            { letter: "A", text: "Use a dashboard with filters to show Event and contact data as requested." },
            { letter: "B", text: "Configure formula fields on Event to populate contact information." },
            { letter: "C", text: "Edit the custom Event report type and add fields related via lookup." },
            { letter: "D", text: "Create a new report type with Event as the primary object and Contact as a related object." }
        ],
        answer: "C"
    },
    {
        id: "q158",
        isMultiple: false,
        question: "Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales team A with sales team B?",
        options: [
            { letter: "A", text: "Hierarchical sharing" },
            { letter: "B", text: "Criteria-based sharing" },
            { letter: "C", text: "Use manual sharing" },
            { letter: "D", text: "Owner-based sharing" }
        ],
        answer: "D"
    },
    {
        id: "q159",
        isMultiple: false,
        question: "Ursa Major Solar users want to utilize Salesforce Knowledge. Which statement accurately describes Knowledge?",
        options: [
            { letter: "A", text: "An automated tool that closes Cases based on historical information" },
            { letter: "B", text: "A knowledge base comprised of articles that can be written and utilized by support agents" },
            { letter: "C", text: "A knowledge base that uses Machine Learning to generate an article to solve customer support issues" },
            { letter: "D", text: "An automated Machine Learning tool that converts Leads to Opportunities given a predefined set of conditions" }
        ],
        answer: "B"
    },
    {
        id: "q160",
        isMultiple: false,
        question: "Northern Trail Outfitters has the Case object set to private. The support manager raised a concern that reps have a broader view of data than expected and can see all cases on their group's dashboards. What could be causing reps to have inappropriate access to data on dashboards?",
        options: [
            { letter: "A", text: "Dynamic Dashboards" },
            { letter: "B", text: "Dashboard Subscriptions" },
            { letter: "C", text: "Public Dashboards" },
            { letter: "D", text: "Dashboard Filters" }
        ],
        answer: "A"
    },
    {
        id: "q161",
        isMultiple: false,
        question: "Which setting on a profile makes a tab not accessible on the All Tabs page or visible in any app, but still allows a user to view records that would normally be found under this tab?",
        options: [
            { letter: "A", text: "Object Permissions" },
            { letter: "B", text: "App Permissions" },
            { letter: "C", text: "Tab Settings" },
            { letter: "D", text: "Org-wide Defaults" }
        ],
        answer: "C"
    },
    {
        id: "q162",
        isMultiple: true,
        question: "The administrator at Ursa Major Solar imported records into an object by mistake. Which two tools should be used to undo this import? Choose 2 answers",
        options: [
            { letter: "A", text: "Weekly Data Export" },
            { letter: "B", text: "Data Loader" },
            { letter: "C", text: "Data Import Wizard" },
            { letter: "D", text: "Mass Delete Records" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q163",
        isMultiple: true,
        question: "In which two locations can a system administrator assign a page layout? Choose 2 answers",
        options: [
            { letter: "A", text: "Record Type" },
            { letter: "B", text: "Role" },
            { letter: "C", text: "App" },
            { letter: "D", text: "Profile" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q164",
        isMultiple: true,
        question: "Which three aspects of standard fields should an administrator customize? Choose 3 answers",
        options: [
            { letter: "A", text: "Picklist values" },
            { letter: "B", text: "Decimal places" },
            { letter: "C", text: "Field history tracking" },
            { letter: "D", text: "Field name" },
            { letter: "E", text: "Help text" }
        ],
        answer: ["A", "C", "E"]
    },
    {
        id: "q165",
        isMultiple: true,
        question: "What are two considerations an administrator should keep in mind when working with Salesforce objects? Choose 2 answers",
        options: [
            { letter: "A", text: "Only standard objects support master-detail relationships" },
            { letter: "B", text: "Standard objects are included with Salesforce." },
            { letter: "C", text: "Custom and standard objects have standard fields." },
            { letter: "D", text: "A new standard object can be created." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q166",
        isMultiple: true,
        question: "AW Computing would like to improve its Case Lightning record page by including: • A filtered component to display a message in bold font when a Case is saved as a critical record type. • A quick way to update the Account status from the Case layout. Which two components should an administrator use to satisfy these requests? Choose 2 answers",
        options: [
            { letter: "A", text: "Related record" },
            { letter: "B", text: "Record detail" },
            { letter: "C", text: "Rich text" },
            { letter: "D", text: "Related list" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q167",
        isMultiple: true,
        question: "Which two ways allow a sales user to relate an opportunity to a campaign? Choose 2 answers",
        options: [
            { letter: "A", text: "Use the campaign influence related list on the opportunity." },
            { letter: "B", text: "Select the primary campaign source for the opportunity." },
            { letter: "C", text: "Use the campaign hierarchy related list on the opportunity." },
            { letter: "D", text: "Select the campaign record type when creating the opportunity" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q168",
        isMultiple: true,
        question: "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs. Which two options should the administrator suggest? Choose 2 answers",
        options: [
            { letter: "A", text: "Install in a sandbox" },
            { letter: "B", text: "Download into a Trailhead Playground." },
            { letter: "C", text: "Test Drive in a production org." },
            { letter: "D", text: "Check edition compatibility." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q169",
        isMultiple: true,
        question: "The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign. Which two solutions should the administrator use to modify the picklist field values? Choose 2 answers",
        options: [
            { letter: "A", text: "Mass modify the Campaign Member Statuses related list" },
            { letter: "B", text: "Modify the picklist value on the Campaign Member Statuses related list." },
            { letter: "C", text: "Add the Campaign Member Statuses related list to the Page Layout." },
            { letter: "D", text: "Edit the picklist values for the Campaign Status in Object Manager." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q170",
        isMultiple: true,
        question: "Ursa Major Solar is setting up case assignment rules. What are two places where the cases can be assigned? Choose 2 answers",
        options: [
            { letter: "A", text: "Profile" },
            { letter: "B", text: "User" },
            { letter: "C", text: "Contact" },
            { letter: "D", text: "Queue" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q171",
        isMultiple: true,
        question: "Ursa Major Solar wants to upload data to Salesforce and heard about the Data Import Wizard. They want to upload the following data: Os) * 60,000 Accounts * 20,000 Contacts Calculator * 10,000 Opportunities * 5,000 Conference custom object records What two considerations should be kept in mind when using the Data Import Wizard? Choose 2 answers",
        options: [
            { letter: "A", text: "There is a limit of 50,000 records that can be uploaded at once." },
            { letter: "B", text: "There is a limit of 10,000 records that can be uploaded at once." },
            { letter: "C", text: "Custom Objects need to be uploaded with a different tool." },
            { letter: "D", text: "Opportunities need to be uploaded with a different tool." }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q172",
        isMultiple: true,
        question: "After a recent restructure of its Sales Department. Ursa Major Solar is having issues with records being omitted in the new Opportunity Report. Which three questions should the administrator ask to research this issue? Choose 3 answers",
        options: [
            { letter: "A", text: "Did the sales manager start from a copy or done of an existing report?" },
            { letter: "B", text: "Are records currently being shared with the sales manager?" },
            { letter: "C", text: "Do owners of all records have Roles and correct Territory Assignments?" },
            { letter: "D", text: "Do the records the sales managers expect to see match the filter criteria?" },
            { letter: "E", text: "Have the owners of the records been frozen?" }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q173",
        isMultiple: true,
        question: "Ursa Major Solar is using products and price books. Which two items should an administrator take into considerations about these features? Choose 2 answers",
        options: [
            { letter: "A", text: "If price books contain assets, they can NOT contain products." },
            { letter: "B", text: "Products without a price are automatically added to the standard price book." },
            { letter: "C", text: "The standard and list price for a product can be listed In more than one currency." },
            { letter: "D", text: "A product can have a different list price in different price books." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q174",
        isMultiple: true,
        question: "Northern TV Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities. The VP of sales requested that this information be accessible on the opportunity and available for reporting. Which two options should the administrator configure to meet these requirements? Choose 2 answers",
        options: [
            { letter: "A", text: "Add the Campaign Member related list to the Opportunity page layout." },
            { letter: "B", text: "Customize Campaign Role." },
            { letter: "C", text: "Customize Opportunity Contact Role." },
            { letter: "D", text: "Add the Opportunity Contact Role related list to the Opportunity page layout." },
            { letter: "E", text: "Customize Campaign Member Role." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q175",
        isMultiple: true,
        question: "The support group at Universal Containers wants agents to capture different Information for product support and Inquiry cases. In addition, the lifecycle for product support cases should have more steps than the lifecycle for inquiry cases. Which three features should an administrator use to meet these requirements? Choose 3 answers",
        options: [
            { letter: "A", text: "Support processes" },
            { letter: "B", text: "Field -level security" },
            { letter: "C", text: "Record types" },
            { letter: "D", text: "Permission sets" },
            { letter: "E", text: "Page layouts" }
        ],
        answer: ["A", "C", "E"]
    },
    {
        id: "q176",
        isMultiple: true,
        question: "Ursa Major Solar wants to customize Activities (tasks and events). What are three types of customization that occur? Choose 3 answers",
        options: [
            { letter: "A", text: "Validation Rules" },
            { letter: "B", text: "Assignment Rules" },
            { letter: "C", text: "Custom Fields" },
            { letter: "D", text: "Field Tracking" },
            { letter: "E", text: "Workflow Rules" }
        ],
        answer: ["A", "C", "E"]
    },
    {
        id: "q177",
        isMultiple: true,
        question: "Which two methods can be used to share records using sharing rules? Choose 2 answers",
        options: [
            { letter: "A", text: "Roles and subordinates" },
            { letter: "B", text: "Profiles" },
            { letter: "C", text: "Queues" },
            { letter: "D", text: "Public groups" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q178",
        isMultiple: true,
        question: "Universal Containers has a public read only sharing model on accounts. A new sales team has been created that will be dealing with high-security customers. The administrator has been asked to hide these accounts from anyone NOT on this team. Which two steps must be taken to hide these accounts without impacting access to the rest of the Sales team? Choose 2 answers",
        options: [
            { letter: "A", text: "Create a new account type to separate both teams." },
            { letter: "B", text: "Create ownership-based sharing rules." },
            { letter: "C", text: "Change the new team role to be outside the company hierarchy." },
            { letter: "D", text: "Change organization-wide default on account to private." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q179",
        isMultiple: true,
        question: "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors. Which two tools should on administrator configure? Choose 2 answers",
        options: [
            { letter: "A", text: "Outbound Message" },
            { letter: "B", text: "Quick Acton" },
            { letter: "C", text: "Email Alert Action" },
            { letter: "D", text: "Approval Process" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q180",
        isMultiple: true,
        question: "A time -dependent action Is placed In the workflow queue when the record Is created. Which two scenarios will cause the action to be removed from the queue? Choose 2 answers",
        options: [
            { letter: "A", text: "When the action is deleted from the workflow queue" },
            { letter: "B", text: "When a validation rule is triggered for the record" },
            { letter: "C", text: "When another record triggers the same workflow rule" },
            { letter: "D", text: "When the record no longer matches the rule criteria" }
        ],
        answer: ["A", "D"]
    },
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
    }

];