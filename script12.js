const quizData = [
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
    }

];