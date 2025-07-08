import "./titleCard.scss";

// Typage des props
interface TitleCardProps {
  id: string;
  title1: string;
  title2: string;
  classname?: string;
}

export default function TitleCard({
  id,
  title1,
  title2,
  classname,
}: TitleCardProps) {
  return (
    <section className="title-card" id={id}>
      <div className={classname}></div>
      <div className="content">
        <h1>{title1}</h1>
        <h2>{title2}</h2>
      </div>
    </section>
  );
}
