export class Settings {
	constructor() {
		this.initialSettings = [
			{ settingName: "playersCount", settingValue: "2" },
			{ settingName: "playersNames", settingValue: ["Player1", "Player2"] },
			{ settingName: "language", settingValue: "English" },
			{ settingName: "sound", settingValue: "on" },
			{ settingName: "color", settingValue: "red" }
		]
	}
	initSettings() {
		if (localStorage.getItem('settings') === null) {
			localStorage.setItem("settings", JSON.stringify(this.initialSettings))
		}
	}
}