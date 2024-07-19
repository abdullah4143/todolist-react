import {  useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

const ListGroup = ({items , heading} : ListGroupProps) => {


  let [selecteditem, setSelecteditem] = useState(-1);

  
 return (
    <>
      <h1 className="h1">{heading}</h1>
      <ul className="list-group">
        {items.map((item,index)=>{
          return <li key={item} className={selecteditem === index ?
             "list-group-item active" : "list-group-item"}
              onClick={()=>setSelecteditem(index)}>
                {item}
                </li>
        })}
      </ul>
    </>
  );
};

export default ListGroup;
