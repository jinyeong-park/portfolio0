import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Hello!  I'm Jenny.
                <br className="hidden lg:inline-block"/>
                
            </h1>
            <p className="mb-8 leading-relaxed">

            I’m a Software Engineer and a web developer who has a lot of interests in UI/UX.
                I’m particularly interested in connecting people, making life easier, more productive and enjoyable
                since my previous jobs let me travelled a lot and kept moving abroad so I always needed to adapt a new environment and people.
                I am passionate about empowering and inspiring like-minded peers and also love social interactions.
                I am very passionate about better understanding of computers and using this knowledge to solve real-world problems.
            </p>
            <div className="flex justify-center">
                {/* <Link href=""> */}
                    <a className="btn-project tracking-[5px]" rel="noreferrer"
                  target="_blank" href='https://www.linkedin.com/in/jennypark7/overlay/1635516809162/single-media-viewer/?profileId=ACoAABdhSPcBubWTc6y_e1exWoYAh2rRoy6HaWc'>
                        DOWNLOAD RESUME
                    </a>
                {/* </Link> */}
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
    );
}
