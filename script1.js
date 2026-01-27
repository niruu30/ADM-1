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
    }

];