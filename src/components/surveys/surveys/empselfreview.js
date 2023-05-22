const selfreview = {
  title: "Employee self-evaluation template",
  description: "Employee Self Evaluation Form",
  pages: [
    {
      name: "page2",
      elements: [
        {
          type: "text",
          name: "question1",
          minWidth: "150px",
          indent: -1,
          title: "Employee Name",
          placeHolder: "Enter Employee Name",
        },
        { type: "text", name: "question2", title: "Employee No" },
        { type: "text", name: "question7", title: "Duty Station / Department" },
        {
          type: "dropdown",
          name: "question3",
          title: "Designation",
          choices: ["item1", "item2", "item3"],
        },
        {
          type: "dropdown",
          name: "question8",
          title: "Supervisor",
          choices: ["item1", "item2", "item3"],
        },
        {
          type: "comment",
          name: "question4",
          title: "Describe Your Current Responsibilities",
        },
        {
          type: "rating",
          name: "question5",
          title: "How would you Evaluate Your Perfomance?",
          rateMin: 10,
          rateMax: 100,
          rateStep: 10,
          minRateDescription: "Rate %",
        },
        {
          type: "matrixdropdown",
          name: "question6",
          title: "Describe Your current accomplishments ",
          columns: [
            { name: "Column 1", title: "Target  Name" },
            { name: "Column 2", title: "% Completed" },
            { name: "Column 3", title: "Due Date" },
          ],
          choices: [1, 2, 3, 4, 5],
          cellType: "text",
          rows: [
            { value: "Target1", text: "Task 1" },
            { value: "Target2", text: "Task 2" },
            { value: "Target3", text: "Task 3" },
            { value: "Target4", text: "Task 4" },
            { value: "Target5", text: "Task5" },
          ],
        },
        {
          type: "matrixdropdown",
          name: "question9",
          title: "Describe Your current  Weaknesses ",
          columns: [
            { name: "Column 1", title: "Challenge" },
            { name: "Column 2", title: "Reason / Proposal" },
          ],
          choices: [1, 2, 3, 4, 5],
          cellType: "text",
          rows: [
            { value: "Target1", text: "Task 1" },
            { value: "Target2", text: "Task 2" },
            { value: "Target3", text: "Task 3" },
            { value: "Target4", text: "Task 4" },
            { value: "Target5", text: "Task5" },
          ],
        },
        {
          type: "file",
          name: "question10",
          title: "Attach Additional Assessment files ",
        },
        {
          type: "signaturepad",
          name: "question11",
          title: "Signature",
          description:
            "I understand by Submitting this Form i have given a true account of my self Assement",
        },
      ],
    },
  ],
  showPageNumbers: true,
};

export default selfreview;
