
import { Currency } from "./Currency";
import { Convertion } from "./Convertion";
import { User } from "./User";

// Currency.hasMany(Convertion, { as: 'convertionUsers', foreignKey: 'currency_id' })


// Currency.hasMany(Convertion, { as: 'fromCurrency', foreignKey: 'from_currency_id' })
// Currency.hasMany(Convertion, { as: 'toCurrency', foreignKey: 'to_currency_id' })
User.hasMany(Convertion, { as: 'convertionUser', foreignKey: 'user_id' })

Convertion.belongsTo(User)
// Convertion.belongsTo(Currency)


//Course.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'course_id' })

//Favorite.belongsTo(Course)
//Favorite.belongsTo(User)

export {
  User,
  Currency,
  Convertion
}