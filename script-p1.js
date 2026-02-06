const quizData = [
    {
        id: "q1",
        isMultiple: false,
        question: "Universal Containers requires a different Lightning page to be displayed when Accounts are viewed In the Sales Console and In the Service Console. How should an administrator meet this requirement?",
        options: [
            { letter: "A", text: "Define multiple record types." },
            { letter: "B", text: "Create different user profiles." },
            { letter: "C", text: "Update page layout assignments." },
            { letter: "D", text: "Assign Lightning pages as app default." }
        ],
        answer: "D"
    },
    {
        id: "q2",
        isMultiple: false,
        question: "What describes the capabilities of Salesforce Knowledge?",
        options: [
            { letter: "A", text: "An automated tool that closes Cases based on historical information" },
            { letter: "B", text: "An automated Al tool that converts Leads to Opportunities given a predefined set of conditions" },
            { letter: "C", text: "A knowledge base composed of articles that can be written and used by support agents" },
            { letter: "D", text: "A knowledge base that uses AI to generate an article to solve customer support issues" }
        ],
        answer: "C"
    },
    {
        id: "q3",
        isMultiple: false,
        question: "The administrator at Cloud Kicks has been asked to replace two old workflow rules that are doing simple field updates when a lead is created to Improve processing time. What tool should the administrator use to replace the workflow rules?",
        options: [
            { letter: "A", text: "Quick Action Flow" },
            { letter: "B", text: "Screen Flow" },
            { letter: "C", text: "Scheduled Flow" },
            { letter: "D", text: "Before Save Flow" }
        ],
        answer: "D"
    },
    {
        id: "q4",
        isMultiple: false,
        question: "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should the administrator utilize to import the records to Salesforce?",
        options: [
            { letter: "A", text: "Data Import Wizard" },
            { letter: "B", text: "Manual Import" },
            { letter: "C", text: "Dataloader.io" },
            { letter: "D", text: "Data Loader" }
        ],
        answer: "A"
    },
    {
        id: "q5",
        isMultiple: false,
        question: "Universal Containers wants to provide reseller partners with discounted prices on the products they purchase. How should an administrator configure this requirement?",
        options: [
            { letter: "A", text: "Create a separate PriceBook for reseller partners." },
            { letter: "B", text: "Use a different Opportunity record type." },
            { letter: "C", text: "Create separate reseller partner products." },
            { letter: "D", text: "Add a Partner_Discount__c field to the Opportunity." }
        ],
        answer: "A"
    },
    {
        id: "q6",
        isMultiple: false,
        question: "The administrator for AW Computing is working with a user who is having trouble logging in to Salesforce. What should the administrator do to identify why the user is unable to log in?",
        options: [
            { letter: "A", text: "Review the password policies." },
            { letter: "B", text: "Review the login history." },
            { letter: "C", text: "Review the password history." },
            { letter: "D", text: "Review the security token." }
        ],
        answer: "B"
    },
    {
        id: "q7",
        isMultiple: false,
        question: "An administrator needs to create a one-to-many relationship between two objects with limited access to child records. What type of field should the administrator use?",
        options: [
            { letter: "A", text: "Cross object formula" },
            { letter: "B", text: "Roll-up summary" },
            { letter: "C", text: "Lookup field" },
            { letter: "D", text: "Master-detail field" }
        ],
        answer: "D"
    },
    {
        id: "q8",
        isMultiple: false,
        question: "Northern Trail Outfitters is partnering with a new business and needs to import 100,000 new records nightly into its Salesforce organization. Which tool should the administrator use to accomplish this task?",
        options: [
            { letter: "A", text: "Mass Transfer Records" },
            { letter: "B", text: "Third-party tool from the AppExchange" },
            { letter: "C", text: "Data Loader" },
            { letter: "D", text: "Data Import Wizard" }
        ],
        answer: "C"
    },
    {
        id: "q9",
        isMultiple: false,
        question: "At Ursa Major Solar, a workflow rule is in place that sends a reminder email 20 days before the warranty expiration date. A custom ...... another three years. What is the expected behavior for the email workflow rule?",
        options: [
            { letter: "A", text: "The email Is sent with the 30 day reminder criteria." },
            { letter: "B", text: "The email is NOT sent because the record no longer meets the criteria." },
            { letter: "C", text: "The email is locked in the job queue until It meets the criteria." },
            { letter: "D", text: "The email is NOT sent because the customers email address was missing." }
        ],
        answer: "C"
    },
    {
        id: "q10",
        isMultiple: false,
        question: "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
        options: [
            { letter: "A", text: "Setup Audit Trail" },
            { letter: "B", text: "Field History Tracking" },
            { letter: "C", text: "Organization-Wide Defaults" },
            { letter: "D", text: "Security Health Check" }
        ],
        answer: "D"
    },
    {
        id: "q11",
        isMultiple: false,
        question: "The VP of Marketing wants Sales Reps to get updates when materials are updated in the Marketing library. What feature should an Administrator recommend?",
        options: [
            { letter: "A", text: "Validation rule" },
            { letter: "B", text: "Email alert" },
            { letter: "C", text: "Approval process" },
            { letter: "D", text: "Subscribe" }
        ],
        answer: "D"
    },
    {
        id: "q12",
        isMultiple: false,
        question: "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
        options: [
            { letter: "A", text: "Path Key Fields" },
            { letter: "B", text: "Opportunity Processes" },
            { letter: "C", text: "Dynamic Forms" },
            { letter: "D", text: "Workflow Rules" }
        ],
        answer: "A"
    },
    {
        id: "q13",
        isMultiple: false,
        question: "Ursa Major Solar needs its sales users to be able to do the following: • View their open Opportunities grouped by Stage • View their open Opportunities grouped by source report on a dashboard component. Which report format needs to be used to accomplish this goal?",
        options: [
            { letter: "A", text: "Tabular" },
            { letter: "B", text: "Summary" },
            { letter: "C", text: "Joined" },
            { letter: "D", text: "Matrix" }
        ],
        answer: "B"
    },
    {
        id: "q14",
        isMultiple: false,
        question: "An administrator at Universal Containers needs an automated way to delete records based on field values. What automated solution should the administrator use?",
        options: [
            { letter: "A", text: "Process Builder" },
            { letter: "B", text: "Flow Builder" },
            { letter: "C", text: "Workflow" },
            { letter: "D", text: "Automation Studio" }
        ],
        answer: "B"
    },
    {
        id: "q15",
        isMultiple: false,
        question: "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
        options: [
            { letter: "A", text: "External ID" },
            { letter: "B", text: "Record ID" },
            { letter: "C", text: "Rich Text field" },
            { letter: "D", text: "Auto-Number field" }
        ],
        answer: "A"
    },
    {
        id: "q16",
        isMultiple: false,
        question: "A sales ops user has been identified as the dashboards expert within Cloud Kicks. This user needs to be able to update dashboard folder access for all non-private folders. Which permission should the administrator assign to the user?",
        options: [
            { letter: "A", text: "Manage reports in public folders" },
            { letter: "B", text: "Manage dashboards in public folders" },
            { letter: "C", text: "Create dashboard folders" },
            { letter: "D", text: "Create and customize dashboards" }
        ],
        answer: "B"
    },
    {
        id: "q17",
        isMultiple: false,
        question: "At Cloud Kicks, new public articles must be approved before publishing. Users are asked to click to the submit for approval button to begin the process but sometimes the user forgets. How should an administrator automate submission so al new public articles will enter the approval process?",
        options: [
            { letter: "A", text: "Default the Submit for Approval button" },
            { letter: "B", text: "Update initial Actions" },
            { letter: "C", text: "Use Process Builder" },
            { letter: "D", text: "Create a new record type and page layout" }
        ],
        answer: "C"
    },
    {
        id: "q18",
        isMultiple: false,
        question: "Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the question that is needed. How should an administrator complete this?",
        options: [
            { letter: "A", text: "Use a new version of the flow for each scenario." },
            { letter: "B", text: "Use a decision element and a new screen to show the proper question." },
            { letter: "C", text: "A Use conditional visibility to hide the unnecessary question." },
            { letter: "D", text: "Use branching in the flow screen to show the proper scenario." }
        ],
        answer: "B"
    },
    {
        id: "q19",
        isMultiple: false,
        question: "Sales users at Cloud Kicks are requesting that the data in the Industry field on the Account object displays on the Opportunity page layout. Which type of field should an administrator create to accomplish this?",
        options: [
            { letter: "A", text: "Cross-object formula field" },
            { letter: "B", text: "Custom Account field" },
            { letter: "C", text: "Standard Account field" },
            { letter: "D", text: "Master-detail relationship field" }
        ],
        answer: "A"
    },
    {
        id: "q20",
        isMultiple: false,
        question: "The administrator at Ursa Major Solar has just finished creating new hot Account reports that filter Accounts that were modified this year with a rating of hot. The report was shared with the entire sales team. Some users are seeing some Accounts that have NOT been modified since last year and other Accounts where the rating is cold. What should the administrator do to ensure that the report works as intended for all users?",
        options: [
            { letter: "A", text: "Lock the report filters." },
            { letter: "B", text: "Create a filter using bucketing." },
            { letter: "C", text: "Create the report in a private folder." },
            { letter: "D", text: "Use a cross-object filter." }
        ],
        answer: "A"
    },
    {
        id: "q21",
        isMultiple: false,
        question: "The VP of safes at Universal Containers wants to prevent members of the sales team from changing an opportunity to a date in the past. What should an administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Assignment Rule" },
            { letter: "B", text: "Field-Level Security" },
            { letter: "C", text: "Validation Rule" },
            { letter: "D", text: "Approval Process" }
        ],
        answer: "C"
    },
    {
        id: "q22",
        isMultiple: false,
        question: "The managers at Ursa Major Solar asked the administrator to quickly provide access to sales reports and dashboards. How can this be done?",
        options: [
            { letter: "A", text: "Log a case to Salesforce Support" },
            { letter: "B", text: "Search the AppExchange for free adoption report apps." },
            { letter: "C", text: "Use the Salesforce Auto-Report Builder." },
            { letter: "D", text: "Build reports and dashboards." }
        ],
        answer: "B"
    },
    {
        id: "q23",
        isMultiple: false,
        question: "Users at Cloud Kicks are reporting different options when updating a custom picklist on the Opportunity object based on the kind of opportunity. Where should an administrator update the option in the picklist?",
        options: [
            { letter: "A", text: "Record type" },
            { letter: "B", text: "Plcklist value sets" },
            { letter: "C", text: "Fields and relationships" },
            { letter: "D", text: "Related lookup filters" }
        ],
        answer: "A"
    },
    {
        id: "q24",
        isMultiple: false,
        question: "Universal Containers wants to create a new sales team that focuses exclusively on small to medium business customers. This group will track information with the same fields and picklist values but will have 2 new options on Stage field. How should the system administrator accomplish this task?",
        options: [
            { letter: "A", text: "Create a new Record type and a new sales process." },
            { letter: "B", text: "Create a new Record type and a page layout." },
            { letter: "C", text: "Create a new Sales process." },
            { letter: "D", text: "Create a new Record Type." }
        ],
        answer: "A"
    },
    {
        id: "q25",
        isMultiple: false,
        question: "A user at Universal Containers left the company. The administrator needs to create a new user for their replacement, but they have assigned all available user licenses. What should the administrator do to free up a user license for the new user?",
        options: [
            { letter: "A", text: "Change the former user's record to the new user." },
            { letter: "B", text: "Deactivate the former employees user record." },
            { letter: "C", text: "Freeze the former employee's user record." },
            { letter: "D", text: "Delete the former employee's user record." }
        ],
        answer: "B"
    },
    {
        id: "q26",
        isMultiple: false,
        question: "The administrator at Universal Containers is unable to see the user license option when creating new users today, despite creating new users with this license type earlier in the week. What should the administrator consider first in order to diagnose the problem?",
        options: [
            { letter: "A", text: "Open a Salesforce Support Case." },
            { letter: "B", text: "Verify that Salesforce is a valid license type for the User object." },
            { letter: "C", text: "Check on the remaining available Salesforce licenses under Company Information." },
            { letter: "D", text: "Check on the remaining available Salesforce licenses under User Management Settings." }
        ],
        answer: "C"
    },
    {
        id: "q27",
        isMultiple: false,
        question: "Ursa Major Solar has an existing process for their solar panel Opportunities that include the following stages: * Prospecting * Value Proposition * Negotiation/Review * Closed Won * Closed Lost. They want to implement a new process for their battery Opportunities using the following stages: * Qualification * Value Prospection * Negotiation/Review * Closed Won * Closed Lost. What should the administrator configure to implement these changes?",
        options: [
            { letter: "A", text: "Create a new battery record type on Opportunity and add the appropriate values to the stage picklist." },
            { letter: "B", text: "Create a new sales process that includes the relevant stages and assign it to the new battery record type on opportunity." },
            { letter: "C", text: "Update the existing Opportunity sales process to includes qualification as a valid stage." },
            { letter: "D", text: "Edit the stage field on Opportunity and activate qualification as a value." }
        ],
        answer: "B"
    },
    {
        id: "q28",
        isMultiple: false,
        question: "Users at Universal Containers have reported that the related lists on the Lightning record page for Accounts are showing only four fields. They would like more fields to be visible. Which customization should an administrator use to allow for up to ten fields on related lists?",
        options: [
            { letter: "A", text: "Change the related list type to custom" },
            { letter: "B", text: "Change the related list type to default" },
            { letter: "C", text: "Change the related list type to enhanced list" },
            { letter: "D", text: "Change the related list type to list view" }
        ],
        answer: "C"
    },
    {
        id: "q29",
        isMultiple: false,
        question: "A new approval process is being adapted by Ursa Major Solar. After an opportunity has been approved, the contract is sent to the customer for signature as the final step in that process. How can the administrator implement this functionality?",
        options: [
            { letter: "A", text: "Use the Salesforce Autosign flow." },
            { letter: "B", text: "Hire a consulting firm to develop a document signing workflow." },
            { letter: "C", text: "Check the 'Send PDF' box on the approval process setup." },
            { letter: "D", text: "Install an app from the AppExchange." }
        ],
        answer: "D"
    },
    {
        id: "q30",
        isMultiple: false,
        question: "Universal Containers wants to set up a customer service community where existing and potential customers can view public discussions, collaborate with other members, and search for solutions posted by other members without logging into the community. How should an administrator allow access to the community?",
        options: [
            { letter: "A", text: "Use the community's guest user profile" },
            { letter: "B", text: "Use Linkedin or Facebook as authentication providers" },
            { letter: "C", text: "Create a custom community profile" },
            { letter: "D", text: "Set up self-registration for the community" }
        ],
        answer: "A"
    },
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
    },
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
        isMultiple: true,
        question: "Cloud Kicks intends to protect data with backups by using the data export service. Which two considerations should the administrator remember when scheduling the export? Choose 2 answers",
        options: [
            { letter: "A", text: "Metadata backups are limited to sandbox refresh intervals." },
            { letter: "B", text: "Data backups are limited to weekly or monthly intervals." },
            { letter: "C", text: "Metadata backups must be run via a separate process." },
            { letter: "D", text: "Data export service should be run from a sandbox." }
        ],
        answer: ["A", "B"]
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
    },
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
    }

];