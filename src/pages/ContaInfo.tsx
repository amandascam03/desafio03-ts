import { Button, Center, Spinner, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { api } from "../api";
import CardInfo from "../components/CardInfo";

interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const ContaInfo = () => {
  const [userData, setUserData] = useState<null | UserData>();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  !isLoggedIn && navigate("/");

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };

    getData();
  }, []);

  return (
    <>
      {userData === undefined || userData === null ? (
        <Center>
          <Spinner size="xl" color="white" />
        </Center>
      ) : (
        <>
          <Text fontSize="3xl" fontWeight="bold">
            Informações da conta
          </Text>
          <CardInfo mainContent="Nome" content={`${userData.name}`} />
          <CardInfo mainContent="Email" content={`${userData.email}`} />
          <Link to="/conta/1">
            <Button marginTop={"5px"}
            >
              Voltar
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default ContaInfo;
