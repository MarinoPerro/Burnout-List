import { useState } from "react";
import "./app.css";
import getActivities from "./activities.tsx";

function App() {
  const [activitySelected, setActivitySelected] = useState(false);
  const [activity, setActivity] = useState('');

  const [durationSelected, setDurationSelected] = useState(false);
  const [durationValue, setDuration] = useState(0);
  const defaultActivities = getActivities();

  function getActivity() {
    const code = Math.round(Math.random() * defaultActivities.length)
    setActivity(defaultActivities[code].title);
    // setActivity(defaultActivities[0].title);
    setActivitySelected(true);
    return code;
  }

  function getDuration() {
    const duration = Math.round(Math.random() * 3) + 1
    setDuration(duration);
    setDurationSelected(true);
    return duration;
  }

  return (
    <div>
      <h1 className="header">
        Burnout List
      </h1>
      <h2 className="header">Description</h2>
      <button disabled={activitySelected} onClick={getActivity}>Get Activity</button>
      {activitySelected &&
        <div>
          {activity}
        </div>
      }
      <button disabled={durationSelected} onClick={getDuration}>Get Duration</button>
      {durationSelected &&
        <div>
          {durationValue} {durationValue === 1 ? 'hour' : 'hours'}
        </div>
      }
    </div>
  );
}

export default App;
