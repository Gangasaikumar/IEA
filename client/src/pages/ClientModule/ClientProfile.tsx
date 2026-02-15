import { useParams } from "react-router";

const ClientProfile = () => {
  const { id } = useParams();
  return <div>Client id={id}</div>;
};

export default ClientProfile;
