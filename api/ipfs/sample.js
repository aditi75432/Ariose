const cors = require('cors');
const {
    Keypair,
    TransactionBuilder,
    Operation,
    Networks
} = require('diamante-base');
const { Horizon } = require('diamante-sdk-js');

const cid = "QmPK1s3pNYLi9ERiq3BDxKa4XosgWwFRQUydHUtz4YgpqB"

async function test(){
    const server = new Horizon.Server('https://diamtestnet.diamcircle.io/');
    const senderKeypair = Keypair.fromSecret("SBD75C4LFU77K27BY73CAJTZDNY44APKHA6PCXQ5IPVPRARBY2ZZ26SL");
    const senderPublicKey = senderKeypair.publicKey();

    const account = await server.loadAccount(senderPublicKey);
    const transaction = new TransactionBuilder(account, {
        fee: await server.fetchBaseFee(),
        networkPassphrase: Networks.TESTNET,
    })
        .addOperation(Operation.manageData({
            name: "user1",
            value: cid,
        }))
        .setTimeout(30)
        .build();

    transaction.sign(senderKeypair);
    const result = await server.submitTransaction(transaction);
    console.log(`Data managed for key ${key} with value ${value}`, result);
}