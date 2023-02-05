function addTwo(num: number): number {
    return num + 2;
    // return 'hello'
}

function getNameInUpperCase(name: string) {
    return name.toUpperCase();
}

function signUpUser(name: string, email: string, password: number) {
}
function login(name: string, email: string, password: number = 123) {
}

function consoleError(errMsg: string): void {
    console.log('error');
}

const heros = ['spiderman', 'thor', 'hulk'];

heros.map((hero): string => {
    return hero;
})

consoleError('error');
login('aryan', 'aryan@gmail.com')
signUpUser('aryan', 'aryan@gmail.com', 123);
getNameInUpperCase('aryan');
addTwo(2);

export { }