export default function FormHeader({ title, subtitle }) {
  return (
    <div className="mb-10">
      <div className="text-center font-bold text-2xl ">{title}</div>
      <div className="text-center text-gray-400 font-regular text-md ">
        {subtitle}
      </div>
    </div>
  );
}
