'use client';

import { Box, VStack, Text, Icon, useColorMode } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface FeatureCardProps {
    title: string;
    description: React.ReactNode;
    icon: IconType;
    highlight?: boolean;
    content: () => void;
    disabled?: boolean;
}

export function FeatureCard({
    title,
    description,
    icon,
    highlight,
    content,
    disabled = false,
}: FeatureCardProps) {
    const { colorMode } = useColorMode();

    return (
        <Box
            onClick={(e) => {
                if (disabled) {
                    e.preventDefault();
                    return;
                }
                content();
            }}
            p={4}
            borderRadius="md"
            borderWidth="1px"
            backdropFilter="blur(10px)"
            borderColor={highlight ? 'blue.500' : 'transparent'}
            bg={colorMode === 'light' ? 'gray.50' : 'whiteAlpha.50'}
            _hover={{
                transform: disabled ? 'translateY(0)' : 'translateY(-2px)',
                transition: 'transform 0.2s',
                bg: colorMode === 'light' ? 'gray.100' : 'whiteAlpha.100',
            }}
            cursor={disabled ? 'not-allowed' : 'pointer'}
            height="full"
        >
            <VStack spacing={3} align="start">
                <Icon
                    as={icon}
                    boxSize={6}
                    color={colorMode === 'light' ? 'blue.500' : 'blue.300'}
                />
                <Text fontWeight="bold">{title}</Text>
                <Text
                    fontSize="sm"
                    color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                >
                    {description}
                </Text>
                {disabled && (
                    <Text fontSize="xs" color="gray.500">
                        Only available for social login users.
                    </Text>
                )}
            </VStack>
        </Box>
    );
}
