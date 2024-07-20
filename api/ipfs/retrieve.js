const storedHash = await contract.methods.getIPFSHash().call();
const data = await ipfs.cat(storedHash);
console.log('Retrieved data:', data.toString());