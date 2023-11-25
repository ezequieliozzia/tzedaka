import React, { useState } from "react";
import Modal from "./Modal";

const KidsTable = (props) => {
  const keys = ["name", "program", "storyUrl"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState({});

  const headers = {
    name: "Nombre",
    program: "Programa",
    storyUrl: "Historia",
  };

  const content = props.info.map((kid) => {
    return {
      name: kid.ahijado,
      program: kid.programa,
      storyUrl: kid.historia,
    };
  });

  console.log(props.info);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {keys.map((el, elIndex) => (
              <th key={`headers-${elIndex}`} scope="col" className="px-6 py-3">
                {headers[el]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((row, rowIndex) => (
            <tr
              key={`table-items-${rowIndex}`}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.name}
              </th>
              <td className="px-6 py-4">{row.program}</td>
              <td className="px-6 py-4">
                {row.storyUrl === null ? (
                  "No dispinble"
                ) : (
                  <a
                    target="_blank"
                    href={row.storyUrl}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Ver más
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {Object.keys(rowSelected).length > 0 && (
        <Modal rowSelected={rowSelected} setRowSelected={setRowSelected} />
      )}
    </div>
  );
};

export default KidsTable;
