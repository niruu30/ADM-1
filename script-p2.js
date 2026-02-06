const quizData = [
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
    }

];