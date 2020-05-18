var TrialDelegate = artifacts.require('TrialDelegate')
var SecondContract = artifacts.require('SecondContract')

module.exports = function(deployer) {
    deployer.deploy(TrialDelegate)
    deployer.deploy(SecondContract)
}