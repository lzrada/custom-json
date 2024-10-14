"use client";

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId === "214") {
      alert("Ini adalah gula pilihan");
    } else if (userId === "222") {
      alert("Ini adalah Beras super duper");
    } else {
      alert("Produk tidak dikenali.");
    }
  };

  return (
    <>
      <button onClick={handleClick}>Lihat Produk</button>
    </>
  );
};

export default ViewUserButton;
