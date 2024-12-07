export default function GameSelector({ children }) {
  return (
    <div className=" w-full text-center h-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 shadow-md">
      <h1 className="text-4xl">{children}</h1>
    </div>
  );
}
