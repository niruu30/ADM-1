const quizData = [
    {
        id: "q91",
        isMultiple: false,
        question: "AW Computing needs to capture a loss reason in a rich text field when an opportunity is closed lost. How should an administrator configure this requirement?",
        options: [
            { letter: "A", text: "Create a validation rule to display an error if stage is closed lost and Loss Reason is blank." },
            { letter: "B", text: "Select the required checkbox next to the Loss Reason field on the page layout." },
            { letter: "C", text: "Check the required checkbox on the Loss Reason field in Object Manager." },
            { letter: "D", text: "Configure a workflow rule to display an error if Loss Reason is blank." }
        ],
        answer: "A"
    },
    {
        id: "q92",
        isMultiple: false,
        question: "An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000. What should the administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Key Deals component on the homepage" },
            { letter: "B", text: "Set up Big Deal Alerts for the amount." },
            { letter: "C", text: "Enable Opportunity Update Reminders." },
            { letter: "D", text: "Opportunity warnings in Kanban View" }
        ],
        answer: "B"
    },
    {
        id: "q93",
        isMultiple: false,
        question: "Northern Trail Outfitters wants to know the average stage duration for all closed opportunities. How should an administrator support this request?",
        options: [
            { letter: "A", text: "Use Process Builder to capture the daily average on each Opportunity." },
            { letter: "B", text: "Run the Opportunity Stage Duration report." },
            { letter: "C", text: "Add formula fields to track Stages on each Opportunity." },
            { letter: "D", text: "Refresh weekly reporting snapshots for Closed Opportunities." }
        ],
        answer: "B"
    },
    {
        id: "q94",
        isMultiple: false,
        question: "Which object must be related in order to create an opportunity record?",
        options: [
            { letter: "A", text: "Lead" },
            { letter: "B", text: "Account" },
            { letter: "C", text: "Contact" },
            { letter: "D", text: "Quote" }
        ],
        answer: "B"
    },
    {
        id: "q95",
        isMultiple: false,
        question: "Ursa Major Solar utilizes accounts in its sales process; however, not all users have access to them. New users require read access to accounts. Additionally, four new users require edit access. ? What should an administrator do to configure access for the new users?",
        options: [
            { letter: "A", text: "Configure a profile to grant account view access and a permission set to grant account edit access to specific users." },
            { letter: "B", text: "Configure a permission set to grant account edit access to specific users and modify the standard user profile." },
            { letter: "C", text: "Configure a profile to grant account edit access and a permission set to restrict read access to specific users." },
            { letter: "D", text: "Configure a sharing rule for account view access and another sharing rule for edit access to specific users." }
        ],
        answer: "A"
    },
    {
        id: "q96",
        isMultiple: false,
        question: "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated. Which automation solution should an administrator use to meet this request?",
        options: [
            { letter: "A", text: "Approval Process" },
            { letter: "B", text: "Workflow Field Update" },
            { letter: "C", text: "Lightning Web Component" },
            { letter: "D", text: "Process Builder" }
        ],
        answer: "D"
    },
    {
        id: "q97",
        isMultiple: false,
        question: "Which feature should Ursa Major Solar use if they want their support agents who are skilled in a particular product line to own cases directly after customer log then from an automated channel?",
        options: [
            { letter: "A", text: "Case team routing" },
            { letter: "B", text: "Case escalation rules" },
            { letter: "C", text: "Assignment rules" },
            { letter: "D", text: "Workflow" }
        ],
        answer: "C"
    },
    {
        id: "q98",
        isMultiple: false,
        question: "Ursa Major Solar uses Opportunity to track sales of solar energy products. The company has two separate sales teams that focus on different energy markets. The services team also wants to use Opportunity to track installation, All three teams will need to use different fields and stages. How should the administrator configure this requirement?",
        options: [
            { letter: "A", text: "Create three sales processes. Create three record types and one page layout." },
            { letter: "B", text: "Create one sales process. Create three record types and three page layouts." },
            { letter: "C", text: "Create one sales process. Create one record type and three page layout." },
            { letter: "D", text: "Create three sales processes. Create three record types and three page layouts." }
        ],
        answer: "D"
    },
    {
        id: "q99",
        isMultiple: false,
        question: "Cloud Kicks wants to allow customers to create their own cases while visiting Its public homepage. What should the administrator recommend?",
        options: [
            { letter: "A", text: "Omni-Channel" },
            { letter: "B", text: "Email-to-Case" },
            { letter: "C", text: "Web-to-Case" },
            { letter: "D", text: "SMS Response" }
        ],
        answer: "C"
    },
    {
        id: "q100",
        isMultiple: false,
        question: "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
        options: [
            { letter: "A", text: "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry." },
            { letter: "B", text: "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry." },
            { letter: "C", text: "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule." },
            { letter: "D", text: "Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule." }
        ],
        answer: "B"
    },
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
        question: "Universal Containers has a Contact Lightning record page with a component that shows Linkedln data. The sales team would like to only show this component to sales users when they are on their mobile phones. Which two solutions should the administrator use to fulfill this requirement? Choose 2 answers",
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
    }

];