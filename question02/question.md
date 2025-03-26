# Bottle Collection Organizer

## Challenge Scenario
Imagine you're working for a beverage distribution company that needs to organize its bottle collection data. You're given a list of bottles from different storage locations and cartons, and your task is to transform this raw data into a structured, easy-to-read format.

## Problem Description
You'll receive a flat list of bottle information, and your goal is to reorganize this data into a hierarchical structure that groups bottles by their storage location and carton.

### Input Data Example
```javascript
const inputData = [
  { storageId: "S1", cartonId: "C1", bottleId: "B1", isCollected: true },
  { storageId: "S1", cartonId: "C1", bottleId: "B2", isCollected: true },
  { storageId: "S1", cartonId: "C1", bottleId: "B3", isCollected: false },
  { storageId: "S1", cartonId: "C2", bottleId: "B4", isCollected: false },

  { storageId: "S2", cartonId: "C3", bottleId: "B5", isCollected: true },
  { storageId: "S2", cartonId: "C3", bottleId: "B6", isCollected: true },
  { storageId: "S2", cartonId: "C4", bottleId: "B7", isCollected: false },
];
```

### Desired Output Format
```javascript
const outputData = [
  {
    storageId: "S1",
    totalBottles: 4,
    cartons: [
      {
        cartonId: "C1",
        totalCollected: 2,
        bottles: [
          { bottleId: "B1", isCollected: true },
          { bottleId: "B2", isCollected: true },
          { bottleId: "B3", isCollected: false },
        ],
      },
      {
        cartonId: "C2",
        totalCollected: 0,
        bottles: [{ bottleId: "B4", isCollected: false }],
      },
    ],
  },
  {
    storageId: "S2",
    totalBottles: 3,
    cartons: [
      {
        cartonId: "C3",
        totalCollected: 2,
        bottles: [
          { bottleId: "B5", isCollected: true },
          { bottleId: "B6", isCollected: true },
        ],
      },
      {
        cartonId: "C4",
        totalCollected: 0,
        bottles: [{ bottleId: "B7", isCollected: false }],
      },
    ],
  },
];
```

## Example Function Signature
```javascript
function organizeBottleCollection(inputData) {
    // Your implementation here
}
```

## What We're Looking For
- A clear, readable solution
- Correct transformation of the data
- Ability to handle different input scenarios
- Clean, efficient code