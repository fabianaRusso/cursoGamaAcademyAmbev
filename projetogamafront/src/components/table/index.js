import React, { useEffect, useState } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Button,
    Text
} from "@chakra-ui/react"
import './style.css'
import Modal from '../modal'
import axios from 'axios'
import { ImATeapot } from 'http-errors'
import { useToast } from "@chakra-ui/react"

export default function DashBoardTable() {


    const [open, setOpen] = useState(false);
    const [list, setList] = useState([]);
    const [att, setAtt] =useState(false)
    const toast = useToast()


    useEffect(() => {
        axios.get('http://localhost:3002/cadastro').then((res) => {
            console.log(res.data)
            setList(res.data)
       
        }).catch((error) => {
            console.log(error)
        })

    }, [att,open])


    function openModal() {
        console.log('troquei o estado')
        setOpen(!open)
    }


    function excluir(id){

        axios.delete('http://localhost:3002/cadastro/' + id).then((res) => {
            toast({
                title: "Deletado com sucesso!.",
                description: "By Fabina Russo.",
                status: "success",
                duration: 3000,
                isClosable: true,
            })
            
            
            setAtt(!att)
        }).catch((error) => {
            console.log(error)
        })

    }
    return (
        <>

            <div className="dashboard">
                <div className="header">
                    <div>
                        <Text fontSize="xl"> Projeto Gama  cadastro de currinculum</Text>

                    </div>
                    <div>
                        <Button colorScheme="green" onClick={() => { openModal() }}>+ Novo Curriculum</Button>
                    </div>
                </div>
                <Table variant="striped" colorScheme="teal">
                    <TableCaption>Projeto Fabiana Russo </TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Cargo pretendido</Th>
                            <Th>Data de nascimento</Th>
                            <Th>CPF</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {list ? list.map((item) => {

                            return (

                                <Tr>
                                    <Td>{item.nome}</Td>
                                    <Td>{item.profissao}</Td>
                                    <Td>{item.dataNascimento}</Td>
                                    <Td >{item.cpf}</Td>
                                    <Td><Button colorScheme="blue" mr='10px'>Editar</Button>
                                        <Button onClick={()=>{excluir(item._id)}} colorScheme="red">Remover</Button></Td>
                                </Tr>
                            )

                        })
                            : ''}
                    </Tbody>
                </Table>
            </div>
            <Modal open={open} closeModal={openModal} />
        </>
    )

}