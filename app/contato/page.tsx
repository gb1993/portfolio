import Title from "@/components/Title";
import { resend } from "@/utils/sendEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Contato = () => {
  const handleSubmit = () => {
    console.log("clicou");
  };
  const contactInputCss =
    "w-full py-3 px-6.5 border-2 border-transparent rounded-full bg-black-secondary outline-none focus:border-primary text-white";
  const contactTextAreaCss =
    "w-full rounded-3xl py-3 px-6.5 border-2 border-transparent bg-black-secondary outline-none focus:border-primary text-white";

  return (
    <div>
      <Title backTitle="CONTATO" title="FALE" highlight="COMIGO" />
      <div className="flex justify-between">
        <div className="w-full max-w-1/3">
          <h3>NÃO TENHA VERGONHA!</h3>
          <p>
            Fique avontade para me contactar. Estou sempre aberto a novos
            projetos, ideias criativas ou oportunidades de participar do seus
            sonhos.
          </p>
          <div>
            <div className="flex items-center gap-4">
              <WhatsAppIcon className="text-primary" />
              <span>
                <h4>Me chama no whatsapp</h4>
              </span>
            </div>
            <div className="flex items-center gap-4">
              <MailOutlineIcon className="text-primary" />
              <span>
                <h4>Me envie um email</h4>
                <p>gbdev1993@gmail.com</p>
              </span>
            </div>
          </div>
        </div>
        <form method="post" className="w-full max-w-2/3 flex gap-6 flex-col">
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
              placeholder="Menssagem"
              required
              className={contactTextAreaCss}
            />
          </label>
          <button className="cursor-pointer hover:bg-primary font-bold w-fit flex items-center justify-center text-dark-or-light-secondary border-2 border-primary px-12 py-2 rounded-full">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contato;
