"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.inputTargetEmailPassword = exports.inputSchedule = exports.input = void 0;
var snakeCaseToSpaceSeparatedWord = function (cronScheduleName) {
    return cronScheduleName
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) {
        return str.toUpperCase();
    })
        .toLowerCase();
};
var input = function (cronScheduleName, prompt, print) { return __awaiter(void 0, void 0, void 0, function () {
    var convertedcronScheduleName, result, cronSchedule;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                convertedcronScheduleName = snakeCaseToSpaceSeparatedWord(cronScheduleName);
                return [4 /*yield*/, prompt.ask({
                        type: 'input',
                        name: cronScheduleName,
                        message: "Enter your " + convertedcronScheduleName + "."
                    })];
            case 1:
                result = _a.sent();
                if (result && result[cronScheduleName]) {
                    cronSchedule = result[cronScheduleName];
                }
                // if they didn't provide one, we error out
                if (!cronSchedule) {
                    print.error("No " + convertedcronScheduleName + " name specified!");
                    return [2 /*return*/];
                }
                return [2 /*return*/, cronSchedule];
        }
    });
}); };
exports.input = input;
var inputSchedule = function (prompt) { return __awaiter(void 0, void 0, void 0, function () {
    var scheduleOption, isSchedule, cronSchedule, currentDate, chosenMonth, chosenDay, chosenHour, chosenMinute, day, hour, minute;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prompt.ask({
                    type: 'select',
                    name: 'scheduleOption',
                    message: "Do you want to run ps5bot immediately, or in a specific time and date?",
                    choices: ['later', 'immediate']
                })];
            case 1:
                scheduleOption = (_a.sent()).scheduleOption;
                isSchedule = scheduleOption === 'later';
                cronSchedule = null;
                if (!isSchedule) return [3 /*break*/, 5];
                currentDate = new Date();
                chosenMonth = currentDate.getMonth().toString();
                chosenDay = void 0;
                chosenHour = void 0;
                chosenMinute = void 0;
                return [4 /*yield*/, prompt.ask({
                        type: 'input',
                        name: 'day',
                        message: "Enter date of month. Defaults to today"
                    })];
            case 2:
                day = _a.sent();
                if (day && day.day) {
                    chosenDay = day.day;
                }
                else {
                    chosenDay = currentDate.getDate().toString();
                }
                return [4 /*yield*/, prompt.ask({
                        type: 'input',
                        name: 'hour',
                        message: "Enter hour of day. Defaults to current hour."
                    })];
            case 3:
                hour = _a.sent();
                if (hour && hour.hour) {
                    chosenHour = hour.hour;
                }
                else {
                    chosenHour = currentDate.getHours().toString();
                }
                return [4 /*yield*/, prompt.ask({
                        type: 'input',
                        name: 'minute',
                        message: "Enter minute of hour. Defaults to first minute of the hour."
                    })];
            case 4:
                minute = _a.sent();
                if (minute && minute.minute) {
                    chosenMinute = minute.minute;
                }
                else {
                    chosenMinute = currentDate.getMinutes().toString();
                }
                cronSchedule = {
                    month: chosenMonth,
                    date: chosenDay,
                    hour: chosenHour,
                    minute: chosenMinute
                };
                _a.label = 5;
            case 5: return [2 /*return*/, cronSchedule];
        }
    });
}); };
exports.inputSchedule = inputSchedule;
var inputTargetEmailPassword = function (prompt, print, email) { return __awaiter(void 0, void 0, void 0, function () {
    var targetEmail, targetPassword, targetConfig;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prompt.ask({
                    type: 'input',
                    name: 'targetEmail',
                    message: "Enter your Target email. Defaults to email if no input"
                })];
            case 1:
                targetEmail = (_a.sent()).targetEmail;
                return [4 /*yield*/, prompt.ask({
                        type: 'input',
                        name: 'targetPassword',
                        message: "Enter your Target password."
                    })];
            case 2:
                targetPassword = (_a.sent()).targetPassword;
                targetConfig = {
                    email: '',
                    password: ''
                };
                if (!targetEmail) {
                    targetConfig.email = email;
                }
                else {
                    targetConfig.email = targetEmail;
                }
                if (targetPassword) {
                    targetConfig.password = targetPassword;
                }
                else {
                    // if they didn't provide one, we error out
                    print.error("No target password specified!");
                    return [2 /*return*/];
                }
                return [2 /*return*/, targetConfig];
        }
    });
}); };
exports.inputTargetEmailPassword = inputTargetEmailPassword;
