const quizData = [
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
    }
];