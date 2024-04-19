import { FC } from "react";

interface PostCodePillProps {
  postCode: string;
}

const PostCodePill: FC<PostCodePillProps> = ({ postCode }) => {
  return <div>{postCode}</div>;
};

export default PostCodePill;
