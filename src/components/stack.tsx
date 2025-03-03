export const Stack = (props: { name: string; img?: string }) => (
  <>
    <div className="stack-badge">
      {props.img && <img src={props.img} alt={props.name} />}
      <span>{props.name}</span>
    </div>
  </>
);
