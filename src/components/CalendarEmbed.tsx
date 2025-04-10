// components/CalendarEmbed.js
const CalendarEmbed = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '750px',
      }}
    >
      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3lgjYOAUNusWFjEElv3prZAvjzXfKTQLLMcpUoihStptyqFxD2Q8tuXvZfogFTvbr8bd8TjQkV?gv=true"
        width="100%"
        height="750"
      ></iframe>
    </div>
  )
}

export default CalendarEmbed
