// export default function Button({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition">
//       {children}
//     </button>
    
//   );
// }

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className }: Props) {
  return (
    <button
      className={`bg-yellow-400 text-black px-6 py-3 rounded-full font-medium ${className}`}
    >
      {children}
    </button>
  );
}