import { useEffect, useState } from "react";

const Insights = () => {
  const [insight, setInsight] = useState({});
  const [countPriority, setCountPriority] = useState([]);
  const [dueSoon, setDueSoon] = useState([]);

  const [opentasks, setOpentasks] = useState({});

  const fetchInsights = async () => {
    try {
      const url = `http://localhost:3000/insights`;
      const response = await fetch(url);
      const insightData = await response.json();
      setInsight(insightData);
      setCountPriority(insightData.data.countPriority);
      setDueSoon(insightData.data.dueSoon);
      setOpentasks(insightData.data.opentasks);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <div className="insights-container">
      <h2>{insight.message}</h2>
      <p className="insights-string">
        You have <span>{opentasks.count} </span>
        Open Tasks
      </p>
      {countPriority.map((each, idx) => (
        <p className="insights-string" key={idx}>
          You Have <span>{each.count}</span>
          Tasks of Priority <span> {each.priority}</span>
        </p>
      ))}

      {dueSoon.map((each, idx) => (
        <p className="insights-string" key={idx}>
          You Have <span>{each.count}</span> Tasks Due Soon of Priority
          <span> !{each.priority}</span>
        </p>
      ))}

      <p className="insights-string"> </p>
    </div>
  );
};

export default Insights;
