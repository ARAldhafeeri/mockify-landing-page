import RemoveButton from "../../../common/RemoveButton";

export default function DataDisplay({ content, setContent }) {
  const removeRow = (index) => {
    setContent(content.filter((_, i) => i !== index));
  };

  return (
    <div className="overflow-x-auto table">
      <table className="min-w-full border-collapse border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-green1">
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">First Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Last Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Avatar</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {content.map((person, index) => (
            <tr key={index} className="transition-all hover:bg-gray-800 hover:text-white">
              <td className="px-6 py-4 whitespace-nowrap text-white">{person.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-white">{person.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-white">{person.age}</td>
              <td className="px-6 py-4 whitespace-nowrap text-white relative flex items-center">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-green-500">
                  <img src={person.avatar} alt='avatar' className='absolute inset-0 w-full h-full object-cover' />
                </div>
                <RemoveButton handler={removeRow} index={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
