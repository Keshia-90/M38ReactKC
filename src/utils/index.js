//shorthand export async handles something outside app
export const signUp = async (username, email, password, setter) => {
    try {
        const response = await fetch ("http://localhost:5001/user", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        //could write out username,email,pword like thunderclient
        body: JSON.stringify({
            username,
            email,
            password,
        }),
        });
        const data = await response.json();
        setter(data.user.username);
    } catch (error) {
    console.log(error);
    }
};

export const logIn = async (username, password, setter) => {
    try {
        const response = await fetch ("http://localhost:5001/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const data = await response.json();
        setter(data.user.username);
    } catch (error) {
    console.log(error);
    }
};