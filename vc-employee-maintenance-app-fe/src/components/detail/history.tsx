import { TEmployeeHistory } from "@/types/detail";
import { FC } from "react";

export const HistoryComponent: FC<{ history: TEmployeeHistory[] }> = ({
  history,
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {history?.map((entry, i) => {
            return (
              <tr key={`history-${i}`}>
                <td>{entry.date}</td>
                <td>{entry.departmentName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
