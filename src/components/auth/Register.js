import React, {useEffect, useState} from 'react';
import {Box, Button, Image, Input, Text} from "@chakra-ui/react";
import logo from "../Assets/Logo.svg"

const Register = (props) => {

        let initialData={
                firstname: "", lastname: "", password: ""
        }

        const[inputData, setInputData] = useState(initialData)

        useEffect(
            () => {
                    console.log("Fetching books api")
                    return () => {
                            console.log("Done fetching books api")
                    }
            }, [inputData])

        function handleInput(e){
                let data = {
                        ...inputData, [e.target.name]: e.target.value
                }
                setInputData(data)
        }
        function RegisterUser(){
                console.log(inputData)
        }

        const inputFields = [
                {name:"firstname",label: "FirstName", placeholder: "Enter your firstname"},
                {name:"lastname", label: "LastName", placeholder: "Enter lastname"},
                {name:"email", label: "Email", placeholder: "Enter your email"},
                {name:"password", label: "Password", placeholder: "Enter Password"},
                {name:"confirmPassword", label: "Confirm Password", placeholder: "Confirm your Password"},
        ]

    return (
        <Box position={"absolute"} width="400px" height= "550px" bg={"white"} borderRadius="10px"
            marginLeft={"600px"} top={"130px"} justifyContent={"center"}>
            <Image src={logo} alt={"Logo"} marginLeft={"170px"} marginTop={"20px"}/>
            <Box paddingLeft={"50px"} paddingTop={"70px"} marginBottom={"80px"}>
            <Box>
            <Text paddingTop={"20px"}>Firstname</Text>
            <Input width="300px" height="30px" borderRadius={"10px"}/>
            </Box>
            <Box>
            <Text>Lastname</Text>
            <Input width="300px" height="30px" borderRadius={"10px"}/>
            </Box>
            <Box>
            <Text>Password</Text>
            <Input width="300px" height="30px" borderRadius={"10px"}/>
            </Box>
            <Button name={"Register"} onClick={RegisterUser} color={"white"} bg={"#7FD5FA"} marginTop={"50px"} marginLeft={"35px"} border={"groove"}
                    width="250px" height="40px" borderRadius={"10px"}  borderColor={"#7FD5FA"}>Done</Button>
            </Box>

        </Box>
    );
};

export default Register;