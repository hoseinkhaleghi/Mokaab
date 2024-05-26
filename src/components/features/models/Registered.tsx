import classNames from 'classnames'


function Registered({ models, check }: any) {
  return (
    <div>          <div className={classNames(`lg:w-full  flex flex-col md:px-4 pt-3`)}>
      {models.map((item: any) => (
        <div
          className={classNames(
            `hover:bg-gray-300  cursor-pointer mx-2   
     rounded-lg flex flex-col py-2 border-b-2`,
          )}
        >
          <div className="flex flex-col ">
            <div className="flex flex-row px-4 justify-between">
              <h1>هزینه خلق اثر :{item.price}</h1>
              {!check ? (
                <input type="checkbox" />
              ) : (
                <input type="checkbox" checked />
              )}
            </div>
            <div className="px-4">
              <h4>{item.type}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Registered