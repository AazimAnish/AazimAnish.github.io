import React from 'react'
import {Input, Card, Textarea, Button, Link} from "@nextui-org/react";
import { SunIcon } from '../assets';

const Contact = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-6"> 
      <Card
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mt-6 p-6 gap-y-2"
          shadow="sm"
        >
    <div className='flex flex-col mt-4 gap-2'>
        
    <Input type='name' variant='bordered' label="Name" ></Input>
    <Input type='email' variant='bordered' label="Email" ></Input>
    <Textarea
          variant='bordered'
          label="Description"
          placeholder="Enter your description"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
    <Button color='primary'>Submit</Button>
    </div>

    <div className="flex flex-col mt-4 gap-2">

      <Button color="primary" variant="bordered" startContent={<SunIcon/>} radius='full' href="https://github.com/nextui-org/nextui" as={Link}>
        Telegram
      </Button>  

    </div>
    </Card>
    </div>
  )
}

export default Contact