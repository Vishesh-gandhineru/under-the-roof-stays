
const SelectedProperty = ({property}) => {

   
  return (
    <div className="space-y-2">
    <div className="flex items-center gap-4">
      <div>
        <p className="font-medium">{property.general.name}</p>       
        <p className="text-gray-500">{property.general.address}</p>
        <p className="text-gray-500">{property.general.city} ,{property.general.region} , {property.general.state}</p>
      </div>
      <p className="ml-auto font-medium">{property.rates[0]?.baseAmount} {property.rates[0]?.currency}</p>
    </div>
  </div>
  )
}

export default SelectedProperty