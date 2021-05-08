import bcrypt from "bcrypt";

const saltRounds = 12
const plainTextPassword = "Napster";
const hashedPassword = "$2b$12$vjKvF6DauFNev8vxxaC4Wu1qSl3r5Qc021/W8idZR0MvX.6bfSfNa";

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});

bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    console.log("Is the password correct?", result);
});

export default {}