import React from "react";

const KidsTable = (props) => {
  const keys = ["name", "color", "program", "donation", "onClick"];

  const headers = {
    name: "Nombre",
    color: "Ultima Donación",
    program: "Programa",
    donation: "Donación acumulada",
    action: "Action",
  };

  // const content = [
  //   {
  //     name: "Apple MacBook Pro 17",
  //     color: "Silver",
  //     category: "Laptop",
  //     price: "$2999",
  //     onClick: null,
  //   },
  // ];
  const content = props.info.map((kid) => {
    return {
      name: kid.ahijado,
      program: kid.programa,
      donation: kid.donacion,
    };
  });

  console.log(props.info);

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {keys.map((el) => (
              <th scope="col" class="px-6 py-3">
                {headers[el]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.map((row) => (
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {row.name}
              </th>
              <td class="px-6 py-4">{row.color}</td>
              <td class="px-6 py-4">{row.program}</td>
              <td class="px-6 py-4">{row.donation}</td>
              <td class="px-6 py-4">
                <a
                  href="#"
                  class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Ver más
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KidsTable;
