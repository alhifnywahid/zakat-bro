import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import TestCartOne from '../../components/Charts/TestCartOne';
import ChartThree from '../../components/Charts/ChartThree';
import TestChartTwo from '../../components/Charts/TestChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import TableOne from '../../components/Tables/TableOne';
import { AiOutlineDatabase } from 'react-icons/ai';
import { MdBarChart } from 'react-icons/md';
import { FaChartPie } from 'react-icons/fa';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <CardDataStats title="Jumlah Data Alternatif" total="100" rate="-" levelUp>
        <AiOutlineDatabase size={22} className='fill-primary dark:fill-white' />
        </CardDataStats>
        <CardDataStats title="Total Profit" total="15" rate="-" levelUp>
        <MdBarChart size={22} className='fill-primary dark:fill-white' />
        </CardDataStats>
        <CardDataStats title="Perhitungan" total="Hasil" rate="-" levelUp>
        <FaChartPie size={22} className='fill-primary dark:fill-white' />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <TestCartOne /> */}
        <TestChartTwo />
        {/* <ChartThree />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard /> */}
      </div>
    </>
  );
};

export default ECommerce;
