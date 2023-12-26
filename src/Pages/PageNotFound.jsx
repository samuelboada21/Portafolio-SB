import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/");
    }
  return (
    <>
        <div> Page Not Found </div>
        <Button onClick={handleGoBack}>
            Go to Back
        </Button>
    </>
  )
}

export default PageNotFound