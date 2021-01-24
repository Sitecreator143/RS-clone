/* eslint-disable linebreak-style */
export const checkSettings = {
  settings: JSON.parse(localStorage.getItem("settings")),
  checkPlayerName() {
    return Boolean(this.settings.playerName);
  },
  checkPlayerPass() {
    return Boolean(this.settings.playerPass);
  },
  checkPlayersCount() {
    const playersCount = this.settings.playerSettings.find(el => el.settingName === "playersCount").settingValue;
    const isPlayersCountCorrect = (playersCount >= 1) && (playersCount <= 4);
    return isPlayersCountCorrect;
  },
  checkPlayersNames() {
    const playersNamesCount = this.settings.playerSettings.find(el => el.settingName === "playersNames").settingValue.length;
    const isNamesCountCorrect = (playersNamesCount >= 1) && (playersNamesCount <= 4);
    return isNamesCountCorrect;
  },
  checkLanguage() {
    const language = this.settings.playerSettings.find(el => el.settingName === "language").settingValue;
    const isLanguageCorrect = (language === "English") || (language === "Russian") || (language === "Italian");
    return isLanguageCorrect;
  },
  checkSound() {
    const sound = this.settings.playerSettings.find(el => el.settingName === "sound").settingValue;
    const isSoundCorrect = (sound === "on") || (sound === "off");
    return isSoundCorrect;
  },
  checkColor() {
    const color = this.settings.playerSettings.find(el => el.settingName === "color").settingValue;
    const isColorCorrect = (color === "green") || (color === "red");
    return isColorCorrect;
  }
};
