const quizData = [
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