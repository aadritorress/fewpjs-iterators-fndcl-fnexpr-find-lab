
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

const superbowlWin = (record) => {
return record.find( function(s) { return s == "W" })
}

// superbowlWin = (record) => {
//     let result = record.find( record => record.result === "W" )
//     return !!result ? result.year :undefined
//   }