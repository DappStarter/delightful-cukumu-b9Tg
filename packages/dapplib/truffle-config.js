require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad gloom prize tail swap'; 
let testAccounts = [
"0xb14c3477fdbb0ac42a5e13b00a1da58bba7afeeb262b0e4db6fb8dba7e3199ee",
"0x1ee0742cefa1b8602bb738a3091b22831c4123e034e5e1efacb3f56ed2ee5412",
"0x2093f6e6a5f9b69ec5c2443b7453bc982b628dd9b615cd54cee46a9e56fc8080",
"0xafdd9cdf7adad46adac506394ab4948569d1f1859620c674cdf64a2948fdaa37",
"0xfb2f80b9d29119f51d3d477677b518293dca192dead4b67c9ecf6ab8537e81b9",
"0xd4624d4bfcc5004544f9b669121023ebec488f597fb18001a49f1e1a0dbbabe0",
"0xb22b66c6e5d803cb6571a31ddc00f0af7c8f39e988a6f9ac588c067b322f03fc",
"0x85d432558676ab612cacdaf42ab0808697158c3d5a4ca8338b7d7599bee80c88",
"0xba441465d54cf9c5d12f8e38aa2c4568833a8f2492483d9fe97cfc480e6de7d7",
"0x5f3cfe658d190985efbcf13626ed1fe56cc0db8fe59c67d9f8422932fc4570a6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

