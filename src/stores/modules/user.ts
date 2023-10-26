import { defineStore } from "pinia";
import piniaPersistConfig from "@/config/piniaPersist";
import type { Login } from "@/api/interface/login";

export const useUserStore = defineStore({
    id: "user",
    state: (): Omit<Login.ResLoginData, "refreshToken" | "accessTTL" | "refreshTTL"> => ({
        accessToken: "",
        userInfo: {
            id: "",
            firstname: "",
            lastname: "",
            email: "",
            company_id: "",
            org1: "",
            group: "",
            position: "",
            level: "",
            company_name: "",
        },
        companyId: 0,
    }),
    getters: {},
    actions: {
        // Set Token
        setToken(token: string) {
            this.accessToken = token;
        },
        // Set setUserInfo
        setUserInfo(userInfo: Login.UserInfo) {
            this.userInfo = userInfo;
        },
        setCompanyId(id: number) {
            this.companyId = id;
        },
        setUserState(...args: ObjToKeyValArray<Omit<Login.ResLoginData, "refreshToken" | "accessTTL" | "refreshTTL">>) {
            this.$patch({ [args[0]]: args[1] });
        },
    },
    persist: piniaPersistConfig("user"),
});
