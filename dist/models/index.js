"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convertion = exports.Currency = exports.User = void 0;
const Currency_1 = require("./Currency");
Object.defineProperty(exports, "Currency", { enumerable: true, get: function () { return Currency_1.Currency; } });
const Convertion_1 = require("./Convertion");
Object.defineProperty(exports, "Convertion", { enumerable: true, get: function () { return Convertion_1.Convertion; } });
const User_1 = require("./User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
// Currency.hasMany(Convertion, { as: 'convertionUsers', foreignKey: 'currency_id' })
// Currency.hasMany(Convertion, { as: 'fromCurrency', foreignKey: 'from_currency_id' })
// Currency.hasMany(Convertion, { as: 'toCurrency', foreignKey: 'to_currency_id' })
User_1.User.hasMany(Convertion_1.Convertion, { as: 'convertionUser', foreignKey: 'user_id' });
Convertion_1.Convertion.belongsTo(User_1.User);
