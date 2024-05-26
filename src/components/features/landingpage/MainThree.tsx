import { useState } from "react";
import SectionOne from "./mainthree/SectionOne";
import SectionThree from "./mainthree/SectionThree";
import SectionTwo from "./mainthree/SectionTwo";
import SectionFour from "./mainthree/SectionFour";
function MainThree() {
  const [page, setPage] = useState(1);
  if (page === 1)
    return (
      <SectionOne Onservices={() => setPage(2)} OnPrototyping={() => setPage(3)} onEcommerceintegration={() => setPage(4)}/>
    );
    if (page === 2) return <SectionTwo OnMainThree={() => setPage(1)}/>;
    if (page === 3) return <SectionThree OnMainThree={() => setPage(1)}/>;
    if (page === 4) return <SectionFour OnMainThree={() => setPage(1)} />;
}

export default MainThree;
