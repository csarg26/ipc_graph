import React, { useEffect, useState } from 'react';
import Graph from '../../components/Graph';
import { dataObjType } from '../../types/ipc.type';
import { fetchIpc } from '../../services/ipc.service';


const IpcPage: React.FunctionComponent = () => {
    const [ ipcData, setIpcData ] = useState<dataObjType>({
        data: [],
        loading: true,
    });

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetchIpc();
            setIpcData({
                data: response,
                loading: false,
            });
        }
        fetchData();
    }, []);

    return <>
        <Graph dataState={ipcData} />
    </>;
}

export default IpcPage;