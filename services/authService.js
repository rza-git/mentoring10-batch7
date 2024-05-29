const {hashPassword, comparePassword} = require("../lib/bcrypt.js")
const authRepository = require("../repositories/authRepository.js")
const {generateToken} = require("../lib/jwt.js")

const register = async (params) => {

    const {email, password, role} = params;

    const encryptedPass = hashPassword(password);

    const registerParams = {
        email,
        password: encryptedPass,
        role
    }

    const data = await authRepository.register(registerParams)

    return data;
}

const login = async (params) => {

    const {email, password} = params;


    const loginParams = {
        email,
        password
    }

    const foundUser = await authRepository.login(loginParams);

    // Berhasil Login
    if(comparePassword(password, foundUser.password)) {
        
        // Generate AccessToken 

        const accessToken = generateToken({
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role
        })

        return accessToken;
    } else {
        // Gagal Login
        throw {name: "InvalidCredentials"}
    }

    // return data;
}

module.exports = {
    register,
    login
}