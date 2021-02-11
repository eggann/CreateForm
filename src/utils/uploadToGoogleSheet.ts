import { stringify } from 'qs'

// 被呼叫者回傳為 Promise -> 表示呼叫他的人，必須是異步函式
// callback function
export const uploadToGoogleSheet = (formId: string, query: Record<string, unknown>): Promise<void> => {
  return new Promise(async (resolve, reject) => {

    // await 必須是異步函式才能使用，所以呼叫fetch的這個 Promise 的 callback Function 要加上 async

    // asynchronous 異步
    const response = await fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse?&${stringify(query)}&submit=SUBMIT`, {
      method: 'POST',
      mode: 'no-cors', // Google will only submit a form if 'mode' is 'no-cors'
      redirect: 'follow',
      referrer: 'no-referrer',
    })

    resolve()
  });
};


  // 以這個將 form 透過 post ajax request 上傳至Google 試算表 為例子
  // 這個韓式就像剛剛的 greeting，


  // 喔對了，我有幫你設定，你以後按住 shift + option + f ，會幫你自動縮排
  // 我說過有兩種 Promise 處理方法
  // 以上是用 .then 我不喜歡，很醜，改寫一下