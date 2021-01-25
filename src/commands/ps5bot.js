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
var fs = require("fs");
var ps5bot_util_1 = require("../utils/ps5bot-util");
var command = {
    name: 'ps5bot',
    run: function (toolbox) { return __awaiter(void 0, void 0, void 0, function () {
        var prompt, print, cronSchedule, firstName, lastName, phoneNumber, email, state, city, address, zipCode, creditCardNumber, expirationMonth, expirationYear, cvv, config, isScrapeTarget, targetEmailPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prompt = toolbox.prompt, print = toolbox.print;
                    print.info("\n    Welcome to your CLI. Please enter your checkout info in the following prompts.\n    All data will only be stored in your computer. \n    You can choose to fill out the configs in config.json based on template provided in configTemplate.json.\n    ");
                    return [4 /*yield*/, ps5bot_util_1.inputSchedule(prompt)];
                case 1:
                    cronSchedule = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('firstName', prompt, print)];
                case 2:
                    firstName = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('lastName', prompt, print)];
                case 3:
                    lastName = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('phoneNumber', prompt, print)];
                case 4:
                    phoneNumber = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('email', prompt, print)];
                case 5:
                    email = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('state', prompt, print)];
                case 6:
                    state = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('city', prompt, print)];
                case 7:
                    city = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('address', prompt, print)];
                case 8:
                    address = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('zipCode', prompt, print)];
                case 9:
                    zipCode = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('creditCardNumber', prompt, print)];
                case 10:
                    creditCardNumber = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('expirationMonth', prompt, print)];
                case 11:
                    expirationMonth = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('expirationYear', prompt, print)];
                case 12:
                    expirationYear = _a.sent();
                    return [4 /*yield*/, ps5bot_util_1.input('cvv', prompt, print)];
                case 13:
                    cvv = _a.sent();
                    print.info("\n    ...Saving config...\n    The next settings are optional.\n    ");
                    config = {
                        firstName: firstName,
                        lastName: lastName,
                        phoneNumber: phoneNumber,
                        email: email,
                        state: state,
                        city: city,
                        address: address,
                        zipCode: zipCode,
                        creditCardNumber: creditCardNumber,
                        expirationMonth: expirationMonth,
                        expirationYear: expirationYear,
                        cvv: cvv,
                        cronSchedule: cronSchedule
                    };
                    fs.writeFileSync('config.json', JSON.stringify(config, null, 4));
                    return [4 /*yield*/, toolbox.prompt.confirm('Do you want to scrape Target?')];
                case 14:
                    isScrapeTarget = _a.sent();
                    targetEmailPassword = {};
                    if (!isScrapeTarget) return [3 /*break*/, 16];
                    return [4 /*yield*/, ps5bot_util_1.inputTargetEmailPassword(prompt, print, email)];
                case 15:
                    targetEmailPassword = _a.sent();
                    config.targetEmail = targetEmailPassword.email;
                    config.targetPassword = targetEmailPassword.password;
                    _a.label = 16;
                case 16:
                    print.info("\n    ...Saving final config...\n    ");
                    fs.writeFileSync('config.json', JSON.stringify(config, null, 4));
                    print.info("\n    We're ready to go. Enter the following comand to run the scraper:\n\n      ps5bot scrape\n    ");
                    return [2 /*return*/];
            }
        });
    }); }
};
module.exports = command;
