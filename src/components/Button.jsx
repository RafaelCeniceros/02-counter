// <></> React fragment

export const Button = ({ children, onClick: handleFunction }) => {
    return (
      <>
        <button onClick={handleFunction}>{children}</button>
      </>
    );
  };