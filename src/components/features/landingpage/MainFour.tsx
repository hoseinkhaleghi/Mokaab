import { Link } from "react-router-dom"
import Button from "../../common/Button"

function MainFour() {
  return (
    <div >      <section className="flex flex-col  items-center p-4">
    <h1 className="text-xl px-24 justify-center font-bold">
      شما این ایده را دارید که ما آن را به واقعیت تبدیل می کنیم
    </h1>
    <p className="p-4">
      ما با CADmore همکاری کرده ایم تا خدمات طراحی آسان و در دسترس را به شما
      ارائه دهیم. مهم نیست که از ابتدا شروع می کنید یا برای یک پروژه موجود
      به کمک نیاز دارید، CADmore می تواند در هر درخواست طراحی به شما کمک
      کند. پروژه طراحی خود را از اینجا شروع کنید
    </p>
    <Link to="/dashboard/createmodel" className="flex flex-row justify-start">
    <Button className="min-w-[95%] h-8 bg-red">
        <span className="text-sm font-bold">پروژه طراحی خود را از اینجا شروع کنید</span>
    </Button>
    </Link>

  </section>
</div>
  )
}

export default MainFour