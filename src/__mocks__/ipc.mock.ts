import { dataObjType, ipcType } from '../types/ipc.type';

export const responseMock: ipcType[] = [
    {
        "date": "2020-08-18T00:01:43.633-05:00",
        "price": 39285.85,
        "percentageChange": 0.86257,
        "volume": 128684937,
        "change": 335.97
      },
      {
        "date": "2020-08-18T00:01:43.657-05:00",
        "price": 39285.85,
        "percentageChange": 0.86257,
        "volume": 128684937,
        "change": 335.97
      },
      {
        "date": "2020-08-18T00:02:43.91-05:00",
        "price": 39285.85,
        "percentageChange": 0.86257,
        "volume": 128684937,
        "change": 335.97
      },
      {
        "date": "2020-08-18T00:02:43.933-05:00",
        "price": 39285.85,
        "percentageChange": 0.86257,
        "volume": 128684937,
        "change": 335.97
      }
    ];

 export const stateMock: dataObjType = {
    loading: true,
    data: responseMock
 }   
