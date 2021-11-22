import React from "react"
import Todo from "../Todo/Todo"
import Month from "./Month"

function Calendar() {
    return (
        <div class="row">
            <Todo />
            <Month />
            <iframe title="calendar"
                src="https://calendar.google.com/calendar/u/0/embed?src=2l4sp244sqvtkosqnbefd331d09aetbp@import.calendar.google.com&ctz=Asia/Manila">
            </iframe>
        </div>
    )
}

export default Calendar;