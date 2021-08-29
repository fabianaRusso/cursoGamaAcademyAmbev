import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { PhoneIcon } from '@chakra-ui/icons'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import { useToast } from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Flex,
    Input,
    Text,
    Select,
    InputGroup,
    InputLeftElement,
    Box
} from "@chakra-ui/react"

export default function BasicUsage(props) {

    const [startDate, setStartDate] = useState(new Date());
    const toast = useToast()
    const [form, setForm] = useState({
        nome: '',
        profissao:'',
        dataNascimento: startDate,
        estadoCivil:'',
        sexo: '',
        endereco: '',
        bairro:'',
        cidade:'',
        cep:'',
        telefone1: '',
        telefone2: '',
        celular: '',
        contato: '',
        email: '',
        identidade: '',
        cpf: '',
        veiculo: '',
        habilitacao: ''
    })

    function onchage(e) {
        const { name, value } = e.target;
        form[name] = value
        console.log('FORM ATT', form)
        setForm(form)
    }


    function SendForm() {
        axios.post('http://localhost:3002/cadastro', form).then((res) => {
            console.log('RESPONSE', res.data)

            if (res.data.error) {
                toast({
                    title: "Erro na requisição.",
                    description: "By Fabina Russo.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                })
            } else {
                toast({
                    title: "Curriculum Criado.",
                    description: "By Fabina Russo.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                })
                props.closeModal()
            }
        }).catch((error) => {

            console.log(error)
        })

    }
    
    return (
        <>

            <Modal isOpen={props.open} onClose={props.closeModal} >
                <ModalOverlay />
                <ModalContent minHeight='600px' minWidth='800px'>
                    <ModalHeader>Cadastro de Curriculo</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection="row">
                            <Flex flexDirection="column" alignItems='start' width='450px'>
                                <Text fontSize="md" marginBottom='10px'>Nome Completo</Text>
                                <Input name='nome' onChange={(e) => { onchage(e) }} placeholder="Nome Completo" backgroundColor='#e5e4e422'></Input>
                            </Flex>
                            <Flex flexDirection="column" alignItems='start' ml='30px' width='300px'>
                                <Text fontSize="md" marginBottom='10px'>Cargo Pretendido</Text>
                                <Input name='profissao' onChange={(e) => { onchage(e) }} placeholder="Cargo Pretendido" backgroundColor='#e5e4e422'></Input>
                            </Flex>
                        </Flex>

                        <Flex flexDirection="row" margin='30px'>
                            <Flex flexDirection="column" alignItems='start' width='450px'>
                                <Text fontSize="md" marginBottom='10px'>Data de Nascimento</Text>
                                <DatePicker name='dataNascimento' onChange={(e) => { setStartDate(e) }} selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Flex>
                            <Flex flexDirection="column" alignItems='start' ml='30px' width='300px'>
                                <Text fontSize="md" marginBottom='10px'>Estado Civil</Text>
                                <Select name='estadoCivil' onChange={(e) => { onchage(e) }} placeholder="Estadi Civil" backgroundColor='#e5e4e422'>
                                    <option value="Casado">Casado</option>
                                    <option value="Solteiro">Solteiro</option>
                                    <option value="Viuvo">Viuvo</option>
                                </Select>
                            </Flex>
                            <Flex flexDirection="column" alignItems='start' ml='30px' width='300px'>
                                <Text fontSize="md" marginBottom='10px'>Sexo</Text>
                                <Select name='sexo' onChange={(e) => { onchage(e) }} placeholder="Sexo" backgroundColor='#e5e4e422'>
                                    <option value="Maculino">Maculino</option>
                                    <option value="Femino">Femino</option>
                                    <option value="Não Declarar">Não Declarar</option>
                                </Select>
                            </Flex>
                        </Flex>

                        <Flex flexDirection='row' marginTop='30px'>
                            <Flex flexDirection='column' alignItems='start'>
                                <Text fontSize="md" marginBottom="10px">Endereço</Text>
                                <Input name='endereco' onChange={(e) => { onchage(e) }} placeholder='Endereço' alignItems='start' width='450px' backgroundColor='#e5e4e422'></Input>
                            </Flex>

                            <Flex flexDirection='column' alignItems='start' ml='30px'>
                                <Text fontSize="md" marginBottom="10px">Bairro</Text>
                                <Input name='bairro' onChange={(e) => { onchage(e) }} placeholder='Bairro' alignItems='start' width='250px' backgroundColor='#e5e4e422'></Input>
                            </Flex>
                        </Flex>

                        <Flex flexDirection='row' marginTop='30px'>
                            <Flex flexDirection='column' alignItems='start'>
                                <Text fontSize="md" marginBottom="10px">Cidade</Text>
                                <Input name='cidade' onChange={(e) => { onchage(e) }} placeholder='Cidade' alignItems='start' width='200px' backgroundColor='#e5e4e422'></Input>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px'>
                                <Text fontSize="md" marginBottom="10px">CEP</Text>
                                <Input name='cep' onChange={(e) => { onchage(e) }} placeholder='CEP' alignItems='start' width='130px' backgroundColor='#e5e4e422'></Input>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px'>
                                <Text fontSize="md" marginBottom="10px">Telefone Fixo 1</Text>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<PhoneIcon color="gray.300" />}
                                    />
                                    <Input name='telefone1' onChange={(e) => { onchage(e) }} type="tel" placeholder="Telefone Fixo 1" backgroundColor='#e5e4e422'/>
                                </InputGroup>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px'>
                                <Text fontSize="md" marginBottom="10px">Telefone Fixo 2</Text>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<PhoneIcon color="gray.300" />}
                                    />
                                    <Input name='telefone2' onChange={(e) => { onchage(e) }} type="tel" placeholder="Telefone Fixo 2" backgroundColor='#e5e4e422'/>
                                </InputGroup>
                            </Flex>
                        </Flex>

                        <Flex flexDirection='row' marginTop='30px'>

                            <Flex flexDirection='column' alignItems='start' >
                                <Text fontSize="md" marginBottom="10px">Celular</Text>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<PhoneIcon color="gray.300" />}
                                    />
                                    <Input name='celular' onChange={(e) => { onchage(e) }} type="tel" placeholder="Celular" backgroundColor='#e5e4e422'/>
                                </InputGroup>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px'>
                                <Text fontSize="md" marginBottom="10px">Contato</Text>
                                <Input name='contato' onChange={(e) => { onchage(e) }} placeholder='Contato' alignItems='start' width='150px' backgroundColor='#e5e4e422'></Input>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px'>
                                <Text fontSize="md" marginBottom="10px">E-mail</Text>
                                <Input name='email' onChange={(e) => { onchage(e) }} placeholder='E-mail' alignItems='start' width='320px' backgroundColor='#e5e4e422'></Input>
                            </Flex>
                        </Flex>

                        <Flex flexDirection='row' marginTop='30px'>
                            <Flex flexDirection='column' alignItems='start'>
                                <Text fontSize="md" marginBottom="10px">Identidade</Text>
                                <Input name='identidade' onChange={(e) => { onchage(e) }} placeholder='Identidade' backgroundColor='#e5e4e422'></Input>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px' width='300px'>
                                <Text fontSize="md" marginBottom="10px">CPF</Text>
                                <Input name='cpf' onChange={(e) => { onchage(e) }} placeholder='CPF' backgroundColor='#e5e4e422'></Input>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px' width='300px'>
                                <Text fontSize="md" marginBottom="10px">Possui veiculo</Text>
                                <Select name='veiculo' onChange={(e) => { onchage(e) }} placeholder="Selecione uma Opção" backgroundColor='#e5e4e422'>
                                    <option value="Possui">Possui</option>
                                    <option value="Não Possui">Não Possui</option>
                                </Select>
                            </Flex>
                            <Flex flexDirection='column' alignItems='start' ml='30px' width='300px'>
                                <Text fontSize="md" marginBottom="10px">Habilitação</Text>
                                <Select name='habilitacao' onChange={(e) => { onchage(e) }} placeholder="Selecione uma Opção" backgroundColor='#e5e4e422'>
                                    <option value="Possui">Possui</option>
                                    <option value="Não Possui">Não Possui</option>
                                </Select>
                            </Flex>
                        </Flex>

                    </ModalBody>

                    <ModalFooter>

                        <Button colorScheme="blue" onClick={() => { SendForm() }} mr={3} >
                            Salvar
                        </Button>

                        <Button colorScheme="red" onClick={props.closeModal}>Cancelar</Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}