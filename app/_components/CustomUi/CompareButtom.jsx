"use client"

import { toast } from "sonner"
import CustomTooltip from "./Customtooltips";
import { Columns3 } from 'lucide-react';
import Link from "next/link";
import { useCompare } from "@/app/context/useCompare";

export default function CompareButton({property}) {
     
 
    const {setCompareData} = useCompare((state)=> ({
        setCompareData : state.setCompareData,
     }));
    
    const handleCompare = () => {
        let compare = JSON.parse(sessionStorage.getItem('compare')) || [];
        const alreadyExists = compare.some(comp => comp.propertyId === property.propertyId);
        if(compare.length < 3 && !alreadyExists ){
        compare.push(property);
        sessionStorage.setItem('compare', JSON.stringify(compare));
        setCompareData(compare);
        toast.success("Property added to compare", {
            action: <Link href="/compare" className="bg-white text-black p-3 rounded-lg" >See Compare</Link>,
            style: {
                background: 'rgb(84, 255, 176)',
              },
        });
        }else if(alreadyExists){
            toast.warning("Property is already added", {
                action: <Link href="/compare" className="bg-white text-black p-3 rounded-lg">See Compare</Link>,
                style: {
                    background: '#e4606d',
                    color: '#fff',
                  },
            });
        }else{
        toast.error('You can only compare 3 properties at a time', {
            action: <Link href="/compare" className="bg-white text-black p-3 rounded-lg" >See Compare</Link>,
            style: {
                background: '#e4606d',
                color: '#fff',
              },
        });
        }
    }
    return (
        <span onClick={handleCompare} className="bg-white px-5 pt-5 pb-3 rounded-full absolute top-3 right-3">
        <CustomTooltip content="Compare" tooltipIcon={<Columns3/>}/>
        </span>
    )
}