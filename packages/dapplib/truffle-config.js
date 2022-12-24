require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy crawl script come include clinic equal giggle'; 
let testAccounts = [
"0x57761ef7c94141cd9c51fc4b1d20b87f035a903ce55c565fe3e483566b73644f",
"0x8a1ffb98fc9d9b06b63a84e9d9a8abb63b67599e38e7a143a7778824222b901a",
"0xf0bc09e58a7c3b71ac4a70fce41f70c1fe1442eb7801a1ee4335dec10e24f699",
"0xf9a9e0fcb0d70011e87e069924a9e586d9f7620376085f1af8b703f6f18e6cbd",
"0x69d5760c81381cd381bf70076a1eb0abf1a7ffe506711e308a431dce1e5ee10d",
"0x74f977159bde48cf2604596b2f96165e8fb1f4645943e4028f9d9dfad839b723",
"0xf4060f23d9ebff59cf80064636563226a35b7598f50032dc7767ee57cfab807a",
"0xeadc18ca42f61a9df467c26a5520f810c3c3226422e586b939511a4d2d425797",
"0xba85657df3792f7be59c2102bacf65be6eb0a584487914675954d28d1604e461",
"0xf4b81547d5b6622aa90900a13925a9737c29f4a23c66c9407f25494fa437d641"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

