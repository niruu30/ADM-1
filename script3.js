const quizData = [
    {
        id: "q61",
        isMultiple: false,
        question: "Users at Universal Containers need the ability to save email templates in the following folder: Unfiled Public Email Templates'' Currently, users are unable to do so. Which action should an administrator take to allow users to save emails to this folder?",
        options: [
            { letter: "A", text: "Navigate to the profile of each user and check the box for manage public template." },
            { letter: "B", text: "Navigate to the email templates and manually share each with the profile of the specific users." },
            { letter: "C", text: "Navigate to the email template and manually share each with the specific users." },
            { letter: "D", text: "Navigate to the record and check the box for manage public templates." }
        ],
        answer: "A"
    },
    {
        id: "q62",
        isMultiple: false,
        question: "Northern Trail Outfitters has two sales groups. Each group has its own unique sales process. Management wants to ensure that the sales groups see their relevant sales process when working on opportunities. How should an administrator meet this requirement?",
        options: [
            { letter: "A", text: "Page Layouts" },
            { letter: "B", text: "Record types" },
            { letter: "C", text: "Enable Paths" },
            { letter: "D", text: "Opportunity Teams" }
        ],
        answer: "B"
    },
    {
        id: "q63",
        isMultiple: false,
        question: "What should an administrator consider when setting up Case Feed?",
        options: [
            { letter: "A", text: "Case Feed replaces the standard case detail page by default." },
            { letter: "B", text: "Chatter Feed tracking must be enabled for the case object." },
            { letter: "C", text: "Case Feed requires the Service Cloud User feature license." },
            { letter: "D", text: "The Use Case Feed permission is automatically active for all profiles" }
        ],
        answer: "B"
    },
    {
        id: "q64",
        isMultiple: false,
        question: "DreamHouse Realty agents are double-booking open house event nights. The events manager wants an event submission process to help agents fill in event details and request dates. How should an administrator accomplish this request?",
        options: [
            { letter: "A", text: "Create a campaign for agents to request event dates." },
            { letter: "B", text: "Create a workflow rule to update the Event Date field." },
            { letter: "C", text: "Create a sharing rule so that other agents can view events." },
            { letter: "D", text: "Create an approval process on the Campaign object." }
        ],
        answer: "C"
    },
    {
        id: "q65",
        isMultiple: false,
        question: "Universal Containers (UC) would like to count the number of open cases associated with each Account and update the Account with this value every Friday evening. UC has several hundred open cases at any given time. What should the administrator use to complete this request?",
        options: [
            { letter: "A", text: "Use a scheduled Process Builder" },
            { letter: "B", text: "Use a record triggered flow." },
            { letter: "C", text: "Use a scheduled flow." },
            { letter: "D", text: "Use a Roll-Up Summary field on Case." }
        ],
        answer: "C"
    },
    {
        id: "q66",
        isMultiple: false,
        question: "Northern Trail Outfitters held an event for hikers to blaze the trail for the new year. Their marketing team collected over a million new lead records to upload into Salesforce. What is the recommended method for uploading this data?",
        options: [
            { letter: "A", text: "Lightning Sync" },
            { letter: "B", text: "AppExchange app" },
            { letter: "C", text: "Data Import Wizard" },
            { letter: "D", text: "Data Loader" }
        ],
        answer: "D"
    },
    {
        id: "q67",
        isMultiple: false,
        question: "An administrator at Universal Containers is reviewing current security settings in the company's Salesforce org. What should the administrator do to prevent unauthorized access to Salesforce?",
        options: [
            { letter: "A", text: "Disable TLS requirements for sessions" },
            { letter: "B", text: "Enable multi-factor authentication" },
            { letter: "C", text: "Enable caching and autocomplete on login page" },
            { letter: "D", text: "Customize organization-wide defaults" }
        ],
        answer: "B"
    },
    {
        id: "q68",
        isMultiple: false,
        question: "Users in separate departments are able to see and edit different fields on Opportunities. The Sales team can edit all fields on the Opportunity while the Support team has read-only access to these fields. Where is field -level Security controlled for users on these teams?",
        options: [
            { letter: "A", text: "Sharing Rules" },
            { letter: "B", text: "Role" },
            { letter: "C", text: "Profile" },
            { letter: "D", text: "Public Groups" }
        ],
        answer: "C"
    },
    {
        id: "q69",
        isMultiple: false,
        question: "Northern Trail Outfitters has asked an administrator to ensure that when a contact with a title of CEO is created, the contact's account record gets updated with the CEO's name. Which feature should an administrator use to implement this request?",
        options: [
            { letter: "A", text: "Process Builder" },
            { letter: "B", text: "Validation Rule" },
            { letter: "C", text: "Workflow Rule" },
            { letter: "D", text: "Quick Action" }
        ],
        answer: "A"
    },
    {
        id: "q70",
        isMultiple: false,
        question: "Ursa Major Solar has a private sharing model on opportunities. Leadership has asked the administrator to create a new custom object that will track customer payment information and will link to the opportunity. Only those users with access to the opportunity should be able to see the records on the new object. What should the administrator create to achieve this goal?",
        options: [
            { letter: "A", text: "A lookup relationship with profile permissions" },
            { letter: "B", text: "A lookup relationship with a criteria-based sharing rule" },
            { letter: "C", text: "A master-detail relationship with profile permissions" },
            { letter: "D", text: "A master-detail relationship with a criteria-based sharing rule" }
        ],
        answer: "C"
    },
    {
        id: "q71",
        isMultiple: false,
        question: "Northern Trail Outfitters imported records for their marketing team. The administrator notices that some of the records failed to import with the data loader. What should that administrator do to import data without failures?",
        options: [
            { letter: "A", text: "Run the import in batch mode." },
            { letter: "B", text: "Use the import wizard to import the records." },
            { letter: "C", text: "Deactivate validation rules before running the import." },
            { letter: "D", text: "Run the import with the deduplication rules off." }
        ],
        answer: "C"
    },
    {
        id: "q72",
        isMultiple: false,
        question: "Ursa Major Solar’s administrator needs to create a custom field to track a specific tier 2 support user… What is the appropriate data type to utilize when creating this custom field?",
        options: [
            { letter: "A", text: "Lookup relationship" },
            { letter: "B", text: "Lookup filter" },
            { letter: "C", text: "Hierarchical relationship" },
            { letter: "D", text: "Formula" }
        ],
        answer: "A"
    },
    {
        id: "q73",
        isMultiple: false,
        question: "Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow. How should the administrator address this issue?",
        options: [
            { letter: "A", text: "Use a fault connector and display a screen with text explaining what went wrong and how to correct it." },
            { letter: "B", text: "Remove validation rules so that the users are able to proceed without complete records." },
            { letter: "C", text: "Create a permission set to allow users to bypass the error." },
            { letter: "D", text: "Uncheck the End User Flow Errors box in Setup." }
        ],
        answer: "A"
    },
    {
        id: "q74",
        isMultiple: false,
        question: "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status.",
        options: [
            { letter: "A", text: "Global Value Picklists" },
            { letter: "B", text: "Predefined Field Values" },
            { letter: "C", text: "Validation Rules" },
            { letter: "D", text: "Dependent Picklists" }
        ],
        answer: "C"
    },
    {
        id: "q75",
        isMultiple: false,
        question: "At Ursa Major Solar, Salesforce users have a session timeout of 12 hours, but management wants the session timeout to be increased to 24 hours, Additionally, management wants inactive users to be logged out at that time? What should the administrator do to fulfill this request?",
        options: [
            { letter: "A", text: "In user profiles, enter 24 hours in the timeout section, and check the box for Force logout on session timeout." },
            { letter: "B", text: "In session settings, select 24 hours, and check the box for force logout on session timeout." },
            { letter: "C", text: "In session settings, select 24 hours, and uncheck the box for force logout on session timeout." },
            { letter: "D", text: "In user profiles, type in 24 hours in the timeout section, and uncheck the box for force logout on session timeout." }
        ],
        answer: "B"
    },
    {
        id: "q76",
        isMultiple: false,
        question: "An administrator needs to configure Ursa Major Solar's Salesforce Mobile app with the company's brand-specific images and color schemes. Which set of branding options should the administrator use?",
        options: [
            { letter: "A", text: "Tab Colors, Action Colors, Loading Page Logo" },
            { letter: "B", text: "Individual page Colors, Multiple Loading page Logos" },
            { letter: "C", text: "Loading page Logo, Brand Color, Loading page Color" },
            { letter: "D", text: "Loading Page Color, Action Colors, Loading page Logo" }
        ],
        answer: "C"
    },
    {
        id: "q77",
        isMultiple: false,
        question: "Ursa Major Solar is changing from quarterly sales performance reviews to monthly sales reviews. Which feature of Collaborative Forecasts allows an administrator to ensure that Collaborative Forecasting aligns with the company's new monthly sales performance review?",
        options: [
            { letter: "A", text: "Enable forecast rollups" },
            { letter: "B", text: "Configure forecast types" },
            { letter: "C", text: "Configure default forecast display" },
            { letter: "D", text: "Enable forecast adjustments" }
        ],
        answer: "C"
    },
    {
        id: "q78",
        isMultiple: false,
        question: " The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with Issues. This screen should be visible from cases. How should the screen flow be distributed?",
        options: [
            { letter: "A", text: "Page Layout" },
            { letter: "B", text: "Component Filter" },
            { letter: "C", text: "Home Page" },
            { letter: "D", text: "Lightning Page" }
        ],
        answer: "D"
    },
    {
        id: "q79",
        isMultiple: false,
        question: "An administrator creates a custom text area field on the Account object and adds it to the service team's page layout. The service team manager loves the addition of this field and wants it to appear in the highlights panel so that the service reps can quickly find it when on the Account page. How should the administrator accomplish this?",
        options: [
            { letter: "A", text: "In the Account object manager, create a custom compact layout." },
            { letter: "B", text: "From the page layout editor, drag the field to the highlights panel." },
            { letter: "C", text: "Make the field required and move it to the top of the page." },
            { letter: "D", text: "Create a new page layout and a new section titled highlights panel." }
        ],
        answer: "D"
    },
    {
        id: "q80",
        isMultiple: false,
        question: "Universal Containers wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find deal records via a search. What option should the administrator adjust to fully restrict access?",
        options: [
            { letter: "A", text: "App permissions and search terms" },
            { letter: "B", text: "Record settings and search index" },
            { letter: "C", text: "Page layouts and field-level security" },
            { letter: "D", text: "Permissions and tab visibility" }
        ],
        answer: "C"
    },
    {
        id: "q81",
        isMultiple: false,
        question: "Once an opportunity reaches the negotiation stage at Cloud Kicks, the Amount field becomes required for sales users. Sales managers need to be able to move opportunities into this stage without knowing the amount. How should the administrator require this field during the negotiation stage for sales users but allow their managers to make changes?",
        options: [
            { letter: "A", text: "Assign the Administrator profile to the managers." },
            { letter: "B", text: "Make the field required for all users." },
            { letter: "C", text: "Configure a validation rule to meet the criteria." },
            { letter: "D", text: "Create a formula field to fill in the field for managers." }
        ],
        answer: "C"
    },
    {
        id: "q82",
        isMultiple: false,
        question: "Ursa Major Solar recently enabled the multiple currencies feature. As a result, which currency will be used as the foundation for all currency conversion rates?",
        options: [
            { letter: "A", text: "Corporate currency" },
            { letter: "B", text: "Active currency" },
            { letter: "C", text: "Personal currency" },
            { letter: "D", text: "Record currency" }
        ],
        answer: "A"
    },
    {
        id: "q83",
        isMultiple: false,
        question: "Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue. Which feature should be used to fulfill this requirement?",
        options: [
            { letter: "A", text: "Auto-response rule" },
            { letter: "B", text: "Case escalation rule" },
            { letter: "C", text: "Einstein Case Routing" },
            { letter: "D", text: "Case assignment rule" }
        ],
        answer: "B"
    },
    {
        id: "q84",
        isMultiple: false,
        question: "What does campaign Influence allow a user to do?",
        options: [
            { letter: "A", text: "Report on the campaigns that have contributed to an opportunity." },
            { letter: "B", text: "View the entire campaign hierarchy." },
            { letter: "C", text: "Adjust the percentage of influence each campaign has on an opportunity." },
            { letter: "D", text: "Summarize campaign member statistics on a campaign." }
        ],
        answer: "C"
    },
    {
        id: "q85",
        isMultiple: false,
        question: "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variables for use later in the flow. What flow element should the administrator add?",
        options: [
            { letter: "A", text: "Assignment" },
            { letter: "B", text: "Create Records" },
            { letter: "C", text: "Get Records" },
            { letter: "D", text: "Update Records" }
        ],
        answer: "C"
    },
    {
        id: "q86",
        isMultiple: false,
        question: "Universal Containers wants to create a new sales team that focuses exclusively on small to medium business customers. This group will track information with the same fields and picklist values but will need two new options on the stage field. How should the administrator accomplish this task?",
        options: [
            { letter: "A", text: "Create a new record type and sales process." },
            { letter: "B", text: "Create a new record type and page layout." },
            { letter: "C", text: "Create a new record type." },
            { letter: "D", text: "Create a new sales process." }
        ],
        answer: "B"
    },
    {
        id: "q87",
        isMultiple: false,
        question: "Northern Trail Outfitters wants to use Contact Hierarchy in its org to display Contact association. What should the administrator take into consideration regarding the Contact Hierarchy?",
        options: [
            { letter: "A", text: "Contacts displayed in the Contact Hierarchy are limited to record-level access by user." },
            { letter: "B", text: "Contact Hierarchy is limited to only display 3,000 contacts at one time." },
            { letter: "C", text: "Customizing hierarchy columns changes the Recently Viewed Contacts list view." },
            { letter: "D", text: "Sharing settings are ignored by contacts displayed in the Contact Hierarchy." }
        ],
        answer: "A"
    },
    {
        id: "q88",
        isMultiple: false,
        question: "AW Computing has six sales teams in a region. These teams always consist of the same account manager, engineer, and assistant. What should the administrate- configure to make it easier for teams to collaborate with the same customer?",
        options: [
            { letter: "A", text: "Propose the users manually share all their accounts with their teammates." },
            { letter: "B", text: "Enable account teams and show the users how to set up a default account team." },
            { letter: "C", text: "Create a queue for each team and assign account ownership to the queue." },
            { letter: "D", text: "Enable and configure standard opportunity teams with splits." }
        ],
        answer: "B"
    },
    {
        id: "q89",
        isMultiple: false,
        question: "The administrator at Ursa Major Solar needs to make sure that unassigned cases from VIP customers get transferred to the appropriate service representative within 5 hours. VIP customers have access to support 24 hours a day. How should this be configured?",
        options: [
            { letter: "A", text: "Case Queues" },
            { letter: "B", text: "Business Hours" },
            { letter: "C", text: "Assignment Rules" },
            { letter: "D", text: "Escalation Rules" }
        ],
        answer: "D"
    },
    {
        id: "q90",
        isMultiple: false,
        question: "Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months. How should the administrator address this requirement?",
        options: [
            { letter: "A", text: "Set the Fiscal Year to Custom and the starting month as February." },
            { letter: "B", text: "Set the Fiscal Year to Custom and the duration to 4 quarters." },
            { letter: "C", text: "Set the Fiscal Year to Standard and the duration to 12 months." },
            { letter: "D", text: "Set the Fiscal Year to Standard and the starting month as February." }
        ],
        answer: "D"
    }
];