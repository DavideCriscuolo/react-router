import { Link } from "react-router-dom";
export default function JumboC() {
  return (
    <>
      <div className="p-5 m-4  rounded-3 bg-jumbo ">
        <div className="container-fluid py-5">
          <h1>🚀 RIVIVI IL TUO STILE! 🚀</h1>
          <p className="col-md-8 fs-4">
            Tutto ciò di cui hai bisogno per esprimere il tuo stile personale è
            qui. Scopri le ultime tendenze, i prodotti di alta qualità e le
            offerte esclusive.
          </p>
          <p>
            🔥 Offerta lancio! Ricevi il 10% di sconto sul tuo primo ordine! 🔥
          </p>
          <Link to="/Products">➡️ Scopri il nostro mondo!</Link>
        </div>
      </div>
    </>
  );
}
