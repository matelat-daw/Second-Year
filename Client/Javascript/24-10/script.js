const DOM = {
    result: document.getElementById("result")
};

const paramData = [
    {id: "search_type", value: "All items", required: true},
    {id: "time_period", value: "Week", required: false},
    {id: "user_type", value: "All Users", required: false},
    {id: "question_type", value: "Multiple questions", required: true},
  ];

const extractedData = paramData.reduce((obj, item) => {
     obj[item.id] = item.value
     return obj
   }, {});
console.log(extractedData);
// DOM.result.innerHTML = JSON.stringify(extractedData);

DOM.result.innerHTML = Array.from(JSON.stringify(extractedData));

const set = new Set(["foo", "bar", "baz", "foo"]);
let result = Array.from(set);
// [ "foo", "bar", "baz" ]
