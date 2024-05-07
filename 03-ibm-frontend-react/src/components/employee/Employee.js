
import EmpList from "./EmpList";
import AddEmp from "./AddEmployee";
import UpdateEmployee from "./updateEmp";
import DeleteEmp from "./deleteEmp";
import GetEmpById from "./getEmpById";


const Employee = () => {

    return (
        <>
            <h1>Employee Component</h1>
            <AddEmp />
            <br/>
            <EmpList />
            <br/>
            <UpdateEmployee />
            <br></br>
            <DeleteEmp/>
            <br></br>
            <GetEmpById/>
        </>
    );
};

export default Employee;
// const Employee = () => {
//     const [name , setName] = useState();
//     const handleNameInput = (evt) => {
//         console.log(evt.target.value);
//         //name = evt.target.value;
//         setName(evt.target.value);
//     }
//     return(
//         <>
//             <h1>Employee Component</h1>
//             {/* <p>Employee name is {name}</p>
//             <form>
//                 <input type="text" name="name" value={name} onChange={handleNameInput}></input>
//             </form> */}
//             <EmpList/>
//             <AddEmp/>
//         </>
//     )
// }

// export default Employee;