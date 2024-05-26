import Header from '../../components/features/landingpage/header';

function About() {
  return (
    <div>
      <Header />
      <div className='flex flex-col pt-16 gap-6'>
      <h1 className='text-3xl font-semibold'>درباره ما</h1>
      <p className='text-xl font-medium'>
        سایت مکعب در تاریخ 1402/12/01 افتتاح گردید . تا پیش از این از طریق
        سفارشات تلفنی خدمت رسان مشتریان عزیز بوده ایم .
      </p>
      <p className='text-xl font-medium'>در صورت نیاز به مشاوره با ما تماس بگیرید . </p>
      <p className='text-xl font-medium'>تلفن تماس : 09129274652</p>

      </div>
    </div>
  );
}

export default About;
