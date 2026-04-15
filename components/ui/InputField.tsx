type Props = {
  placeholder: string;
  textarea?: boolean;
};

export default function InputField({ placeholder, textarea }: Props) {
  const baseStyle =
    "w-full bg-[#1E1F24] border border-[#2A2A2E] rounded-xl px-5 py-4 text-sm outline-none focus:border-yellow-400 transition";

  if (textarea) {
    return (
      <textarea
        placeholder={placeholder}
        rows={5}
        className={baseStyle}
      />
    );
  }

  return (
    <input
      placeholder={placeholder}
      className={baseStyle}
    />
  );
}