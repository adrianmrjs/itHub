document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("dayGrid");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: "prevYear,prev,next,nextYear today",
      center: "title",
      right: "dayGridMonth,dayGridWeek,dayGridDay",
    },
    initialDate: "2024-10-12",
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    dayMaxEvents: true, // allow "more" link when too many events
    events: [
      {
        title: "All Day Event",
        start: "2024-10-01",
        color: "#ff9446",
      },
      {
        title: "Long Event",
        start: "2024-10-07",
        end: "2024-10-10",
        color: "#396bff",
      },
      {
        groupId: 999,
        title: "Birthday",
        start: "2024-10-09T16:00:00",
        color: "#35c2fe",
      },
      {
        groupId: 999,
        title: "Birthday",
        start: "2024-10-16T16:00:00",
        color: "#f3c83a",
      },
      {
        title: "Conference",
        start: "2024-10-11",
        end: "2024-10-13",
        color: "#ff9446",
      },
      {
        title: "Meeting",
        start: "2024-10-14T10:30:00",
        end: "2024-10-14T12:30:00",
      },
      {
        title: "Lunch",
        start: "2024-10-16T12:00:00",
        color: "#26c77b",
      },
      {
        title: "Meeting",
        start: "2024-10-18T14:30:00",
        color: "#35c2fe",
      },
      {
        title: "Interview",
        start: "2024-10-21T17:30:00",
        color: "#f3c83a",
      },
      {
        title: "Meeting",
        start: "2024-10-22T20:00:00",
        color: "#396bff",
      },
      {
        title: "Birthday",
        start: "2024-10-13T07:00:00",
        color: "#26c77b",
      },
      {
        title: "Click for Google",
        url: "http://google.com/",
        start: "2024-10-28",
        color: "#35c2fe",
      },
      {
        title: "Interview",
        start: "2024-10-20",
        color: "#26c77b",
      },
      {
        title: "Product Launch",
        start: "2024-10-29",
        color: "#26c77b",
      },
      {
        title: "Leave",
        start: "2024-10-25",
        color: "#f3c83a",
      },
    ],
  });

  calendar.render();
});
