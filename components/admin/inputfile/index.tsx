import React from 'react';
import * as XLSX from 'xlsx';

const Index = ({ setData }: { setData: React.Dispatch<React.SetStateAction<any[]>> }) => {
  const handleFileUpload = (e: any) => {
    if (e.target) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const bstr = e.target.result;
        const workBook = XLSX.read(bstr, { type: 'binary' });
        const workSheetName = workBook.SheetNames[0];
        const workSheet = workBook.Sheets[workSheetName];
        const data = XLSX.utils.sheet_to_json(workSheet);
        setData(data);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor='file' className='block text-sm text-gray-500 dark:text-gray-300'>
          File
        </label>

        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-8 h-8 text-gray-500 dark:text-gray-400'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z'
            />
          </svg>

          <h2 className='mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200'>
            Payment File
          </h2>

          <p className='mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400'>
            Upload or drag & drop your file xls, xlm, csv
          </p>

          <input
            id='dropzone-file'
            type='file'
            className='hidden'
            accept='.xlsx, .xls'
            onChange={handleFileUpload}
          />
        </label>
      </div>
    </div>
  );
};

export default Index;
