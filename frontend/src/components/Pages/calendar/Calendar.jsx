import React from "react"
import Todo from "../Todo/Todo"
import Month from "./Month"

function Calendar() {
    return (
        <div class="row">
            <Todo />
            <Month />
            <iframe title="calendar"
                src="https://calendar.google.com/calendar/embed?src=2l4sp244sqvtkosqnbefd331d09aetbp%40import.calendar.google.com&ctz=Asia%2FManila">
            </iframe>
        </div>
    )
}

export default Calendar;