'use strict';

var counter = 0,
    schedule = require('node-schedule'),
    taskSchedule = new schedule.RecurrenceRule();

//schedule the task to run the first, second, third, fourth and fifth minute after, every hour.
taskSchedule.minute = [1,2,3,4,5];

//this function is executed on every iteration of the schedule
function reportOnSchdeule () {
	//increment the counter
	counter++;

	//report that the scheduled task ran
    console.log('The scheduled task ran. This is iteration #: ' + counter);
}

//Initialze the schedule
schedule.scheduleJob(taskSchedule, reportOnSchdeule);

//just so we know the code is running, while we wait for the first iteration to run
console.log('The schdule has been initialzed');