import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react';

export default function Accordions({ accordions = [] }) {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {accordions.map(accData => {
                return (
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    {accData.heading}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {accData.content}
                        </AccordionPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}