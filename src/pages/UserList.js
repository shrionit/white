import { useEffect, useState } from "react";
import helper from "../utils/helper";

export default function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    let list = helper.storage.listUsers();
    setUsers(list);
  }, []);
  const dataRow = (data) => {
    return (
      <tr key={data.email}>
        <td className="text-left py-1 px-2 border-r">{data.name}</td>
        <td className="text-right py-1 px-2 border-r">{data.mobile}</td>
        <td className="text-right py-1 px-2 border-r">{data.email}</td>
        <td className="text-right py-1 px-2">{data.password}</td>
      </tr>
    );
  };
  return (
    <div className="border p-1">
      <table className="w-full border-2">
        <tr className="bg-blue-200 rounded">
          <th className="text-left py-1 px-2 border border-gray-400">Name</th>
          <th className="text-right py-1 px-2 border border-gray-400">
            Mobile
          </th>
          <th className="text-right py-1 px-2 border border-gray-400">Email</th>
          <th className="text-right py-1 px-2 border border-gray-400">
            Password
          </th>
        </tr>
        {users &&
          users.map((user) => {
            return dataRow(user);
          })}
      </table>
    </div>
  );
}
