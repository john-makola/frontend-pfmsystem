const csbreview = {
  title: "County Service Board Committee",
  pages: [
    {
      name: "page1",
      elements: [
        { type: "comment", name: "question1", title: "Committee Members" },
        {
          type: "text",
          name: "question3",
          title: "Employee  Name Under Review",
        },
        {
          type: "rating",
          name: "question4",
          title: "Period under Review",
          rateValues: [
            { value: "item1", text: "1st Quarter" },
            { value: "item2", text: "2nd Quarter" },
            { value: "item3", text: "Third Quarter" },
            { value: "item4", text: "Fourth Quarter" },
          ],
        },
        {
          type: "matrixdropdown",
          name: "question10",
          title: "Employee Tasks Under Review",
          columns: [
            { name: "Column 1", title: "Task Allocated" },
            { name: "Column 2", title: "% Completed" },
            { name: "Column 3", title: "Remarks" },
          ],
          choices: [1, 2, 3, 4, 5],
          cellType: "text",
          rows: [
            { value: "Row 1", text: "Task 1" },
            { value: "Row 2", text: "Task 2" },
            { value: "Row 3", text: "Task 3" },
            { value: "Row 4", text: "Task 4" },
            { value: "Row 5", text: "Task 5" },
          ],
        },
        {
          type: "rating",
          name: "question5",
          title: "State the Employee Performance for the Period under Review",
          rateValues: [
            { value: "item1", text: "Poor" },
            { value: "item2", text: "Average" },
            { value: "item3", text: "Good" },
            { value: "item4", text: "Exemplary" },
          ],
        },
        {
          type: "rating",
          name: "question7",
          title: "Rate the Employee Performance on a Scale of 1 to 10",
          rateMax: 10,
          minRateDescription: "Poor",
          maxRateDescription: "Very Good",
        },
        {
          type: "comment",
          name: "question6",
          title: "Special Notes on Employee Performance",
        },
        {
          type: "signaturepad",
          name: "question9",
          title: "Signature",
          description: "I Submit this as the True review of this Employee.",
        },
        {
          type: "file",
          name: "question8",
          title: "Attach any Special notes for Staff Appraisal",
        },
      ],
    },
  ],
};

export default csbreview;
