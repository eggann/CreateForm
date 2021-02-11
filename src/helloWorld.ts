import { stringify } from 'qs';
// 如果今天修改程式碼，確認沒問題，想要上傳ＧＩＴ 倉庫

const sleep = (ms: number) => new Promise(res => setTimeout(res, ms));


const main = async () => {
    const query: Record<string, unknown> = {
        "性別": "男生",
        '年紀': 20
    }

    const str_query = stringify(query)
    console.log(str_query);
};
// 幫我關小視窗

main().catch(err => console.log(err));