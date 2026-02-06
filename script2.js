const quizData = [
    {
        id: "q31",
        isMultiple: false,
        question: "The administrator at Ursa Major Solar has been asked to change the Work Item and Project custom object relationship from a master-detail to a lookup. Which scenario could prevent the administrator from fulfilling this requirement?",
        options: [
            { letter: "A", text: "A junction object is required to support the lookup." },
            { letter: "B", text: "Roll-up summary fields exist on the master object." },
            { letter: "C", text: "The lookup field in all the records contains a value." },
            { letter: "D", text: "The lookup field is required for saving records." }
        ],
        answer: "B"
    },
    {
        id: "q32",
        isMultiple: false,
        question: "Ursa Major Solar is a Canadian company that has the following set up in Salesforce: • They have activated Web-to-Case on their corporate website. • Auto-Response is configured so that customers are thanked for logging the case and activated Assignment Rules based on the province (CANADA) in which the customer resides. • Case ownership is therefore determined and routed to the corresponding queue - North, South, East, or West. Customer Cases that do NOT meet the existing criteria need to be assigned to Queue - World. Which solution will satisfy this requirement?",
        options: [
            { letter: "A", text: "In Case Support Settings, change Default Case Owner to Queue - World." },
            { letter: "B", text: "In an Active Case Flow, change the name of the Queue to World." },
            { letter: "C", text: "Using a Workflow Rule, change the owner of new Cases outside CANADA to Queue - World." },
            { letter: "D", text: "Using a Trigger, change the owner of Cases outside CANADA to Queue - World." }
        ],
        answer: "A"
    },
    {
        id: "q33",
        isMultiple: false,
        question: "Universal containers (UC) has a Web -to -Case form on its Lightning Customer Community. UC wants to separate Cases into the following product categories: Corrugated Paper, Plastic, Fiberboard, and Metal. UC has added a picklist field to store this data. How can the Case be automatically placed in the correct queue upon submission?",
        options: [
            { letter: "A", text: "Create Record Types for each picklist value and a Business Process to move each Case to the correct Queue." },
            { letter: "B", text: "Create Assignment Rules based on the picklist values to move Cases to a Queue." },
            { letter: "C", text: "Create an Escalation Rule entry for each picklist value and set to zero minutes." },
            { letter: "D", text: "Create Record Types for each picklist value and assign to each product team's profile." }
        ],
        answer: "B"
    },
    {
        id: "q34",
        isMultiple: false,
        question: "A Sales executive at Universal Containers (UC) is utilizing Collaborative Forecasting to track sales rep quote attainment and wants to be alerted when an opportunity stage is moved backward In the sales process. Which feature should the administrator use to fulfill this request?",
        options: [
            { letter: "A", text: "Validation Rule" },
            { letter: "B", text: "Workflow rule" },
            { letter: "C", text: "Big Deal Alert" },
            { letter: "D", text: "Field History Tracking report" }
        ],
        answer: "B"
    },
    {
        id: "q35",
        isMultiple: true,
        question: "Ursa Major Solar wants to assign feature licenses to user records in Salesforce. Which two feature licenses can be assigned to a user record in Salesforce? Choose 2 answers",
        options: [
            { letter: "A", text: "Console User" },
            { letter: "B", text: "Knowledge User" },
            { letter: "C", text: "Opportunity User" },
            { letter: "D", text: "Service Cloud User" }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q36",
        isMultiple: true,
        question: "Which three settings are controlled by a users profile? Choose 3 answers",
        options: [
            { letter: "A", text: "Locale settings" },
            { letter: "B", text: "Field -level security" },
            { letter: "C", text: "a Record type assignment" },
            { letter: "D", text: "Feature license assignment" },
            { letter: "E", text: "Assigned apps" }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q37",
        isMultiple: true,
        question: "Universal Containers has a new sales rep who will be responsible for the government vertical. All existing government accounts should be moved to the new rep using mass transfer for accounts. Which two records will also transferred from the current account owner to the new rep in this scenario? Choose 2 answers",
        options: [
            { letter: "A", text: "All open Cases" },
            { letter: "B", text: "All Activities" },
            { letter: "C", text: "All Contacts" },
            { letter: "D", text: "All Open opportunity" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q38",
        isMultiple: true,
        question: "Ursa Major Solar needs a case to be automatically created. Which three features can an administrator use to accomplish this goal? Choose 3 answers",
        options: [
            { letter: "A", text: "SMS-to-case" },
            { letter: "B", text: "Lightning for Outlook" },
            { letter: "C", text: "Process Builder" },
            { letter: "D", text: "Web-to-case" },
            { letter: "E", text: "Email-to-case" }
        ],
        answer: ["C", "D", "E"]
    },
    {
        id: "q39",
        isMultiple: true,
        question: "The Cloud Kicks sales manager wants to boost productivity by providing insights for sales reps at the start of each day. Which three sales-specific standard Lightning components should an administrator add to the homepage to meet this requirement? Choose 3 answers",
        options: [
            { letter: "A", text: "Assistant" },
            { letter: "B", text: "Performance Chart" },
            { letter: "C", text: "Path" },
            { letter: "D", text: "Activities" },
            { letter: "E", text: "Key Deals" }
        ],
        answer: ["A", "B", "E"]
    },
    {
        id: "q40",
        isMultiple: true,
        question: "When users log In to Salesforce via the user interface, which two settings does the system check for authentication? Choose 2 answers",
        options: [
            { letter: "A", text: "The user's TWo-Factor Authentication for API Logins permission" },
            { letter: "B", text: "The role IP address restrictions" },
            { letter: "C", text: "The users TWo-Factor Authentication for User Interface Logins permission" },
            { letter: "D", text: "The user's profile login hours restrictions" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q41",
        isMultiple: true,
        question: "What are two features of Knowledge? Choose 2 answers",
        options: [
            { letter: "A", text: "Knowledge articles are always publicly available for customers." },
            { letter: "B", text: "Knowledge articles integrate with Service Console." },
            { letter: "C", text: "Users can rate the helpfulness of articles." },
            { letter: "D", text: "Any user can write and publish articles." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q42",
        isMultiple: true,
        question: "The administrator at Ursa Major Solar accidentally deleted a required field on Account. The field now appears under deleted fields on Account. Which three considerations should an administrator consider when deleting a field? Choose 3 answers",
        options: [
            { letter: "A", text: "The field will reappear on page layouts if they have not changed since the deletion." },
            { letter: "B", text: "The field will need to be marked as required again." },
            { letter: "C", text: "Restoring the field will also restore the data." },
            { letter: "D", text: "The data will need to be repopulated after restoring the field." },
            { letter: "E", text: "It is not possible to restore the field without recreating it." }
        ],
        answer: ["A", "B", "C"]
    },
    {
        id: "q43",
        isMultiple: true,
        question: "Which two actions can be completed with a workflow field update. Which two actions can UMS complete with this feature? Choose 2 answers",
        options: [
            { letter: "A", text: "Change the record type of a record." },
            { letter: "B", text: "Select a formula field for a field update." },
            { letter: "C", text: "Apply a specific value to a field." },
            { letter: "D", text: "Update the value of a field on a child object." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q44",
        isMultiple: true,
        question: "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors. Which two tools should an administrator configure? Choose 2 answers",
        options: [
            { letter: "A", text: "Quick Action" },
            { letter: "B", text: "Approval Process" },
            { letter: "C", text: "Outbound Message" },
            { letter: "D", text: "Email Alert Action" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q45",
        isMultiple: true,
        question: "Ursa Major Solar’s support team currently has a very high call volume. They want to decrease this volume by creating a sell-service community that will best published articles with Frequently Asked Questions (FAQs), and provide a chat with Help Desk representatives. Which two features should be used to fulfill this goal? Choose 2 answers",
        options: [
            { letter: "A", text: "Content" },
            { letter: "B", text: "SoS" },
            { letter: "C", text: "Knowledge" },
            { letter: "D", text: "Chat" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q46",
        isMultiple: true,
        question: "Universal Container's administrator has been asked to create a many-to-many relationship between two existing custom objects. Which two steps should the administrator take when enabling the many-to-many relationship? Choose 2 answers",
        options: [
            { letter: "A", text: "Create a junction with a custom object." },
            { letter: "B", text: "Create two lookup relationships on the new object." },
            { letter: "C", text: "Create two master-detail relationships on the new object." },
            { letter: "D", text: "Create URL fields on a custom object." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q47",
        isMultiple: true,
        question: "A system administrator wants to ensure that unique data is always input into a specific field. Which two field properties should be configured? Choose 2 answers",
        options: [
            { letter: "A", text: "Required" },
            { letter: "B", text: "Unique" },
            { letter: "C", text: "Default value" },
            { letter: "D", text: "Data Type" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q48",
        isMultiple: true,
        question: "A user at Cloud Kicks Is having Issues logging in to Salesforce. The user asks the administrator to reset their password. Which two options should the administrator consider when resetting the user's password? Choose 2 answers",
        options: [
            { letter: "A", text: "Resetting the password will change the user's password policy." },
            { letter: "B", text: "Single sign-on users can reset their own passwords using the forgot password link." },
            { letter: "C", text: "After resetting a password, the user may be required to activate their device to successfully log In to Salesforce." },
            { letter: "D", text: "Resetting a locked-out user's password automatically unlocks the user's account." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q49",
        isMultiple: true,
        question: "When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity.Which two automation tools should an administrator use to accomplish this request? Choose 2 answers",
        options: [
            { letter: "A", text: "Approval Process" },
            { letter: "B", text: "Flow Builder" },
            { letter: "C", text: "Process Builder" },
            { letter: "D", text: "Workflow Rule" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q50",
        isMultiple: true,
        question: "The administrator at Ursa Major Solar wants to configure automation that should run when an Account's rating changes along with the following actions: * Check if the rating changed from Hot to Cold Calculator o If yes, create a Case. -> If yes, send an Email *Check if the rating changed from Cold to Hot -> If yes, delete a related Task record. Which two automation solutions would be able to accomplish these tasks? Choose 2 answers",
        options: [
            { letter: "A", text: "One Flow" },
            { letter: "B", text: "One Process Builder that calls one Flow" },
            { letter: "C", text: "One Process Builder" },
            { letter: "D", text: "One Flow that calls One Process Builder" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q51",
        isMultiple: true,
        question: "Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations. Which two tools should an administrator use to build this solution? Choose 2 answers",
        options: [
            { letter: "A", text: "Validation Rule" },
            { letter: "B", text: "Flow Builder" },
            { letter: "C", text: "Approval Process" },
            { letter: "D", text: "Quick Action" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q52",
        isMultiple: true,
        question: "Ursa Major wants to add charts to a Salesforce dashboard. What are three standard chart types that are available? Choose 3 answers",
        options: [
            { letter: "A", text: "Venn Diagram" },
            { letter: "B", text: "Bar charts" },
            { letter: "C", text: "Tables" },
            { letter: "D", text: "Heat maps" },
            { letter: "E", text: "Gauge charts" }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q53",
        isMultiple: true,
        question: "A new sales rep at Ursa Major Solar has a qualified lead that is ready for conversion. When using the Lead conversion process, which two records can be created? Choose 2 answers",
        options: [
            { letter: "A", text: "Campaign" },
            { letter: "B", text: "Contact" },
            { letter: "C", text: "Account" },
            { letter: "D", text: "Case" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q54",
        isMultiple: true,
        question: "DreamHouse Realty needs to use consistent picklist values in the Category field on Accounts and Cases, with values respective to record types. Which two features should the administrator use to fulfill this requirement? Choose 2 answers",
        options: [
            { letter: "A", text: "Custom picklist" },
            { letter: "B", text: "Dependent picklist" },
            { letter: "C", text: "Global picklist" },
            { letter: "D", text: "Multi-select picklist" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q55",
        isMultiple: true,
        question: "Universal Containers uses a private sharing model for Accounts. Accounts are assigned to a region using a custom region picklist on Account. A manager from Europe has requested that the ensure set of EMEA users be able to work on al EMEA Accounts. Which two actions should an administrator take to complete this request? Choose 2 answers",
        options: [
            { letter: "A", text: "Create a sharing rule on Account that shares Accounts where region = EMEA with the EMEA users public group." },
            { letter: "B", text: "Create a sharing rule on Account that shares Accounts where region = EMEA with the EMEA users profile." },
            { letter: "C", text: "Create a sharing rule on Account that shares Accounts where region = EMEA with EMEA users queue." },
            { letter: "D", text: "Create a sharing rule on Account that shares Accounts where region = EMEA with the EMEA users role." }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q56",
        isMultiple: true,
        question: "Which two statements apply when custom fiscal year is enabled? Choose 2 answers",
        options: [
            { letter: "A", text: "The custom fiscal year must be defined manually." },
            { letter: "B", text: "The custom fiscal year setting CANNOT be disabled." },
            { letter: "C", text: "The defined custom fiscal year only affects forecasts." },
            { letter: "D", text: "The custom fiscal year automatically updates product schedules." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q57",
        isMultiple: true,
        question: "The administrator creates a validation rule that will require a custom text field called 'Details' be updated based on the value of another picklist field called 'Status'. Which two actions should the administrator take before activating the validation rule? Choose 2 answers",
        options: [
            { letter: "A", text: "Update the field types to be compatible with validation rules." },
            { letter: "B", text: "Add the validation rule to the user's profile." },
            { letter: "C", text: "Add the fields to the page layout." },
            { letter: "D", text: "Update the user's profile to read/write access to both fields." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q58",
        isMultiple: true,
        question: "An administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won, and another task after 60 days to check in with the customer. Which two automation tools should the administrator use? Choose 2 answers",
        options: [
            { letter: "A", text: "Field Update" },
            { letter: "B", text: "Outbound Message" },
            { letter: "C", text: "Workflow Rule" },
            { letter: "D", text: "Process Builder" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q59",
        isMultiple: true,
        question: "Which two solutions could an administrator find on the AppExchange to enhance their organization? Choose 2 answers",
        options: [
            { letter: "A", text: "Consultants" },
            { letter: "B", text: "Customers" },
            { letter: "C", text: "Communities" },
            { letter: "D", text: "Components" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q60",
        isMultiple: true,
        question: "Ursa Major is onboarding 15 new employees in three weeks. The administrator needs to create user records in Salesforce without activating them. Which two methods allow the administrator to achieve this goal? Choose 2 answers",
        options: [
            { letter: "A", text: "Create them with the user import Wizard and ensure that Active is unchecked." },
            { letter: "B", text: "Schedule a Time-Dependent Workflow to create users in three weeks." },
            { letter: "C", text: "Create a .csv file ensuring that is Active = false, and use the data loader to insert." },
            { letter: "D", text: "Click Add Multiple Users and ensure that Generate New Password and Notify user immediately are unchecked." }
        ],
        answer: ["C", "D"]
    }
];