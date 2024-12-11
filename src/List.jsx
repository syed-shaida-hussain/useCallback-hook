/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

export const List = ({getItems}) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log("updating items")
        setItems(getItems())
    },[getItems])
  return items.map((item) => <div key={item}>{item}</div>)

}
