import { days } from "../utils/helpers";

const DaysOfTheWeek = ({ date }) => {
  let currentDate = date.getDate();
  let today = new Date().getDate();
  return (
    <div className="calender-day">
      <div
        className={`calender-day-text ${
          today === currentDate ? "is-today" : ""
        }`}
      >
        <span className="text-gray-300 mr-1">{days[date.getDay()]}</span>
        <span className="text-black text-sm">{currentDate}</span>
      </div>
      <div className="calender-day-border">
        {today === currentDate && (
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: 1,
              backgroundColor: "rgba(29, 92, 252,1)",
              left: 0,
              right: 0,
              margin: "auto",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default DaysOfTheWeek;
