module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "25",
      gas: 6721975,
    },
    mainnet: {
      url: 'https://rpc-cronos.crypto.org',
    },
  },
  compilers: {
    solc: {
      version: "0.5.16",
      settings: {
        optimizer: {
          enabled: true,
          runs: 9999999
        },
        evmVersion: "istanbul"
      }
    }
  },
  db: {
    enabled: false
  }
};
