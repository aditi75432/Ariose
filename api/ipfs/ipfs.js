const IPFS = require('ipfs-core');
const ipfs = await IPFS.create();
const { cid } = await ipfs.add('Your data here');
console.log('IPFS CID:', cid.toString());