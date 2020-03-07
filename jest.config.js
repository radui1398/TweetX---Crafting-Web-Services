module.exports = {
  displayName: "unit",
  roots: ['<rootDir>/test/unit'],
  testMatch: ['**/**.test.ts'],
  transform:{
    "^.+\\.tsx?$": "ts-jest"
  }

};