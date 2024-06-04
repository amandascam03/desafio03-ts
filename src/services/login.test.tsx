import { login } from "./login"

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPass = "123456"
    it('Deve exibir um alert com boas vindas caso o email e senha sejam válidos', async() => {
        const response = await login(mockEmail, mockPass)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com', mockPass)
        expect(response).toBeFalsy()
    })

    it('Deve exibir um erro caso a senha seja inválida', async() => {
        const response = await login(mockEmail, "654321")
        expect(response).toBeFalsy()
    })

    it("Deve exibir um erro caso ambos email e senha sejam inválidos", async() => {
        const response = await login("email@invalido.com", "654321")
        expect(response).toBeFalsy()
    })

})