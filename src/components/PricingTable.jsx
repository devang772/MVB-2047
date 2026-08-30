/**
 * PricingTable — Registration fee table
 * Source: Official MVB@2047 Brochure — DO NOT modify fees
 */
export default function PricingTable({ fees }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm" role="table" aria-label="Registration Fees">
        <thead>
          <tr className="bg-[#0f1e3c] text-white">
            <th
              className="text-left px-6 py-4 font-semibold text-sm"
              scope="col"
            >
              Category
            </th>
            <th
              className="text-center px-6 py-4 font-semibold text-sm"
              scope="col"
            >
              Indian Delegates
              <br />
              <span className="text-blue-200 font-normal text-xs">(INR)</span>
            </th>
            <th
              className="text-center px-6 py-4 font-semibold text-sm"
              scope="col"
            >
              Foreign Delegates
              <br />
              <span className="text-blue-200 font-normal text-xs">(USD)</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee, index) => (
            <tr
              key={fee.id}
              className={`border-t border-gray-100 transition-colors hover:bg-blue-50/50 ${
                fee.highlighted ? 'bg-green-50/60' : index % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'
              }`}
            >
              <td className="px-6 py-4">
                <p className="font-semibold text-[#0f1e3c] text-sm leading-snug">
                  {fee.category}
                  {fee.highlighted && (
                    <span className="ml-2 inline-block text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-semibold border border-green-200">
                      Student
                    </span>
                  )}
                </p>
                {fee.note && (
                  <p className="text-xs text-slate-500 mt-0.5">{fee.note}</p>
                )}
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-bold text-[#0f1e3c] text-base">
                  ₹{fee.indianFee.toLocaleString('en-IN')}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="font-bold text-[#0f1e3c] text-base">
                  ${fee.foreignFee}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="border-t border-gray-200 bg-amber-50/50">
            <td colSpan={3} className="px-6 py-3 text-xs text-amber-700 font-medium">
              * All fees are excluding GST@18%. Registration includes conference kit, meals, and session access.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
