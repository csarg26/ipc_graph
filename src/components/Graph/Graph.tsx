import React from 'react';
import Loader from '../Loader';
import { dataObjType } from '../../types/ipc.type';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    TimeScale,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin from "chartjs-plugin-zoom";
import 'chartjs-adapter-moment';


interface propsType{
    dataState: dataObjType;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    zoomPlugin,
    TimeScale,
  );

  const options = {
        responsive: true,
        scales: {
            x: {
              type: 'time' as const,
              time: {
                displayFormats: {
                    quarter: 'HH:DD:MM'
                }
            }
            }
          },
        plugins: {
            legend: {
                position: 'right' as const,
            },
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true
                    },
                    speed: 10
                },
                pan:{
                    enabled: true,
                },
                mode: 'xy',
            }
        },
    };

const Graph = ({ dataState }: propsType) => {

    const data = {
        datasets: [
          {
            label: 'IPC',
            data: dataState.data.map(d=>({x: d.date, y: d.price})),
            borderColor: 'rgb(163, 106, 0)',
            backgroundColor: 'rgba(163, 106, 0, 0.5)',
          }
        ],
      };

    return (<section>
        {dataState.loading ? <Loader /> : <Line options={options} data={data} />}
    </section>);
}

export default Graph;
