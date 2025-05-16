import type { FC } from "react";
import { useColorModeValue } from "./color-mode";

const ImageIcon: FC<{ src: string, size?: string, whiten?: boolean }> = ({ src, size = "1em", whiten = true }) => {
    const baseLogoStyle = {
        width: size,
        height: size,
        maxHeight: '1em',
        margin: 0,
        padding: 0,
        marginRight: `calc(-1em + ${size})`,
        verticalAlign: 'middle',
        display: 'inline-block',
        overflow: 'hidden'
    }

    const lightLogoStyle = {
        ...baseLogoStyle,
        background: `url("${src}") no-repeat center`,
        backgroundSize: 'cover'
    }

    const logoStyle = whiten
        ? useColorModeValue(
            {
                ...lightLogoStyle
            },
            {
                ...baseLogoStyle,
                background: 'none',
                backgroundColor: 'currentColor',
                WebkitMaskImage: `url("${src}")`,
                maskImage: `url("${src}")`,
                maskRepeat: 'no-repeat',
                maskSize: 'contain'
            }
        )
        : lightLogoStyle;

    return (
        <i style={logoStyle} />
    )
};

export default ImageIcon;