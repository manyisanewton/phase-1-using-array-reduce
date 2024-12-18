// Array of battery batches
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate the total batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

// Export the totalBatteries variable for tests
module.exports = totalBatteries;
const importedTotalBatteries = require('../index');

describe("Battery Count Tests", () => {
    it("should have a `totalBatteries` variable", () => {
        expect(typeof importedTotalBatteries).not.toBe('undefined');
    });

    it("should have a number as a result", () => {
        expect(typeof importedTotalBatteries).toBe('number');
    });

    it("should have made the sum of all the assembled batteries", () => {
        const expectedTotal = [4, 5, 3, 4, 4, 6, 5].reduce((sum, batch) => sum + batch, 0);
        expect(importedTotalBatteries).toBe(expectedTotal);
    });
});
