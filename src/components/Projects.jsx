import React from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Card, CardBody, Image} from "@nextui-org/react";
import { projects } from '../constants';

const Projects = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return(
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (

        <Card
          key={project.name}
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mt-6"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4">
                <Image
                  alt="Album cover"
                  isZoomed
                  className="object-cover"
                  height={200}
                  shadow="md"
                  src={project.img}
                  width="100%"
                />
              </div>
    
              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    {/* <h3 className="font-semibold text-foreground/90">Daily Mix</h3> */}
                    <h1 className="text-large font-medium">{project.name}</h1>
                    <p className="text-small text-foreground/80">{project.description}</p>
                  </div>
                </div>
                <div className='flex flex-row row-span-4 gap-6 md:gap-4 mt-2'>
                    <Button color='primary'>GitHub</Button>
                    <Button onPress={onOpen} color='primary' variant='ghost'>More</Button>
                    <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>{project.more}</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  GitHub
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
      </div>
    );
    };

export default Projects