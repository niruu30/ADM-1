const quizData = [
    {
        id: "q301",
        isMultiple: true,
        question: "Cloud Kicks has the organization wide defaults for Opportunity set to Private. Which two features should a Platform Administrator use to open up access to opportunity records for sales users working on collaborative deals?",
        options: [
            { letter: "A", text: "Sharing rules" },
            { letter: "B", text: "Sharing set" },
            { letter: "C", text: "Role hierarchy" },
            { letter: "D", text: "Profiles" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q302",
        isMultiple: true,
        question: "A Platform Administrator at Cloud Kicks has a custom picklist field on Lead, which is missing on the Contact when leads are converted. Which two steps should the administrator take to ensure these values are populated?",
        options: [
            { letter: "A", text: "Update the picklist value with a validation rule." },
            { letter: "B", text: "Create a custom picklist field on Contact." },
            { letter: "C", text: "Map the picklist field on the Lead to the Contact." },
            { letter: "D", text: "Set the picklist field to be required on the Lead object." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q303",
        isMultiple: false,
        question: "A Platform Administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is \"Search Engine\", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not \"Search Engine\", this picklist should be hidden. What is the most efficient way for the administrator to complete this requirement?",
        options: [
            { letter: "A", text: "Use a conditional filter in the screen element to only show the Specific Search Engine field only when Lead Source is \"Search Engine\"." },
            { letter: "B", text: "Use Assignment elements; one for when Lead Source is \"Search Engine\" and one for everything else." },
            { letter: "C", text: "Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is \"Search Engine\"." },
            { letter: "D", text: "Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is \"Search Engine\"." }
        ],
        answer: "C"
    },
    {
        id: "q304",
        isMultiple: false,
        question: "Northern Trail Outfitters uses a custom Invoice object to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record. How should a Platform Administrator ensure this requirement?",
        options: [
            { letter: "A", text: "Create a flow to update the field." },
            { letter: "B", text: "Require the field on the record type." },
            { letter: "C", text: "Define an approval process for the field." },
            { letter: "D", text: "Make the field universally required." }
        ],
        answer: "D"
    },
    {
        id: "q305",
        isMultiple: false,
        question: "In an approval process, what happens when a queue is selected as the approver?",
        options: [
            { letter: "A", text: "The queue requires unanimous approval from all of its members before the record is approved." },
            { letter: "B", text: "Any member of the queue can approve or reject the record and the queue is treated as a single entity." },
            { letter: "C", text: "Only the queue owner is notified about the approval request, not its members." },
            { letter: "D", text: "The queue can only be used for objects that do not support individual user approvals." }
        ],
        answer: "B"
    },
    {
        id: "q306",
        isMultiple: false,
        question: "Universal Containers wants to track all stakeholders involved in its sales opportunities to ensure proper relationship management. Sales reps need to identify who has decision-making authority, who influences the buying process, and who serves as the primary contact for each deal. Which feature should a Platform Administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Configure opportunity team members to track internal and external stakeholders." },
            { letter: "B", text: "Set up account teams to track stakeholders across multiple opportunities." },
            { letter: "C", text: "Use standard fields on opportunities to track stakeholder information." },
            { letter: "D", text: "Use contact roles on opportunities to identify stakeholder involvement and influence." }
        ],
        answer: "D"
    },
    {
        id: "q307",
        isMultiple: false,
        question: "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation. Which feature should a Platform Administrator use to fulfill this requirement?",
        options: [
            { letter: "A", text: "Assignment Rule" },
            { letter: "B", text: "Case Escalation Rule" },
            { letter: "C", text: "Formula field" },
            { letter: "D", text: "Omni-Channel Supervisor" }
        ],
        answer: "B"
    },
    {
        id: "q308",
        isMultiple: false,
        question: "A VP of sales needs to report on records owned by individuals in various parts of the role hierarchy. The organization-wide default is set to Private. What should a Platform Administrator configure to achieve this?",
        options: [
            { letter: "A", text: "Field-Level Security" },
            { letter: "B", text: "Sharing Rules" },
            { letter: "C", text: "Permission Sets" },
            { letter: "D", text: "Restriction Rules" }
        ],
        answer: "B"
    },
    {
        id: "q309",
        isMultiple: false,
        question: "Universal Containers (UC) has a private sharing model for Opportunities and uses Opportunity teams. Criteria-based sharing rules are not used. A sales rep at UC leaves the company, and their user record is deactivated. The rep is later rehired in the same role. A Platform Administrator activates the old user record. The user is added to the same default Opportunity teams but is no longer able to see the same records the user worked on before leaving the company. What is the likely cause?",
        options: [
            { letter: "A", text: "The stage of the opportunity records was changed to Closed Lost." },
            { letter: "B", text: "The record type of the opportunity records was changed." },
            { letter: "C", text: "The records were manually shared with the user." },
            { letter: "D", text: "Permission sets were removed when the user was deactivated." }
        ],
        answer: "C"
    },
    {
        id: "q310",
        isMultiple: false,
        question: "A Platform Administrator at Cloud Kicks has set up a junior administrator as a delegated administrator in Salesforce. What should the Platform Administrator consider regarding delegated administrators?",
        options: [
            { letter: "A", text: "Delegated administrators can unlock users but cannot reset passwords." },
            { letter: "B", text: "Delegated administrators can update field-level security on standard objects." },
            { letter: "C", text: "Delegated administrators cannot modify permission sets." },
            { letter: "D", text: "Delegated administrators cannot assign users to profiles." }
        ],
        answer: "C"
    },
    {
        id: "q311",
        isMultiple: false,
        question: "A Platform Administrator is building an agent to help an ecommerce support team. The agent needs to call an action, named updateShippingAddress, that modifies a customer's shipping address in the system. Which set of Action Instructions should the administrator use for the updateShippingAddress action, according to best practices?",
        options: [
            { letter: "A", text: "Use this to update shipping information. It's used for any changes to a customer's address in the system." },
            { letter: "B", text: "This action updates the customer's shipping address. It is to be used when a user wants to change their address. Only use this when a customer does not have an active order in the system." },
            { letter: "C", text: "This action allows for the changing of a shipping address, and the goal is to make sure the address is current and accurate." },
            { letter: "D", text: "Updates the shipping address for a customer order. The goal of the action is to modify the address on a customer's record. The agent should only use this action when the user explicitly requests to change their address." }
        ],
        answer: "D"
    },
    {
        id: "q312",
        isMultiple: false,
        question: "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. What should a Platform Administrator use to complete this requirement?",
        options: [
            { letter: "A", text: "Escalation Rules" },
            { letter: "B", text: "Auto Response Rules" },
            { letter: "C", text: "Assignment Rules" },
            { letter: "D", text: "Validation Rules" }
        ],
        answer: "A"
    },
    {
        id: "q313",
        isMultiple: false,
        question: "A sales manager receives a URL to a Dashboard folder containing several dashboards. However, when the sales manager clicks on the URL, a message appears stating, \"We couldn't find the record you're trying to access.\" What is the reason for this?",
        options: [
            { letter: "A", text: "The sales manager does not have the correct permission set." },
            { letter: "B", text: "The sales manager needs the correct sales user profile." },
            { letter: "C", text: "The Dashboard folder is set to Private." },
            { letter: "D", text: "View access has not been granted to the Dashboard folder." }
        ],
        answer: "D"
    },
    {
        id: "q314",
        isMultiple: false,
        question: "The VP of sales at Cloud Kicks has a standard sales profile and is receiving an error message that prevents them from saving an opportunity. A Platform Administrator attempted the same edit without receiving an error. How should the administrator troubleshoot this issue?",
        options: [
            { letter: "A", text: "Log in as a system administrator to troubleshoot." },
            { letter: "B", text: "Use 'Login as' to log in as the user." },
            { letter: "C", text: "Use an AppExchange product to troubleshoot." },
            { letter: "D", text: "Ask the user for their password so the admin can log in as the user." }
        ],
        answer: "B"
    },
    {
        id: "q315",
        isMultiple: true,
        question: "A Platform Administrator at Ursa Major Solar imported records into an object by mistake. Which two tools should the administrator use to undo this import?",
        options: [
            { letter: "A", text: "Weekly Data Export" },
            { letter: "B", text: "Data Loader" },
            { letter: "C", text: "Data Import Wizard" },
            { letter: "D", text: "Mass Delete Records" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q316",
        isMultiple: false,
        question: "Cloud Kicks is concerned that not everyone on the sales team is entering key data into accounts and opportunities that they own. Also, the team is concerned that if the key information changes, it does not get updated in Salesforce. A Platform Administrator wants to get a better understanding of their data quality and record completeness. What should the administrator do to accomplish this?",
        options: [
            { letter: "A", text: "Explore AppExchange for data quality and record completeness solutions." },
            { letter: "B", text: "Create a report for Accounts and Opportunities highlighting missing data." },
            { letter: "C", text: "Subscribe the sales reps to a monthly report for accounts and opportunities." },
            { letter: "D", text: "Configure the key fields as required fields on the page layout." }
        ],
        answer: "B"
    },
    {
        id: "q317",
        isMultiple: false,
        question: "Which task is especially suited for Agentforce?",
        options: [
            { letter: "A", text: "Single-step predefined processes" },
            { letter: "B", text: "Static document generation" },
            { letter: "C", text: "Multi-step processes that need adaption to change" },
            { letter: "D", text: "Tasks without decision-making" }
        ],
        answer: "C"
    },
    {
        id: "q318",
        isMultiple: false,
        question: "Which Salesforce feature allows a Platform Administrator to automate the routing of records to specific users for review and decision-making based on predefined criteria?",
        options: [
            { letter: "A", text: "Assignment Rules" },
            { letter: "B", text: "Validation Rules" },
            { letter: "C", text: "Approval Process" },
            { letter: "D", text: "Schema Builder" }
        ],
        answer: "C"
    },
    {
        id: "q319",
        isMultiple: false,
        question: "Cloud Kicks has an administrator team that manages the org. The company has asked for a small subset of leadership users to have Modify All access, like the administrators have. How should the administrator team accomplish this?",
        options: [
            { letter: "A", text: "Assign the standard Platform User profile to the leadership users and edit the permissions to Modify All access." },
            { letter: "B", text: "Assign the standard System Administrator profile to the leadership users that includes the Modify All access." },
            { letter: "C", text: "Assign the standard User profile to the leadership users and add a custom permission set with Modify All access." },
            { letter: "D", text: "Clone the standard User profile to the leadership users and assign a Modify All role to grant access." }
        ],
        answer: "C"
    },
    {
        id: "q320",
        isMultiple: false,
        question: "Cloud Kicks (CK) has a new Platform Administrator who is asked to put together a memo detailing Salesforce usage to budget for upcoming license purchases. Where should the administrator go to find out what type of licenses CK has purchased and how many are available?",
        options: [
            { letter: "A", text: "Usage-based entitlements related list in company information" },
            { letter: "B", text: "Search for licenses types in setup" },
            { letter: "C", text: "User licenses related list in company information" },
            { letter: "D", text: "User management settings in setup" }
        ],
        answer: "C"
    },
    {
        id: "q321",
        isMultiple: false,
        question: "Northern Trail Outfitters has the Case object set to private. The support manager raised a concern that reps have a broader view of data than expected and can see all cases on their group's dashboards. What is causing reps to have inappropriate access to data on dashboards?",
        options: [
            { letter: "A", text: "Dashboard Filters" },
            { letter: "B", text: "Public Dashboards" },
            { letter: "C", text: "Dashboard's running user" },
            { letter: "D", text: "Dashboard Subscriptions" }
        ],
        answer: "C"
    },
    {
        id: "q322",
        isMultiple: false,
        question: "A Platform Administrator creates a custom text area field on the Account object and adds it to the service team's page layout. The service team manager loves the addition of this field and wants it to appear in the highlights panel so that the service reps can quickly find it when on the Account page. How should the administrator accomplish this?",
        options: [
            { letter: "A", text: "In the Account object manager, create a custom compact layout." },
            { letter: "B", text: "Make the field required and move it to the top of the page." },
            { letter: "C", text: "Create a new page layout and a new section titled highlights panel." },
            { letter: "D", text: "From the page layout editor, drag the field to the highlights panel." }
        ],
        answer: "A"
    },
    {
        id: "q323",
        isMultiple: true,
        question: "What are three characteristics of a master-detail relationship?",
        options: [
            { letter: "A", text: "Each object can have up to five master-detail relationships." },
            { letter: "B", text: "Permissions for the detail record are set independently of the master." },
            { letter: "C", text: "Roll-up summaries are supported in master-detail relationships." },
            { letter: "D", text: "The master object can be a standard or custom object." },
            { letter: "E", text: "The owner field on the detail records is the owner of the master record." }
        ],
        answer: ["C", "D", "E"]
    },
    {
        id: "q324",
        isMultiple: false,
        question: "At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task. What should a Platform Administrator use to deliver this requirement?",
        options: [
            { letter: "A", text: "Approval Process" },
            { letter: "B", text: "Formula Field" },
            { letter: "C", text: "Flow Builder" },
            { letter: "D", text: "Prebuilt Macro" }
        ],
        answer: "C"
    },
    {
        id: "q325",
        isMultiple: false,
        question: "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should a Platform Administrator utilize to import the records to Salesforce?",
        options: [
            { letter: "A", text: "Dataloader.io" },
            { letter: "B", text: "Manual Import" },
            { letter: "C", text: "Data Import Wizard" },
            { letter: "D", text: "Data Loader" }
        ],
        answer: "C"
    },
    {
        id: "q326",
        isMultiple: false,
        question: "Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. Which type of relationship should a Platform Administrator make between Shipments and Accounts?",
        options: [
            { letter: "A", text: "Accounts should have a lookup to Shipments." },
            { letter: "B", text: "Shipments should have a master detail to Accounts." },
            { letter: "C", text: "Shipments should have a lookup to Account." },
            { letter: "D", text: "Accounts should have a master detail to Shipments." }
        ],
        answer: "C"
    },
    {
        id: "q327",
        isMultiple: true,
        question: "Which two actions should a Platform Administrator perform with Case escalation rules?",
        options: [
            { letter: "A", text: "Send email notifications." },
            { letter: "B", text: "Change the Case Priority." },
            { letter: "C", text: "Reopen the Case." },
            { letter: "D", text: "Reassign the Case." }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q328",
        isMultiple: false,
        question: "Users at DreamHouse Realty are only allowed to see opportunities they own. Leadership wants an enterprise-wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time. How should a Platform Administrator create the dashboard without changing any sharing settings?",
        options: [
            { letter: "A", text: "Create a dashboard with the running user set as someone who can see all opportunities." },
            { letter: "B", text: "Add a filter to the dashboard to filter the opportunities by owner role." },
            { letter: "C", text: "Build individual dashboards for profiles that need to see the enterprise results." },
            { letter: "D", text: "Update the dashboard folder settings to manager for the sales reps role." }
        ],
        answer: "A"
    },
    {
        id: "q329",
        isMultiple: false,
        question: "A Platform Administrator for Cloud Kicks needs to ensure that only the financial records belonging to each individual user are visible on the report in order to meet scope of the data privacy requirements. How should the administrator achieve this?",
        options: [
            { letter: "A", text: "Set sharing model as Public Read/Write for the respective object(s)." },
            { letter: "B", text: "Set sharing model as Private for the respective object(s)." },
            { letter: "C", text: "Create multiple reports, each filtered to show records owned by each user." },
            { letter: "D", text: "Use Apex sharing to hide records." }
        ],
        answer: "B"
    },
    {
        id: "q330",
        isMultiple: false,
        question: "Ursa Major Solar (UMS) wants a place within Salesforce to discuss sensitive records. UMS would like to be able to add new members but does not want non-members to be able to see any information about the forum. What should a Platform Administrator configure to achieve this?",
        options: [
            { letter: "A", text: "Chatter Unlisted Group" },
            { letter: "B", text: "Chatter Private Group" },
            { letter: "C", text: "Chatter Public Group" },
            { letter: "D", text: "Private Chatter Channel" }
        ],
        answer: "A"
    },
    {
        id: "q331",
        isMultiple: false,
        question: "In an approval process, which feature allows a user to temporarily assign their approval responsibilities to another user for a predefined time period?",
        options: [
            { letter: "A", text: "Approval Rule" },
            { letter: "B", text: "Queue" },
            { letter: "C", text: "Delegated Approver" },
            { letter: "D", text: "Manager" }
        ],
        answer: "C"
    },
    {
        id: "q332",
        isMultiple: false,
        question: "The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner. What should a Platform Administrator add to the dashboard to fulfill the request?",
        options: [
            { letter: "A", text: "Dashboard Filter" },
            { letter: "B", text: "Dashboard Widget" },
            { letter: "C", text: "Combination Chart" },
            { letter: "D", text: "Bucket Column" }
        ],
        answer: "A"
    },
    {
        id: "q333",
        isMultiple: false,
        question: "One of the sales managers at Universal Containers will be going on leave for several months. The executives want to make sure the sales manager does not log in to Salesforce while on leave. What should a Platform Administrator do to ensure the user is not able to log in while on leave?",
        options: [
            { letter: "A", text: "Reassign the user's license during leave." },
            { letter: "B", text: "Change the Login Hours for the profile." },
            { letter: "C", text: "Freeze the user's account." },
            { letter: "D", text: "Restrict Login IP Addresses for the profile." }
        ],
        answer: "C"
    },
    {
        id: "q334",
        isMultiple: false,
        question: "The sales reps at Cloud Kicks should be able to report on each other's account and opportunity records with the organization-wide default for Account and Opportunity both set to Private. What should a Platform Administrator do to achieve this?",
        options: [
            { letter: "A", text: "Create an owner-based sharing rule for Accounts with sharing between a Public Group of Sales Reps and Read Only Opportunity Access." },
            { letter: "B", text: "Create an Account and Opportunity report to show any owned by each member of the Sales Team and save the report into a shared report folder." },
            { letter: "C", text: "Utilize Apex sharing to programmatically share records between a group of Sales Rep users." },
            { letter: "D", text: "Create manual sharing to share specific account and opportunity records between the sales reps." }
        ],
        answer: "A"
    },
    {
        id: "q335",
        isMultiple: false,
        question: "A sales manager at DreamHouse Realty wants sales users to have a quick way to view and update the opportunities in their pipeline expected to close in the next 90 days. What should a Platform Administrator do to accomplish this request?",
        options: [
            { letter: "A", text: "Create a custom report and schedule the sales users to receive it each day as a reminder to update their opportunities." },
            { letter: "B", text: "Make a new Sales dashboard and add a component that shows all opportunities that meet the criteria." },
            { letter: "C", text: "Enable Sales Console and show users how to open a tab for each opportunity in the pipeline that meets the requirements." },
            { letter: "D", text: "Create a list view on the Opportunity object and recommend users switch the view to Kanban to edit by drag and drop." }
        ],
        answer: "D"
    },
    {
        id: "q336",
        isMultiple: true,
        question: "Universal Containers' Platform Administrator has been asked to create a many-to-many relationship between two existing custom objects. Which two steps should the administrator take when enabling the many-to-many relationship?",
        options: [
            { letter: "A", text: "Create a junction with a custom object." },
            { letter: "B", text: "Create two master-detail relationships on the new object." },
            { letter: "C", text: "Create URL fields on a custom object." },
            { letter: "D", text: "Create two lookup relationships on the new object." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q337",
        isMultiple: false,
        question: "A Platform Administrator needs to configure an approval process for the sales team when opportunities that meet particular conditions are closed. How should the administrator make sure the right records are included in the process?",
        options: [
            { letter: "A", text: "Add Specific Entry Criteria." },
            { letter: "B", text: "Use Dynamic Forms to display a button." },
            { letter: "C", text: "Create a screen flow." },
            { letter: "D", text: "Add a validation rule to the opportunity." }
        ],
        answer: "A"
    },
    {
        id: "q338",
        isMultiple: false,
        question: "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked a Platform Administrator to help sales reps prioritize and close more deals. What should the administrator configure to help with these issues?",
        options: [
            { letter: "A", text: "Einstein Search Personalization" },
            { letter: "B", text: "Einstein Lead Scoring" },
            { letter: "C", text: "Einstein Opportunity Scoring" },
            { letter: "D", text: "Einstein Activity Capture" }
        ],
        answer: "C"
    },
    {
        id: "q339",
        isMultiple: false,
        question: "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should a Platform Administrator utilize to import the records to Salesforce?",
        options: [
            { letter: "A", text: "Manual Import" },
            { letter: "B", text: "Data Import Wizard" },
            { letter: "C", text: "Dataloader.io" },
            { letter: "D", text: "Data Loader" }
        ],
        answer: "B"
    },
    {
        id: "q340",
        isMultiple: false,
        question: "What is the next step an agent performs when the tasks within an agentic loop are all unsatisfactory?",
        options: [
            { letter: "A", text: "Provides the best answer possible with caveats" },
            { letter: "B", text: "Gives an error message" },
            { letter: "C", text: "Routes to a live agent" },
            { letter: "D", text: "Asks for additional information" }
        ],
        answer: "D"
    },
    {
        id: "q341",
        isMultiple: false,
        question: "Users at Cloud Kicks want to see information that is more useful for their role on the Case page. How should a Platform Administrator make the pages more dynamic and easier to use?",
        options: [
            { letter: "A", text: "Add component visibility filters to the components." },
            { letter: "B", text: "Include more tab components with filters." },
            { letter: "C", text: "Remove fields from the record details component." },
            { letter: "D", text: "Delete the extra components from the page." }
        ],
        answer: "A"
    },
    {
        id: "q342",
        isMultiple: false,
        question: "A Platform Administrator needs to enable Agentforce for the service team. What is the most critical prerequisite for ensuring the Service Agents have a complete and accurate view of their customers?",
        options: [
            { letter: "A", text: "Activate Email-to-Case for the agent." },
            { letter: "B", text: "Configure a new Service Console layout." },
            { letter: "C", text: "Verify Data Cloud is implemented." },
            { letter: "D", text: "Create new user profiles for the agent." }
        ],
        answer: "C"
    },
    {
        id: "q343",
        isMultiple: false,
        question: "A Platform Administrator is designing a prompt template for a new agent. The agent's purpose is to help service reps troubleshoot technical issues by providing concise, step-by-step instructions. Based on best practices for creating effective prompts, which approach should the administrator use when writing this prompt?",
        options: [
            { letter: "A", text: "Write a detailed prompt with multiple nested conditions to cover all the major troubleshooting scenarios." },
            { letter: "B", text: "Use specific technical terms and abbreviations to ensure the AI understands the specialised domain." },
            { letter: "C", text: "Focus on providing high-level, theoretical concepts so the AI has the flexibility to respond creatively." },
            { letter: "D", text: "Use natural, easy-to understand language and clear, concise instructions to guide the AI's behavior." }
        ],
        answer: "D"
    },
    {
        id: "q344",
        isMultiple: false,
        question: "Marketing users at Cloud Kicks have been completing the Lead Source field inconsistently, with values like Web, Website, and Online. To ensure data quality, which Flow should the administrator use to clean up these inconsistent Lead Source values?",
        options: [
            { letter: "A", text: "Segment triggered flow" },
            { letter: "B", text: "Record triggered flow" },
            { letter: "C", text: "Schedule-triggered flow" },
            { letter: "D", text: "Screen flow" }
        ],
        answer: "C"
    },
    {
        id: "q345",
        isMultiple: false,
        question: "Cloud Kicks wants users to only be able to choose the opportunity stage Closed Won if the Lead source has been selected. How should a Platform Administrator accomplish this goal?",
        options: [
            { letter: "A", text: "Make Lead source a dependent picklist to the Opportunity Stage field." },
            { letter: "B", text: "Change the Opportunity Stage field to Read Only on the page layout." },
            { letter: "C", text: "Configure a validation rule requiring Lead source when the stage is set to Closed Won." },
            { letter: "D", text: "Make the opportunity stage a dependent picklist to the Lead source." }
        ],
        answer: "C"
    },
    {
        id: "q346",
        isMultiple: false,
        question: "Cloud Kicks wants to leverage roll-up summaries on the Account object. Which standard object supports this roll-up summary natively?",
        options: [
            { letter: "A", text: "Opportunity" },
            { letter: "B", text: "Contact" },
            { letter: "C", text: "Case" },
            { letter: "D", text: "Campaigns" }
        ],
        answer: "A"
    },
    {
        id: "q347",
        isMultiple: true,
        question: "Cloud Kicks needs to be able to show different picklist values for sales and marketing users. Which two options meet this requirement?",
        options: [
            { letter: "A", text: "Two page layouts, one record type, two picklists" },
            { letter: "B", text: "Two permission sets, one record type, one picklist" },
            { letter: "C", text: "One record type, two profiles, one picklist" },
            { letter: "D", text: "One page layout, two record types, one picklist" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q348",
        isMultiple: false,
        question: "A sales team is having difficulty understanding which stage their opportunity is in and what the company sales process requires of them in that stage. Which feature should a Platform Administrator implement to help the sales team quickly determine where they are in the sales process and what is required of them?",
        options: [
            { letter: "A", text: "Reports & Dashboards" },
            { letter: "B", text: "Opportunity Sales Path" },
            { letter: "C", text: "Big Deal Alerts" },
            { letter: "D", text: "List Views" }
        ],
        answer: "B"
    },
    {
        id: "q349",
        isMultiple: false,
        question: "A new agent is being developed to help customer service reps process customer requests for a replacement product. The agent needs to call an action that takes two inputs: productId (an 18 character ID for the product being replaced) and reasonCode (a three-digit code representing the reason for the replacement). Which set of agent instructions should a Platform Administrator use for these inputs, according to best practices for Agentforce instructions?",
        options: [
            { letter: "A", text: "Instructions for productId: 'The 18 character ID of the product.' Instructions for reasonCode: 'A numerical code.'" },
            { letter: "B", text: "Instructions for productId: 'The product ID. Retrieve this from the conversation history or the user's input.' Instructions for reasonCode: 'The three-digit replacement reason. This is required when the product ID is present.'" },
            { letter: "C", text: "Instructions for productId: 'ID from the product record.' Instructions for reasonCode: 'Code for the reason.'" },
            { letter: "D", text: "Instructions for productId: 'The 18 character ID of the product. Retrieve this from the conversation history or the user's input. Required.' Instructions for reasonCode: 'A three-digit code that specifies the reason for replacement. This is required only when the product ID is present.'" }
        ],
        answer: "D"
    },
    {
        id: "q350",
        isMultiple: false,
        question: "The Cloud Kicks sales team has asked that two of the fields that appear on the Opportunity cards in Kanban view be changed to make the cards more meaningful. Which feature should a Platform Administrator access to make this change?",
        options: [
            { letter: "A", text: "Record Type" },
            { letter: "B", text: "Compact Layout" },
            { letter: "C", text: "Page Layout" },
            { letter: "D", text: "Kanban Settings" }
        ],
        answer: "B"
    },
    {
        id: "q351",
        isMultiple: false,
        question: "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be rendered as Closed Lost. Which automation solution should a Platform Administrator use to implement this request?",
        options: [
            { letter: "A", text: "Flow Builder" },
            { letter: "B", text: "Outbound Message" },
            { letter: "C", text: "Flow Orchestration" },
            { letter: "D", text: "Quick Action" }
        ],
        answer: "A"
    },
    {
        id: "q352",
        isMultiple: false,
        question: "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and series. How should a Platform Administrator set up the Campaign to simplify reporting?",
        options: [
            { letter: "A", text: "Create individual Campaigns that all have the same name." },
            { letter: "B", text: "Configure Campaign Member Statuses to record which event Members attended." },
            { letter: "C", text: "Use Campaign Hierarchy where the monthly events roll up to a parent Campaign." },
            { letter: "D", text: "Add different record types for the monthly event types." }
        ],
        answer: "C"
    },
    {
        id: "q353",
        isMultiple: false,
        question: "Cloud Kicks uses the standard Account Type field to indicate different account tiers. Users find this confusing, so management has asked that the field be changed to read 'Tier' on the page layouts. How should a Platform Administrator implement this change?",
        options: [
            { letter: "A", text: "Edit the Type field and change the name." },
            { letter: "B", text: "Use Rename Tabs and Labels." },
            { letter: "C", text: "Build a custom field called Tier and delete Type." },
            { letter: "D", text: "Create a global picklist value set." }
        ],
        answer: "B"
    },
    {
        id: "q354",
        isMultiple: false,
        question: "At Cloud Kicks, cases are being assigned a default Case Owner and showing a Created By and Last Modified By that is not expected. The company wants to change this to an integration user to alleviate confusion with the business. What should a Platform Administrator edit to change this in Salesforce?",
        options: [
            { letter: "A", text: "Process Automation Settings" },
            { letter: "B", text: "Debug Logs" },
            { letter: "C", text: "Support Processes" },
            { letter: "D", text: "Support Settings" }
        ],
        answer: "D"
    },
    {
        id: "q355",
        isMultiple: false,
        question: "A Platform Administrator at Universal Containers is trying to deactivate a user who has left the company but is unable to do so. What is preventing the administrator from deactivating this user?",
        options: [
            { letter: "A", text: "The user is the running user of a dashboard." },
            { letter: "B", text: "The user is part of an active case assignment rule." },
            { letter: "C", text: "The user is part of an Opportunity team." },
            { letter: "D", text: "The user is part of an Account team." }
        ],
        answer: "A"
    },
    {
        id: "q356",
        isMultiple: false,
        question: "The Cloud Kicks CFO requires any opportunity over $100,000 to be automatically sent to them, so they can sign off on the record before the deal closes. Which feature should a Platform Administrator use to fulfill this requirement?",
        options: [
            { letter: "A", text: "Submit for Approval button" },
            { letter: "B", text: "Einstein Next Best Action" },
            { letter: "C", text: "Apex Triggers" },
            { letter: "D", text: "Flow Approvals" }
        ],
        answer: "D"
    },
    {
        id: "q357",
        isMultiple: false,
        question: "Northern Trail Outfitters has a new flow that automatically sets field values when a new account is created. The flow is launched by a process, but the flow is not working properly. What should a Platform Administrator do to identify the problem?",
        options: [
            { letter: "A", text: "View the Setup Audit Trail and review for errors." },
            { letter: "B", text: "Set up email logs and review the send error logs." },
            { letter: "C", text: "Use the native debug feature in Flow Builder." },
            { letter: "D", text: "Review debug logs with the flow logging level." }
        ],
        answer: "C"
    },
    {
        id: "q358",
        isMultiple: false,
        question: "There are multiple system administrators at Cloud Kicks that make configuration changes. Which tool gives the system administrators the ability to track these changes?",
        options: [
            { letter: "A", text: "Health Check" },
            { letter: "B", text: "Setup Audit Trail" },
            { letter: "C", text: "History Tracking" },
            { letter: "D", text: "Feed Tracking" }
        ],
        answer: "B"
    },
    {
        id: "q359",
        isMultiple: false,
        question: "Cloud Kicks has three teams of customer service reps that use a custom field on the Case object to populate the team assigned to manage the tickets. The customer support manager would like a Custom Dashboard to show data specific to each team. What should a Platform Administrator do to meet this requirement?",
        options: [
            { letter: "A", text: "Create separate Dashboards for each Customer Support team." },
            { letter: "B", text: "Create a Dashboard with widgets specific to each team." },
            { letter: "C", text: "Create a Dashboard that uses Dashboard filters to show specific team data." },
            { letter: "D", text: "Add Cross Filters to switch between the three customer service teams." }
        ],
        answer: "C"
    },
    {
        id: "q360",
        isMultiple: false,
        question: "Which action should a Platform Administrator configure to reverse a submitted approval request and unlock the associated record when setting up an approval process?",
        options: [
            { letter: "A", text: "Final Rejection Actions" },
            { letter: "B", text: "Recall Actions" },
            { letter: "C", text: "Final Approval Actions" },
            { letter: "D", text: "Initial Submission Actions" }
        ],
        answer: "B"
    },
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
    }

];