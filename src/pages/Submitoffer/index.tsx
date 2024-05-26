import Button from "../../components/common/Button"
import Input from "../../components/common/Input"
import Header from "../../components/features/landingpage/header"

function Submitoffer() {
  return (
    <div>    <div>
    <Header />
    <section className="flex flex-col gap-5 pt-20">
      <h1 className='text-3xl'>سفارش شما</h1>
      <div className="flex flex-row">
        <div>حذف مدلهای انتخاب شده</div>
        <div>انتخاب همه</div>
      </div>
      <div className="flex flex-row">
        <p className="w-32">کد تخفیف دارید : </p>
        <Input></Input>
      </div>
      <h1>
          لطفا قبل از نهائی کردن سفارش خود اطلاعات خود را بررسی فرمائید .
        </h1>
        <h1>کد پستی</h1>
        <Input></Input>
        <h1>تلفن همراه</h1>
        <Input></Input>
        <Button>اتصال به درگاه پرداخت</Button>

    </section>
  </div>
</div>
  )
}

export default Submitoffer