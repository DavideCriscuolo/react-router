export default function FooterC() {
  const menuFooter = [
    {
      id: 1,
      title: "Informativa sulla Privacy",
    },
    {
      id: 2,
      title: "termini e Condizioni",
    },
    {
      id: 3,
      title: "Spedizioni e Resi",
    },
    {
      id: 4,
      title: "Contatti",
    },
  ];

  return (
    <>
      <footer className="p-5">
        <div className="container">
          <div className="row">
            <div className="col">
              {menuFooter.map((link) => {
                return (
                  <ul className="list-unstyled">
                    <li>
                      {" "}
                      <a href="" key={link.id}>
                        {link.title}
                      </a>
                    </li>
                  </ul>
                );
              })}
            </div>
            <div className="col">
              <p>social</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
