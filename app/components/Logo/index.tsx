import Image from "next/image";

const Logo = () =>{
    return (
        <Image
            src="/images/furniture-logo.png"
            alt="Logo Warm Wood Homes"
            height={150}
            width={150}
        />
    );
};

export default Logo;
