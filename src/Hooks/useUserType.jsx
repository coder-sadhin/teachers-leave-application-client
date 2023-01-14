import { useState, useEffect } from "react";
import { serverApi } from "../ServerApi/ServerApi";

const useUserType = email => {

    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const [isSubSuperAdmin, setIsSubSuperAdmin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${serverApi}/checkuser/type?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data === "superAdmin") {
                        setIsSuperAdmin(true)
                        setUserLoading(false)
                    }
                    else if (data === "subSuperAdmin") {
                        setIsSubSuperAdmin(true)
                        setUserLoading(false)
                    }
                    else if (data === "admin") {
                        setIsAdmin(true)
                        setUserLoading(false)
                    }
                    else {
                        setIsUser(true)
                        setUserLoading(false)
                    }
                });
        }
    }, [email])
    return [isSuperAdmin, isSubSuperAdmin, isAdmin, isUser, userLoading];
}

export default useUserType;