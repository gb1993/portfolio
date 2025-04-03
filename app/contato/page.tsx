"use client";

import { FormEvent, useState } from "react";
import Title from "@/components/Title";
import sendResendEmail from "@/utils/sendEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { contactInputCss, contactTextAreaCss } from "@/utils/consts";
import Container from "@/components/Container";
import TitleSecondary from "@/components/TitleSecondary/intex";
import Confetti from "react-confetti";
import { Bounce, ToastContainer, toast } from "react-toastify";

export interface FormData {
  name: string;
  email: string;
  title: string;
  message: string;
}

const Contato = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const toastId = toast.loading("Enviando...", {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    try {
      const form = e.currentTarget;
      const formData: FormData = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        title: (form.elements.namedItem("title") as HTMLInputElement).value,
        message: (form.elements.namedItem("message") as HTMLTextAreaElement)
          .value,
      };

      await sendResendEmail(formData);
      toast.update(toastId, {
        render: "Obrigado pelo contato!",
        type: "success",
        isLoading: false,
        autoClose: 4000,
      });
      setShowConfetti(true);
    } catch (error) {
      toast.update(toastId, {
        render: "Tente novamente.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
      });
      throw new Error("Error: " + error);
    }
  };

  return (
    <Container>
      <>
        <Title backTitle="CONTATO" title="FALE" highlight="COMIGO" />
        <div className="w-full flex justify-between gap-7 flex-col lg:flex-row mt-24 lg:mt-0">
          <div className="w-full lg:max-w-1/3">
            <TitleSecondary text="NÃO TENHA VERGONHA!" />
            <p className="text-dark-or-light-secondary mb-4 text-sm leading-normal">
              Fique à vontade para me contactar. Estou sempre aberto a novos
              projetos, ideias criativas ou oportunidades de participar de
              projetos inovadores.
            </p>
            <div>
              <a href="https://wa.me/5521982126050" target="_blank">
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
              </a>
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
            </div>
          </div>
          <form
            method="post"
            className="w-full lg:max-w-2/3 flex gap-6 flex-col"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
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
            <button className="cursor-pointer hover:bg-primary font-bold w-full lg:w-fit flex items-center justify-center text-dark-or-light-secondary border-2 border-primary px-12 py-2 rounded-full">
              ENVIAR
            </button>
            {showConfetti && <Confetti initialVelocityY={1} />}
          </form>
        </div>
        <ToastContainer
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="dark"
          transition={Bounce}
        />
      </>
    </Container>
  );
};

export default Contato;
