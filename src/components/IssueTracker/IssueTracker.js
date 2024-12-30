import React, { useState } from "react";
import "./IssueTracker.scss";
import issueData from "../../assets/IssueData.json";
import priority from "../../assets/icons/priority.svg";

const IssueTracker = () => {
  const [data] = useState(issueData.issues);

  const startDate = new Date("2024-06-01");
  const endDate = new Date("2024-06-22");
  const days = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    days.push(new Date(d));
  }

  const totals = Array(days.length).fill(0);

  data.forEach((issue) => {
    issue.dates.forEach((date) => {
      const index = days.findIndex((d) => d.toISOString().split("T")[0] === date);
      if (index !== -1) {
        totals[index] += parseFloat(issue.logged);
      }
    });
  });

  const overallTotal = totals.reduce((sum, t) => sum + t, 0);

  return (
    <div className="issue-tracker">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Issue</th>
              <th>Logged</th>
              {days.map((day) => {
                const isWeekend = day.getDay() === 0 || day.getDay() === 6;
                return (
                  <th
                    key={day.toISOString()}
                    className={isWeekend ? "inactive-cell" : ""}
                  >
                    <span>{day.toLocaleDateString("en-US", { weekday: "short" })}</span>
                    <p>{day.getDate()}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((issue) => (
              <tr key={issue.id}>
                <td className="issue-cell">
                  <img src={priority} alt="priority" />
                  <span className="issue-title">{`${issue.title} `}</span>
                  <span>Issue Summary</span>
                </td>
                <td>{issue.logged}</td>
                {days.map((day) => {
                  const loggedOnThisDay = issue.dates.includes(
                    day.toISOString().split("T")[0]
                  );
                  return (
                    <td
                      key={day.toISOString()}
                      className={day.getDay() === 0 || day.getDay() === 6 ? "inactive-cell" : ""}
                    >
                      {loggedOnThisDay ? issue.logged : "-"}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr className="totals-row">
              <td>Total</td>
              <td>{overallTotal.toFixed(2)}</td>
              {totals.map((total, index) => (
                <td key={index}>{total > 0 ? total.toFixed(2) : "-"}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueTracker;
