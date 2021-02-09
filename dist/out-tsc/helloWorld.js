var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 如果今天修改程式碼，確認沒問題，想要上傳ＧＩＴ 倉庫
console.log("hello world!");
const sleep = (ms) => new Promise(res => setTimeout(res, ms));
const main = () => __awaiter(this, void 0, void 0, function* () {
    yield sleep(3000);
    console.log('testing main function');
    yield sleep(2000);
    console.log('testing asynchronous function');
    yield sleep(4000);
    console.log('testing asynchronous function 2');
});
main().catch(err => console.log(err));
//# sourceMappingURL=helloWorld.js.map