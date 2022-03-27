const header = require("hardhat");


const main = async() =>{
    const waveContractFactory = await header.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to:", waveContract.address);
};


const runMain = async () => {
    try {
        await main();
        process.exit();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating ' uncaught fatal exception' error 
    }
    // Read more about Node exit ( 'process.exit(num)') status code here : https://stackovertflow.com/a/4716
};

runMain();
