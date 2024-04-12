import RemoveButton from "../../../common/RemoveButton";
import Tag from "../../../common/Tag";
import React from "react";
export default function AccessDisplay({ content, setContent }) {
  const removeRow = (index) => {
    setContent(content.filter((_, i) => i !== index));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-green1">
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Entities</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {content.map((role, index) => (
            <tr key={index} className="transition-all hover:bg-gray-800 hover:text-white">
              <td className="px-6 py-4  relative whitespace-nowrap text-white">          
              <Tag text={role.role} />
              <RemoveButton handler={removeRow} index={index} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white">
              <div class="tooltip-container">
                  <span class="tooltip-trigger"><Tag text={role.entities.length} /> </span>
                  <div class="tooltip-content flex flex-row">
                    {
                      role.actions.map((entity, index) => (
                        <Tag key={index} text={entity} />
                      ))
                    
                    }
                  </div>
                </div>

              </td>
              <td className="px-6 py-4 whitespace-nowrap text-white flex flex-row">
                <div class="tooltip-container">
                  <span class="tooltip-trigger"><Tag text={role.entities.length} /> </span>
                  <div class="tooltip-content flex flex-row">
                    {
                      role.entities.map((entity, index) => (
                        <Tag key={index} text={entity} />
                      ))
                    
                    }
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
