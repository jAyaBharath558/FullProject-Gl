import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          position: "fixed",
          padding: "10px",
          textAlign: "center",
          bottom: "0",
          width: "100%",
        }}
      >
        @Copyrights reserved
      </footer>
    </>
  );
};

export default Footer;
