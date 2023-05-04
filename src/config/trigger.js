// NOTE - these event codes must match what is in public/config/trigger.js
const eventCodes = {
	context: 1,
	choice: 2,
	response: 3,
	feedback: 4,
	fixation: 5,
	missed: 6,
	extra: 7
}

// this is module.exports isntead of just exports as it is also imported into the electron app
module.exports = {
	eventCodes
}
