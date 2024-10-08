import Image from "next/image";
import Link from "next/link";
import githubIcon from "../public/github-svgrepo-com.svg";
import emailIcon from "../public/email-svgrepo-com.svg";
import pythonIcon from "../public/python-svgrepo-com.svg";

export default function Home() {
  return (
    <>
      <div className="grid items-left min-h-screen p-8 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <div className="grid-flow-row">
          <div className="col-span-7 md:col-span-4">
            <br></br>
            <br></br>
            <h1 className="text-6xl text-gray-900 dark:text-white">Felipe Costa</h1>
          </div>
          <div className="col-span-7 md:col-span-3">
            <br></br>
            <h2 className="text-2xl text-gray-900 dark:text-white">Este é um site sobre o que eu faço.</h2>
          </div>
        </div>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/felipepitoko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={githubIcon} alt="github" width={50} height={50} />
            Códigos
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://felipepitoko.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={pythonIcon} alt="python" width={50} height={50} />
            Aplicação Python
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:lip-sousa@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={emailIcon} alt="email" width={50} height={50} />
            Me contate →
          </a>
        </footer>
      </div>
    </>
  );
}
