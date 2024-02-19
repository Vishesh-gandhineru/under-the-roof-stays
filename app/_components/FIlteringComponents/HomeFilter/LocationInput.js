"use client";
import { useEffect, useState } from "react";
import { Input } from "../../ui/input";
import { debounce } from "lodash"; 

export default function LocationInput() {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState({
    city: "",
    state: ""
  });

  const getLocationFromLocalStorage = () => {
    const storedLocation = localStorage.getItem("location");
    if (storedLocation) {
      const parsedLocation = JSON.parse(storedLocation);
      setSelectedLocation(parsedLocation);
      setLocation(`${parsedLocation.city} , ${parsedLocation.state}`)
    }
  };

  useEffect(() => {
    getLocationFromLocalStorage();
  }, []);

  const handleDropdown = (e) => {
    const updatedLocation = e.target.value;
    setLocation(updatedLocation);
    if (updatedLocation.length >= 3) {
      setOpen(true);
    } else if (updatedLocation === "") {
      setOpen(false);
    }
  };  

  const handleSuggestion = (e) => {
    setLocation(e.target.getAttribute("value"));
    setOpen(false);
    setSelectedLocation({
      city: e.target.getAttribute("city"),
      state: e.target.getAttribute("state")
    });
  };

  const getSuggestions = debounce(async (location) => {
    const url = `http://localhost:7000/api/filters/auto-filter/${location}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data.data);
    } catch (error) {
      console.log(error);
    }
  }, 300); 

  useEffect(() => {
    if (location.length >= 3) {
      getSuggestions(location); 
    }
  }, [location, getSuggestions]); 

  useEffect(()=>{
   if (selectedLocation.city != "" && selectedLocation.state != ""){
    localStorage.setItem("location", JSON.stringify(selectedLocation));
   }
  }, [selectedLocation])



  return (
    <div>
      <Input
        type="text"
        onChange={handleDropdown}
        placeholder="Enter Location"
        value={location}
      />
      {open && (
        <div className="bg-white w-[100%] z-[100] top-[60px] shadow-lg">
          {suggestions &&
            suggestions.map((suggestion, index) => {
              return (
                <div
                  key={index}
                  className="p-[10px] hover:bg-[#f2f2f2]"
                  city={suggestion.city}
                  state={suggestion.state}
                  value={[suggestion.city, suggestion.state]} 
                  onClick={handleSuggestion}
                >
                  {suggestion.city} , {suggestion.state}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
