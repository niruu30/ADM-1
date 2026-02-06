const quizData = [
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
    }

];