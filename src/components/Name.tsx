interface NameProps{
    children: string;
    maxChars: number;
}
const Name = ({children , maxChars} : NameProps) => {
    const toggle = () => {
      
    }

   if( children.length <= maxChars ) return <p>children</p>;
    const text = children.substring(0,maxChars);
  return (
    <>
    <p>{text}</p>
    <button onClick={()=>toggle()}></button>
    </>
  )
}

export default Name