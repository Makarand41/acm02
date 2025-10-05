const items = [
  { label: 'Program Summary', content: 'Content for Program Summary' },
  { label: 'Program Schedule', content: 'Content for Program Schedule' },
  { label: 'WBS Description & Definitions', content: 'Content for WBS Description' },
  { label: 'Costing Results', content: 'Content for Costing Results' },
  {
    label: 'Program(s)',
    children: [
      { label: 'Project 1 Summary', content: 'Details for Project 1 Summary' },
      { label: 'Project 1 Schedule', content: 'Details for Project 1 Schedule' },
      {
        label: 'Project 1 WBS',
        children: [
          { label: 'Costing workbench (Input Analysis)', content: 'Details for costing workbench P1' }
        ]
      },
      { label: 'Project 2 Summary', content: 'Details for Project 2 Summary' },
      { label: 'Project 2 Schedule', content: 'Details for Project 2 Schedule' },
      {
        label: 'Project 2 WBS',
        children: [
          { label: 'Costing workbench (Input Analysis)', content: 'Details for costing workbench P2' }
        ]
      }
    ]
  },
  {
    label: 'Cost Analytics',
    children: [
      { label: 'Project1', content: 'Cost analytics for Project1' },
      { label: 'Project2', content: 'Cost analytics for Project2' },
      { label: 'Project3', content: 'Cost analytics for Project3' }
    ]
  },
  { label: 'Reports & Charts', content: 'Content for Reports & Charts' },
  
  // New File Accordion item without static content
  { label: 'File' }
];

export default items;
