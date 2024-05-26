// import Button from '../../../components/common/Button/index';
// import first from '../../../assets/images/fast-charge.png';
// import guarantee from '../../../assets/images/guarantee.png';
// import hq from '../../../assets/images/high-quality (1).png';

import { useState } from 'react';
import SectionOne from './mainone/SectionOne';
import SectionTwo from './mainone/SectionTwo';
import SectionThree from './mainone/SectionThree';
// import SectionThree from "./mainone/SectionThree";

function MainOne() {
  const [page, setPage] = useState(1);
  if (page === 1)
    return (
      <SectionOne Onqoute={() => setPage(2)} Onhowwork={() => setPage(3)} />
    );
  if (page === 2) return <SectionTwo Onhowwork={() => setPage(3)}  />;
  if (page === 3) return <SectionThree Onqoute={() => setPage(2)} Onmainone={() => setPage(1)}  />;
}

export default MainOne;
