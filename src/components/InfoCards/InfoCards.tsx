 import React from 'react';
 import { dataObjType } from '../../types/ipc.type';
 import Card from '../Card';
 import Loader from '../Loader';
 import styles from './infocards.module.scss';

 interface propsType{
     dataState: dataObjType;
 }

 const InfoCards = ({dataState}: propsType) => {
    const { data, loading } = dataState;
    const lastValue = loading ? 0 : data[data.length - 1].price;
    const firstValue = loading ? 0 : data[0].price;

    const formatCurrencyValue = (value) => {
        return value.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN',
          });
    }

    return <section className={styles.cards}>
        <Card header="Valor inicial">
           { loading ? <Loader /> : <div>{formatCurrencyValue(firstValue)}</div>}
        </Card>
        <Card header="Valor final">
            { loading ? <Loader /> : <div>{formatCurrencyValue(lastValue)}</div>}
        </Card>
        <Card header="Variación">
            <div>{ loading ? <Loader /> : <div>{formatCurrencyValue(lastValue - firstValue)}</div>}</div>
        </Card>
    </section>;
 }

 export default InfoCards;
