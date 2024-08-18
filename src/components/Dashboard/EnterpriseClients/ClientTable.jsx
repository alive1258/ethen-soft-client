"use client";
import TableRow from "./TableRow";

const ClientTable = () => {
  return (
    <>
      <table className="w-full mb-6">
        <thead className="bg-[#1D1D1D]">
          <tr className="text-[#8A92A6] font-medium uppercase">
            <th className="py-3 pl-10 mb-2 text-start">COMPANIES</th>
            <th className="py-3 mb-2 text-start">CONTACTS</th>
            <th className="py-3 mb-2 text-start">order</th>
            <th className="py-3 mb-2 text-start">COMPLETION</th>
          </tr>
        </thead>
        <tbody className="bg-[#151819] rounded-lg text-[#D3D3D3]">
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </>
  );
};

export default ClientTable;
