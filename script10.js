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
        answer: "D"
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
    }

];