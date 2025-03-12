import Title from "@/components/Title";
import { resend } from "@/utils/sendEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  contactInputCss,
  contactTextAreaCss,
  socialMediaIconCss,
} from "@/utils/consts";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import Main from "@/components/Main";

const Contato = () => {
  const handleSubmit = () => {
    console.log("clicou");
  };

  return (
    <Main>
      <>
        <Title backTitle="CONTATO" title="FALE" highlight="COMIGO" />
        <div className="w-full flex justify-between gap-7 flex-col lg:flex-row">
          <div className="w-full lg:max-w-1/3">
            <h3 className="text-dark-or-light-secondary mb-4 text-2xl font-semibold">
              NÃO TENHA VERGONHA!
            </h3>
            <p className="text-dark-or-light-secondary mb-4 text-sm leading-normal">
              Fique avontade para me contactar. Estou sempre aberto a novos
              projetos, ideias criativas ou oportunidades de participar de
              projetos inovadores.
            </p>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <WhatsAppIcon
                  className="text-primary"
                  sx={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h4 className="text-dark-or-light-secondary/60 mb-1">
                    ME CHAMA NO WHATSAPP
                  </h4>
                  <p className="text-dark-or-light-secondary text-sm">
                    (21)98212-6050
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <MailOutlineIcon
                  className="text-primary"
                  sx={{ width: "40px", height: "40px" }}
                />
                <div>
                  <h4 className="text-dark-or-light-secondary/60 mb-1">
                    ME ENVIE UM EMAIL
                  </h4>
                  <p className="text-dark-or-light-secondary text-sm">
                    gbdev1993@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={"https://www.linkedin.com/in/gabriel-branco/"}
                  target="_blank"
                  className={socialMediaIconCss}
                >
                  <LinkedInIcon className="text-white" sx={{ width: 18 }} />
                </Link>
                <Link
                  href={"https://github.com/gb1993"}
                  target="_blank"
                  className={socialMediaIconCss}
                >
                  <GitHubIcon className="text-white" sx={{ width: 18 }} />
                </Link>
              </div>
            </div>
          </div>
          <form
            method="post"
            className="w-full lg:max-w-2/3 flex gap-6 flex-col"
          >
            <div className="flex items-center gap-6 justify-between">
              <label htmlFor="name" className="w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Seu nome"
                  required
                  className={contactInputCss}
                />
              </label>
              <label htmlFor="email" className="w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Seu email"
                  required
                  className={contactInputCss}
                />
              </label>
              <label htmlFor="title" className="w-full">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Assunto"
                  required
                  className={contactInputCss}
                />
              </label>
            </div>
            <label htmlFor="message" className="w-full">
              <textarea
                name="message"
                id="message"
                placeholder="Mensagem"
                required
                rows={6}
                className={contactTextAreaCss}
              />
            </label>
            <button className="cursor-pointer hover:bg-primary font-bold w-fit flex items-center justify-center text-dark-or-light-secondary border-2 border-primary px-12 py-2 rounded-full">
              ENVIAR
            </button>
          </form>
        </div>
      </>
    </Main>
  );
};

export default Contato;
