import React from 'react';
import Pagination from '../../components/TestComponents/Pagination';
import { dartaKriteria } from '../../database/db';

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <h1 className="text-2xl font-bold text-[#000000]">
          Perhitungan Weight Product
        </h1>
      </div>

      <div className="grid grid-cols-6 gap-4 bg-white p-4 mt-10">
        <div className="col-span-4"></div>
        <div className=" col-span-2">
          <input
            type="text"
            placeholder="Cari Data..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5  text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5">
        <Table1 />
      </div>
      <div className="grid grid-cols-2 gap-4 bg-white p-4">
        <Pagination />
      </div>

      {/* space */}

      <div className="flex justify-between items-center bg-white p-4 mt-10">
        <h2 className="text-xl font-bold">
          Rangking penerimaan zakat metode weight product
        </h2>
        <div className=" col-span-2">
          <input
            type="text"
            placeholder="Cari Data..."
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5  text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5">
        <Table2 />
      </div>
      <div className="grid grid-cols-2 gap-4 bg-white p-4">
        <Pagination />
      </div>
    </>
  );
};
const Table1 = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5   dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11 w-[20%]">
                Kode Alternatif
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white w-[60%]">
                Nama Alternatif
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white w-[20%] text-center">
                V
              </th>
            </tr>
          </thead>
          <tbody>
            {dartaKriteria.map((v: any, i) => (
              <tr key={i}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {v.code}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{v.nama}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <p className="text-black dark:text-white">0.00{i + 1}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const Table2 = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5   dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11  w-[20%]">
                Rangking
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white  w-[60%]">
                Nama Calon Penerima Zakat
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white  w-[20%] text-center">
                V
              </th>
            </tr>
          </thead>
          <tbody>
            {dartaKriteria.map((v: any, i) => (
              <tr key={i}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {i+1}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{v.nama}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <p className="text-black dark:text-white">0.00{i + 1}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ECommerce;
