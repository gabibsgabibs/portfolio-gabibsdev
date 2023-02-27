import React from 'react';

import githubLogo from '../images/github-icon.svg';
import lightMode from '../images/light-mode-inicial-image.svg';
import linkedinLogo from '../images/linkedin-icon.svg';
import projectIcon from '../images/projects-icon.svg';

function InitialContent() {
  return (
    <section className="border-lightorangetext border-[2px]">
      <div className="flex justify-evenly items-center">
        <main className="text-2xl leading-loose text-lightpurpletext">
          <h2>OI, EU SOU A</h2>
          <h1 className="font-sans text-5xl font-semibold text-lightorangetext">
            GABRIELLA BARBOSA
          </h1>
          <h2>DESENVOLVEDORA FULL STACK</h2>
          <div className="flex justify-between">
            <a
              className="flex border-lightorangetext border-[2px] rounded-lg w-1/4 h-11 text-xl items-center justify-center"
              href="https://www.linkedin.com/in/gabibsgabibs/"
            >
              <img className="w-7" src={linkedinLogo} alt="Logo do Linkedin." />
              <p>Linkedin</p>
            </a>
            <a
              className="flex border-lightorangetext border-[2px] rounded-lg h-11 w-1/4 text-xl items-center justify-center"
              href="https://github.com/gabibsgabibs"
            >
              <img className="w-7" src={githubLogo} alt="Logo do Github." />
              <p>Github</p>
            </a>
            <a
              className="flex border-lightorangetext border-[2px] rounded-lg h-11 w-1/4 text-xl items-center justify-center"
              href="/projects"
            >
              <img
                className="w-7"
                src={projectIcon}
                alt="Ícone representando a ideia de um projeto."
              />
              <p>Projetos</p>
            </a>
          </div>
        </main>
        <img
          src={lightMode}
          alt="Ilustração de uma garota programando."
          className="h-96"
        />
      </div>
      {/* <p>⇣ scroll down ⇣</p> */}
    </section>
  );
}

export default InitialContent;
