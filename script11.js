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
    }

];