import Head from 'next/head'

import ConsistentHead from "../components/ConsistentHead";
import styles from '../styles/Home.module.css'

/**
 * @param props.href HTMLHyperlinkElementUtils
 * @param props.color Object
 * @param props.children JSX.ElementChildrenAttribute
 * @returns {JSX.Element}
 */
function HomeLink(props) {
    return (
        <a href={props.href} rel='noreferrer' target='_blank'
           className={`text-white font-display m-1 sm:m-4 ${styles.link} ${props.color}`}>{props.children}</a>
    )
}

/**
 * @param props.href HTMLHyperlinkElementUtils
 * @param props.children JSX.ElementChildrenAttribute
 * @returns {JSX.Element}
 */
function SmallLink(props) {
    return (
        <sub className='m-1'>
            <a className={`${styles.normalizedLinks} ${styles.newTabCursor} border-purple-400 border-b-2 font-mono`}
               rel='noreferrer' target='_blank'
               href={props.href}>
                {props.children}
            </a>
        </sub>
    )
}

/**
 * @description Get Age function from https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd (it's 2AM, i'm a bit tired to make my own function right now)
 * @returns {number}
 */
function getAge() {
    let today = new Date();
    let birthDate = new Date(2003, 12, 5);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bernardo Oliveira</title>
                <meta name="description" content="Personal Website"/>
                <ConsistentHead/>
            </Head>

            <div className='h-screen'>
                <div className="p-5 h-full">
                    <div className='bg-gray-800 h-full rounded-3xl'>
                        <div className='flex flex-col justify-center items-center h-full'>
                            <div className='text-center place-self-center text-white text-4xl font-bold'>
                                <h1 className={`${styles.titleGradient} font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white text-stroke-white`}>
                                    Bernardo Oliveira</h1>
                            </div>
                            <div className='m-4 grid grid-flow-col-dense grid-rows-4  sm:grid-rows-1'>
                                <HomeLink href='https://tumblr.helloimbernardo.ml'
                                          color={styles.blueLink}>&quot;blog&quot;</HomeLink>
                                <HomeLink href='https://open.spotify.com/user/bernardooliveirajb'
                                          color={styles.greenLink}>spotify</HomeLink>
                                <HomeLink href='https://instagram.com/helloimbernardo/'
                                          color={styles.pinkLink}>instagram</HomeLink>
                                <HomeLink href='https://github.com/helloimbernardo'
                                          color={styles.yellowLink}>github</HomeLink>
                            </div>
                            <div className="pl-6 pr-6 mt-4 justify-center text-white prose">
                                <p>
                                    Hello, I'm <b>Bernardo Oliveira</b>
                                    <SmallLink href='https://pronoun.is/he/:or/they'>(he/they)</SmallLink>
                                    , a {getAge()} year old dev student from Portugal.
                                </p>
                                <p>
                                    This website is <a
                                    href='https://github.com/helloimbernardo/personal-website'
                                    className={`${styles.normalizedLinks} border-orange-500 border-b-2 font-mono`}
                                    rel='noreferrer' target='_blank'>Open Source</a>
                                </p>
                            </div>
                            { /*
                            <a href="">
                                <svg className='mt-4 animate-bounce stroke-white stroke-2' width="24" height="24"
                                     xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                                    <path
                                        d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
                                </svg>
                            </a>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
