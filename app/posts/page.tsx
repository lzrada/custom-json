import toserbaData from "../../public/data/Toserba.json"; // Sesuaikan dengan path JSON
import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

interface IProduk {
  IdProduk: string;
  NamaProduk: string;
  Harga: string;
  Stok: number;
  Berat?: string;
  Merk: string;
  Deskripsi: string;
}

const ToserbaList = () => {
  const produk: IProduk[] = toserbaData["Alfamart"];

  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">DAFTAR PRODUK TOSERBA</h1>
      {produk.map((item) => (
        <CardList key={item.IdProduk}>
          <p>Nama Produk: {item.NamaProduk}</p>
          {item.Berat && <p>Berat: {item.Berat}</p>}
          <p>Harga: Rp {parseInt(item.Harga).toLocaleString()}</p>
          <p>Stok: {item.Stok}</p>
          <p>Merk: {item.Merk}</p>
          <p>Deskripsi: {item.Deskripsi}</p>
          <ViewUserButton userId={item.IdProduk} />
        </CardList>
      ))}
    </>
  );
};

export default ToserbaList;
