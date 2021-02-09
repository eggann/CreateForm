import { stringify } from 'qs'

// callback function
export const uploadToGoogleSheet = (formId: string, query: Record<string, unknown>): Promise<void> => {
    return new Promise((resolve, reject) => {
      fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse?&${stringify(query)}&submit=SUBMIT`, {
        method: 'POST',
        mode: 'no-cors', // Google will only submit a form if 'mode' is 'no-cors'
        redirect: 'follow',
        referrer: 'no-referrer',
      })
        .then(() => {
          console.log('post success !')
          resolve()
        })
        .catch((err) => {
          console.log(err);
          reject()
        });
    });
  };