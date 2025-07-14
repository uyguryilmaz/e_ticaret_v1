import React from 'react'

const ServiceItem = ({icon, baslik, yazi}) => {
  return (
    <div className="flex items-center gap-5 p-3 ">
        <img src={`/img/${icon}`} className="xl:scale-110" />
        <div className="text-white">
          <h3 className="font-bold xl:text-xl">{baslik}</h3>
          <p className="text-sm xl:text-base">{yazi}</p>
        </div>
      </div>
  )
}

export default ServiceItem