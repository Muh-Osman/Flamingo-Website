import Button from "../Button/Button";

export default function BigMoreBtn(props) {
  return (
    <Button
      title="More"
      className="big-more-btn"
      onClick={props.onClick}
      accessibility="More"
    />
  );
}
