pragma solidity >=0.5.0;

interface ICrocCallee {
    function CrocCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
