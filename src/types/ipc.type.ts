export interface ipcType {
    date: string;
    price: number;
    percentageChange: number;
    volume: number;
    change: number;
}

export interface dataObjType{
    data: ipcType[];
    loading: boolean;
}