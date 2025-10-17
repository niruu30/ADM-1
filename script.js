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
        answer: ""
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
    },
    {
        id: "q201",
        isMultiple: false,
        question: "What must an administrator do when creating a record type?",
        options: [
            { letter: "A", text: "Create a new page layout for the record type" },
            { letter: "B", text: "Add the record type to the required user records" },
            { letter: "C", text: "Assign the record type to the appropriate profiles" },
            { letter: "D", text: "Set the field-level security for the record type" }
        ],
        answer: "C"
    },
    {
        id: "q202",
        isMultiple: false,
        question: "An administrator created a record trigger flow to update contacts. How should the administrator reference the values of the active record the flow is running on?",
        options: [
            { letter: "A", text: "Use the {!Accountld} record variable." },
            { letter: "B", text: "Use the {!Contact. Id} global variable." },
            { letter: "C", text: "Use the Get Records element to find the Id." },
            { letter: "D", text: "Use the $Record global variable." }
        ],
        answer: "C"
    },
    {
        id: "q203",
        isMultiple: false,
        question: "A Sales Manager wants all Sales Users in the department to see a Dashboard that displays Total Closed/Won Opportunity Amount by User on a monthly basis. The Opportunity sharing model is private. How can the Administrator meet this requirement?",
        options: [
            { letter: "A", text: "Create the Dashboard from the Opportunities by User Report, select the Sales Manager as Run As User and Save in the private Dashboard Folder." },
            { letter: "B", text: "Ask the Sales Manager to create the Dashboard from the Opportunities by User Report and save it to her private Dashboards Folder." },
            { letter: "C", text: "Create the Dashboard from the Opportunities by User Report, then save it in the shared Dashboard Folder as a Dynamic Dashboard." },
            { letter: "D", text: "Ask the Sales Manager to create the Dashboard from the Opportunities by User Report, select 'View Dashboard as Me' and save in the shared Dashboard Folder." }
        ],
        answer: "D"
    },
    {
        id: "q204",
        isMultiple: false,
        question: "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Create an assignment rule to email the lead." },
            { letter: "B", text: "Add a public group and Process Builder to email the lead." },
            { letter: "C", text: "Use a validation rule to trigger workflow to email the lead." },
            { letter: "D", text: "Configure an auto-response rule to email the lead." }
        ],
        answer: "D"
    },
    {
        id: "q205",
        isMultiple: false,
        question: "Universal Containers has a marketing, team setup as a public group A sales representative would like to engage the marketing team on one opportunity What should the sales representative do to ensure the marketing team can access the opportunity?",
        options: [
            { letter: "A", text: "Manually share the record with the public group." },
            { letter: "B", text: "Change the opportunity owner to the public group." },
            { letter: "C", text: "Add the public group to the opportunity team." },
            { letter: "D", text: "Add the public group to an opportunity queue." }
        ],
        answer: "A"
    },
    {
        id: "q206",
        isMultiple: false,
        question: "The Human Resources department at Northern Trail Outfitters wants employees to provide feedback about their managers using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff. How should an administrator configure the custom object to meet this requirement?",
        options: [
            { letter: "A", text: "Define a criteria-based sharing rule." },
            { letter: "B", text: "Set the Default External Access to Private." },
            { letter: "C", text: "Uncheck Grant Access Using Hierarchies." },
            { letter: "D", text: "Configure an owner-based sharing rule." }
        ],
        answer: "C"
    },
    {
        id: "q207",
        isMultiple: false,
        question: "Universal Containers uses a private sharing model. Account management is accomplished using teams and Accounts are owned by the sales rep. The rep reports to the regional director who then reports to the VP of sales. When the regional director runs reports, what records would they see with the my team’s account filter?",
        options: [
            { letter: "A", text: "Accounts they and their subordinates own." },
            { letter: "B", text: "Accounts that they are on the account team." },
            { letter: "C", text: "Accounts their subordinates can access." },
            { letter: "D", text: "Accounts their subordinates own." }
        ],
        answer: "A"
    },
    {
        id: "q208",
        isMultiple: false,
        question: "How can an administrator allow all internal users to view a dashboard as a Sales Manager within a sales region?",
        options: [
            { letter: "A", text: "Create a dashboard with multiple components." },
            { letter: "B", text: "Create a dashboard for all opportunities in the region." },
            { letter: "C", text: "Create a dashboard to run as a specified user." },
            { letter: "D", text: "Create a dashboard to run as the logged -In user." }
        ],
        answer: "C"
    },
    {
        id: "q209",
        isMultiple: false,
        question: "Dream Home Realty just announced its new Home Concierge offering. This product is unlike anything the company has offered in the past and follows a different business model. What should the administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Create a new Opportunity product." },
            { letter: "B", text: "Create a new sales process." },
            { letter: "C", text: "Create a quick action." },
            { letter: "D", text: "Create a new approval process." }
        ],
        answer: "B"
    },
    {
        id: "q210",
        isMultiple: false,
        question: "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
        options: [
            { letter: "A", text: "Case Escalation Rules" },
            { letter: "B", text: "Case Scheduled Reports" },
            { letter: "C", text: "Case Assignment Rules" },
            { letter: "D", text: "Case Dashboard Refreshes" }
        ],
        answer: "A"
    },
    {
        id: "q211",
        isMultiple: false,
        question: "Ursa Major Solar recently enabled the multiple currencies feature. As a result, which currency will be used as the foundation for all currency conversion rates?",
        options: [
            { letter: "A", text: "Active currency" },
            { letter: "B", text: "Record currency" },
            { letter: "C", text: "Personal currency" },
            { letter: "D", text: "Corporate currency" }
        ],
        answer: "D"
    },
    {
        id: "q212",
        isMultiple: false,
        question: "Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout. How should an administrator meet this requirement?",
        options: [
            { letter: "A", text: "Create a custom object to capture popular Case resolutions." },
            { letter: "B", text: "Configure Knowledge with articles and data categories." },
            { letter: "C", text: "Use an interview flow to capture Case details." },
            { letter: "D", text: "Direct users to Global Search to look for similar cases." }
        ],
        answer: "D"
    },
    {
        id: "q213",
        isMultiple: false,
        question: "Northern Trail Outfitters has a web form for cases. If the case assignment rules inactive, who will be assigned ownership when the case is created?",
        options: [
            { letter: "A", text: "The case will be assigned to the default workflow user." },
            { letter: "B", text: "The system administrator will be assigned." },
            { letter: "C", text: "The case will be assigned to a default case queue." },
            { letter: "D", text: "The default case owner will be assigned." }
        ],
        answer: "C"
    },
    {
        id: "q214",
        isMultiple: false,
        question: "The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
        options: [
            { letter: "A", text: "Record Type Assignment" },
            { letter: "B", text: "Page Layout Assignment" },
            { letter: "C", text: "Sharing Settings" },
            { letter: "D", text: "Component Visibility" }
        ],
        answer: "D"
    },
    {
        id: "q215",
        isMultiple: false,
        question: "Major Solar plans to offer partner its services at a discounted rate applied to at opportunities. The administrator needs to ensure that the appropriate prices are applied to services on opportunities for this partner. What should the administrator do to achieve this goal?",
        options: [
            { letter: "A", text: "Create a custom price book with the discounted list prices." },
            { letter: "B", text: "Create a custom object for the discounted services." },
            { letter: "C", text: "Create a new discount record type on the services object." },
            { letter: "D", text: "Create a new list price on the standard price book." }
        ],
        answer: "A"
    },
    {
        id: "q216",
        isMultiple: false,
        question: "DreamHouse Realty wants to offer a form on its Experience Cloud site where inspectors will submit findings from a property inspection. Which feature should an administrator place on the page to fulfill this requirement?",
        options: [
            { letter: "A", text: "Screen Flow" },
            { letter: "B", text: "Autolaunched Flow" },
            { letter: "C", text: "Related List" },
            { letter: "D", text: "Record Detail" }
        ],
        answer: "A"
    },
    {
        id: "q217",
        isMultiple: false,
        question: "An administrator Installed a managed package that contains a permission set group. The permission set group that was installed Includes Delete access on several objects, and the administrator needs to prevent users in the permission set group from being able to delete records. What should the administrator do to control Delete access?",
        options: [
            { letter: "A", text: "Edit the profile for the users to remove Delete access from the objects." },
            { letter: "B", text: "Create a new permission set that has Delete access deselected for the objects." },
            { letter: "C", text: "Use a muting permission set with a permission set group to mute selected permissions." },
            { letter: "D", text: "Create a new role that prevents Delete permissions from rolling up to the users" }
        ],
        answer: "C"
    },
    {
        id: "q218",
        isMultiple: false,
        question: "An administrator at Cloud Kicks has a flow In production that is supposed to emit new words. However, no new records are being created. What could the issue be?",
        options: [
            { letter: "A", text: "The flow is Inactive." },
            { letter: "B", text: "The flow Is read only." },
            { letter: "C", text: "The flow trigger is missing." },
            { letter: "D", text: "The flow url Is deactivated." }
        ],
        answer: "A"
    },
    {
        id: "q219",
        isMultiple: false,
        question: "Cloud Kicks' executives have noticed the Opportunity Expected Revenue field displays incorrect values. How should the administrator correct this?",
        options: [
            { letter: "A", text: "Modify the closed won value associated with the stage." },
            { letter: "B", text: "Adjust the forecast category associated with the stage." },
            { letter: "C", text: "Change the probability associated with the stage." },
            { letter: "D", text: "Update the expected revenue associated with the stage." }
        ],
        answer: "C"
    },
    {
        id: "q220",
        isMultiple: false,
        question: "Previous Ursa Major Solar sales representatives worked on approximately 100 accounts with billing address in California. … retain viewing and editing access to these accounts for 1-3 months. An administrator needs to easily provide view and … access accounts. What should the administrator do to achieve this goal?",
        options: [
            { letter: "A", text: "Configure a new account sharing rule for these users with criteria based on billing state equals California." },
            { letter: "B", text: "Configure a new profile for these users with criteria based on billing state equals California." },
            { letter: "C", text: "Configure a new account folder for these users with criteria based on billing state equals California." },
            { letter: "D", text: "Configure a new account sharing rule for the sales Rep profile with criteria based on billing state equals California." }
        ],
        answer: "A"
    },
    {
        id: "q221",
        isMultiple: false,
        question: "Supervisors at Universal Containers have read access to Contacts through their profiles. Sales reps have a separate profile that allows them to edit Contacts. Some sales reps are attending a conference for a week and supervisors will need to fill in to update Contact details while they are out. How should an administrator grant proper access to the supervisors?",
        options: [
            { letter: "A", text: "Update the supervisor profile with edit permission on Contact." },
            { letter: "B", text: "Create a sharing rule to grant read/write access on Contact to the supervisor role." },
            { letter: "C", text: "Assign a permission set with the edit permission on Contact to the supervisors that need it." },
            { letter: "D", text: "Change the supervisor users profiles to be sales rep." }
        ],
        answer: "C"
    },
    {
        id: "q222",
        isMultiple: false,
        question: "Cloud Kicks has a custom object named Shoe. The administrator has been asked to ensure that when a relationship is created between Account and Shoe to prevent orphaned shoe records. What should the administrator do to complete this requirement?",
        options: [
            { letter: "A", text: "Create an indirect lookup" },
            { letter: "B", text: "Create an encrypted lookup" },
            { letter: "C", text: "Create a master-detail lookup" },
            { letter: "D", text: "Create a hierarchical lookup" }
        ],
        answer: "C"
    },
    {
        id: "q223",
        isMultiple: true,
        question: "An administrator at Northern Trail Outfitters is creating a validation rule. Which two functions should the administrator use when creating a validation rule? Choose 2 answers",
        options: [
            { letter: "A", text: "Formula return type" },
            { letter: "B", text: "Rule active date" },
            { letter: "C", text: "Error message location" },
            { letter: "D", text: "Error condition formula" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q224",
        isMultiple: true,
        question: "What are two valid use cases for Salesforce Communities? Choose 2 answers",
        options: [
            { letter: "A", text: "Internal users can replicate Salesforce automation without licenses fees." },
            { letter: "B", text: "External partners can track the status of joint Opportunities." },
            { letter: "C", text: "External customers can track their purchases and open support cases." },
            { letter: "D", text: "External customers can gain full user rights to Salesforce." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q225",
        isMultiple: true,
        question: "The District Sales Director at Cloud Kicks wants to share the leaderboard component on his dashboard with his sales team. What two actions should an administrator take to enable this functionality? Choose 2 answers",
        options: [
            { letter: "A", text: "Create a Chatter group for the Sales Team" },
            { letter: "B", text: "Build a Reporting Snapshot" },
            { letter: "C", text: "Turn on Chatter Feed Tracking for Dashboards" },
            { letter: "D", text: "Enable Opportunity Teams" }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q226",
        isMultiple: true,
        question: "What are two considerations for sharing email template folders? Choose 2 answers",
        options: [
            { letter: "A", text: "Sharing a folder shares all subfolders in that folder." },
            { letter: "B", text: "Sharing on Lightning email templates is inherited from the folder it is in." },
            { letter: "C", text: "Subfolders are shared separately from the parent folder." },
            { letter: "D", text: "Lightning email templates support packaging." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q227",
        isMultiple: true,
        question: "The administrator at Ursa Major Solar has created a custom report type and built a report for the sales operations team. However, none of the users are able to access the report. Which two options could cause this issue? Choose 2 answers",
        options: [
            { letter: "A", text: "The user's profile is missing View access." },
            { letter: "B", text: "The report is saved in a private folder." },
            { letter: "C", text: "The custom report type is in development." },
            { letter: "D", text: "The org has reached its limit for custom report types." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q228",
        isMultiple: true,
        question: "Universal Containers successfully deployed a partner community last quarter and is experiencing performance issues. Which two strategies should a system administrator use to improve community performance? Choose 2 answers",
        options: [
            { letter: "A", text: "Grant super user access to appropriate external users" },
            { letter: "B", text: "Create a new custom partner profile" },
            { letter: "C", text: "Delete the Executive and Manager roles" },
            { letter: "D", text: "Use sharing sets" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q229",
        isMultiple: true,
        question: "What are three settings an administrator should configure to make it easy for approvers to respond to approval requests? Choose 3 answers",
        options: [
            { letter: "A", text: "Enable the organization's email approval response setting." },
            { letter: "B", text: "Add the Items to Approve component to the approvers' home page." },
            { letter: "C", text: "Specify initial submission actions within the approval process." },
            { letter: "D", text: "Create a flow to automatically approve all records." },
            { letter: "E", text: "Update the organization's Chatter settings to allow approvals." }
        ],
        answer: ["A", "B", "E"]
    },
    {
        id: "q230",
        isMultiple: true,
        question: "An administrator at Cloud Kicks wants to deactivate a user who has left the company. What are two reasons that would prevent a user from being deactivated? Choose 2 answers",
        options: [
            { letter: "A", text: "The user is the highest role in the role hierarchy." },
            { letter: "B", text: "The user is part of a territory hierarchy." },
            { letter: "C", text: "The user is in a custom hierarchy field." },
            { letter: "D", text: "The user is assigned in a workflow email alert." }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q231",
        isMultiple: true,
        question: "Which two are purposes of AppExchange?",
        options: [
            { letter: "A", text: "Partners can download accounts and contacts to collaborate on sales deals." },
            { letter: "B", text: "Administrators can download and customize pre-built dashboards and reports." },
            { letter: "C", text: "Support users can install the Service Cloud console custom app." },
            { letter: "D", text: "Customers can share and install apps published by Salesforce partners." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q232",
        isMultiple: true,
        question: "Users have noticed that when they click on a report In a dashboard to view the report details, the values In the report are different from the values displayed on the dashboard. What are the two reasons this .Is likely to occur? Choose 2 answers",
        options: [
            { letter: "A", text: "The running dashboard user and viewer have different permissions." },
            { letter: "B", text: "The dashboard needs to be refreshed." },
            { letter: "C", text: "The report needs to be refreshed." },
            { letter: "D", text: "The current user does not have access to the report folder." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q233",
        isMultiple: true,
        question: "The administrator at Cloud Kicks has a custom picklist field on Lead, which Is missing on the Contact when leads are converted. Which two Items should the administrator do to make sure these values are populated? Choose 2 answers",
        options: [
            { letter: "A", text: "Create a custom picklist field on Contact." },
            { letter: "B", text: "Update the picklist value with a validation rule." },
            { letter: "C", text: "Set the picklist field to be required on the Lead object." },
            { letter: "D", text: "Map the picklist field on the Lead to the Contact." }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q234",
        isMultiple: true,
        question: "A system administrator at Universal Containers needs to transfer records from one user to another. What object can be transferred using the mass transfer tool? (2 answers)",
        options: [
            { letter: "A", text: "Leads" },
            { letter: "B", text: "Quotas" },
            { letter: "C", text: "Campaigns" },
            { letter: "D", text: "Accounts" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q235",
        isMultiple: true,
        question: "What are two considerations when configuring the lead conversion process? Choose 2 answers",
        options: [
            { letter: "A", text: "Standard lead fields are automatically converted to account, contact, and opportunity fields." },
            { letter: "B", text: "Custom lead fields can be mapped to custom object fields." },
            { letter: "C", text: "Custom lead fields can be mapped to account, contact, and opportunity fields." },
            { letter: "D", text: "Roll -up summary lead fields can be mapped to custom contact fields." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q236",
        isMultiple: true,
        question: "What are two ways to customize basic reports using Lightning Experience? Choose 2 answers",
        options: [
            { letter: "A", text: "By adding links to external pages" },
            { letter: "B", text: "By adding a filter" },
            { letter: "C", text: "By adding a chart" },
            { letter: "D", text: "By adding a Lightning Component" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q237",
        isMultiple: true,
        question: "The Universal Containers Administrator is editing the page layout for a new custom object when a text area field is inadvertently deleted from the page layout. What are three methods for restoring the field to the page layout? Choose 3 answers",
        options: [
            { letter: "A", text: "Clone the layout from a different profile and use Save As." },
            { letter: "B", text: "From the Fields palette, drag the field into the same position." },
            { letter: "C", text: "Restore original page layout from a sandbox." },
            { letter: "D", text: "Click the Undo button or the Cancel button." },
            { letter: "E", text: "Restore from the recycle bin within 15 days." }
        ],
        answer: ["B", "C", "D"]
    },
    {
        id: "q238",
        isMultiple: true,
        question: "The administrator at Universal Containers wants to add branding to Salesforce. Which two considerations should the administrator keep in mind? Choose 2 answers",
        options: [
            { letter: "A", text: "Only one theme can be active at a time, and a theme applies to the entire org." },
            { letter: "B", text: "Up to 150 custom themes can be created, modified, or cloned from the built-in themes." },
            { letter: "C", text: "Chatter external users see the built-in Lightning blue theme only." },
            { letter: "D", text: "Themes apply to Salesforce Classic and to the Salesforce mobile app" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q239",
        isMultiple: true,
        question: "The administrator for Cloud Kicks needs to give access to a new custom object with custom fields to more than one User. Which two options should an administrator use to meet this requirement? Choose 2 answers",
        options: [
            { letter: "A", text: "Edit organization-wide defaults" },
            { letter: "B", text: "Assign permission set group to Users" },
            { letter: "C", text: "Create a permission set" },
            { letter: "D", text: "Add to manual sharing list" }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q240",
        isMultiple: true,
        question: "What are three considerations when a user is importing data via Data Loader? Choose 3 answers",
        options: [
            { letter: "A", text: "Restricted picklists, a new picklist value will be Ignored and the default value applied." },
            { letter: "B", text: "Validation rules do not execute when importing data." },
            { letter: "C", text: "Field -Level Security access determines which fields will be visible." },
            { letter: "D", text: "Importing data into checkbox fields allows for the use of TRUE/FALSE." },
            { letter: "E", text: "Unrestricted picklists, a new picklist value will be applied but will not be added to the picklist." }
        ],
        answer: ["C", "D", "E"]
    },
    {
        id: "q241",
        isMultiple: true,
        question: "Executives at Cloud Kicks have reported that their dashboards are showing Inaccurate data. The administrator has discovered that users have been changing the source reports. Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers",
        options: [
            { letter: "A", text: "Move the dashboard to the user's private folder." },
            { letter: "B", text: "Move the dashboard reports to the view-only folder." },
            { letter: "C", text: "Change the dashboard to be a dynamic dashboard." },
            { letter: "D", text: "Create a new report folder with viewer access." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q242",
        isMultiple: false,
        question: "Sales and Customer Care users at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact. What should the administrator use to achieve this?",
        options: [
            { letter: "A", text: "Related Lookup Filters" },
            { letter: "B", text: "Page Layout Editor" },
            { letter: "C", text: "Compact Layout Editor" },
            { letter: "D", text: "Search Layout Editor" }
        ],
        answer: "B"
    },
    {
        id: "q243",
        isMultiple: false,
        question: "New leads need to be routed to the correct sales person based on the lead address. How should the administrator configure this requirement?",
        options: [
            { letter: "A", text: "Use lead assignment rules." },
            { letter: "B", text: "Configure a validation rule." },
            { letter: "C", text: "Create a formula field." },
            { letter: "D", text: "Assign with an escalation rule." }
        ],
        answer: "A"
    },
    {
        id: "q244",
        isMultiple: false,
        question: "The administrator at AW Computing wants Account details, related lists, and Chatter feeds to each appear on separate tabs when viewing an Account. Which type of page should the administrator create?",
        options: [
            { letter: "A", text: "Lightning app page" },
            { letter: "B", text: "Lightning record page" },
            { letter: "C", text: "Lightning page component" },
            { letter: "D", text: "Lightning page tab" }
        ],
        answer: "D"
    },
    {
        id: "q245",
        isMultiple: false,
        question: "The Support Manager wants to send an automatic email to the Case Contact when a case is closed. Which automation tool can the administrator use?",
        options: [
            { letter: "A", text: "Sharing Rule" },
            { letter: "B", text: "Case Auto-Response Rule" },
            { letter: "C", text: "Validation Rule" },
            { letter: "D", text: "Workflow Rule" }
        ],
        answer: "D"
    },
    {
        id: "q246",
        isMultiple: false,
        question: "Sales representatives use a custom report type for Account reports. New fields have been created on the Account Object. What should a System Administrator do to report on the newly created fields?",
        options: [
            { letter: "A", text: "From the Custom Report Type, Edit Layout, then add the new fields to the report." },
            { letter: "B", text: "Create a new account report and add the new fields from the Report Builder." },
            { letter: "C", text: "From the Custom Report Type, Edit Object Relationships, then add the new fields to the report." },
            { letter: "D", text: "Create a new account report folder, go to share, and then add the new fields." }
        ],
        answer: "A"
    },
    {
        id: "q247",
        isMultiple: false,
        question: "An administrator needs to store the ID of a record type for later use in a flow. Which kind of variable should the administrator use?",
        options: [
            { letter: "A", text: "Record variable" },
            { letter: "B", text: "Text variable" },
            { letter: "C", text: "ID variable" },
            { letter: "D", text: "Boolean variable" }
        ],
        answer: "B"
    },
    {
        id: "q248",
        isMultiple: false,
        question: "A senior realtor at Ursa Major Solar has received a long list of new residential homes to sell to for the spring. Management needs the spreadsheet of the new residential homes and a separate spreadsheet of pricebooks loaded into Salesforce. Which Salesforce data tool will meet this request?",
        options: [
            { letter: "A", text: "Data Import Wizard" },
            { letter: "B", text: "Data Loader" },
            { letter: "C", text: "Mass Create Records" },
            { letter: "D", text: "Mass Transfer Records" }
        ],
        answer: "B"
    },
    {
        id: "q249",
        isMultiple: false,
        question: "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest form online. The team currently does not have access to the Lead object. How should an administrator provide proper access?",
        options: [
            { letter: "A", text: "Assign a new role" },
            { letter: "B", text: "Create a new profile" },
            { letter: "C", text: "Set up Manual sharing" },
            { letter: "D", text: "Configure permission sets" }
        ],
        answer: "D"
    },
    {
        id: "q250",
        isMultiple: false,
        question: "What should an administrator take into consideration when creating Content tags?",
        options: [
            { letter: "A", text: "Tags are case insensitive." },
            { letter: "B", text: "Tags combine singular and plural versions" },
            { letter: "C", text: "Tags are updatable." },
            { letter: "D", text: "Tags are case sensitive" }
        ],
        answer: "A"
    },
    {
        id: "q251",
        isMultiple: false,
        question: "Ursa Major Solar wants to upload 10,000 Campaigns to Salesforce. Which tool should the administrator utilize to accomplish this task?",
        options: [
            { letter: "A", text: "Data Import Wizard" },
            { letter: "B", text: "Data Loader" },
            { letter: "C", text: "Bulk Data Load Jobs" },
            { letter: "D", text: "AppExchange package" }
        ],
        answer: "B"
    },
    {
        id: "q252",
        isMultiple: false,
        question: "Universal Containers has enabled Data Protection and Privacy for its org. Which page layouts will have the Individual field available for tracking data privacy information?",
        options: [
            { letter: "A", text: "Account and User" },
            { letter: "B", text: "Individual, User, and Account" },
            { letter: "C", text: "Case and Opportunity" },
            { letter: "D", text: "Contact, Lead, and Person Account" }
        ],
        answer: "D"
    },
    {
        id: "q253",
        isMultiple: false,
        question: "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response Include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
        options: [
            { letter: "A", text: "Email Alerts" },
            { letter: "B", text: "Assignment Rules" },
            { letter: "C", text: "Auto-Response Rules" },
            { letter: "D", text: "Knowledge Articles" }
        ],
        answer: "C"
    },
    {
        id: "q254",
        isMultiple: false,
        question: "Cloud Kicks wants to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal. What feature should the administrator use to meet this requirement?",
        options: [
            { letter: "A", text: "Splits" },
            { letter: "B", text: "Stages" },
            { letter: "C", text: "Queues" },
            { letter: "D", text: "List Views" }
        ],
        answer: "A"
    },
    {
        id: "q255",
        isMultiple: false,
        question: "The administrator has been asked to automate a simple field update on the account. When a support agent changes the status of the account to Audited', they would like the system to automatically update the Audited Date field on the account with today's date. Which tool should the administrator use to complete this automation?",
        options: [
            { letter: "A", text: "Approval Process" },
            { letter: "B", text: "Formula Field" },
            { letter: "C", text: "Validation Rule" },
            { letter: "D", text: "Flow Builder" }
        ],
        answer: "D"
    },
    {
        id: "q256",
        isMultiple: false,
        question: "At Universal Containers, if an account is consistently late or defaults on payments, users should be prevented from creating new Os) opportunities for that account. The administrator has created a custom checkbox called Account_Credit_Alert__c on the Account object. What should the administrator do to prevent new Opportunities from being created if the Account_Credit_Alert__c checkbox is checked?",
        options: [
            { letter: "A", text: "Create a validation rule on Opportunities." },
            { letter: "B", text: "Create a cross-object formula on Accounts." },
            { letter: "C", text: "Create a Process Builder and a field update on Opportunities." },
            { letter: "D", text: "Create a criteria-based sharing rule on Accounts." }
        ],
        answer: "A"
    },
    {
        id: "q257",
        isMultiple: false,
        question: "An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount. How should the administrator export this file?",
        options: [
            { letter: "A", text: "Data Export Service" },
            { letter: "B", text: "Data Import Wizard" },
            { letter: "C", text: "Data Export Wizard" },
            { letter: "D", text: "Data Loader" }
        ],
        answer: "D"
    },
    {
        id: "q258",
        isMultiple: false,
        question: "The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error. How can the administrator validate the error the user is receiving?",
        options: [
            { letter: "A", text: "View the setup audit trail." },
            { letter: "B", text: "Edit the page layout." },
            { letter: "C", text: "Review the sharing model." },
            { letter: "D", text: "Log in as the user" }
        ],
        answer: "D"
    },
    {
        id: "q259",
        isMultiple: false,
        question: "An administrator has reviewed an upcoming critical update. How should the administrator proceed with activation of the critical update?",
        options: [
            { letter: "A", text: "Allow the critical update to auto-activate." },
            { letter: "B", text: "Activate the critical update in a sandbox" },
            { letter: "C", text: "Allow the critical update to auto-activate In a sandbox." },
            { letter: "D", text: "Activate the critical update in production." }
        ],
        answer: "B"
    },
    {
        id: "q260",
        isMultiple: false,
        question: "Cloud Kicks (CK) Is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
        options: [
            { letter: "A", text: "Set up a scheduled process in Process Builder." },
            { letter: "B", text: "Create a workflow rule with an outbound message." },
            { letter: "C", text: "Use a process to update the account when It is edited." },
            { letter: "D", text: "Configure a scheduled flow in Flow Builder." }
        ],
        answer: "D"
    },
    {
        id: "q261",
        isMultiple: false,
        question: "The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
        options: [
            { letter: "A", text: "Workflow Rule" },
            { letter: "B", text: "Validation Rule" },
            { letter: "C", text: "Lead Conversion" },
            { letter: "D", text: "Require Field" }
        ],
        answer: "B"
    },
    {
        id: "q262",
        isMultiple: false,
        question: "Cloud Kicks (CK) has a new administrator who is asked to put together a memo detailing Salesforce usage to budget for upcoming license purchases. Where should the administrator go to find out what type of licenses CK has purchased and how many are available?",
        options: [
            { letter: "A", text: "Search for licenses types in setup" },
            { letter: "B", text: "Entitlements related list in company information" },
            { letter: "C", text: "User management settings in setup" },
            { letter: "D", text: "User licenses related list in company information" }
        ],
        answer: "D"
    },
    {
        id: "q263",
        isMultiple: false,
        question: "Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
        options: [
            { letter: "A", text: "Chatter Recommendations" },
            { letter: "B", text: "Chatter Stream" },
            { letter: "C", text: "Chatter Broadcast Group" },
            { letter: "D", text: "Chatter Unlisted Group" }
        ],
        answer: "C"
    },
    {
        id: "q264",
        isMultiple: false,
        question: "Cloud Kicks wants users to only be able to choose Opportunity stage closed won If the Lead source has been selected. How should the administrator accomplish this goal?",
        options: [
            { letter: "A", text: "Configure a validation rule requiring Lead source when the stage is set to closed won." },
            { letter: "B", text: "Change the Opportunity stage field to read only on the page layout." },
            { letter: "C", text: "Modify the Opportunity stage a dependent picklist to the Lead source field." },
            { letter: "D", text: "Make Lead source a dependent picklist to the Opportunity stage field." }
        ],
        answer: "A"
    },
    {
        id: "q265",
        isMultiple: false,
        question: "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record. How should an administrator ensure this requirement?",
        options: [
            { letter: "A", text: "Require the field on the record type." },
            { letter: "B", text: "Make the field universally required." },
            { letter: "C", text: "Create a Process Builder to set the field." },
            { letter: "D", text: "Define an approval process for the field." }
        ],
        answer: "B"
    },
    {
        id: "q266",
        isMultiple: false,
        question: "The VP of sales at DreamHouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key piece of data is the total of all sales for the year and the progress to the enterprise sales goal. What dashboard component will effectively show this number and the proximity to the total goal as a single value?",
        options: [
            { letter: "A", text: "Donut" },
            { letter: "B", text: "Stacked Bar" },
            { letter: "C", text: "Gauge" },
            { letter: "D", text: "Table" }
        ],
        answer: "C"
    },
    {
        id: "q267",
        isMultiple: false,
        question: "Ursa Major Solar has selected report folders that are shared with a small group of users who are on Lightning Experience. The administrator needs to prevent these users from customizing the information in the reports. What should the administrator do to achieve this goal?",
        options: [
            { letter: "A", text: "Change Field Level Security." },
            { letter: "B", text: "Lock report filters." },
            { letter: "C", text: "Run the report as a specified user." },
            { letter: "D", text: "Utilize Custom Report Types." }
        ],
        answer: "B"
    },
    {
        id: "q268",
        isMultiple: false,
        question: "An administrator has been asked to update a flow that was created as part of a recent update. When the administrator opens the flow for editing, the Flow Builder toolbox offers only four elements: Assignment, Decision, Get Records, and Loop. What would cause this?",
        options: [
            { letter: "A", text: "The version of the flow is active." },
            { letter: "B", text: "The version of the flow is inactive." },
            { letter: "C", text: "The flow is a before save flow." },
            { letter: "D", text: "The flow Is a screen flow." }
        ],
        answer: "C"
    },
    {
        id: "q269",
        isMultiple: false,
        question: "Ursa Major Solar's default, organization-wide sharing for accounts is set to public read/write. The administrator needs to ensure that marketing never modifies an account record. Which action should the administrator take to accomplish this goal?",
        options: [
            { letter: "A", text: "Remove edit access on accounts from the custom marketing profile." },
            { letter: "B", text: "Assign a permission set to marketing users which removes edit permission." },
            { letter: "C", text: "Switch organization-wide default sharing to public read only." },
            { letter: "D", text: "Separate the marketing role hierarchy from the sales role hierarchy." }
        ],
        answer: "A"
    },
    {
        id: "q270",
        isMultiple: false,
        question: "The VP of marketing has asked the administrator to restrict marketers from deleting campaign records. The marketers are currently assigned to the marketing user profile. What action should the administrator take to satisfy the request?",
        options: [
            { letter: "A", text: "Assign a permission set with campaign create, read and edit permissions." },
            { letter: "B", text: "Update the current profile by removing the campaign delete permission." },
            { letter: "C", text: "Create a validation rule to prevent delete for marketing users only." },
            { letter: "D", text: "Use a custom profile with the campaign delete permission disabled." }
        ],
        answer: "B"
    },
    {
        id: "q271",
        isMultiple: false,
        question: "AW Computing (AWC) occasionally works with Independent contractors, who the company stores as Contacts In Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
        options: [
            { letter: "A", text: "Use a partner community to track the Contacts." },
            { letter: "B", text: "Enable Contacts to multiple Accounts." },
            { letter: "C", text: "Create a new Contact record for each agency." },
            { letter: "D", text: "Create a junction object to track many-to-many relationship. Solar need to see different fields on the Case." }
        ],
        answer: "B"
    },
    {
        id: "q272",
        isMultiple: false,
        question: "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation. Which feature should an administrator use to fulfill this requirement?",
        options: [
            { letter: "A", text: "Omni-Channel Supervisor" },
            { letter: "B", text: "Formula field" },
            { letter: "C", text: "Assignment Rule" },
            { letter: "D", text: "Case Escalation Rule" }
        ],
        answer: "D"
    },
    {
        id: "q273",
        isMultiple: false,
        question: "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
        options: [
            { letter: "A", text: "Create and assign a permission set that includes Read, Create, and Edit access." },
            { letter: "B", text: "Assign the standard System Administrator profile to the analytics user." },
            { letter: "C", text: "Create and assign a custom profile with Delete access removed for each object." },
            { letter: "D", text: "Give the user View All access and assign them to the highest role in the role hierarchy." }
        ],
        answer: "C"
    },
    {
        id: "q274",
        isMultiple: false,
        question: "Ursa Major Solar has Its business hours set from 9:00 AM to 5:00 PM for the reps that are on Pacific Time. 'The reps on eastern Time need business hours set to start 3 hours earlier to cover for support. How should an administrator solve for this Issue?",
        options: [
            { letter: "A", text: "Set temporary business hours for each time zone." },
            { letter: "B", text: "Adjust the current business hours to accommodate the Eastern Time Zone." },
            { letter: "C", text: "Allow the reps to set business hours manually." },
            { letter: "D", text: "Create one set of business hours per time zone." }
        ],
        answer: "D"
    },
    {
        id: "q275",
        isMultiple: false,
        question: "The administrator at Cloud Kicks deleted a custom field but realized there is a business unit that still uses the field. What should an administrator take into consideration when undeleting the field?",
        options: [
            { letter: "A", text: "The field needs to be re-added to page layouts." },
            { letter: "B", text: "The field needs to be restored from the recycle bin." },
            { letter: "C", text: "The field history will remain deleted." },
            { letter: "D", text: "The field needs to be re-added to reports." }
        ],
        answer: "A"
    },
    {
        id: "q276",
        isMultiple: false,
        question: "Cloud Kicks Is working on a better way to track its product shipments utilizing Salesforce. Which field type should an administrator use to capture coordinates?",
        options: [
            { letter: "A", text: "Geolocation" },
            { letter: "B", text: "External lookup" },
            { letter: "C", text: "Custom address" },
            { letter: "D", text: "Geofence" }
        ],
        answer: "A"
    },
    {
        id: "q277",
        isMultiple: false,
        question: "The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is 'Search Engine', the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not 'Search Engine', this picklist should be hidden. How should the administrator complete this requirement?",
        options: [
            { letter: "A", text: "Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is 'Search Engine'." },
            { letter: "B", text: "Use an assignment element, one for when Lead Source is 'Search Engine' and one for everything else." },
            { letter: "C", text: "Assign a decision element to direct the user to a second screen to hold Specific Search Engine only when Lead Source is 'Search Engine'." },
            { letter: "D", text: "Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is 'Search Engine'." }
        ],
        answer: "C"
    },
    {
        id: "q278",
        isMultiple: false,
        question: "Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Accounts?",
        options: [
            { letter: "A", text: "Shipments should have a lookup to Account." },
            { letter: "B", text: "Accounts should have a master detail to Shipments." },
            { letter: "C", text: "Accounts should have a lookup to Shipments." },
            { letter: "D", text: "Shipments should have a master detail to Accounts." }
        ],
        answer: "A"
    },
    {
        id: "q279",
        isMultiple: false,
        question: "Sales reps at Cloud Kicks want to be notified when they have a high likelihood of winning an opportunity over $1,000,000. Which feature meets this requirement?",
        options: [
            { letter: "A", text: "Big Deal Alerts" },
            { letter: "B", text: "Activity Timeline" },
            { letter: "C", text: "Key Deals" },
            { letter: "D", text: "Performance Chart" }
        ],
        answer: "A"
    },
    {
        id: "q280",
        isMultiple: false,
        question: "An administrator gets a rush request from Human Resources to remove a user's access to Salesforce Immediately. The user is part of a hierarchy field called Direct Manager. What should the administrator do to fulfill the request?",
        options: [
            { letter: "A", text: "Freeze the user to prevent them from logging in while removing them from being referenced in the Direct Manager field." },
            { letter: "B", text: "Deactivate the user and delete any records where they are referenced in the Direct Manager field." },
            { letter: "C", text: "Change the user's profile to read-only while removing them from being referenced in the Direct Manager field." },
            { letter: "D", text: "Delete the user and leave all records where they are referenced in the Direct Manager field without changes." }
        ],
        answer: "A"
    },
    {
        id: "q281",
        isMultiple: false,
        question: "The business development team at Cloud Kicks thinks the Account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process. Which automation tool should an administrator use?",
        options: [
            { letter: "A", text: "Flow Builder" },
            { letter: "B", text: "Validation Rule" },
            { letter: "C", text: "Workflow Rule" },
            { letter: "D", text: "Approval Process" }
        ],
        answer: "A"
    },
    {
        id: "q282",
        isMultiple: true,
        question: "At Universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well. Which are two considerations for enabling this functionality? Choose 2 answers",
        options: [
            { letter: "A", text: "An administrator needs to create a group to enable record sharing" },
            { letter: "B", text: "Object layouts should be configured to include the groups related list." },
            { letter: "C", text: "Collaboration groups are created automatically for every department." },
            { letter: "D", text: "The Add Record action must be configured in the group publisher." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q283",
        isMultiple: true,
        question: "Which two action should an administrator perform to provide a sales team with an easy solution for gathering customer requirements and sharing presentations with the customers? Choose 2 answers",
        options: [
            { letter: "A", text: "Add customers to libraries" },
            { letter: "B", text: "Use Salesforce Files to post presentation in Chatter." },
            { letter: "C", text: "Add customers to private Chatter groups." },
            { letter: "D", text: "Ensure opportunity teams are created for customers." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q284",
        isMultiple: true,
        question: "Ursa Major Solar (UMS) wants to assign a Lightning for Qutlook layout. Which two optiens can UMS assign this layout to? Choose 2 answers",
        options: [
            { letter: "A", text: "Profile" },
            { letter: "B", text: "Role" },
            { letter: "C", text: "User" },
            { letter: "D", text: "Team" }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q285",
        isMultiple: true,
        question: "Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request? Choose 2 answers",
        options: [
            { letter: "A", text: "A user with a manager role above the agent." },
            { letter: "B", text: "A user with the System Administrator profile." },
            { letter: "C", text: "A user with Read permission on the account." },
            { letter: "D", text: "A user with the Manage Cases permission." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q286",
        isMultiple: true,
        question: "Which two capabilities are considerations when marking a field as required In Object Manager? Choose 2 answers",
        options: [
            { letter: "A", text: "The field Is added to every page layout on that object." },
            { letter: "B", text: "The field Is optional when saving records via web-to-lead and web-to-case." },
            { letter: "C", text: "The field Is universally required to save a record on that object." },
            { letter: "D", text: "The field Is not required to save records via the API on that object." }
        ],
        answer: ["A", "C"]
    },
    {
        id: "q287",
        isMultiple: true,
        question: "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network. What are two considerations for this configuration? Choose 2 answers",
        options: [
            { letter: "A", text: "Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions." },
            { letter: "B", text: "IP address restrictions are set on the profile or globally for the org." },
            { letter: "C", text: "Single sign-on will allow users to Jog In from anywhere." },
            { letter: "D", text: "Users can change their password to avoid login IP restrictions." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q288",
        isMultiple: true,
        question: "What are two considerations when activating and assigning Themes and Branding? Choose 2 answers",
        options: [
            { letter: "A", text: "Themes apply to both Lightning Experience and mobile." },
            { letter: "B", text: "Only one Theme can be applied in an org at a time." },
            { letter: "C", text: "Up to 300 custom Themes can be created per org." },
            { letter: "D", text: "Each profile can be applied a different Theme." }
        ],
        answer: ["B", "C"]
    },
    {
        id: "q289",
        isMultiple: true,
        question: "The administrator at Cloud Kicks has been asked to change the company's Shoe Style field to prevent users from selecting more than one style on a record. Which two steps should an administrator do to accomplish this? Choose 2 answers",
        options: [
            { letter: "A", text: "Back-up the Shoe Style values in existing records." },
            { letter: "B", text: "Change the field type from a multi-select picklist field to a picklist field." },
            { letter: "C", text: "Select the 'Choose only one value' checkbox on the picklist field." },
            { letter: "D", text: "Reactivate the appropriate Shoe Style values after the field type changes." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q290",
        isMultiple: true,
        question: "Anytime an Opportunity is moved to Closed Won, Sales reps at Universal Containers (UC) are supposed to create a record on a child object of Opportunities called Survey Request. This action, however, does not always occur. Sales reps do not always populate all fields correctly. Which two tools should be used to remove permissions from Sales to create these records and automate record creation? Choose 2 answers",
        options: [
            { letter: "A", text: "Flow" },
            { letter: "B", text: "Approvals" },
            { letter: "C", text: "Workflow" },
            { letter: "D", text: "Process Builder" }
        ],
        answer: ["A", "D"]
    },
    {
        id: "q291",
        isMultiple: true,
        question: "Ursa Major Solar wants to use the Salesforce approval process. What are two characteristics that make a sales process a good fit for the Salesforce approval process? Choose 2 answers",
        options: [
            { letter: "A", text: "There is an approval to a queue member for all Opportunities and an additional approval by a Sales VP for Opportunities over a certain amount." },
            { letter: "B", text: "The first level approval can be denied and automatically routed to the Sales VP for final approval." },
            { letter: "C", text: "The approval manager is randomly assigned from a public group of managers, and there is a second approval by the Sales VP." },
            { letter: "D", text: "There are approvals for all Opportunities by a Sales VP where a Sales VP is allowed to delegate their approval to someone else." }
        ],
        answer: ["A", "B"]
    },
    {
        id: "q292",
        isMultiple: true,
        question: "Recently, one of Ursa Major Solar's (UMS) competitors lost critical data after a powerful hurricane caused multiple power outages. UMS needs to ensure that its Salesforce data is backed up an protected from such an event. Which two statements are true regarding this goal?",
        options: [
            { letter: "A", text: "UMS should contact Salesforce Support for a free backup." },
            { letter: "B", text: "UMS can download an app from the AppExchange." },
            { letter: "C", text: "UMS can use Salesforce's daily backup service, which is provided via a zip file." },
            { letter: "D", text: "UMS can use Salesforce's weekly or monthly backup service, which is provided via a zip file." }
        ],
        answer: ["B", "D"]
    },
    {
        id: "q293",
        isMultiple: true,
        question: "Ursa Major Solar is bringing a new type of solar panel to market. An administrator needs to create a sales process for this new product. Os) What are three considerations for the administrator in this scenario? Choose 3 answers",
        options: [
            { letter: "A", text: "The record type name assignment becomes permanent upon save of a new record type." },
            { letter: "B", text: "An opportunity record type will need to be created and assigned to the sales process." },
            { letter: "C", text: "The record type's page layout is assigned to users through their profile assignments." },
            { letter: "D", text: "Adding a new value to the record type master picklist value list adds the value to all existing record type picklists." },
            { letter: "E", text: "All picklist values on the page layout must be added to the master picklist value list or be active values." }
        ],
        answer: ["B", "C", "E"]
    },
    {
        id: "q294",
        isMultiple: true,
        question: "The administrator at Cloud Kicks has been told that users are unable to add repeating tasks in Salesforce. Which two solutions should the administrator use to ensure users are able to do this? Choose 2 answers",
        options: [
            { letter: "A", text: "Turn on Task Notifications Service" },
            { letter: "B", text: "Disable Shared Activities" },
            { letter: "C", text: "Enable Creation of Recurring Tasks in Activity Settings" },
            { letter: "D", text: "Add Create Recurring Series of Tasks field on page layouts" }
        ],
        answer: ["C", "D"]
    },
    {
        id: "q295",
        isMultiple: true,
        question: "Ursa Solar Major Is evaluating Salesforce for Its service team and would like to know what objects were available out of the box. Which three of the standard objects are available to an administrator considering a support use case? Choose 3 answers",
        options: [
            { letter: "A", text: "Request" },
            { letter: "B", text: "Account" },
            { letter: "C", text: "Ticket" },
            { letter: "D", text: "Contact" },
            { letter: "E", text: "Case" }
        ],
        answer: ["B", "D", "E"]
    },
    {
        id: "q296",
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

];