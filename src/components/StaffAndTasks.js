import { colors, lightColors } from "../utils/helpers";

import { BsFillRecordFill } from "react-icons/bs";

const StaffAndTasks = ({ data, computedData, index }) => {
  return (
    <div className="work-item-wrapper">
      <div className="work-item-name">
        <p style={{ fontWeight: 600 }}>{data.details.name}</p>
        <p className="text-gray-500">{data.details.role}</p>
      </div>
      <div
        className="work-item"
        style={{
          left: computedData.startPosition,
          width: computedData.width,

          backgroundColor: lightColors[index % colors.length],
        }}
      >
        <p
          style={{
            color:
              data.completionRate === 100
                ? "#fff"
                : colors[index % colors.length],
            zIndex: data.completionRate === 100 ? "999" : "1",
          }}
          className="work-item-value"
        >
          {data.completionRate + "%"}
        </p>

        <div
          className="work-item-inner transition-width"
          style={{
            width: data.completionRate + "%",

            backgroundColor: colors[index % colors.length],
          }}
        >
          <div className="flex justify-center items-center w-full">
            <div className="bg-slate-800 p-1 rounded-full mr-3">
              <BsFillRecordFill size={16} color="#fff" />
            </div>
            <span className="text-sm mr-6 font-bold">{data.details.task}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffAndTasks;
