import { TEmployeeHistory } from "@/types/detail";
import { FC } from "react";

export const HistoryComponent: FC<{ history: TEmployeeHistory[] }> = ({
  history,
}) => {
  return (
    <div className="mt-8">
      <h4 className="font-bold text-xl mb-4">Department History</h4>
      <table className="table-fixed w-full">
        <thead>
          <tr className="border-b-2 border-gray-500">
            <th className="text-left text-md py-2">Date</th>
            <th className="text-left text-md py-2">Department</th>
          </tr>
        </thead>
        <tbody>
          {history?.map((entry, i) => {
            return (
              <tr
                key={`history-${i}`}
                className={`${i % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                <td className="py-2">{entry.date}</td>
                <td className="py-2">{entry.departmentName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
