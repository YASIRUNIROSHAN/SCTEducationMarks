import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewMark = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  console.log(id)
  useEffect(()=>{
    const fetchUsers = async()=>{
        axios.get(`http://localhost:8800/api/marks/${id}`).then(resp => {
        setData(resp.data)
        console.log(data)
    });
    };
    if(id.length > 0) fetchUsers()
  });
  return <div>ViewMark</div>;
};

export default ViewMark;
