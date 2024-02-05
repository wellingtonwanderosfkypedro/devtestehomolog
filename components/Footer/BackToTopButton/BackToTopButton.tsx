import Image from 'next/image'
import butonTop from "@/assets/images/footer/butonTop.svg";

const BackToTopButton: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className='absolute right-[-10px] top-[-60px] tablet:right-[10px] laptop:right-[90px]'
            onClick={scrollToTop}
        >
            <Image
                src={butonTop}
                width={44}
                height={44}
                alt="Button top"
            />
        </button>
    );
};

export default BackToTopButton;
