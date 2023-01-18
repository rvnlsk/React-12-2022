import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


function AdminHome() {
  return (
    <div>
      <Link to ="/admin/add-product">
      <Button variant="success">Add product</Button>
      </Link>
      <Link to ="/admin/maintain-products">
      <Button variant="primary">Maintain product</Button>
      </Link>
      <Link to ="/admin/maintain-categories">
        <Button variant="success">Maintain categories</Button>
      </Link>
      <Link to ="/admin/maintain-shops">
        <Button variant="primary">Maintain shops</Button>
      </Link>
    </div>
  )
}

export default AdminHome;