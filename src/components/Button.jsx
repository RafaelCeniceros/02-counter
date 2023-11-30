// <></> React fragment

export const Button = ({ children, onClick: handleFunction }) => {
    return (
      <> {/* Empty fragment -> evita uso de divs */}
        <button onClick={handleFunction}>{children}</button>
      </>
    );
  };