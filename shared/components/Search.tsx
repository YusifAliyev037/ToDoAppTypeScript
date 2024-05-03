import React, { useState } from 'react';
import { Box, Input, Button, Checkbox, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/store/todoSlice';
import { ToDo } from './Cards';



function Search() {
  const [check, setCheck] = useState<boolean>(false);
  const [idcount, setIdcount] = useState<number>(201);
  const [title, setTitle] = useState<string>('');
  
  const dispatch = useDispatch();
  const toast = useToast(); 

  function handleIdcount() {
    setIdcount((prev) => prev + 1);
  }

  function handleAddTodo() {
    if (title.trim() === '') {
      toast({
        title: "To Do don't created.",
        description: "Title cannot be empty",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return;
    } else {
        const newTodo: ToDo = { id: idcount, title: title, completed: check }
      dispatch(addTodo(newTodo));
      handleIdcount();
      setTitle('');
      setCheck(false);
      toast({
        title: 'To Do created.',
        description: "To Do Added Successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  return (
    <Box px={40} py={10} display="flex" justifyContent="center" alignItems="center" gap={4}>
      <Input
        bgColor="white"
        placeholder="Add Title"
        width={80}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Checkbox borderRadius={6} p="7.5px" bgColor="white" isChecked={check} onChange={() => setCheck(!check)}>
        Completed
      </Checkbox>
      <Button type="button" onClick={handleAddTodo} colorScheme="blue">
        Add
      </Button>
    </Box>
  );
}

export default Search;
