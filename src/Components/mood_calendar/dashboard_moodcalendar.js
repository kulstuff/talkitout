import React from "react";
import dateFns from "date-fns";

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date(),
    setDates: []
    // selectedDays = this.props.selectedDate,
  };

  saveToServer = () => {};

  componentDidUpdate = () => {};

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    const sad = 1;
    const happy = 0;
    const mellow = 2;
    const emo = this.props.emotion;
    let index = -1;
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`col cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        // console.log("outside : ", days);

        // console.log(index);
        // days.splice(index, 1);

        this.state.setDates.map(object => {
          // console.log("today : ", dateFns.format(day, "MMM DD YYYY"));
          if (object.date == dateFns.format(day, "MMM DD YYYY")) {
            days.pop();

            if (object.feeling == "Happy") {
              days.push(
                <div
                  className={`col cell bg-happy ${
                    !dateFns.isSameMonth(day, monthStart)
                      ? "disabled"
                      : dateFns.isSameDay(day, selectedDate)
                      ? "selected"
                      : ""
                  }`}
                  // key={day}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                </div>
              );
            }
            if (object.feeling == "Sad") {
              days.push(
                <div
                  className={`col cell bg-sad ${
                    !dateFns.isSameMonth(day, monthStart)
                      ? "disabled"
                      : dateFns.isSameDay(day, selectedDate)
                      ? "selected"
                      : ""
                  }`}
                  // key={day}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                </div>
              );
            }
            if (object.feeling == "Calm") {
              days.push(
                <div
                  className={`col cell bg-calm ${
                    !dateFns.isSameMonth(day, monthStart)
                      ? "disabled"
                      : dateFns.isSameDay(day, selectedDate)
                      ? "selected"
                      : ""
                  }`}
                  // key={day}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                </div>
              );
            }
            if (object.feeling == "Angry") {
              days.push(
                <div
                  className={`col cell bg-angry ${
                    !dateFns.isSameMonth(day, monthStart)
                      ? "disabled"
                      : dateFns.isSameDay(day, selectedDate)
                      ? "selected"
                      : ""
                  }`}
                  // key={day}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                </div>
              );
            }
            if (object.feeling == "Anxious") {
              days.push(
                <div
                  className={`col cell bg-anxious ${
                    !dateFns.isSameMonth(day, monthStart)
                      ? "disabled"
                      : dateFns.isSameDay(day, selectedDate)
                      ? "selected"
                      : ""
                  }`}
                  // key={day}
                  onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                >
                  <span className="number">{formattedDate}</span>
                  <span className="bg">{formattedDate}</span>
                </div>
              );
            }
          }
          // else
        });
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  onDateClick = day => {
    // day = day + 1;
    var dateObj = dateFns.format(day, "MMM DD YYYY");
    var dateObject = {
      date: dateObj,
      key: "1"
    };
    console.log(dateObject);

    this.setState({
      selectedDate: day
    });
    console.log(this.state.setDates);
    document.getElementById("emotion").value = dateObj;

    // console.log(onDateClick);
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  handleSubmitClick = () => {
    //selector
    var e = document.getElementById("emotion-selector");
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;

    console.log(document.getElementById("emotion").value);
    var dateObject = {
      date: document.getElementById("emotion").value,
      key: "3",
      feeling: text
    };
    this.setState({
      setDates: this.state.setDates.concat(dateObject)
    });

    console.log(value, text);
    console.log(this.state.setDates);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleEmotion}
          disabled="true"
          id="emotion"
          placeholder="Selectected Date"
          className="mx-3"
        />
        <label className="mx-3">How are you feeling : </label>
        <select id="emotion-selector">
          <option value="1">Happy</option>
          <option value="2">Sad</option>
          <option value="3">Calm</option>
          <option value="4">Angry</option>
          <option value="5">Anxious</option>
        </select>
        <a className="btn btn-primary mx-5" onClick={this.handleSubmitClick}>
          Submit
        </a>
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells()}
        </div>
      </div>
    );
  }
}

export default Calendar;
