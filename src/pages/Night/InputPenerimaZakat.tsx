import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../components/TestComponents/Pagination';
import TestModal from '../../components/TestComponents/TestModal';

const ECommerce: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <TestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Tambah Penerima"
      >
        <div className="flex flex-col gap-5.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Code
            </label>
            <input
              type="text"
              placeholder="Code"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Penerima Zakat
            </label>
            <input
              type="text"
              placeholder="Penerima Zakat"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Batal
          </button>
          <button
            onClick={closeModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Tambah
          </button>
        </div>
      </TestModal>
      <div className="grid grid-cols-1 gap-4 mb-6">
        <h1 className="text-2xl font-bold text-[#000000]">
          Nama Penerima Zakat
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-4 bg-white p-4">
        <Link
          onClick={openModal}
          to="#"
          className="inline-flex items-center justify-center rounded-md bg-blue-500 py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Tambah Penerima
        </Link>
        <div className="col-span-3"></div>
        <div className=" col-span-2">
          <input
            type="text"
            placeholder="Cari Penerima"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-4 px-5  text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5">
        <TheTable />
      </div>

      <div className="grid grid-cols-2 gap-4 bg-white p-4">
        <Pagination />
      </div>
    </>
  );
};

type Package = {
  no: number;
  code: string;
  name: string;
};

const generateRandomName = (): string => {
  const names = [
    'Alpha',
    'Beta',
    'Gamma',
    'Delta',
    'Epsilon',
    'Zeta',
    'Eta',
    'Theta',
    'Iota',
    'Kappa',
    'Lambda',
    'Mu',
    'Nu',
    'Xi',
    'Omicron',
    'Pi',
    'Rho',
    'Sigma',
    'Tau',
    'Upsilon',
    'Phi',
    'Chi',
    'Psi',
    'Omega',
    'Artemis',
    'Apollo',
    'Athena',
    'Hera',
    'Hermes',
    'Poseidon',
    'Zeus',
    'Ares',
    'Hephaestus',
    'Demeter',
    'Hestia',
    'Dionysus',
    'Hades',
    'Persephone',
    'Eros',
    'Thanatos',
    'Helios',
    'Selene',
    'Nyx',
    'Hypnos',
    'Eris',
    'Hecate',
    'Janus',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const generateRandomCode = (index: number): string => {
  const prefix = String.fromCharCode(65 + (index % 26)); // A-Z
  const suffix = (index + 1).toString().padStart(2, '0'); // 01, 02, ..., 50
  return `${prefix}${suffix}`;
};

const packageData: Package[] = Array.from({ length: 50 }, (_, index) => ({
  no: index + 1,
  code: generateRandomCode(index),
  name: generateRandomName(),
}));

const TheTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5  dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11 w-[20%]">
                No
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white w-[60%]">
                Code
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white w-[20%] text-center">
                Nama
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((v, i) => (
              <tr key={i}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {v.no}
                  </h5>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{v.code}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark text-center">
                  <p className="text-black dark:text-white">{v.name}</p>
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
