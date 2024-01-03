import "./title.css";
export default function Title({ title, txt }: { title: string; txt: string }) {
  return (
    <>
      <div className=" text-center mb-[3rem]">
        <h1 className=" text-[1.2rem] font-medium">{title}</h1>
        <p className="text-[2.4rem] max-w-[30rem] m-auto font-bold">{txt}</p>
      </div>
    </>
  );
}
