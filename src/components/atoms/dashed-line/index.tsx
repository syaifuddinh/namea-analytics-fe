import { useState } from "react"


const amount = 10

export default function DashedLine({ 
}) {
  const [dashes, setDashes] = useState(() => {
    const response = []
    let i = 0
    for(i = 0;i < amount; i++) 
      response.push(i)

    return response
  }) 

  return (
    <div
    	className={`dashed-line flex flex-col gap-1`}
    >
        { dashes.map(item => (
            <div key={item} className="dashed-line_item w-[1.5px] h-[8px] bg-[var(--Success3)]"></div>
        )) }
    </div>
  )
}
