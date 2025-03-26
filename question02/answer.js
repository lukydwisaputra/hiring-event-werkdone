const answer = require("../question01/answer");

const inputData = [
  { storageId: "S1", cartonId: "C1", bottleId: "B1", isCollected: true },
  { storageId: "S1", cartonId: "C1", bottleId: "B2", isCollected: true },
  { storageId: "S1", cartonId: "C1", bottleId: "B3", isCollected: false },
  { storageId: "S1", cartonId: "C2", bottleId: "B4", isCollected: false },

  { storageId: "S2", cartonId: "C3", bottleId: "B5", isCollected: true },
  { storageId: "S2", cartonId: "C3", bottleId: "B6", isCollected: true },
  { storageId: "S2", cartonId: "C4", bottleId: "B7", isCollected: false },
];

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

const organizeBottleCollection = (inputData) => {
  // Your implementation here
};

module.exports = {
  question2: organizeBottleCollection(inputData).stringify === outputData.stringify,
};
