import axios from "axios"
import { api } from "../../actions/api"
import { useEffect, useState } from "react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'


export const StudentData = () => {
    const [data, setData] = useState([])

    const featchData = async () => {
        await axios.post(api + "/student")
            .then((res) => {
                setData(res?.data)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        featchData()
    }, [])

    return (
     <>
            <br/>
            <br/>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Bootcamp students data</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Registration number</Th>
                            <Th>Email</Th>
                            <Th>Password</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.map((val) => (
                                <Tr>
                                    <Td>{val.Name}</Td>
                                    <Td>{val.Registerno}</Td>
                                    <Td>{val.Email}</Td>
                                    <Td>{val.Password}</Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}