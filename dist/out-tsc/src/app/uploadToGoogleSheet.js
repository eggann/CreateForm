import { stringify } from 'qs';
export const uploadToGoogleSheet = (formId, query) => {
    return new Promise((resolve, reject) => {
        fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse?&${stringify(query)}&submit=SUBMIT`, {
            method: 'POST',
            mode: 'no-cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        })
            .then(() => resolve())
            .catch(() => reject());
    });
};
// call this function when submit the form
const handleSubmit = values => {
    const FORM_ID = '1FAIpQLSdzJ1qYADgvYhXTa1eCbeFGPptKSyxm6aon6p3ILFQHZ2Suvg';
    const query = {
        'entry.774485073': values.data1,
        'entry.2044485490': values.data2,
        'entry.1749011696': values.data3,
        'entry.1444788616': values.data4,
        'entry.1934381288': values.data5,
        'entry.2140375122': values.data6,
        'entry.181767127': values.data7,
        'entry.1597213970': values.data8,
        'entry.1819819084': values.data9,
    };
    uploadToGoogleSheet(FORM_ID, query)
        .then(() => {
        // do something when submit success
    })
        .catch(() => {
        // do something when submit fail
    });
};
//# sourceMappingURL=uploadToGoogleSheet.js.map