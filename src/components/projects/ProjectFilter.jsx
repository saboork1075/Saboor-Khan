// export default function ProjectFilter({ categories, active, onChange }) {
//   return (
//     <div className="flex flex-wrap justify-center gap-3 mb-10 md:mb-12">
//       {categories.map((cat, index) => (
//         <button
//           key={cat}
//           onClick={() => onChange(cat)}
//           className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 ${
//             active === cat
//               ? "bg-[#3B82F6] text-white shadow-button hover:shadow-button-hover"
//               : "bg-white border border-[#E2E8F0] text-[#334155] hover:text-[#3B82F6] hover:border-[#3B82F6] hover:bg-[#3B82F6]/5"
//           }`}
//           style={{
//             animation: `fadeUp 0.5s ease-out ${index * 0.08}s forwards`,
//             opacity: 0,
//           }}
//         >
//           {active === cat && (
//             <span className="inline-block w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse-soft" />
//           )}
//           {cat}
//         </button>
//       ))}
//     </div>
//   );
// }
