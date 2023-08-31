import { studentAPI } from "./apis";

export const getUserById = async (userId) => {
    const userData  = await studentAPI.get(`/user`)
    console.log("🚀 ~ file: uService.ts:6 ~ getUserById ~ UserData:", userData)
    return userData.data;
}
