import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return (
    <div>
      <p style={{ color, fontSize }}>テキストです</p>
    </div>
  );
};
