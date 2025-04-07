import React, { useState } from "react";
import { format, isSameDay, isWithinInterval } from "date-fns";
import './DateRangePicker.css'

const DateRangePicker = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  // Generate an array of dates for the calendar
  const generateDates = (month, year) => {
    const dates = [];
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    for (let i = firstDay.getDate(); i <= lastDay.getDate(); i++) {
      dates.push(new Date(year, month, i));
    }
    return dates;
  };

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const dates = generateDates(currentMonth, currentYear);

  // Handle date selection
  const handleDateClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
      setShowCalendar(false); // Close after selection
    }
  };

  return (
    <div className="date-range-picker">
      <div className="input-container">
        <input
          type="text"
          readOnly
          value={startDate ? format(startDate, "MMM dd, yyyy") : "Start Date"}
          onClick={() => setShowCalendar(!showCalendar)}
        />
        <span> to </span>
        <input
          type="text"
          readOnly
          value={endDate ? format(endDate, "MMM dd, yyyy") : "End Date"}
          onClick={() => setShowCalendar(!showCalendar)}
        />
      </div>

      {showCalendar && (
        <div className="calendar">
          <div className="month-header">{format(new Date(), "MMMM yyyy")}</div>
          <div className="dates-grid">
            {dates.map((date) => (
              <div
                key={date}
                className={`date-cell ${
                  startDate && isSameDay(date, startDate) ? "selected" : ""
                } ${
                  startDate &&
                  endDate &&
                  isWithinInterval(date, { start: startDate, end: endDate })
                    ? "in-range"
                    : ""
                }`}
                onMouseEnter={() => setHoverDate(date)}
                onClick={() => handleDateClick(date)}
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
