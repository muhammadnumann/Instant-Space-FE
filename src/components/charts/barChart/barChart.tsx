import React, { useEffect, useRef } from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts';
import { getCSS, getCSSVariableValue } from '../../../_metronic/assets/ts/_utils'
import { useThemeMode } from '../../../_metronic/partials/layout/theme-mode/ThemeModeProvider'; 

type Props = {
  className: string;
};

const BarChart1: React.FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();

  useEffect(() => {
    const chart = refreshChart();    

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const height = parseInt(getCSS(chartRef.current, 'height'));

    const chart = new ApexCharts(chartRef.current, getChartOptions(height));
    if (chart) {
      chart.render();
    }

    return chart;
  };

  return (
    <div className={`card ${className}`}>
      <div className="flex justify-between py-4 px-6">
          <div className="card-label rounded-lg bg-[#F4F4F4] my-2 px-2 flex justify-center"> <label className='text-[#7D8695] font-normal '> 2002-2003 </label> <img src='/media/icons/InstantIcons/cancel.svg' alt='' className='ml-1 mt-[2px]'/></div>
        <div className="button">
            <button className="px-5 py-2 bg-[#0064FA] text-white rounded-xl flex items-center">
              <img
                src="/media/icons/InstantIcons/filter.svg"
                alt="img"
                className="mr-2 h-3 w-3.5"
              />
              Filter
            </button>
          </div>
      </div>
      <div className="">
        <div
          ref={chartRef}
          id="kt_charts_widget_1_chart"
          style={{ height: '350px' }}
        />
              {/* <div className='flex justify-center'>
        Income
      </div> */}
      </div>

    </div>
  );
};

export { BarChart1 };

function getChartOptions(height: number): ApexOptions {
  const labelColor = '#171D25';
  // const borderColor = getCSSVariableValue('--kt-gray-200');
  const baseColor = 'rgba(0, 100, 250, 0.4)';
  const secondaryColor = getCSSVariableValue('--kt-gray-300');

  return {
    series: [
      {
        name: 'Net Profit',
        data: [250, 500, 750, 1000,250, 500, 750, 1000,250, 500, 750, 1000],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: height,
      toolbar: {
        show: false,
      },
    },
  tooltip: {
    enabled: true,
    enabledOnSeries: undefined,
    shared: true,
    followCursor: false,
    intersect: false,
    inverseOrder: false,
    custom: undefined,
    fillSeriesColor: false,
    theme: false,
    style: {
      fontSize: '12px',
      fontFamily: undefined,
    },
    onDatasetHover: {
        highlightDataSeries: false,
    },
    x: {
        show: true,
        format: 'dd MMM',
        formatter: undefined,
    },
    y: {
        formatter: undefined,
        title: {
            formatter: (seriesName) => seriesName,
        },
    },
    z: {
        formatter: undefined,
        title: 'Size: '
    },
    marker: {
        show: true,
    },
    items: {
       display: "flex",
    },
    fixed: {
        enabled: true,
        position: 'top',
        offsetX: 0,
        offsetY: 0,
    },
},
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June','Jul', 'Aug','Sep','Oct','Nov','Dec'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '14px',
          fontWeight:'500'
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: '14px',
          fontWeight:'500'

        },
      },
    },
    fill: {
      opacity: 1,
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands';
        },
      },
    },
    colors: [baseColor, secondaryColor],
    grid: {
      borderColor:" #E1E1FB",
      yaxis: {
        lines: {
          show: false,
        }, 
      },
      
    },
  };
}
