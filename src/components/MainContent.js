import { useState, useEffect } from "react";
import {
  BsEnvelopeOpen,
  BsBell,
  BsChevronRight,
  BsPlus,
  BsHurricane,
  BsChevronDown,
  BsChevronLeft,
  BsSearch,
} from "react-icons/bs";

import { getRndInteger, randomStaffDetails, months } from "../utils/helpers";
import DaysOfTheWeek from "./DaysOfTheWeek";
import StaffAndTasks from "./StaffAndTasks";

const MainContent = ({
  activeNav,
  calenderWrapperRef,
  calenderWrapperWidth,
}) => {
  const [workingDates, setWorkingDates] = useState([]);
  const [datesList, setDateList] = useState([]);
  const [currentMonthAndYear, setCurrentMonthAndYear] = useState("");

  useEffect(() => {
    getDateRange();
    computeWorkItems();
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = months[today.getMonth()];
    setCurrentMonthAndYear(`${currentMonth} ${currentYear}`);
  }, []);

  let increaseCompletionRate = () => {
    setWorkingDates((prev) => {
      let newState = prev.map((i) => {
        let newObj = {
          ...i,
        };
        let increaseFactor = getRndInteger(10, 30);
        newObj.completionRate = newObj.completionRate + increaseFactor;
        if (newObj.completionRate > 100) {
          newObj.completionRate = 100;
        }
        return newObj;
      });
      return newState;
    });
  };

  useEffect(() => {
    if (completionRate >= 100) return;
    const id = setInterval(increaseCompletionRate, 10000);
    return () => clearInterval(id);
  }, [workingDates]);

  let computePosition = (dateRange) => {
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let { startDate, endDate } = dateRange;
    let unitWidth = calenderWrapperWidth / datesList.length;
    let startIndex = currentDay - 9;
    let startPosition;
    let width;
    if (startDate.getDate() <= startIndex) {
      startPosition = 0;
      width =
        (endDate.getDate() - startIndex) * unitWidth +
        unitWidth +
        unitWidth / 2;
    } else {
      let diff = startDate.getDate() - startIndex;

      startPosition = diff * unitWidth + unitWidth;
      width =
        (endDate.getDate() - startDate.getDate()) * unitWidth + unitWidth / 2;
    }
    return { startPosition, width };
  };

  const getDateRange = () => {
    let dates = [];
    let currentDate = new Date();

    for (let i = 9; i >= 1; i--) {
      const currentDay = currentDate.getDate();
      let indexDate = new Date();
      indexDate.setDate(currentDay - i);
      dates.push(indexDate);
    }

    dates.push(currentDate);

    for (let i = 1; i < 8; i++) {
      const currentDay = currentDate.getDate();
      let indexDate = new Date();
      indexDate.setDate(currentDay + i);
      dates.push(indexDate);
    }

    setDateList(dates);
  };

  //Sets task max 15 days and not less than 6 days
  const getRandomDatesRange = () => {
    let startDay = getRndInteger(1, 15);
    let dayDifference = getRndInteger(6, 15);
    let startDate = new Date();
    let endDate = new Date();

    endDate.setDate(startDay + dayDifference);
    startDate.setDate(startDay);

    return {
      startDate,
      endDate,
    };
  };
  const computeWorkItems = () => {
    let list = [];
    for (let i = 0; i < 10; i++) {
      const hold = getRandomDatesRange();
      hold.completionRate = getRndInteger(10, 100);
      hold.details = fetchStaffNameAndRole();

      list.push(hold);
    }

    setWorkingDates(list);
  };

  const fetchStaffNameAndRole = () => {
    for (let i = 0; i < 10; i++) {
      const random =
        randomStaffDetails[
          Math.floor(Math.random() * randomStaffDetails.length)
        ];
      return random;
    }
  };

  let completionRate =
    workingDates.reduce((sum, curr) => sum + Number(curr.completionRate), 0) /
    workingDates.length;

  return (
    <div className="main h-screen overflow-y-auto">
      <div className="main-nav">
        <div className="main-nav-left">
          <span className="text-black">{activeNav}</span>
          <BsChevronRight />
          <span className="text-gray-300">GSE Banking app</span>
        </div>
        <div className="main-nav-right">
          <BsEnvelopeOpen />
          <BsBell />
          <span
            style={{
              width: 1,
              alignSelf: "stretch",
              backgroundColor: "rgba(19, 30, 58, 0.1)",
            }}
          ></span>
          <span className="bg-black text-white rounded-full p-1">
            <BsHurricane size={25} />
          </span>
          <span className="text-sm font-bold text-black">RonansIT</span>
          <BsChevronDown className="ml-2 cursor-pointer" />
        </div>
      </div>
      <div className="main-header">
        <div className="main-header-title">
          <h1 className="text-2xl mb-2 font-normal">GSE Banking app</h1>
          <div className="progress-container flex items-center">
            <span className="mr-4 text-md text-gray-500">
              {completionRate}%
            </span>

            <div
              className=""
              style={{
                width: 70,
                height: 3,
                backgroundColor: "rgba(29, 92, 252,0.3)",
                position: "relative",
              }}
            >
              <div
                className="	transition-width"
                style={{
                  backgroundColor: "rgba(29, 92, 252,1)",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 3,
                  width: completionRate + "%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="main-header-right">
          <div className="flex justify-center items-center border-2 border-dotted border-gray-500 py-2 px-6 rounded-lg text-gray-500 cursor-pointer">
            <BsPlus />
            <span>invite</span>
          </div>
        </div>
      </div>
      <div className="my-5 flex justify-between">
        <div className="flex justify-center items-center">
          <p className="font-bold text-lg">{currentMonthAndYear}</p>
          <div className="ml-3 flex justify-center items-center">
            <div className="text-gray-400">
              <BsChevronLeft size={13} />
            </div>
            <div className="ml-3 text-gray-400">
              <BsChevronRight size={13} />
            </div>
          </div>
        </div>
        <div className="flex center items-center">
          <BsSearch size={16} />
          <div className="ml-8 rounded-3xl border border-gray-300 py-2 px-6 flex justify-center items-center">
            <p className="text-black text-xs">Month</p>
            <BsChevronDown className="ml-8 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="calender-wrapper " ref={calenderWrapperRef}>
        {datesList.map((item, index) => {
          return <DaysOfTheWeek date={item} key={index} />;
        })}
        <div className="work-items-container mt-10">
          {workingDates.map((i, index) => {
            let pt = computePosition(i);
            return (
              <StaffAndTasks
                key={index}
                data={i}
                index={index}
                computedData={pt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
