"use client"

import { toast } from "sonner"
import CustomTooltip from "./Customtooltips";
import { Columns3 } from 'lucide-react';
import Link from "next/link";

export default function CompareButton({property}) {
    const handleCompare = () => {
        let compare = JSON.parse(sessionStorage.getItem('compare')) || [];
        if(compare.length < 3){
        compare.push(property);
        sessionStorage.setItem('compare', JSON.stringify(compare));
        toast.success('Property added to compare', {
            action: <Link href="/compare">See Compare</Link>
        });
        }else{
        toast.error('You can only compare 3 properties at a time', {
            action: <Link href="/compare">See Compare</Link>
        });
        }
    }
    return (
        <span onClick={handleCompare} className="bg-white px-5 pt-5 pb-3 rounded-full absolute top-3 right-3">
        <CustomTooltip content="Compare" tooltipIcon={<Columns3/>}/>
        </span>
    )
}