require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-truffle5");
require("hardhat-gas-reporter");
require('solidity-coverage')


const keys = require('./deploy_keys.json');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
            // forking: {
            //     //url: "https://mainnet.infura.io/v3/" + keys.infuraKey,
            //     url: "https://eth-mainnet.alchemyapi.io/v2/" + keys.alchemyKey,
            //     blockNumber: 11807770, // <-- edit here
            // }

        },

        ftmtest: {
            url: 'https://rpc.testnet.fantom.network',
            chainId: 4002,
            // gasPrice: 20000000000,
            accounts: [keys.acc1],
        },
        testnet: {
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
            chainId: 97,
            // gasPrice: 20000000000,
            accounts: [keys.acc1],
        },
         evmos: {
            url: 'https://ethereum.rpc.evmos.dev',
            chainId: 9000,
            // gasPrice: 20000000000,
            accounts: [keys.acc1],
        },
        hecotest: {
            url: 'https://http-testnet.hecochain.com',
            chainId: 256,
            // gasPrice: 20000000000,
            accounts: [keys.acc1],
        },
    },
    paths: {
        artifacts: './artifacts',
        cache: './cache',
        sources: './contracts',
        tests: './test',
    },
    solidity: {
        version: "0.8.2",
        settings: {
            // optimizer: {
            //     enabled: true,
            //     runs: 200,
            // },
            metadata: {
                // do not include the metadata hash, since this is machine dependent
                // and we want all generated code to be deterministic
                // https://docs.soliditylang.org/en/v0.7.6/metadata.html
                bytecodeHash: 'none',
            },
        },
    },
    mocha: {
        timeout: 2000000
    },
    // gasReporter: {
    //     enabled: (process.env.REPORT_GAS) ? true : false,
    //     currency: 'USD'
    // }
};