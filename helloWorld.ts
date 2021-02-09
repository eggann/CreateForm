// 如果今天修改程式碼，確認沒問題，想要上傳ＧＩＴ 倉庫
console.log("hello world!");

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));

const main = async () => {
    await sleep(3000);
    
    console.log('testing main function');

    await sleep(2000);

    console.log('testing asynchronous function');
    
    await sleep(4000);
    console.log('testing asynchronous function 2');
    
};

main().catch(err => console.log(err));