export default function Prog(props) {


  return (
    <>
       <p className="card-text">
                    {props.name}
                 </p>
                <div className="">

                <progress style={{width: '100%'}} bgcolor={props.color} value={props.number} max="100" />
                  </div>  
  </>
  );
}
