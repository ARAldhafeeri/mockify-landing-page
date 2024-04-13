import Tag from "../../../common/Tag";
import React from "react";
export default function EndpointDisplay({ content, setContent }) {

  return (
    <div className="overflow-x-auto w-[300px]">
      <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-green1">
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Method</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Endpoint</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {content.map((endpoint, index) => (
          endpoint.state && (
            <tr key={index} className="transition-all hover:bg-gray-800 hover:text-white">
            <td className="px-6 py-4  relative whitespace-nowrap text-white">          
            <Tag text={endpoint.method} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-white">
            <div class="tooltip-container">
                <span class="tooltip-trigger"><Tag text={endpoint.path} /> </span>
                <div class="tooltip-content flex flex-row">
                  {endpoint.description}
                </div>
              </div>

            </td>
          </tr>
          )
          ))}
        </tbody>
      </table>
    </div>
  );
}
