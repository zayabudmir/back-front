type nameProps = {
  username: string;
};

export const UseProfile = ({ username }: nameProps) => {
  return (
    <div>
      <div>
        <p>{username}</p>
      </div>
    </div>
  );
};
