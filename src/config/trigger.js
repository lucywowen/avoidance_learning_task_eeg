// NOTE - these event codes must match what is in public/config/trigger.js
const eventCodes = {
	context: 1,
	choice: 2,
	response: 3,
	feedback: 4,
	fixation: 5,
	missed: 6,
	p_choice: 7,
	p_response: 8,
	p_fixation: 9,
	p_missed: 10,
	extra: 11
}

// this is module.exports isntead of just exports as it is also imported into the electron app
module.exports = {
	eventCodes
}
