import React from "react";
import {Link} from 'react-router-dom'
function List(props) {
  const list = props.list;
  return (
    <li  className="bg-white rounded-xl my-10px p-10px">
      <Link to="#" className="text-light-gray text-sm">{list}</Link>
    </li>
  );
}

export default List;
