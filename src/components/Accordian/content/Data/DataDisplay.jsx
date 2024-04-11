import RemoveButton from "../../../common/RemoveButton";

export default function DataDisplay({ content, setContent }) {
  const removeRow = (index) => {
    setContent(content.filter((_, i) => i !== index));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full shadow-lg shadow-[#12a174]">
        <thead>
          <tr className="bg-green1">
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Avatar</th>
          </tr>
        </thead>
        <tbody className="bg-[#000300] divide-y divide-gray-200">
          {content.map((person, index) => (
            <tr key={index} className="transition-all hover:bg-gray-800 hover:text-white">
              <td className="px-6 py-4 whitespace-nowrap text-white">{person.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-white">{person.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-white">{person.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-white relative flex items-center">
                <img src={person.avatar} alt='avatar' className='w-12 h-12 rounded-full mr-2' />
                <RemoveButton handler={removeRow} index={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
