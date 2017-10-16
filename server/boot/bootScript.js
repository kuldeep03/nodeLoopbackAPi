// require('events').EventEmitter.prototype._maxListeners = 100

// // const products = require('./products.json')

// module.exports = app => {
//   const mysqlDB = app.dataSources.mysql
//   // mysqlDB.setMaxListeners(0)
//   // const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24

//   const cbFunc = err => {
//     if (err) throw err
//     // console.log('Created Entity', results)
//   }

//   const migrateScript = (attributeName, data, cb) => {
//     mysqlDB.automigrate(attributeName, err => {
//       if (err) return cb(err)
//       app.models[attributeName].create(data, cb)
//     })
//   }

//   var lbTables = [
//     'customer'
//   ]
//   mysqlDB.automigrate(lbTables, function(er) {
//     if (er) throw er
//     // console.log('Loopback tables [' - lbTables - '] created in ', mysqlDB.adapter.name)

//     // create admin user and role
//     app.models.Customer.create(
//       {
//         username: 'yashwant',
//         email: 'yashmehra@gmail.com',
//         password: 'yash'
//       },
//       (err, users) => {
//         if (err) console.log(err)
//         app.models.Role.create(
//           {
//             name: 'admin'
//           },
//           (err, role) => {
//             if (err) console.log(err)

//             role.principals.create(
//               {
//                 principalType: app.models.RoleMapping.USER,
//                 principalId: users.id
//               },
//               (err, principal) => {
//                 if (err) console.log(err)
//               }
//             )
//           }
//         )
//       }
//     )
//   })
// }
