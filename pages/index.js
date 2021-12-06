import Head from "next/head";
import {useState} from "react";

import ConsistentHead from "../components/ConsistentHead";
import styles from "../styles/Home.module.css";

/**
 * @param props.href HTMLHyperlinkElementUtils
 * @param props.color Object
 * @param props.children JSX.ElementChildrenAttribute
 * @returns {JSX.Element}
 */
function HomeLink(props) {
    return (
        <a
            href={props.href}
            rel="noreferrer"
            target="_blank"
            className={`text-white font-display m-1 sm:m-4 ${styles.link} ${props.color}`}
        >
            {props.children}
        </a>
    );
}

/**
 * @param props.href HTMLHyperlinkElementUtils
 * @param props.children JSX.ElementChildrenAttribute
 * @returns {JSX.Element}
 */
function SmallLink(props) {
    return (
        <sub className="m-1">
            <a
                className={`${styles.normalizedLinks} ${styles.newTabCursor} border-purple-400 border-b-2 font-mono`}
                rel="noreferrer"
                target="_blank"
                href={props.href}
            >
                {props.children}
            </a>
        </sub>
    );
}



export default function Home() {
    const [age, setAge] = useState();
    const [milliseconds, setMilliseconds] = useState();
    setInterval(() => {
        let today = new Date();
        /** UNIX Timestamp of my birthday on the portuguese timezone (to fix issue on the 6th of december with age showing incorrectly) */
        let birthDate = new Date(1070668800000);
        let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
        setAge(
            ((today - birthDate) / millisecondsPerYear)
                .toString().substring(0, 2)
        );
        setMilliseconds(
            ((today - birthDate) / millisecondsPerYear)
                .toString().substring(3, 12)
        );
    }, 50);
    return (
        <div>
            <Head>
                <title>Bernardo Oliveira</title>
                <meta name="description" content="Personal Website"/>
                <ConsistentHead/>
            </Head>

            <div className="h-screen">
                <div className="p-5 h-full">
                    <div className="bg-gray-800 h-full rounded-3xl">
                        <div className="flex flex-col justify-center items-center h-full">
                            <div className="text-center place-self-center text-white text-4xl font-bold">
                                <h1
                                    className={`${styles.titleGradient} font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-white text-stroke-white`}
                                >
                                    Bernardo Oliveira
                                </h1>
                            </div>
                            <div className="m-4 grid grid-flow-col-dense grid-rows-4  sm:grid-rows-1">
                                <HomeLink
                                    href="https://tumblr.helloimbernardo.ml"
                                    color={styles.blueLink}
                                >
                                    &quot;blog&quot;
                                </HomeLink>
                                <HomeLink
                                    href="https://open.spotify.com/user/bernardooliveirajb"
                                    color={styles.greenLink}
                                >
                                    spotify
                                </HomeLink>
                                <HomeLink
                                    href="https://instagram.com/helloimbernardo/"
                                    color={styles.pinkLink}
                                >
                                    instagram
                                </HomeLink>
                                <HomeLink
                                    href="https://github.com/helloimbernardo"
                                    color={styles.yellowLink}
                                >
                                    github
                                </HomeLink>
                            </div>
                            <div className="px-6 mt-4 justify-center text-white prose">
                                <p>
                                    Hello, I&apos;m <b>Bernardo Oliveira</b>
                                    <SmallLink href="https://pronoun.is/he/:or/they/:or/she">
                                        (any pronouns)
                                    </SmallLink>
                                    , a {age}<span className='text-gray-300'>.{milliseconds}</span> year old dev student from Portugal.
                                </p>
                                <p>
                                    This website is{" "}
                                    <a
                                        href="https://github.com/helloimbernardo/personal-website"
                                        className={`${styles.normalizedLinks} border-orange-500 border-b-2 font-mono`}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Open Source
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
