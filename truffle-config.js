module.exports = {
//   compilers: {
//     solc: '0.4.25'
//   },
  networks: {
     development: {
     host: "localhost",
     port: 8545,
     network_id: "*" // Match any network id
     }
    // ganache: {
    //   host: '127.0.0.1',
    //   port: 7545,
    //   network_id: '*' // Match any network id
    // },
  }
};