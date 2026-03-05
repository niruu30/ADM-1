const quizData = [
    {
        id: "q361",
        isMultiple: false,
        question: "Northern Trail Outfitters (NTO) wants to ensure new Contacts are validated before they can be saved. If a user selects that the LeadSource picklist value is Other, NTO also wants to populate a custom text field called Source__c. Which validation rule should a Platform Administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "AND(LeadSource = 'Other', Source__c = '')" },
            { letter: "B", text: "AND(NOT(LeadSource = 'Other'), NOT(Source__c = ''))" },
            { letter: "C", text: "AND(ISPICKVAL(LeadSource,'Other'), ISBLANK(Source__c))" },
            { letter: "D", text: "AND(NOT(ISPICKVAL(LeadSource,'Other'))), NOT(ISBLANK(Source__c))" }
        ],
        answer: "C"
    },
    {
        id: "q362",
        isMultiple: false,
        question: "At Cloud Kicks, when a rep needs to seek additional support help, there's a series of actions the company wants to ensure are taken. The steps include sending an email and changing the status and owner of the case. What should a Platform Administrator use to give the reps an easy way to make these updates?",
        options: [
            { letter: "A", text: "Case Assignment Rules" },
            { letter: "B", text: "Macros with Quick Actions" },
            { letter: "C", text: "Quick Text with Email Templates" },
            { letter: "D", text: "Autolaunched Flows with Email Alerts" }
        ],
        answer: "B"
    },
    {
        id: "q363",
        isMultiple: true,
        question: "Cloud Kicks is working on a rebrand. In which two areas of the Salesforce mobile app can a Platform Administrator customize the branding?",
        options: [
            { letter: "A", text: "App header color" },
            { letter: "B", text: "Record background color" },
            { letter: "C", text: "Loading page logo" },
            { letter: "D", text: "Header background color" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q364",
        isMultiple: false,
        question: "A Platform Administrator at Cloud Kicks has a request from the finance team that all won opportunities over a certain value must be checked for accuracy before the deal can be considered fully closed. The assigned finance team member, as well as the sellers' manager, both must sign off on the deal, with the manager doing so first. Then, the finance team member must sign off, for a total of up to three sign-offs per opportunity. How should the administrator address this request?",
        options: [
            { letter: "A", text: "Create a screen flow that runs anytime an opportunity is closed." },
            { letter: "B", text: "Add a Lightning web component to the opportunity page to capture the details in an approval record." },
            { letter: "C", text: "Create a quick action to send emails to both the manager and the finance team member." },
            { letter: "D", text: "Create an approval process with specific steps." }
        ],
        answer: "D"
    },
    {
        id: "q365",
        isMultiple: false,
        question: "A Platform Administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created. What is causing the issue?",
        options: [
            { letter: "A", text: "The flow is inactive." },
            { letter: "B", text: "The flow URL is deactivated." },
            { letter: "C", text: "The flow is Read Only." },
            { letter: "D", text: "The flow trigger is missing." }
        ],
        answer: "A"
    },
    {
        id: "q366",
        isMultiple: true,
        question: "Which two solutions is a Platform Administrator able to find on AppExchange to enhance their organization?",
        options: [
            { letter: "A", text: "Components" },
            { letter: "B", text: "Customers" },
            { letter: "C", text: "Communities" },
            { letter: "D", text: "Consultants" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q367",
        isMultiple: false,
        question: "Cloud Kicks wants to ensure that every client has support based on the level of service that has been agreed on in the sales cycle. There are tiers to this support model, Gold, Silver, and Bronze. What should a Platform Administrator create to ensure that this is part of every client's account once they become a client?",
        options: [
            { letter: "A", text: "A flow to assign Entitlements" },
            { letter: "B", text: "Routing Configuration for each client" },
            { letter: "C", text: "Email to Case for each service level" },
            { letter: "D", text: "Case Assignment Rules for each client" }
        ],
        answer: "A"
    },
    {
        id: "q368",
        isMultiple: false,
        question: "Universal Containers wants to ensure that cases are routed to the right people at the right time, but there is a growing support organization. The business wants to be able to move people around and adjust the work they get without having to request extra assistance or rely on the administrator teams. Which tool allows the business to control its own assignment of work?",
        options: [
            { letter: "A", text: "Case Assignment Rules" },
            { letter: "B", text: "Email-to-Case" },
            { letter: "C", text: "Omni-Channel" },
            { letter: "D", text: "Lead Assignment Rules" }
        ],
        answer: "C"
    },
    {
        id: "q369",
        isMultiple: false,
        question: "Cloud Kicks' management team is hoping to increase user productivity by switching to consoles instead of the current traditional Salesforce user interface. What should a Platform Administrator use to implement this request?",
        options: [
            { letter: "A", text: "App Builder" },
            { letter: "B", text: "Screen Flow" },
            { letter: "C", text: "App Manager" },
            { letter: "D", text: "Omni-Channel" }
        ],
        answer: "C"
    },
    {
        id: "q370",
        isMultiple: false,
        question: "How should a Platform Administrator view Currencies, Fiscal Year settings, and Business Hours in Salesforce?",
        options: [
            { letter: "A", text: "User Management Settings" },
            { letter: "B", text: "Company Settings" },
            { letter: "C", text: "Custom Settings" },
            { letter: "D", text: "Feature Settings" }
        ],
        answer: "B"
    },
    {
        id: "q371",
        isMultiple: false,
        question: "Service reps in a call center do not have assigned desks. They sit at any available desk and use the computer on that desk to access Salesforce. A Platform Administrator has been asked to streamline the login process so the reps do not have to authenticate each time they log in at a different computer. Which function should the administrator use to implement this request?",
        options: [
            { letter: "A", text: "Custom Profile" },
            { letter: "B", text: "Trusted IP Ranges" },
            { letter: "C", text: "Multi-factor Authentication" },
            { letter: "D", text: "Permission Set" }
        ],
        answer: "B"
    },
    {
        id: "q372",
        isMultiple: false,
        question: "A salesperson complains that the Log a Call button is missing from the highlights panel of an Opportunity page. What is the reason for this?",
        options: [
            { letter: "A", text: "The Log a Call action will appear within the Activity Component as a standard behavior rather than the highlights panel." },
            { letter: "B", text: "The Log a Call action has not been added to the Salesforce Mobile and Lightning Experience Actions section of the page layout." },
            { letter: "C", text: "The custom Log a Call permission is missing from the user's profile and assigned permission sets." },
            { letter: "D", text: "The custom Log a Call permission has been disabled at the org level in Setup." }
        ],
        answer: "B"
    },
    {
        id: "q373",
        isMultiple: false,
        question: "Cloud Kicks wants to make sure clients are getting the attention they need and cases are not sitting longer than the Service Level Agreement (SLA) it has with its clients. Which standard feature helps route cases to a Tier 2 team if they have not been addressed in a specific amount of time?",
        options: [
            { letter: "A", text: "Milestone and Entitlements" },
            { letter: "B", text: "Omni Channel Routing" },
            { letter: "C", text: "Auto Response Rules" },
            { letter: "D", text: "Escalation Rules" }
        ],
        answer: "D"
    },
    {
        id: "q374",
        isMultiple: false,
        question: "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an Account. Which flow should a Platform Administrator recommend automating within Flow Builder for this business process?",
        options: [
            { letter: "A", text: "Scheduled flow" },
            { letter: "B", text: "Record triggered flow" },
            { letter: "C", text: "Autolaunched flow" },
            { letter: "D", text: "Automation event triggered flow" }
        ],
        answer: "A"
    },
    {
        id: "q375",
        isMultiple: false,
        question: "A Platform Administrator wants to limit the kinds of reports their users can create. Which tool should the administrator use?",
        options: [
            { letter: "A", text: "Hide Report Types" },
            { letter: "B", text: "Report Folder Sharing" },
            { letter: "C", text: "Standard Report Types" },
            { letter: "D", text: "Joined Report" }
        ],
        answer: "A"
    },
    {
        id: "q376",
        isMultiple: false,
        question: "A Platform Administrator is creating a new action instruction for an agent. This action, named createCase, is designed to generate a new Salesforce Case record based on the user's conversation with the agent. Which set of Action Instructions should the administrator use for the createCase action, according to best practices for action instructions?",
        options: [
            { letter: "A", text: "This action provides the ability to create a new case record in the Salesforce system. Its function is to simply save customer information as a record. Use this when the user wants to create a case." },
            { letter: "B", text: "Use this action to create a new Salesforce Case record. The goal is to document a customer's issue in the system. Use this when the user's intent is to create a formal record of their problem or question." },
            { letter: "C", text: "Creates a new case record in the system for any type of customer inquiry. The purpose of this is to ensure a record of the interaction is saved." },
            { letter: "D", text: "The createCase code snippet is configured to create a case. It runs in the background to handle the user's request to log a new issue. Its purpose is to solve the customer's issue." }
        ],
        answer: "B"
    },
    {
        id: "q377",
        isMultiple: false,
        question: "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should a Platform Administrator ensure that the emails are sent to the correct queue?",
        options: [
            { letter: "A", text: "Create an escalation rule to send cases to the correct queue." },
            { letter: "B", text: "Use a custom email service to set the owner of the case upon creation." },
            { letter: "C", text: "Utilize a flow to identify the correct queue and assign the case." },
            { letter: "D", text: "Configure Email-to-Case so emails are delivered to the correct queue." }
        ],
        answer: "D"
    },
    {
        id: "q378",
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
        id: "q379",
        isMultiple: true,
        question: "The sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should a Platform Administrator configure?",
        options: [
            { letter: "A", text: "Sales Quotes" },
            { letter: "B", text: "Forecasting" },
            { letter: "C", text: "Opportunity List View" },
            { letter: "D", text: "Opportunity Stages" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q380",
        isMultiple: false,
        question: "A Platform Administrator at Cloud Kicks is setting up a new Salesforce instance. The business requirements mandate that the marketers are given access to opportunities in order to maintain the campaign relationships on each opportunity. The administrator decides to assign the Marketing User profile. What should the administrator do next to achieve this requirement?",
        options: [
            { letter: "A", text: "Edit the object permissions to include Opportunity" },
            { letter: "B", text: "Add a custom permission set to include Opportunity" },
            { letter: "C", text: "Edit the role to enable Sales access" },
            { letter: "D", text: "Configure the assigned apps to include Opportunity" }
        ],
        answer: "A"
    },
    {
        id: "q381",
        isMultiple: true,
        question: "A Platform Administrator at Cloud Kicks has created an approval process for time-off requests. Which two automated actions are available for the administrator to add as part of the approval process?",
        options: [
            { letter: "A", text: "Field Update" },
            { letter: "B", text: "Email Alert" },
            { letter: "C", text: "Chatter Post" },
            { letter: "D", text: "Autolaunched Flow" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q382",
        isMultiple: false,
        question: "A Platform Administrator at Universal Containers needs an automated way to delete records based on field values. Which automated solution should the administrator use?",
        options: [
            { letter: "A", text: "Flow Builder" },
            { letter: "B", text: "Automation Studio" },
            { letter: "C", text: "Mass Delete Records" },
            { letter: "D", text: "Flow Orchestration" }
        ],
        answer: "A"
    },
    {
        id: "q383",
        isMultiple: false,
        question: "Cloud Kicks has been seeing exponential growth and will be hiring an additional 10 sales reps and 15 support reps to its teams. The support team will need access to the Service Console to manage cases. A Platform Administrator will be assigning the users to existing custom sales and support profiles. How should the administrator ensure the support reps have the appropriate access to the console?",
        options: [
            { letter: "A", text: "Enable the Service Cloud User feature license for the support reps on the User Detail page" },
            { letter: "B", text: "Create a permission set for the Service Console and assign it to the support reps" },
            { letter: "C", text: "Build a Service Console using Lightning App Builder for the custom service profile" },
            { letter: "D", text: "Assign the Salesforce Platform User License to the support reps" }
        ],
        answer: "A"
    },
    {
        id: "q384",
        isMultiple: false,
        question: "A group of sales reps can view each other's orders on a report; however, they would like a report to view just their own orders. What should a Platform Administrator do to set up a report for the sales reps?",
        options: [
            { letter: "A", text: "Set the Opportunity Filter for Primary as True" },
            { letter: "B", text: "Filter by Opportunity Owner equals $USER" },
            { letter: "C", text: "Set Organization Wide Defaults of Order object to Private" },
            { letter: "D", text: "Save the report in a private folder for the user" }
        ],
        answer: "B"
    },
    {
        id: "q385",
        isMultiple: false,
        question: "A Platform Administrator at Cloud Kicks received a request from the head of sales operations to create a process in which opportunities must be validated by specific team leaders based on a mix of criteria. When the administrator analysed the list of criteria, they found that there were 30 potential sets of criteria that would identify the proper person to route the request to. How should the administrator fulfill this request?",
        options: [
            { letter: "A", text: "Create a button on the opportunity that brings up an email template to send to the correct leader." },
            { letter: "B", text: "Create an approval process with specific entry criteria and approval steps for each of the sets of criteria specified." },
            { letter: "C", text: "Create a record triggered flow orchestration to properly route the requests." },
            { letter: "D", text: "Use a screen flow to allow the seller to input the criteria in a form that is then sent to the appropriate leader." }
        ],
        answer: "B"
    },
    {
        id: "q386",
        isMultiple: false,
        question: "A sales rep has left the company, and a Platform Administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the team as is. Which tool should the administrator use to accomplish this?",
        options: [
            { letter: "A", text: "Data Loader" },
            { letter: "B", text: "Dataloader.io" },
            { letter: "C", text: "Mass Transfer Records" },
            { letter: "D", text: "Data Import Wizard" }
        ],
        answer: "C"
    },
    {
        id: "q387",
        isMultiple: false,
        question: "The VP of sales at AW Computing would like sales reps to check in with their top account every Monday. The VP would like a dashboard component to show the status of the check-ins. What should a Platform Administrator configure to remind the reps to contact their top account?",
        options: [
            { letter: "A", text: "Create a time-based workflow task." },
            { letter: "B", text: "Enable the creation of recurring tasks." },
            { letter: "C", text: "Add the email action to the page layout." },
            { letter: "D", text: "Use a process email alert on the account." }
        ],
        answer: "B"
    },
    {
        id: "q388",
        isMultiple: false,
        question: "Cloud Kicks has implemented an Employee Agent to answer benefits questions for its employees. How should a Platform Administrator prevent the agent from responding to staff members' questions about the CEO's private health plan and benefits?",
        options: [
            { letter: "A", text: "Train the agent on employee health plans instead of the CEO's health plan." },
            { letter: "B", text: "Modify the agent's instructions and guardrails to block questions related to the CEO's health plan." },
            { letter: "C", text: "Ensure the users' permissions and field-level security restrict access to the CEO's health plan." },
            { letter: "D", text: "Configure assignment rules to assign the agent to employee data." }
        ],
        answer: "C"
    },
    {
        id: "q389",
        isMultiple: false,
        question: "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should a Platform Administrator configure to meet these requirements?",
        options: [
            { letter: "A", text: "Different page layouts that control the picklist values for the opportunity types" },
            { letter: "B", text: "Separate record types and sales processes for the different types of opportunities" },
            { letter: "C", text: "Validation rules that ensure that users are entering accurate sales stage information" },
            { letter: "D", text: "Public groups to limit record types and sales processes for opportunities" }
        ],
        answer: "B"
    },
    {
        id: "q390",
        isMultiple: false,
        question: "A Platform Administrator wants to customize the navigation menu for users in the Salesforce mobile app. The organization has not yet implemented any Lightning apps for mobile use. Which statement about the Mobile Only app navigation is correct?",
        options: [
            { letter: "A", text: "Lightning pages and Visualforce pages automatically appear in the Mobile Only navigation menu without requiring tabs to be created first." },
            { letter: "B", text: "The Mobile Only app can be customized to show different navigation menus for different user profiles and permission sets." },
            { letter: "C", text: "The first four items in the Mobile Only navigation menu appear both in the navigation menu and in the navigation bar at the bottom of the screen." },
            { letter: "D", text: "The Mobile Only app automatically includes all standard Salesforce objects in the navigation menu based on user permissions." }
        ],
        answer: "C"
    }

];