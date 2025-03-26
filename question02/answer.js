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

// ANSWER 1
// function organizeBottleCollection(data) {
//   return Object.values(
//     data.reduce((acc, item) => {
//       // Group by storageId
//       acc[item.storageId] = acc[item.storageId] || {
//         storageId: item.storageId,
//         totalBottles: 0,
//         cartons: [],
//       };

//       // Find or create carton
//       let carton = acc[item.storageId].cartons.find((c) => c.cartonId === item.cartonId);
//       if (!carton) {
//         carton = {
//           cartonId: item.cartonId,
//           totalCollected: 0,
//           bottles: [],
//         };
//         acc[item.storageId].cartons.push(carton);
//       }

//       // Add bottle and update counts
//       carton.bottles.push({
//         bottleId: item.bottleId,
//         isCollected: item.isCollected,
//       });

//       if (item.isCollected) {
//         carton.totalCollected++;
//       }
//       acc[item.storageId].totalBottles++;

//       return acc;
//     }, {})
//   );
// }

// ANSWER 2
// function organizeBottleCollection(data) {
//   const storageMap = new Map();

//   data.forEach(item => {
//       if (!storageMap.has(item.storageId)) {
//           storageMap.set(item.storageId, {
//               storageId: item.storageId,
//               totalBottles: 0,
//               cartons: []
//           });
//       }

//       const storage = storageMap.get(item.storageId);
//       let carton = storage.cartons.find(c => c.cartonId === item.cartonId);

//       if (!carton) {
//           carton = {
//               cartonId: item.cartonId,
//               totalCollected: 0,
//               bottles: []
//           };
//           storage.cartons.push(carton);
//       }

//       carton.bottles.push({
//           bottleId: item.bottleId,
//           isCollected: item.isCollected
//       });

//       if (item.isCollected) {
//           carton.totalCollected++;
//       }
//       storage.totalBottles++;
//   });

//   return Array.from(storageMap.values());
// }
