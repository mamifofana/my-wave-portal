const header = require("hardhat");


const main = async() =>{
    const [owner, randomPerson] = await header.ethers.getSigners();
    const waveContractFactory = await header.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address)

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTxn = await waveContract.wave();
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
};


const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1); // exit Node process while indicating ' uncaught fatal exception' error 
    }
    // Read more about Node exit ( 'process.exit(num)') status code here : https://stackovertflow.com/a/4716
};

runMain();
