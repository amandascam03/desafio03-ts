import { Box, Button, Center, Flex, Spacer, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from './AppContext'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

export const Header  = () => {
  const { isLoggedIn } = useContext(AppContext)
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return(
    <Flex backgroundColor='purple.200' padding='5px'>
      <Box>
        <Center>
          <Text fontSize='3xl'>Dio Bank</Text>
        </Center>
      </Box>
      {
        isLoggedIn && (
          <>
            <Spacer />
            <Button
            onClick={() => navigate('/infoconta')}
            >
              Informações
            </Button>
            <Spacer />
            <Button
              onClick={() => logout()}
            >
              Sair
            </Button>
          </>
        )
      }
    </Flex>
    
  )
}
