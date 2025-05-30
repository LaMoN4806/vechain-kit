import {
    Button,
    Container,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    ModalHeader,
    VStack,
} from '@chakra-ui/react';
import { useBalances, useWallet } from '@/hooks';
import {
    AssetButton,
    ModalBackButton,
    StickyHeaderContainer,
} from '@/components/common';
import { useVeChainKitConfig } from '@/providers';
import { useCustomTokens } from '@/hooks/api/wallet/useCustomTokens';
import { useTranslation } from 'react-i18next';
import { RiEdit2Line } from 'react-icons/ri';
import { AccountModalContentTypes } from '../../Types';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';

export type AssetsContentProps = {
    setCurrentContent: React.Dispatch<
        React.SetStateAction<AccountModalContentTypes>
    >;
};

export const AssetsContent = ({ setCurrentContent }: AssetsContentProps) => {
    const { account } = useWallet();
    const { tokens } = useBalances({ address: account?.address });
    const { allowCustomTokens, darkMode } = useVeChainKitConfig();
    const { customTokens } = useCustomTokens();
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');

    const handleTokenSelect = (token: {
        symbol: string;
        address: string;
        value: string;
        price: number;
    }) => {
        setCurrentContent({
            type: 'send-token',
            props: {
                setCurrentContent,
                isNavigatingFromMain: false,
                preselectedToken: {
                    symbol: token.symbol,
                    balance: token.value.toString(),
                    address: token.address,
                    numericBalance: token.value,
                    price: token.price,
                },
                onBack: () => setCurrentContent('assets'),
            },
        });
    };

    // Combine base tokens and custom tokens
    const allTokens = [
        ...Object.values(tokens),
        ...customTokens
            .filter((token) => !tokens[token.symbol]) // Only add custom tokens not in base tokens
            .map((token) => ({
                ...token,
                value: tokens[token.symbol]?.value ?? 0,
                price: tokens[token.symbol]?.price ?? 0,
            })),
    ].sort((a, b) => Number(b.value) * b.price - Number(a.value) * a.price);

    // Filter and sort tokens
    const filteredTokens = allTokens
        .filter(({ symbol }) =>
            symbol.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .sort((a, b) => {
            if (Number(a.value) > 0 !== Number(b.value) > 0) {
                return Number(b.value) > 0 ? 1 : -1;
            }
            return Number(b.value) * b.price - Number(a.value) * a.price;
        });

    return (
        <>
            <StickyHeaderContainer>
                <ModalHeader>{t('Assets')}</ModalHeader>
                <ModalBackButton onClick={() => setCurrentContent('main')} />
                <ModalCloseButton />
            </StickyHeaderContainer>

            <Container h={['540px', 'auto']} p={0}>
                <ModalBody>
                    <InputGroup size="lg">
                        <Input
                            placeholder="Search token"
                            bg={darkMode ? '#00000038' : 'gray.50'}
                            borderRadius="xl"
                            height="56px"
                            pl={12}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <InputLeftElement h="56px" w="56px" pl={4}>
                            <CiSearch
                                color={darkMode ? 'whiteAlpha.400' : 'gray.400'}
                            />
                        </InputLeftElement>
                    </InputGroup>

                    <VStack spacing={2} align="stretch" mt={2}>
                        {filteredTokens.map((token) => (
                            <AssetButton
                                key={token.address}
                                symbol={token.symbol}
                                amount={Number(token.value)}
                                usdValue={Number(token.value) * token.price}
                                isDisabled={Number(token.value) === 0}
                                onClick={() => handleTokenSelect(token)}
                            />
                        ))}
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    {allowCustomTokens && (
                        <Button
                            variant="vechainKitSecondary"
                            leftIcon={<Icon as={RiEdit2Line} boxSize={4} />}
                            onClick={() =>
                                setCurrentContent('add-custom-token')
                            }
                        >
                            {t('Manage Custom Tokens')}
                        </Button>
                    )}
                </ModalFooter>
            </Container>
        </>
    );
};
