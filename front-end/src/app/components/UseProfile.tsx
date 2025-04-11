type nameProps = {
  username: string;
};

export const UseProfile = ({ username }: nameProps) => {
  return (
    <div>
      <img src="https://pe-images.s3.amazonaws.com/basics/2023/crop-image-as-circle/image-cropped-as-circle-photoshop.jpg" />
      <p>{username}</p>
      <p>hiiiiiiiiiii</p>
    </div>
  );
};
