const MutliSigWallet = artifacts.require("MultiSigWallet");

module.exports = function (deployer) {
  deployer.deploy(MutliSigWallet);
};
