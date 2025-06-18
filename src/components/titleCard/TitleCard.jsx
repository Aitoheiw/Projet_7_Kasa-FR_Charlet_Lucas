// import "./titleCard.scss";
export default function TitleCard({ id, title1, title2, classname }) {
  return (
    <section
      /*className="title-card"*/ className={`${
        id === "about"
          ? "bg-[url('../../assets/Images/CARD-ABOUT-BG-IMG.png')]"
          : "bg-[url('../../assets/Images/CARD-BG-IMG.png')]"
      } bg-cover bg-center h-[111px] w-full rounded-[10px] flex items-center justify-start relative md:h-[223px] md:justify-center md:items-center md:rounded-[25px]`}
      id={id}
    >
      <div
        className={`${
          classname === "overlay-home" ? "opacity-[0.6]" : "opacity-[0.3]  "
        } w-full h-full absolute top-0 left-0 z-0 inset-0 bg-black mix-blend-darken rounded-[10px] md:rounded-[25px]`}
      ></div>
      <div
        /*className="content"*/ className="flex flex-col pl-[16px] relative z-1 w-full md:flex-row md:gap-[15px] md:justify-center "
      >
        <h1 className="text-[24px] font-[700] text-white md:text-[48px]">
          {title1}
        </h1>
        <h2 className="text-[24px] font-[700] text-white md:text-[48px]">
          {title2}
        </h2>
      </div>
    </section>
  );
}
