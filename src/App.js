import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [outut, setOutput] = useState("");

  function getDateInMultipleFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }

  const reverseString = (inp) => {
    var charsList = inp.split("");
    var reverseCharsList = charsList.reverse();
    return reverseCharsList.join("");
  };

  const checkIfPalindrom = () => {
    if (!dateOfBirth) {
      setOutput("Fill the date");
      return;
    }

    var arr = dateOfBirth.split("-");
    var year = arr[0];
    var month = arr[1];
    var day = arr[2];

    var yymmdd = year + month + day;
    var ddmmyy = day + month + year;

    if (yymmdd === reverseString(yymmdd) || ddmmyy === reverseString(ddmmyy)) {
      setOutput("Birthday is a palindrome!");
      return;
    }
    setOutput("Birthday is not a palindrome!");
    return;
  };

  return (
    <div className="App">
      <h1>Palindrome Birthday!</h1>
      <p>Date of Birth</p>
      <input
        value={dateOfBirth}
        type="date"
        onChange={(e) => setDateOfBirth(e.target.value)}
      />{" "}
      <br />
      <button onClick={checkIfPalindrom}>Show</button>
      <h3>{outut}</h3>
    </div>
  );
}
