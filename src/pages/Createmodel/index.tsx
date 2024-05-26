// import {FcGoogle} from "react-icons/fc";
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'


export default function Createmodel() {

  const schema = object({
    material: string().required(),
    density: string().required(),
    thickness: string().required(),
    width: number().required(),
    height: number().required(),
    count: number().required(),
  });

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <main className="max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold">محصول خود را زنده کنید</h1>
        <p className="text-sm font-normal mt-3">
          مدل سه بعدی خود را آپلود کنید و متریال، رنگ و پایان خود را انتخاب
          کنید. کارشناسان پرینت سه بعدی ما محصول شما را تولید کرده و درب منزل
          شما تحویل خواهند داد .
        </p>
        <form
          className="mt-10 flex flex-col gap-5"
        // onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-row gap-5">
            <label htmlFor="material">متریال</label>
            <select {...register('material')}>
              <option>انتخاب کنید</option>
              <option>PLA</option>
              <option>ABS</option>
              <option>TPU</option>
            </select>
          </div>
          {errors.material ? (
            <p className="text-red-500 text-xs">{errors.material.message}</p>
          ) : null}


          <div className="flex flex-row gap-5">
            <label htmlFor="count">تعداد</label>
            <Input type="number" placeholder="تعداد"
              {...register('count')} />
          </div>
          {errors.count ? (
            <p className="text-red-500 text-xs">{errors.count.message}</p>
          ) : null}


          <div className="flex flex-row gap-5">
            <label htmlFor="count">فایل</label>
            <div {...getRootProps()} className='dashed-border p-10'>
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>فایل خود را اینجا رها کنید ...</p> :
                  <p>فایل خود را اینجا رها کرده و یا کلیک کنید.</p>
              }
            </div>
          </div>
          {errors.count ? (
            <p className="text-red-500 text-xs">{errors.count.message}</p>
          ) : null}


          <Button onClick={(e) => { console.log(e) }} type="submit" className="mt-5">
            مدل سه بعدی خود را ثبت کنید
          </Button>
        </form>
      </div>
      {/* <div className=" flex flex-col items-center justify-center gap-3 mt-24">
        <Logo />
        <h3 className="text-center text-2xl font-medium">
          بارگذاری فایل با فرمت STL,OBJ (حجم کمتر از ۵۰ مگابایت)
        </h3>
        <Button type="submit" className="mt-5">
          بارگزاری کنید
        </Button>
      </div> */}
    </main>
  );
}
