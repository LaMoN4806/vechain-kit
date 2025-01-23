import { Button, Icon } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { useEcosystemShortcuts } from '@/hooks';

type Props = {
    name: string;
    image: string;
    url: string;
    description?: string;
};

export const ShortcutButton = ({ name, image, url, description }: Props) => {
    const { t } = useTranslation();
    const { isShortcut, addShortcut, removeShortcut } = useEcosystemShortcuts();
    const hasShortcut = isShortcut(url);

    return (
        <Button
            px={4}
            width="full"
            height="45px"
            variant="vechainKitSecondary"
            borderRadius="xl"
            onClick={() => {
                if (hasShortcut) {
                    removeShortcut(url);
                } else {
                    addShortcut({ name, image, url, description });
                }
            }}
            leftIcon={<Icon as={hasShortcut ? BsBookmarkFill : BsBookmark} />}
        >
            {hasShortcut ? t('Remove from shortcuts') : t('Add to shortcuts')}
        </Button>
    );
};
