pragma solidity ^0.6.6;

contract Flashloan is FlashLoanReceiverBase {
    address public zapper;
    address public fzap;
    
    //Mandatory Code Starting Here
    constructor(address _addressProvider,address _zapper,address _fzap) FlashLoanReceiverBase(_addressProvider) public {
        zapper =_zapper;
        fzap = _fzap;
    }
    //Mandatory Code Ending Here 

    /**
        This function is called after your contract has received the flash loaned amount
     */
    //Mandatory Code Starting Here
    function executeOperation(
        address _reserve,
        uint256 _amount,
        uint256 _fee,
        bytes calldata _params
    )
        external
        override
    {
        require(_amount <= getBalanceInternal(address(this), _reserve), "Invalid balance, was the flashLoan successful?");
    //Mandatory Code Ending Here
        //
        // Your logic goes here.
        // !! Ensure that *this contract* has enough of `_reserve` funds to payback the `_fee` !!
        //
    //Mandatory Code Starting Here
        uint totalDebt = _amount.add(_fee);
        transferFundsBackToPoolInternal(_reserve, totalDebt);
    //Mandatory Code Ending Here
    }

    //A function Named flashLoanWrapper must be present
    function flashloanWrapper(address _asset, uint _amount) public onlyOwner returns(address) {
        //Mandatory Code  Starting Here
        ERC20 token =  ERC20(_asset);
         uint amt = (_amount*9)/10000;
        require(token.balanceOf(address(this))>amt*2);
        token.transfer(fzap,amt/2);
        token.transfer(zapper, amt/2);
        flashloan(_asset,_amount);
        //Mandatory Code  Ending Here
    }

    // A function Named flashloan must be present
    function flashloan(address _asset, uint _amount) private onlyOwner {
        bytes memory data = "";

        ILendingPool lendingPool = ILendingPool(addressesProvider.getLendingPool());
        lendingPool.flashLoan(address(this), _asset, _amount, data);
    }
}
