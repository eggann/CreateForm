import { uploadToGoogleSheet } from './uploadToGoogleSheet';
import { FormValue } from '../app/form/form.type';

// call this function when submit the form
export const handleSubmit = async (values: FormValue) => {
  const FORM_ID = '1FAIpQLSdzJ1qYADgvYhXTa1eCbeFGPptKSyxm6aon6p3ILFQHZ2Suvg';
  const query = {
    'entry.774485073': values.name, // 傳送使用者在表單填寫的資訊
    'entry.1819819084': values.gender, 
    'entry.2044485490': values.email,
    'entry.1597213970': values.roomTypeOptions,
    'entry.1749011696': values.numberGuests,
    'entry.2140375122': values.date, 
    'entry.181767127': values.freePickup, 
    'entry.1444788616': values.flightNumber,
    'entry.1934381288': values.specialRequest,
  };

  await uploadToGoogleSheet(FORM_ID, query)
};
